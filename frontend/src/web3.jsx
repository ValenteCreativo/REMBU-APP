// src/web3.jsx

import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

// Función para obtener el proveedor de ethers
function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000; // opcional: ajustar el intervalo de polling
  return library;
}

const Web3Provider = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {children}
    </Web3ReactProvider>
  );
};

export default Web3Provider;
