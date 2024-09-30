import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './dashboard.module.css';

const Dashboard = () => {
  // States for antenna registration form
  const [antennaId, setAntennaId] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // States for signal and technical data (simulated)
  const [signalStrength, setSignalStrength] = useState(0);
  const [coverage, setCoverage] = useState(0);
  const [dataSpeed, setDataSpeed] = useState(0);

  // States for success or error messages
  const [message, setMessage] = useState({ type: '', content: '' });

  // Function to register the antenna
  const registerAntenna = (e) => {
    e.preventDefault();

    if (!antennaId.trim()) {
      setMessage({ type: 'error', content: 'The antenna ID is required.' });
      return;
    }

    if (antennaId === 'P5-884422') {
      setIsRegistered(true);
      setMessage({ type: 'success', content: 'Antenna registered successfully.' });
      simulateAntennaPerformance(); // Simulate signal data when registered
    } else {
      setMessage({ type: 'error', content: 'Invalid antenna ID.' });
    }
  };

  // Simulate antenna performance metrics
  const simulateAntennaPerformance = () => {
    // Simulate random values for signal strength, coverage, and data speed
    const randomSignal = Math.floor(Math.random() * 101); // 0-100%
    const randomCoverage = Math.floor(Math.random() * 100 + 50); // 50-150 meters
    const randomDataSpeed = Math.floor(Math.random() * 100 + 20); // 20-120 Mbps

    setSignalStrength(randomSignal);
    setCoverage(randomCoverage);
    setDataSpeed(randomDataSpeed);
  };

  // Simulate periodic updates for performance data
  useEffect(() => {
    if (isRegistered) {
      const interval = setInterval(() => {
        simulateAntennaPerformance();
      }, 5000); // Update every 5 seconds for demo effect

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

      {/* Signal Strength & Coverage Simulation */}
      {isRegistered && (
        <div className={styles.card}>
          <h2>Signal Strength & Coverage</h2>
          <div className={styles.sensorData}>
            <div className={styles.sensor}>
              <span>Signal Strength:</span>
              <span>{signalStrength}%</span>
            </div>
            <div className={styles.sensor}>
              <span>Coverage Range:</span>
              <span>{coverage} meters</span>
            </div>
            <div className={styles.sensor}>
              <span>Data Transfer Speed:</span>
              <span>{dataSpeed} Mbps</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
