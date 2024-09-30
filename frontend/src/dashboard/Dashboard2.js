// src/pages/dashboard2.js

import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css'; // Usando el mismo CSS que dashboard.js

const Dashboard2 = () => {
  // Simulación de una antena ya registrada
  const [isRegistered, setIsRegistered] = useState(true);

  // Datos simulados recolectados por la antena
  const [sensorData, setSensorData] = useState({
    humedad: 55,
    ruido: 65,
    rayosUV: 8,
    calidadAire: 'Buena',
    CO2: 400,
  });

  // Tokens simulados
  const [tokens, setTokens] = useState(150);

  // Mensajes de éxito o error
  const [message, setMessage] = useState({ type: '', content: '' });

  // Función simulada para reclamar recompensas
  const claimRewards = () => {
    // Simular el reclamo de recompensas
    setTokens(0);
    setMessage({ type: 'success', content: 'Recompensas reclamadas exitosamente.' });
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Registro de Antena */}
      <div className={styles.card}>
        <h2>Antena Registrada</h2>
        <p>Tu antena está registrada y operativa.</p>
        {message.content && (
          <p className={message.type === 'error' ? styles.error : styles.success}>
            {message.content}
          </p>
        )}
      </div>

      {/* Datos Recolectados */}
      {isRegistered && (
        <div className={styles.card}>
          <h2>Datos Recolectados</h2>
          <div className={styles.sensorData}>
            <div className={styles.sensor}>
              <span>Humedad:</span>
              <span>{sensorData.humedad !== null ? `${sensorData.humedad}%` : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Ruido:</span>
              <span>{sensorData.ruido !== null ? `${sensorData.ruido} dB` : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Rayos UV:</span>
              <span>{sensorData.rayosUV !== null ? sensorData.rayosUV : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Calidad de Aire:</span>
              <span>{sensorData.calidadAire !== null ? sensorData.calidadAire : 'Loading...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>CO2:</span>
              <span>{sensorData.CO2 !== null ? `${sensorData.CO2} ppm` : 'Loading...'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Recompensas */}
      {isRegistered && (
        <div className={styles.card}>
          <h2>Recompensas</h2>
          <div className={styles.rewards}>
            <p>Tokens Ganados: {tokens}</p>
            {tokens > 0 && (
              <button onClick={claimRewards} className={styles.button}>
                Reclamar Recompensas
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard2;
