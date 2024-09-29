require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');

// Leer el archivo secret.json
const secrets = JSON.parse(fs.readFileSync('./secret.json', 'utf-8'));

const apiKey = secrets.alchemyApiKey;
const privateKey = secrets.privateKey;

module.exports = {
  solidity: "0.8.20",  // Cambiado a una versión específica
  networks: {
    scroll: {
      url: `https://scroll-mainnet.g.alchemy.com/v2/${apiKey}`,
      accounts: [`0x${privateKey}`]
    }
  }
};
