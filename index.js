const axios = require('axios');
const fs = require('fs');


const secrets = JSON.parse(fs.readFileSync('secret.json', 'utf-8'));
const apiKey = secrets.alchemyApiKey;


const url = `https://scroll-mainnet.g.alchemy.com/v2/${apiKey}`;

const payload = {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_blockNumber',
  params: []
};

axios.post(url, payload)
  .then(response => {
    console.log('Block Number:', response.data.result);
  })
  .catch(error => {
    console.error(error);
  });
