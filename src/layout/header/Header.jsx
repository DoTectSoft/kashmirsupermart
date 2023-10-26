import Navbar from "../../components/header/navbar/Navbar";
import Searchbar from "../../components/header/searchbar/Searchbar";
import Favorites from "../../components/header/favorites/Favorites";

import Colors from "../../utils/constants/Colors";
import LocationIcon from "../../assets/MapPin.svg";
import Logo from "../../assets/Logo.svg";
import "./Header.css";
import ShoppingBag from "../../components/header/shoppingbag/ShoppingBag";
import NavDropdown from "../../components/header/navdropdown/NavDropdown";
import { useState } from "react";
import Registration from "../../components/header/registration/Registration";
import Dropdown from "../../components/header/dropdown/Dropdown";

const Header = function () {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="document-header">
      <section className="location-section">
        <div
          className="location-bar header-section-bar"
          style={{ color: Colors.GRAY600 }}
        >
          <div className="location-group-container">
            <div className="location-container location-bar-font">
              <picture className="location-icon-container">
                <img
                  className="location-icon-img"
                  src={LocationIcon}
                  alt="location icon"
                />
              </picture>
              <p className="location-text">
                Store Location: Srinagar Jammu & Kashmir
              </p>
            </div>
          </div>
          <div className="registration-group-container">
            <div className="registration-container">
              <div className="langdropdown-component-container location-bar-font">
                <Dropdown title="Eng" />
              </div>
              <div className="currencydropdown-component-container location-bar-font">
                <Dropdown title="USD" />
              </div>
              <div className="header-location-separator-container">
                <div className="separator"></div>
              </div>
              <div className="registration-component-container location-bar-font">
                <Registration />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-section">
        <div className="logo-bar header-section-bar">
          <div className="logo-container">
            <img className="logo-img" src={Logo} alt="logo" />
          </div>
          <div className="search-cart-container">
            <div className="searchbar-component-container">
              <Searchbar />
            </div>
            <div className="favorites-cart-container">
              <div className="favorites-component-container">
                <Favorites />
              </div>
              <div className="separator-container">
                <div className="separator"></div>
              </div>
              <div className="shoppingbag-component-container">
                <ShoppingBag />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="navbar-section"
        style={{ backgroundColor: Colors.GRAY800 }}
      >
        <div className="navigation-bar header-section-bar">
          <NavDropdown isVisible={isVisible} />
          <Navbar isVisible={isVisible} setIsVisible={setIsVisible} />
        </div>
      </section>
    </header>
  );
};

export default Header;
