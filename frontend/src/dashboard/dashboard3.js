import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './dashboard.module.css';

// Create a custom icon with an emoji 📡
const AntennaIcon = new L.DivIcon({
  html: '🛜',
  className: 'antenna-icon',
  iconSize: [60, 60], // Smaller icon size
  iconAnchor: [12, 25], // Anchor to center the icon correctly
  popupAnchor: [0, -25], // Where the popup opens
});

// Function to generate a random signal strength between 1 and 100
const generateSignalStrength = () => Math.floor(Math.random() * 100) + 1;

// Function to simulate air quality
const getAirQuality = () => {
  const airQualityLevels = [
    { level: 'Excellent', value: '0-50' },
    { level: 'Good', value: '51-100' },
    { level: 'Moderate', value: '101-150' },
    { level: 'Unhealthy for Sensitive Groups', value: '151-200' },
    { level: 'Unhealthy', value: '201-300' },
    { level: 'Very Unhealthy', value: '301-500' },
  ];
  const randomIndex = Math.floor(Math.random() * airQualityLevels.length);
  return airQualityLevels[randomIndex];
};

const Dashboard3 = () => {
  // Simulating antennas with specific coordinates in Mexico City
  const antennas = [
    { id: 'Condesa Antenna', lat: 19.414, lng: -99.1698 },
    { id: 'Polanco Antenna', lat: 19.4333, lng: -99.2000 },
    { id: 'Coyoacán Antenna', lat: 19.3466, lng: -99.1617 },
    { id: 'Santa Fe Antenna', lat: 19.3656, lng: -99.2600 },
    { id: 'Chapultepec Antenna', lat: 19.4204, lng: -99.1818 },
    { id: 'Roma Antenna', lat: 19.4145, lng: -99.1647 },
    { id: 'Juárez Antenna', lat: 19.427, lng: -99.1663 },
    { id: 'Tlalpan Antenna', lat: 19.3033, lng: -99.1819 },
    { id: 'Iztacalco Antenna', lat: 19.4116, lng: -99.1014 },
    { id: 'La Roma Antenna', lat: 19.4058, lng: -99.1596 },
    { id: 'Del Valle Antenna', lat: 19.3892, lng: -99.1612 },
    { id: 'Xochimilco Antenna', lat: 19.2433, lng: -99.1415 },
    { id: 'Azcapotzalco Antenna', lat: 19.2277, lng: -99.2039 },
    { id: 'Tlatelolco Antenna', lat: 19.4506, lng: -99.1420 },
    { id: 'Tacuba Antenna', lat: 19.2686, lng: -99.2336 },
    { id: 'Álvaro Obregón Antenna', lat: 19.3683, lng: -99.2132 },
    { id: 'Cuauhtémoc Antenna', lat: 19.4091, lng: -99.1542 },
    { id: 'Magdalena Contreras Antenna', lat: 19.3003, lng: -99.1972 },
    { id: 'Venustiano Carranza Antenna', lat: 19.4119, lng: -99.1120 },
    { id: 'Benito Juárez Antenna', lat: 19.3898, lng: -99.1863 },
    { id: 'Milpa Alta Antenna', lat: 19.2540, lng: -99.0750 },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <h2>Connected Antenna Map in CDMX</h2>
      <div className={styles.mapContainer}>
        <MapContainer
          center={[19.4326, -99.1332]}
          zoom={12}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {antennas.map((antenna) => {
            const signalStrength = generateSignalStrength();
            const airQuality = getAirQuality();
            return (
              <Marker
                key={antenna.id}
                position={[antenna.lat, antenna.lng]}
                icon={AntennaIcon}
              >
                <Popup>
                  <strong>{antenna.id}</strong><br />
                  📡 Signal: {signalStrength} %<br />
                  Air Quality: {airQuality.level} (AQI: {airQuality.value})
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <div className={styles.antennaList}>
        <h3>Antenna List</h3>
        <div className={styles.antennaCards}>
          {antennas.map((antenna) => {
            const signalStrength = generateSignalStrength();
            const airQuality = getAirQuality();
            return (
              <div key={antenna.id} className={styles.antennaCard}>
                <strong>{antenna.id}</strong><br />
                📡 Signal: {signalStrength} %<br />
                Air Quality: {airQuality.level} (AQI: {airQuality.value})
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard3;
