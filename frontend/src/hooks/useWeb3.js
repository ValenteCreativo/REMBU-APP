// src/hooks/useWeb3.js (actualizado)

import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from 'react';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 534352], // IDs de las cadenas soportadas
});

const useWeb3 = () => {
  const { activate, active, account, library, connector, deactivate, chainId } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  // Manejar cambios de cuenta o red
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          deactivate();
        }
      };

      const handleChainChanged = (_chainId) => {
        // Puedes agregar lógica para manejar cambios de red
        // Por ejemplo, recargar la página
        window.location.reload();
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, [deactivate]);

  return { connect, disconnect, active, account, library, connector, chainId };
};

export default useWeb3;
