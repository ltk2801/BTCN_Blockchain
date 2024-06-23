import React, { useContext, useState, useEffect } from "react";
import Axios from "@/lib/APIs/Axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [currentWallet, setCurrentWalletState] = useState(null);
  const [inCreateWallet, setInCreateWallet] = useState(false);
  const [inAccessWallet, setInAccessWallet] = useState(false);

  const [loading, setLoading] = useState(false);
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [balanceWallet, setBalanceWallet] = useState(null);

  const getLatestBlocks = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(`/api/blockchain/lastesBlocks`);
      setLatestBlocks(res.data.latestBlocks.reverse());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const walletFromStorage = JSON.parse(localStorage.getItem("currentWallet"));
    if (walletFromStorage) {
      setCurrentWalletState(walletFromStorage);
    }
    getLatestBlocks();
  }, []);

  const setCurrentWallet = (wallet) => {
    setCurrentWalletState(wallet);
    setBalanceWallet(wallet.balance);
    localStorage.setItem("currentWallet", JSON.stringify(wallet));
  };

  const logout = () => {
    navigate("/");
    setCurrentWalletState(null);
    localStorage.removeItem("currentWallet");
    setInCreateWallet(false);
    setInAccessWallet(false);
  };

  const value = {
    setCurrentWallet,
    currentWallet,
    setInCreateWallet,
    setInAccessWallet,
    inCreateWallet,
    inAccessWallet,
    logout,
    loading,
    latestBlocks,
    setLatestBlocks,
    balanceWallet,
    setBalanceWallet,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
