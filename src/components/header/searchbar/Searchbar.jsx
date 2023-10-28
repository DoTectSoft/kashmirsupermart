import "./Searchbar.css";
import SearchIcon from "../../../assets/Searchicon.svg";
import Colors from "../../../utils/constants/Colors";

const Searchbar = function () {
  return (
    <>
      <section className="searchbar-section">
        <div className="searchbar-container">
          <div className="search-box">
            <picture className="search-icon">
              <img
                className="search-icon-img"
                src={SearchIcon}
                alt="search icon"
              />
            </picture>
            <div className="search-input-box ">
              <input className="input-box" type="text" placeholder="Search" />
            </div>
          </div>
          <div className="search-button-box">
            <input
              className="search-button logo-bar-font"
              style={{ backgroundColor: Colors.PRIMARY, color: Colors.WHITE }}
              type="button"
              value="Search"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Searchbar;
