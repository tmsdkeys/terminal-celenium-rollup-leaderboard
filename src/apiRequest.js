export const fetchNamespaceData = async (limit) => {
    console.log(`Fetching namespace data for the ${limit} first result ranked by size`);
 
    const requestOptions = {
       method: 'GET',
       headers: {},
       redirect: 'follow'
    };
 
    let offset = 0;
    let sort = "desc";
    let sortBy = "size";
 
    let url = `https://api-mainnet.celenium.io/v1/namespace?limit=${limit}&offset=${offset}&sort=${sort}&sort_by=${sortBy}`;
 
    try {
       const response = await fetch(url, requestOptions);
       
       if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
       }
 
       return await response.json();  // Parse JSON response directly
 
    } catch (error) {
       console.error('Fetch error:', error);
    }
 };

 export const fetchRollupData = async (id, version) => {
    console.log(`Fetching rollup data for namespace ${id} `)
 
    const requestOptions = {
        method: 'GET',
        headers: {},
        redirect: 'follow'
    };
  
    const url = `https://api-mainnet.celenium.io/v1/namespace/${id}/${version}/rollups`;
 
    try {
       const response = await fetch(url, requestOptions);
       
       if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
       }
 
       const data = await response.json();
 
       // Return the data only if it's a non-empty array
       if (Array.isArray(data) && data.length > 0) {
          return data;
       } else {
          // console.log("No rollup data available for this id and version.");
          return null; // Return null if the response is an empty array
       }
 
    } catch (error) {
       console.error('Fetch error:', error);
    }
 };