import React from "react";
import "./GamingLibrary.css";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import CardGaming from "./CardGaming";

const GamingLibrary = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader>
          <h4>
            Your Gaming <span>Library</span>
          </h4>
        </SectionHeader>
        <div className="gaming-cards">
          <CardGaming />
          <CardGaming />
          <CardGaming />
          <CardGaming />
          <CardGaming />
        </div>
      </SectionWrapper>
    </>
  );
};

export default GamingLibrary;
