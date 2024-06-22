import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/layout/scroll-to-top";
import WalletAccess from "./pages/access-wallet-page";
import HomePage from "./pages/home-page";

import { AuthProvider } from "./contexts/authContext";
import ToastContainerNotification from "./components/notifications";
import WalletCreate from "./pages/create-wallet-page";
import SoftwareCreate from "./pages/create-wallet-page/softwareCreate";
import SoftwareAccess from "./pages/access-wallet-page/softwareAccess";
import PrivateKeyCreate from "./pages/create-wallet-page/private-key-create";
import PrivateKeyAccess from "./pages/access-wallet-page/private-key-accsess";

import ProtectedRoute from "./lib/protectRoute";
import WalletDashboard from "./pages/wallet-dashboard";
import BlockDetail from "./pages/wallet-dashboard/blockDetail";

function App() {
  return (
    <AuthProvider>
      <ToastContainerNotification />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/wallet/access"
          element={
            <ProtectedRoute>
              {" "}
              <WalletAccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet/access/software"
          element={
            <ProtectedRoute>
              <SoftwareAccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet/access/software/private-key"
          element={
            <ProtectedRoute>
              <PrivateKeyAccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet/create"
          element={
            <ProtectedRoute>
              {" "}
              <WalletCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet/create/software"
          element={
            <ProtectedRoute>
              <SoftwareCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wallet/create/software/private-key"
          element={
            <ProtectedRoute>
              <PrivateKeyCreate />
            </ProtectedRoute>
          }
        />
        <Route path="/wallet/dashboard" element={<WalletDashboard />} />
        <Route path="/wallet/dashboard/block/:id" element={<BlockDetail />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
