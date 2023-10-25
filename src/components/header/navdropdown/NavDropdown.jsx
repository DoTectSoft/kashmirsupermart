import "./NavDropdown.css";
import { Link } from "react-router-dom";
import Colors from "../../../utils/constants/Colors";

const NavDropdown = function ({ isVisible }) {
  return (
    <>
      {isVisible && (
        <nav
          className="nav-burgermenu-container"
          style={{ backgroundColor: Colors.GRAY800 }}
        >
          <ul className="nav-burgermenu-list">
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
      )}
    </>
  );
};

export default NavDropdown;
