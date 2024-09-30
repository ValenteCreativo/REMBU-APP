// dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './dashboard.module.css';

const Dashboard = () => {
  // States for antenna registration form
  const [antennaId, setAntennaId] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // States for collected data
  const [sensorData, setSensorData] = useState({
    humidity: null,
    noise: null,
    UV: null,
    airQuality: null,
    CO2: null,
  });

  // States for rewards
  const [tokens, setTokens] = useState(0);

  // States for success or error messages
  const [message, setMessage] = useState({ type: '', content: '' });

  // Function to register the antenna
  const registerAntenna = async (e) => {
    e.preventDefault();

    // Form validation
    if (!antennaId.trim()) {
      setMessage({ type: 'error', content: 'The antenna ID is required.' });
      return;
    }

    try {
      const response = await axios.post('/api/registerAntenna', { antennaId });
      setIsRegistered(true);
      setMessage({ type: 'success', content: 'Antenna registered successfully.' });
    } catch (error) {
      setMessage({ type: 'error', content: 'Error registering the antenna.' });
      console.error(error);
    }
  };

  // Function to get data from the antenna
  const getDataFromAntenna = async () => {
    try {
      const response = await axios.get(`/api/getData/${antennaId}`);
      const data = response.data;
      setSensorData({
        humidity: data.humidity,
        noise: data.noise,
        UV: data.UV,
        airQuality: data.airQuality,
        CO2: data.CO2,
      });
      setTokens(data.tokens);
    } catch (error) {
      setMessage({ type: 'error', content: 'Error retrieving data from the antenna.' });
      console.error(error);
    }
  };

  // Function to claim rewards
  const claimRewards = async () => {
    try {
      const response = await axios.post('/api/claimRewards', { antennaId });
      setTokens(0);
      setMessage({ type: 'success', content: 'Rewards claimed successfully.' });
    } catch (error) {
      setMessage({ type: 'error', content: 'Error claiming rewards.' });
      console.error(error);
    }
  };

  // useEffect to get data when the antenna is registered
  useEffect(() => {
    if (isRegistered) {
      getDataFromAntenna();

      // Optional: set intervals to update data periodically
      const interval = setInterval(() => {
        getDataFromAntenna();
      }, 60000); // Update every 60 seconds

      return () => clearInterval(interval);
    }
  }, [isRegistered]);

  return (
    <div className={styles.dashboardContainer}>
    

      {/* Antenna Registration */}
      <div className={styles.card}>
        <h2>Antenna Registration</h2>
        <form onSubmit={registerAntenna}>
          <div className={styles.formGroup}>
            <label htmlFor="antennaId">Unique Device ID:</label>
            <input
              type="text"
              id="antennaId"
              value={antennaId}
              onChange={(e) => setAntennaId(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Register Antenna
          </button>
        </form>
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
            <button onClick={claimRewards} className={styles.button}>
              Claim Rewards
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
