import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import ScrollToTop from "./components/layout/scroll-to-top";
import HomePage from "./pages/home-page";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
