import "./Dropdown.css";
import DropdownIcon from "../../../assets/Dropdown.svg";

const Dropdown = function ({ title }) {
  return (
    <>
      <div className="dropdown-container">
        <p>{title}</p>
        <picture className="dropdown-icon-container location-icon-container">
          <img
            className="dropdown-img"
            src={DropdownIcon}
            alt="dropdown icon"
          />
        </picture>
      </div>
      {/* <ul>
        <li>Eng</li>
        <li>Urd</li>
        <li>Hin</li>
      </ul> */}
    </>
  );
};

export default Dropdown;
