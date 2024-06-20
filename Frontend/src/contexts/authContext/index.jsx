import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const [inCreateWallet, setInCreateWallet] = useState(false);

  const [inAccessWallet, setInAccessWallet] = useState(false);

  const value = {
    setCurrentUser,
    currentUser,
    setInCreateWallet,
    setInAccessWallet,
    inCreateWallet,
    inAccessWallet,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
