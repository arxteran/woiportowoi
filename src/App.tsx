import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home";
import AboutSection from "./components/About";
import PortfolioSection from "./components/Portofolio";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import "@fortawesome/fontawesome-free/css/all.css";

const App: React.FC = () => {
  return (
    <div>
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
