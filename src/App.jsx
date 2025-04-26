import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import Header from "./components/Header/Header";
import Service from "./pages/Service/Service";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
