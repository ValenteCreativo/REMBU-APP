import React from 'react';
import './App.css';
import { FaLeaf, FaChartLine, FaWallet, FaNetworkWired } from 'react-icons/fa';
import { Routes, Route } from 'react-router-dom';  // Importamos Routes y Route
import Header from './components2/header';
import Login from './login/login';  
import Dashboard from './dashboard/Dashboard';
import Dashboard2 from './dashboard/Dashboard2';
import Preorder from './preorder/preorder';
import FAQ from './FAQ/faq';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Preorder" element={<Preorder />} />
        <Route path="/Dashboard2" element={<Dashboard2 />} />
        {/* Puedes agregar más rutas aquí */}
        <Route path="/" element={
          <>
            {/* Hero Section */}
            <section className="hero">
              <img src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmZrw6i17V2fMr23RXiLXT3aGqEDjMRfPkFv7RT5xAvA29" alt="Logo" className="logo" />
              <h1>Monitor and protect urban forests from your home</h1>
              <p>Install an antenna, create an account, and receive monthly rewards for environmental preservation.</p>
              <button className="cta-button">Pre-order your antenna</button>
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

            {/* Technology */}
            <section className="technology" id="technology">
              <h2>Advanced Technology</h2>
              <div className="technology-content">
                <div className="tech-description">
                  <h3>How Our Antenna Works</h3>
                  <p>
                    Our antennas are equipped with multiple sensors that collect data on temperature, humidity, CO₂ levels, and more. This data is securely sent to our decentralized network, ensuring accuracy and reliability.
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

            {/* Tokenomics */}
            <section className="tokenomics" id="tokenomics">
              <h2>Tokenomics</h2>
              <div className="tokenomics-diagram">
                <img src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmeNWvpwxDf11KDpEwhyZN2ERT2oZUZyKTCSRoVQFK45nq" alt="Tokenomics Diagram" />
              </div>
              <p>
                Participate in our ecosystem and earn tokens for maintaining and operating antennas. These tokens can be used to access exclusive data, participate in project governance, and more.
              </p>
            </section>

            {/* Impact */}
            <section className="impact" id="impact">
              <h2>Real Impact</h2>
              <div className="impact-content">
                <img src="https://red-causal-armadillo-397.mypinata.cloud/ipfs/QmSEqUgcTumgYyApoqKgqjVs1tMtkARhjqHRrKgFkjjPeK" alt="Urban Forest Impact" className="impact-image" />
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
          <a href="#tokenomics">Tokenomics</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; 2024 DePIN. All rights reserved.</p>
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
