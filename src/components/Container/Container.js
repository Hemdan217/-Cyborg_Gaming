import React from "react";
import Hero from "./Hero";
import MostPopular from "./MostPopular";
import GamingLibrary from "./GamingLibrary";

import "./container.css";
const Container = () => {
  return (
    <div className="page-content">
      <Hero />
      <MostPopular />
      <GamingLibrary />
    </div>
  );
};

export default Container;
