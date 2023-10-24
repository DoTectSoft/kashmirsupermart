import Navbar from "../../components/navbar/Navbar";

import Colors from "../../utils/constants/Colors";
import LocationIcon from "../../assets/MapPin.svg";
import Logo from "../../assets/Logo.svg";
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
          <div className="logo">
            <img className="logo-img" src={Logo} alt="logo" />
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
