// src/pages/dashboard2.js

import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import useWeb3 from '../hooks/useWeb3'; // Import the custom hook
import RembuTokenABI from '../contracts/RembuToken.json'; // Import the ABI
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = '0x63374859343C338DA0348136Ad5a2F3c7392dA51'; // Deployed contract address
const OWNER_WALLET_ADDRESS = '0xYourWalletAddress'; // Your wallet address

const Dashboard2 = () => {
  const { connect, disconnect, active, account, library } = useWeb3();

  const [isRegistered, setIsRegistered] = useState(true);
  const [sensorData, setSensorData] = useState({
    humidity: 55,
    noise: 65,
    UVRays: 8,
    airQuality: 'Good',
    CO2: 400,
  });
  const [tokens, setTokens] = useState(150);
  const [message, setMessage] = useState({ type: '', content: '' });

  // Function to claim rewards
  const claimRewards = async () => {
    if (!active) {
      setMessage({ type: 'error', content: 'Please connect your wallet first.' });
      return;
    }

    try {
      const signer = library.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, RembuTokenABI.abi, signer);

      // Number of tokens to send (150 tokens)
      const amount = ethers.utils.parseUnits('150', 18); // Ensure the tokens have 18 decimals

      // Execute token transfer
      const tx = await contract.transfer(account, amount); // Send tokens to the user
      await tx.wait();

      // Update token state after claiming
      setTokens(0);
      setMessage({ type: 'success', content: '150 tokens successfully transferred.' });
    } catch (error) {
      console.error(error);
      setMessage({ type: 'error', content: 'Error transferring tokens.' });
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Wallet Connection */}
      <div className={styles.card}>
        {active ? (
          <div>
            <p>Connected as: {account}</p>
            <button onClick={disconnect} className={styles.button}>
              Disconnect
            </button>
          </div>
        ) : (
          <button onClick={connect} className={styles.button}>
            Connect Wallet
          </button>
        )}
        {message.content && (
          <p className={message.type === 'error' ? styles.error : styles.success}>
            {message.content}
          </p>
        )}
      </div>

      {/* Antenna Registration */}
      <div className={styles.card}>
        <h2>Registered Antenna</h2>
        <p>Your antenna is registered and operational.</p>
      </div>

      {/* Collected Data */}
      {isRegistered && (
        <div className={styles.card}>
          <h2>Collected Data</h2>
          <div className={styles.sensorData}>
            <div className={styles.sensor}>
              <span>Humidity:</span>
              <span>{sensorData.humidity !== null ? `${sensorData.humidity}%` : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Noise:</span>
              <span>{sensorData.noise !== null ? `${sensorData.noise} dB` : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>UV Rays:</span>
              <span>{sensorData.UVRays !== null ? sensorData.UVRays : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Air Quality:</span>
              <span>{sensorData.airQuality !== null ? sensorData.airQuality : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>CO2:</span>
              <span>{sensorData.CO2 !== null ? `${sensorData.CO2} ppm` : 'Loading...'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Rewards */}
      {isRegistered && (
        <div className={styles.card}>
          <h2>Rewards</h2>
          <div className={styles.rewards}>
            <p>Tokens Earned: {tokens}</p>
            {tokens > 0 && (
              <button onClick={claimRewards} className={styles.button}>
                Claim Rewards
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard2;
