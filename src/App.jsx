import React from "react";
import { Link } from "react-router-dom";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import Advantage from "./components/Advantage";

const App = () => {
  return (
    <div>
      <Navber />
      <Hero />
      <Advantage />
    </div>
  );
};

export default App;
