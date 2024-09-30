// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '/Users/valentinmartinez/REMBU/frontend/src/login/login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication simulation
    if (email === 'admin@rembu.com' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Incorrect credentials. Use admin/admin');
    }
  };

  const handleSignUp = () => {
    navigate('/crearcuenta');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}> {/* Add this class to apply the new styles */}
        <h2 className={styles.loginTitle}>Login</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
            <button type="button" onClick={handleSignUp} className={styles.signUpButton}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
