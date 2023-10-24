import { Link } from "react-router-dom";

import PhoneIcon from "../../../assets/PhoneCall.svg";
import "./Navbar.css";

const Navbar = function () {
  return (
    <div className="navigation-bar-container">
      <nav className="nav-menu-container">
        <ul className="nav-menu-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </nav>
      <div className="phone-container">
        <picture className="phoneicon-container">
          <img className="phoneicon-img" src={PhoneIcon} alt="phone" />
        </picture>
        <div>+91 9018667339</div>
      </div>
    </div>
  );
};
export default Navbar;
