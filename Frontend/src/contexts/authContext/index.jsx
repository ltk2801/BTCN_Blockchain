import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentWallet, setCurrentWalletState] = useState(null);

  const [inCreateWallet, setInCreateWallet] = useState(false);

  const [inAccessWallet, setInAccessWallet] = useState(false);
  useEffect(() => {
    const walletFromStorage = JSON.parse(localStorage.getItem("currentWallet"));
    if (walletFromStorage) {
      setCurrentWalletState(walletFromStorage);
    }
  }, []);

  const setCurrentWallet = (wallet) => {
    setCurrentWalletState(wallet);
    localStorage.setItem("currentWallet", JSON.stringify(wallet));
  };

  const value = {
    setCurrentWallet,
    currentWallet,
    setInCreateWallet,
    setInAccessWallet,
    inCreateWallet,
    inAccessWallet,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
