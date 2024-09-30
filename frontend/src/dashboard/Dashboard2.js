// src/pages/dashboard2.js

import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css'; // Using the same CSS as dashboard.js

const Dashboard2 = () => {
  // Simulating a registered antenna
  const [isRegistered, setIsRegistered] = useState(true);

  // Simulated data collected by the antenna
  const [sensorData, setSensorData] = useState({
    humidity: 55,
    noise: 65,
    UV: 8,
    airQuality: 'Good',
    CO2: 400,
  });

  // Simulated tokens
  const [tokens, setTokens] = useState(150);

  // Success or error messages
  const [message, setMessage] = useState({ type: '', content: '' });

  // Simulated function to claim rewards
  const claimRewards = () => {
    // Simulate claiming rewards
    setTokens(0);
    setMessage({ type: 'success', content: 'Rewards claimed successfully.' });
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Antenna Registration */}
      <div className={styles.card}>
        <h2>Registered Antenna</h2>
        <p>Your antenna is registered and operational.</p>
        {message.content && (
          <p className={message.type === 'error' ? styles.error : styles.success}>
            {message.content}
          </p>
        )}
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
              <span>{sensorData.UV !== null ? sensorData.UV : 'Loading...'}</span>
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
