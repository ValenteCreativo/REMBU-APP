import React from 'react';
import './App.css';
import { FaLeaf, FaChartLine, FaWallet, FaNetworkWired } from 'react-icons/fa';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components2/header';
import DashboardHeader from './components2/headerdashboard';
import Login from './login/login';
import Dashboard from './dashboard/Dashboard';
import Dashboard2 from './dashboard/Dashboard2';
import Dashboard3 from './dashboard/dashboard3';
import DAO from './dashboard/dao';
import Preorder from './preorder/preorder';
import FAQ from './FAQ/faq';

function App() {
  const location = useLocation();

  const dashboardRoutes = ['/dashboard', '/dashboard2', '/dashboard3', '/dao'];
  const isDashboardPage = dashboardRoutes.includes(location.pathname);

  return (
    <div className="App">
      {isDashboardPage ? <DashboardHeader /> : <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Preorder" element={<Preorder />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/dao" element={<DAO />} /> {/* Ruta para la nueva página DAO */}
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="hero">
              <img src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmZrw6i17V2fMr23RXiLXT3aGqEDjMRfPkFv7RT5xAvA29" alt="Logo" className="logo" />
              <h1>Monitor and protect urban forests from your home</h1>
              <p>Install an antenna, create an account, and receive monthly rewards for environmental preservation.</p>
              <button className="cta-button">Join REMBU Community</button>
            </section>

            {/* Benefits */}
            <section className="benefits">
              <h2>Benefits of Using Our App</h2>
              <div className="benefits-container">
                <div className="benefit">
                  <FaWallet size={40} color="#2ecc71" />
                  <h3>Earn Rewards</h3>
                  <p>Receive monthly rewards for contributing to urban forest monitoring.</p>
                </div>
                <div className="benefit">
                  <FaChartLine size={40} color="#2ecc71" />
                  <h3>Real-time Monitoring</h3>
                  <p>Access precise and real-time data about the health of forests in your city.</p>
                </div>
                <div className="benefit">
                  <FaLeaf size={40} color="#2ecc71" />
                  <h3>Support Sustainable Growth</h3>
                  <p>Contribute to the sustainable development of urban forests that benefit the environment.</p>
                </div>
                <div className="benefit">
                  <FaNetworkWired size={40} color="#2ecc71" />
                  <h3>Decentralized Data</h3>
                  <p>Access reliable, decentralized data for better decision-making.</p>
                </div>
              </div>
            </section>

            {/* How Does it Work? */}
            <section className="how-it-works" id="how-it-works">
              <h2>How Does it Work?</h2>
              <p>
                It's simple! Once you install an antenna at home, it begins collecting data on environmental factors such as humidity, temperature, air quality, and more. This data is sent securely to the blockchain using Scroll, an L2 Zero-Knowledge (ZK) network that ensures scalability and privacy. You earn rewards for each data point shared, contributing to a global effort to monitor urban forests.
              </p>
              <p>
                Our system is fully decentralized, meaning the data you provide is not controlled by any single entity. Instead, it's secured on the blockchain, accessible to everyone, and helps create actionable insights for environmental protection.
              </p>
            </section>

            {/* Advanced Technology */}
            <section className="technology" id="technology">
              <h2>Advanced Technology</h2>
              <div className="technology-content">
                <div className="tech-description">
                  <h3>Scroll L2: Powering Decentralization</h3>
                  <p>
                    We utilize Scroll, a Layer 2 Zero-Knowledge (ZK) rollup, to enhance scalability and reduce transaction costs while ensuring data integrity and privacy. ZK technology allows us to process large amounts of data without compromising on security, making it perfect for our use case of urban forest monitoring.
                  </p>
                  <h3>How Our Antennas Work</h3>
                  <p>
                    Each antenna is equipped with cutting-edge sensors to collect data such as humidity, CO₂ levels, temperature, and more. This data is securely transmitted to the blockchain, where it contributes to our decentralized environmental monitoring network.
                  </p>
                </div>
                <img
                  src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmYhx1W8XctfXF8Qhv2RafgpZfVygLkEp4z5PZQKR3ModC"
                  alt="Detailed Sensors"
                  className="antena-detallada"
                />
                <img
                  src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmSEqUgcTumgYyApoqKgqjVs1tMtkARhjqHRrKgFkjjPeK"
                  alt="Antenna Prototype"
                  className="antena-image"
                />
              </div>
            </section>

            {/* Impact */}
            <section className="impact" id="impact">
              <h2>Real Impact</h2>
              <div className="impact-content">
                <img src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmZUvzVtT6qNbSprtTctnNDLBoEzyJmFyk5TpZrCdGkB3S" alt="Urban Forest Impact" className="impact-image" />
                <div className="impact-description">
                  <p>
                    Thanks to our antennas, cities can obtain precise data on the health of their urban forests. This enables decision-makers to implement effective strategies for sustainable growth and environmental preservation.
                  </p>
                  <h3>Testimonials</h3>
                  <blockquote>
                    "This app has transformed the way we understand and manage our urban green spaces. The data is accurate and helps us make informed decisions."
                    <br /><br />
                    — María González, Environmental Expert
                  </blockquote>
                </div>
              </div>
            </section>
          </>
        } />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#technology">Technology</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; 2024 Urban Forest Assesment and Monitoring Network (REMBU). All rights reserved.</p>
        <div className="social-media">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
