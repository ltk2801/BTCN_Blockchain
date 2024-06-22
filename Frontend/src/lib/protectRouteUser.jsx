import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProtectedRouteUser = ({ children }) => {
  const { currentWallet } = useAuth();

  if (!currentWallet) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRouteUser;
