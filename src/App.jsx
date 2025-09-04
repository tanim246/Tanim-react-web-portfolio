import React from "react";
import { Link } from "react-router-dom";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import Advantage from "./components/Advantage";
import Services from "./components/Services";
import Footer from "./components/component2/Footer";

const App = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Advantage />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
