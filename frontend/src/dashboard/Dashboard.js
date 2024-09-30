// dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './dashboard.module.css';

const Dashboard = () => {
  // Estados para el formulario de registro
  const [antennaId, setAntennaId] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Estados para los datos recolectados
  const [sensorData, setSensorData] = useState({
    humedad: null,
    ruido: null,
    rayosUV: null,
    calidadAire: null,
    CO2: null,
  });

  // Estados para las recompensas
  const [tokens, setTokens] = useState(0);

  // Estados para mensajes de éxito o error
  const [message, setMessage] = useState({ type: '', content: '' });

  // Función para registrar la antena
  const registerAntenna = async (e) => {
    e.preventDefault();

    // Validación del formulario
    if (!antennaId.trim()) {
      setMessage({ type: 'error', content: 'El ID de la antena es obligatorio.' });
      return;
    }

    try {
      const response = await axios.post('/api/registerAntenna', { antennaId });
      setIsRegistered(true);
      setMessage({ type: 'success', content: 'Antena registrada exitosamente.' });
    } catch (error) {
      setMessage({ type: 'error', content: 'Error al registrar la antena.' });
      console.error(error);
    }
  };

  // Función para obtener los datos de la antena
  const getDataFromAntenna = async () => {
    try {
      const response = await axios.get(`/api/getData/${antennaId}`);
      const data = response.data;
      setSensorData({
        humedad: data.humedad,
        ruido: data.ruido,
        rayosUV: data.rayosUV,
        calidadAire: data.calidadAire,
        CO2: data.CO2,
      });
      setTokens(data.tokens);
    } catch (error) {
      setMessage({ type: 'error', content: 'Error al obtener los datos de la antena.' });
      console.error(error);
    }
  };

  // Función para reclamar recompensas
  const claimRewards = async () => {
    try {
      const response = await axios.post('/api/claimRewards', { antennaId });
      setTokens(0);
      setMessage({ type: 'success', content: 'Recompensas reclamadas exitosamente.' });
    } catch (error) {
      setMessage({ type: 'error', content: 'Error al reclamar las recompensas.' });
      console.error(error);
    }
  };

  // useEffect para obtener los datos cuando la antena está registrada
  useEffect(() => {
    if (isRegistered) {
      getDataFromAntenna();

      // Opcional: puedes configurar intervalos para actualizar los datos periódicamente
      const interval = setInterval(() => {
        getDataFromAntenna();
      }, 60000); // Actualiza cada 60 segundos

      return () => clearInterval(interval);
    }
  }, [isRegistered]);

  return (
    <div className={styles.dashboardContainer}>
      {/* Registro de Antena */}
      <div className={styles.card}>
        <h2>Registro de Antena</h2>
        <form onSubmit={registerAntenna}>
          <div className={styles.formGroup}>
            <label htmlFor="antennaId">ID Único del Dispositivo:</label>
            <input
              type="text"
              id="antennaId"
              value={antennaId}
              onChange={(e) => setAntennaId(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Registrar Antena
          </button>
        </form>
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
              <span>{sensorData.humedad !== null ? `${sensorData.humedad}%` : 'Cargando...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Ruido:</span>
              <span>{sensorData.ruido !== null ? `${sensorData.ruido} dB` : 'Cargando...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Rayos UV:</span>
              <span>{sensorData.rayosUV !== null ? sensorData.rayosUV : 'Cargando...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>Calidad de Aire:</span>
              <span>{sensorData.calidadAire !== null ? sensorData.calidadAire : 'Cargando...'}</span>
            </div>
            <div className={styles.sensor}>
              <span>CO2:</span>
              <span>{sensorData.CO2 !== null ? `${sensorData.CO2} ppm` : 'Cargando...'}</span>
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
            <button onClick={claimRewards} className={styles.button}>
              Reclamar Recompensas
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
