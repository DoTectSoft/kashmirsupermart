import "./Dropdown.css";
import DropdownIcon from "../../assets/Dropdown";

const Dropdown = function () {
  return (
    <>
      <ul>
        <li>Eng</li>
        <li>Urd</li>
        <li>Hin</li>
      </ul>
      <img src={DropdownIcon} alt="dropdown icon" />
    </>
  );
};

export default Dropdown;
