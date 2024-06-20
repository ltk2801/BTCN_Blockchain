import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import ScrollToTop from "./components/layout/scroll-to-top";
import WalletAccess from "./pages/access-wallet-page";
import HomePage from "./pages/home-page";

import { AuthProvider } from "./contexts/authContext";
import ToastContainerNotification from "./components/notifications";
import WalletCreate from "./pages/create-wallet-page";

function App() {
  return (
    <AuthProvider>
      <ToastContainerNotification />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wallet/access" element={<WalletAccess />} />
        <Route path="/wallet/create" element={<WalletCreate />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
