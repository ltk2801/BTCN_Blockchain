import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProtectedRoute = ({ children }) => {
  const { currentWallet } = useAuth();

  if (currentWallet) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
