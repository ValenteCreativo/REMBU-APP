# REMBU - Urban Forest Monitoring and Rewards System

## Project Overview

REMBU is a DePIN project designed to monitor and protect urban forests through data collected by user-installed antennas equipped with advanced environmental sensors. 

This project incentivizes users to contribute to the health of their local green spaces by providing them with rewards for sharing data about their environment.

By using REMBU, individuals can contribute to environmental sustainability while earning tokens. The collected data is securely stored on the blockchain using the Scroll Layer 2 network, ensuring transparency and decentralized access.

The objective is to provide real-time data to decision-makers to foster the development of urban forests infrastructure, with the hypothesis that is the best action we could make to protect us as a species and the planet from climate change's effects. 

----------

## Demo

[Watch our demo video](https://your-demo-link.com) to see how REMBU works and how you can participate in urban forest monitoring!

----------

## How Does It Work?

1. **Install Antenna**: Users install an antenna at home, which is equipped with sensors to gather real-time environmental data.

2. **Data Collection**: The antenna collects data on CO₂ levels, humidity, air quality, and more. This data is sent to the Scroll's blockchain.

3. **Rewards**: Users receive monthly rewards in tokens for contributing data that helps improve urban forest management.

4. **Decentralized and Transparent**: All data is stored on Scroll's Layer 2 blockchain, leveraging zero-knowledge proofs for scalability and security.

--------------

## Features

- **Real-time Environmental Data**: Gather data on air quality, CO₂ levels, humidity, and more.
- **Token Rewards**: Earn tokens for contributing environmental data that will be used to protect and maintain urban forests.
- **Decentralized Data**: All data is stored on the Scroll L2 blockchain, providing a trustless and verifiable source of information.
- **DAO Infrastructure**: The tokens will be a ROI tool for users and also a voting currency for proposals on local environmental impact initiatives. 
- **Powered by Alchemy**: Using Alchemy's API, we provide reliable blockchain interactions, ensuring that all transactions are secure and efficient.

## Smart Contracts

Our smart contract for REMBU is deployed and verified on the Scroll network. You can find it here:

- **Contract Address**: By doing tests, we deployed the contract several times from this wallet:  [0x4148071e56deEabFD9C2037b3131a55b0f1E9c9a](https://scrollscan.com/address/0x4148071e56deEabFD9C2037b3131a55b0f1E9c9a)  

(Good news: now we have a lot of REMBUTokens available! :D)

- **Verified Contract on Scroll Block Explorer**: The first one created is at this address:  [Verified Contract](https://scrollscan.com/address/0x63374859343c338da0348136ad5a2f3c7392da51)

- **Limitations**: Because of limited time during the hackathon we were only able to deploy one of the smart contracts successfully, even though in the Smart Contract we set the bases for the Rembu Token and Data management, future development will include Descentralized Autonomous Organizations voting and rewarding mechanisms and other features! 

## Code Highlights

- The project is built using **Hardhat**, and integrates **Alchemy RPC** to interact with the Scroll network.
- You can find the Alchemy RPC configuration in our `hardhat.config.js` file:

```javascript
// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');

const secrets = JSON.parse(fs.readFileSync('./secret.json', 'utf-8'));

module.exports = {
  solidity: "0.8.17",
  networks: {
    scroll: {
      url: `https://scroll-mainnet.g.alchemy.com/v2/${secrets.alchemyApiKey}`,
      accounts: [`0x${secrets.privateKey}`]
    }
  }
};

------

## Technologies Used

Smart Contracts: Solidity, deployed on Scroll (Layer 2)
Frontend: React,
Backend: Node.js
Blockchain Interaction: Axios, Ethers.js, Alchemy API
Scroll Network: Zero-Knowledge Rollups (ZK-rollups) for secure and scalable transactions
Hardhat: Development environment for compiling, testing, and deploying smart contracts

----

## Future Development

We plan to expand REMBU's features, including:

- More types of environmental sensors
- Integration with local municipalities for real-time data analysis
- Additional layers of decentralization for user participation in project governance

-------

## Acknowledgements

We would like to thank Scroll and Alchemy for their support and infrastructure, and the organizers of the Level Up Mini-Hack for the opportunity to build this project.


------

## This project was developed as part of the Level Up Mini-Hack powered by Scroll x Alchemy (September 24-30, 2024).