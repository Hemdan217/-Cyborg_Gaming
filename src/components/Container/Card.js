import React from "react";
import "./Card.css";
import { FaStar, FaDownload } from "react-icons/fa";
const Card = (props) => {
  return (
    <>
      <div className="item">
        <img alt="Hi" src={props.image} />
        <div className="content">
          <div>
            <span style={{ fontWeight: "bold" }}>Fortnite</span>
            <br />
            <span style={{ fontWeight: "400", color: "#666" }}>Sandbox</span>
          </div>
          <div>
            <span style={{ color: "yellow", marginRight: " 10px" }}>
              <FaStar />
            </span>
            4.8 <br />
            <span style={{ color: "#EC6090", marginRight: " 10px" }}>
              <FaDownload />
            </span>
            2.3M
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
