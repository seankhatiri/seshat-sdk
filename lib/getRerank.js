const axios = require('axios');

function isValidItem(item) {
  // Check if the item object has 'title' and 'description' properties
  return item.hasOwnProperty('title') && item.hasOwnProperty('description');
}

async function getRerank(apiKey, itemList, userAddress) {
  // Check if all items are valid
  if (!itemList.every(isValidItem)) {
    throw new Error('All items must have a title and description');
  }

  try {
    const response = await axios.post('https://lg-research-1.uwaterloo.ca/recommender', {
      items: itemList,
      address: userAddress,
      apikey: apiKey,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Server error: ${error.message}`);
  }
};

module.exports = { getRerank };