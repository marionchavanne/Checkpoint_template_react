import React from "react";
import "../../Styles/imports.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/");
  // };
  return (
    <nav className="NavBar">
      <ul>
        <NavLink to="/location" className="link">
          <li>Où pratiquer ?</li>
        </NavLink>
        <NavLink to="/home" className="link">
          <img
            className="logo"
            alt="Logo"
            src="./src/assets/uploads/DropZoneLogo1.png"
          />
        </NavLink>
        <NavLink to="/contact" className="link">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
