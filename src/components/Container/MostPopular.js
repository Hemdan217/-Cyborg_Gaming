import React from "react";
import "./MostPopular.css";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import popular1 from "../../assets/images/popular-01.jpg";
import popular2 from "../../assets/images/popular-02.jpg";
import popular3 from "../../assets/images/popular-03.jpg";
import popular4 from "../../assets/images/popular-04.jpg";
import popular5 from "../../assets/images/popular-05.jpg";
import popular6 from "../../assets/images/popular-06.jpg";
import popular7 from "../../assets/images/popular-07.jpg";
import popular8 from "../../assets/images/popular-08.jpg";
import Card from "./Card";
const MostPopular = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader>
          <h4>
            Most Popular <span>Right Now</span>
          </h4>
        </SectionHeader>

        <div className="most-popular">
          <Card image={popular1} />
          <Card image={popular2} />
          <Card image={popular3} />
          <Card image={popular4} />
          <Card image={popular5} />
          <Card image={popular6} />
          <Card image={popular7} />
          <Card image={popular8} />
        </div>
      </SectionWrapper>
    </>
  );
};

export default MostPopular;
