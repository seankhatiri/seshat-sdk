# Seshat SDK

Seshat SDK is a Node.js package that provides an easy way to interact with the Seshat Recommendation Engine for Web3. It allows you to fetch personalized advertisements and rerank lists of items based on user addresses.

## Installation

Install the package using npm:

```bash
npm install seshat
```

## Usage

### Fetch Advertisement
Fetch personalized advertisements based on a user's blockchain address.

```javascript
const seshat = require('seshat');
const apiKey = 'your-api-key';
const userAddress = '0x1234567890abcdef1234567890abcdef12345678';

(async () => {
  const adResult = await seshat.getAdvertisement(apiKey, userAddress);
  console.log(adResult);
})();
```

### Get Rerank
Rerank a list of items based on a user's blockchain address.

```javascript
const seshat = require('seshat');
const apiKey = 'your-api-key';
const userAddress = '0x1234567890abcdef1234567890abcdef12345678';

const itemList = [
  {title: 'Item 1', description: 'This is the first item'},
  {title: 'Item 2', description: 'This is the second item'},
{title: 'Item 3', description: 'This is the third item'}
];

(async () => {
const rerankResult = await seshat.getRerank(apiKey, itemList, userAddress);
console.log(rerankResult);
})();
```

## License

MIT

## Support

If you have any questions or issues, feel free to open an issue on the GitHub repository or contact us.



