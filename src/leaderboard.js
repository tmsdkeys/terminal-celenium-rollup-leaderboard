import { fetchNamespaceData, fetchRollupData } from "./apiRequest.js";
import { outputLeaderboard, formatDescription } from "./output.js";

// Get the user input from command-line arguments
const args = process.argv.slice(2); // Ignore the first two arguments (node path and script path)

// Parse and validate the limit argument
const parseLimit = (arg, defaultValue = 10) => {
   const limit = parseInt(arg, 10); // Attempt to parse the argument as an integer
   if (isNaN(limit) || limit <= 0) {
      console.log(`Invalid limit provided. Using default limit: ${defaultValue}`);
      return defaultValue;
   }
   return limit;
};

// Set the limit from user input or default to 10
const limit = parseLimit(args[0]);

// Function to simplify the data structure by omitting unimportant fields
const simplifyData = (data) => {
    return data.map(item => ({
       size: item.size || null,
       blobs_count: item.blobs_count || null,
       namespace_id: item.namespace_id || null,
       rollup_name: item.rollup[0]["name"] || null,
       rollup_description: formatDescription(item.rollup[0]["description"]) || null,
       rollup_website: item.rollup[0]["website"] || null
    }));
};

// Helper function to add a delay
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Main function to fetch data and process it
const processData = async (limit) => {
    // Step 1: Fetch the namespace data
    const nsData = await fetchNamespaceData(limit);
    console.log(`Size of nsData: ${nsData.length}`)
 
    if (nsData) {
       // Step 2: Initialize an array to store the enriched data
       const enrichedData = [];
 
       // Step 3: Loop over each ns in nsData
       for (const ns of nsData) {
          const namespaceId = ns["namespace_id"];
          
          // a) Call fetchRollupData with the namespace ID
          const rollupData = await fetchRollupData(namespaceId, ns["version"]);
 
          // b) If rollupData is not null, add the ns to enrichedData with the "rollup" field
          if (rollupData) {
             enrichedData.push({
                ...ns,       // Copy the existing ns properties
                rollup: rollupData // Add the "rollup" field with the fetched data
             });
          }
          // c) Add a delay of 0.34 seconds to respect rate limits
          await sleep(340);
        }
        // Simplify the enriched data to include only specified fields
        const simplifiedData = simplifyData(enrichedData);

        outputLeaderboard(simplifiedData);
    } else {
       console.log("No namespace data available. Check why the request failed.");
       return [];
    }
 };
 
 // Call the processData function
processData(limit);
