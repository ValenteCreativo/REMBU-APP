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
    // Simulación de autenticación simple
    if (email === 'admin@rembu.com' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas. Usa admin/admin');
    }
  };

  const handleSignUp = () => {
    navigate('/crearcuenta');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}> {/* Añadir esta clase para aplicar los nuevos estilos */}
        <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
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
            <label htmlFor="password">Contraseña:</label>
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
              Iniciar Sesión
            </button>
            <button type="button" onClick={handleSignUp} className={styles.signUpButton}>
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
