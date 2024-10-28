// Helper function to limit description to a single line
export const formatDescription = (description, maxLength = 80) => {
    if (description.length > maxLength) {
       return description.slice(0, maxLength) + '...';
    }
    return description;
};

// Helper function to format size in bytes to kB, MB, or GB using binary-based units
const formatSize = (size) => {
    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;
 
    if (size >= GB) {
       return `${(size / GB).toFixed(2)} GB`;
    } else if (size >= MB) {
       return `${(size / MB).toFixed(2)} MB`;
    } else if (size >= KB) {
       return `${(size / KB).toFixed(2)} kB`;
    } else {
       return `${size} bytes`;
    }
};

// Function to format and output the simplified data
export const outputLeaderboard = (simplifiedData) => {
    // Loop through items in reverse order
    for (let i = simplifiedData.length - 1; i >= 1; i--) {
        const item = simplifiedData[i];

        // Output each entry with a clear divider
        console.log("──────────────────────────────────────────────────────────");
        console.log(`   🏆 Number ${i + 1}: ${item.rollup_name || "Unknown Name"}`);
        console.log(`   📜 Description: ${formatDescription(item.rollup_description || "No description available")}`);
        console.log(`   🌍 Find them at ${item.rollup_website || "No Website Available"}`);
        console.log(`   📦 They have posted ${item.blobs_count || 0} blobs with a total size of ${formatSize(item.size) || 0}.\n`);
    }
   console.log("──────────────────────────────────────────────────────────");
   console.log(`
      ██████╗███████╗██╗     ███████╗███████╗████████╗██╗ █████╗ 
     ██╔════╝██╔════╝██║     ██╔════╝██╔════╝╚══██╔══╝██║██╔══██╗
     ██║     █████╗  ██║     █████╗  ███████╗   ██║   ██║███████║
     ██║     ██╔══╝  ██║     ██╔══╝  ╚════██║   ██║   ██║██╔══██║
     ╚██████╗███████╗███████╗███████╗███████║   ██║   ██║██║  ██║
      ╚═════╝╚══════╝╚══════╝╚══════╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝
     
     `);   
   console.log(`
                           ,--"\`-.-._
                        ,' ,.:::::. \`.
                        | ;'     \`:: |
                     ,--,-, .::::..;','
                  ,'   ,'      "" ,'_
                     '-)",'o         "_\\
                     _,' ""'  .::.  .:o;
                  ;      :::'       ;
                  ;     \`::;        ;
                  : (_;_ ;::        ;\\
                  ;  /   ;::.        ; \\
                  /  /    ,:'        ;:: \\
               __|__/_   /::        ;   \\ \`
         _,-'       \`-<::'___    ;|   \\  \\
      ,-'    _,-""";-._\`(. __ \`.  ;|    \\ |      ____
      (   ,--'__,--'   | \`- \`(@)  \\(  \`.   \`.   ,-'    \`-.
      \\___.-'   \\     |::. \\    :    \`.   \`./,-'""\`.   \\
                  \\    |::.  )   : .-.  \`-._ ' \`--.--'   )
                  \\ .- \`:. /    :      /   \`-.__   __,-'
         -hrr-       )    \`.'     ;     /         \`"'
                  (  \`'  ,\\    , ---.(
                  ,' --- \`:\`--'  :  : \\
                  (  :  :  ;   \`--\`--\`-'
                  \`-\`--\`--'
    `);
   // Output the leaderboard header with ASCII art
   console.log("        ──────────────────────────────────────────────────────────");
   console.log(`        🌟 🦣 The Mammoth Rollup Leaderboard Winner is ... 🦣 🌟`);
   console.log("        ──────────────────────────────────────────────────────────");
   console.log(`        🏆 Name: ${simplifiedData[0].rollup_name || "Unknown Name"}`);
   console.log(`        📜 Description: ${formatDescription(simplifiedData[0].rollup_description || "No description available")}`);
   console.log(`        🌍 Find them at ${simplifiedData[0].rollup_website || "No Website Available"}`);
   console.log(`        📦 They have posted ${simplifiedData[0].blobs_count || 0} blobs with a total size of ${formatSize(simplifiedData[0].size) || 0}.\n`);
};