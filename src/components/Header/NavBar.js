import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return <li className="nav-item">{props.children}</li>;
};

// const NavBarDrop = (props) => {
//     return <li className="nav-item">{props.children}</li>;
//   };

export default NavBar;
// export { NavBarDrop}
