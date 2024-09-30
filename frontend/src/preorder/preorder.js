import React, { useState } from 'react';
import axios from 'axios';
import styles from './preorder.module.css'; // Estilos CSS module adaptados a tu diseño

const PreorderAntenna = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [antennaQuantity, setAntennaQuantity] = useState(1);
  const [availableAntennas, setAvailableAntennas] = useState(100); // Número simulado
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Simulación de la petición HTTP
        const response = await axios.post('https://api.example.com/preorder', {
          fullName,
          email,
          shippingAddress,
          antennaQuantity,
        });

        if (response.status === 200) {
          setMessage('Preorder completed successfully!');
          resetForm();
          setAvailableAntennas(availableAntennas - antennaQuantity); // Actualiza las antenas disponibles
        }
      } catch (error) {
        setMessage('Error processing your preorder. Please try again later.');
      }
    } else {
      setMessage('Please fill out all required fields.');
    }
  };

  const validateForm = () => {
    return fullName && email && shippingAddress && antennaQuantity > 0;
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setShippingAddress('');
    setAntennaQuantity(1);
  };

  return (
    <div className={styles.preorderContainer}>
      <h2 className={styles.title}>Preorder Your Antenna</h2>

      <div className={styles.imageContainer}>
        <img
          src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmSEqUgcTumgYyApoqKgqjVs1tMtkARhjqHRrKgFkjjPeK"
          alt="Antenna"
          className={styles.antennaImage}
        />
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="shippingAddress">Shipping Address:</label>
          <input
            type="text"
            id="shippingAddress"
            placeholder="Enter your shipping address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="antennaQuantity">Number of Antennas:</label>
          <input
            type="number"
            id="antennaQuantity"
            min="1"
            value={antennaQuantity}
            onChange={(e) => setAntennaQuantity(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Preorder Now
        </button>

        {message && <p className={styles.message}>{message}</p>}
      </form>

      <div className={styles.antennaInfo}>
        <p>
          <strong>Antennas available:</strong> {availableAntennas}
        </p>
        <p className={styles.benefit}>
          <strong>Benefits of Preordering:</strong> Secure your antenna before
          the official launch and receive exclusive rewards for being an early
          adopter!
        </p>
      </div>
    </div>
  );
};

export default PreorderAntenna;
