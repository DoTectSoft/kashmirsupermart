import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = function () {
  return (
    <>
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
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
