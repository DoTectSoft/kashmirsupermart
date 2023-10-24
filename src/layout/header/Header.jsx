import Navbar from "../../components/header/navbar/Navbar";
import Searchbar from "../../components/header/searchbar/Searchbar";

import Colors from "../../utils/constants/Colors";
import LocationIcon from "../../assets/MapPin.svg";
import Logo from "../../assets/Logo.svg";
import FavoriteIcon from "../../assets/Heart.svg";
import BagIcon from "../../assets/Bag.svg";
import "./Header.css";

const Header = function () {
  return (
    <header className="document-header">
      <section className="location-section">
        <div className="location-bar" style={{ color: Colors.GRAY600 }}>
          <div className="location">
            <picture className="location-icon-container">
              <img
                className="location-icon-img"
                src={LocationIcon}
                alt="location icon"
              />
            </picture>

            <p>Store Location: Srinagar Jammu & Kashmir</p>
          </div>
        </div>
      </section>
      <section className="logo-section">
        <div className="logo-bar">
          <div className="logo-container">
            <img className="logo-img" src={Logo} alt="logo" />
          </div>
          <div className="searchbar-component-container">
            <Searchbar />
          </div>
          <div className="favorites-cart-container">
            <picture className="favorites-icon-container">
              <img
                className="favorites-icon-img"
                src={FavoriteIcon}
                alt="favorite icon"
              />
            </picture>
            <div className="separator-container">
              <div className="separator"></div>
            </div>
            <picture className="bag-icon-container">
              <img className="bag-icon-img" src={BagIcon} alt="Bag icon" />
            </picture>
            <div className="cart-info">
              <p className="shopping-cart">Shopping cart:</p>
              <p>Rs. 570.00</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="navbar-section"
        style={{ backgroundColor: Colors.GRAY800 }}
      >
        <div className="navigation-bar">
          <Navbar />
        </div>
      </section>
    </header>
  );
};

export default Header;
