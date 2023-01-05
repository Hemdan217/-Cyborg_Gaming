import React from "react";
import "./CardGaming.css";
import game1 from "../../assets/images/game-01.jpg";
const CardGaming = () => {
  return (
    <>
      <div className="gaming-card">
        <ul>
          <li>
            <img alt="" src={game1} />
          </li>
          <li>
            <h4>Fortnite</h4>
            <span>Sandbox</span>
          </li>
          <li>
            <h4>Date Added</h4>
            <span>24/08/2036</span>
          </li>
          <li>
            <h4>Hours Played</h4>
            <span>634 H 22 Mins</span>
          </li>
          <li>
            <h4>Currently</h4>
            <span>Downloaded</span>
          </li>
          <li>
            <div className="main-button">
              <a href="/#">Donwloaded</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CardGaming;
