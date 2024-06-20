import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import ScrollToTop from "./components/layout/scroll-to-top";
import WalletAccess from "./pages/access-wallet-page";
import HomePage from "./pages/home-page";

import { AuthProvider } from "./contexts/authContext";
import ToastContainerNotification from "./components/notifications";
import WalletCreate from "./pages/create-wallet-page";
import SoftwareCreate from "./pages/create-wallet-page/softwareCreate";
import SoftwareAccess from "./pages/access-wallet-page/softwareAccess";
import PrivateKeyCreate from "./pages/create-wallet-page/private-key-create";

function App() {
  return (
    <AuthProvider>
      <ToastContainerNotification />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallet/access" element={<WalletAccess />} />
        <Route path="/wallet/access/software" element={<SoftwareAccess />} />
        <Route path="/wallet/create" element={<WalletCreate />} />
        <Route path="/wallet/create/software" element={<SoftwareCreate />} />
        <Route
          path="/wallet/create/software/private-key"
          element={<PrivateKeyCreate />}
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
