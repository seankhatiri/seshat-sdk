const axios = require('axios');

async function getAdvertisement(apiKey, userAddress) {
    try {
        const response = await axios.get(`https://lg-research-1.uwaterloo.ca/ads?address=${userAddress}`);
    
        return response.data;
    } catch (error) {
        throw new Error(`Server error: ${error.message}`);
    } 
  }

module.exports = { getAdvertisement };