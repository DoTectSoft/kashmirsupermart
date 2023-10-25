import "./ShoppingBag.css";
import BagIcon from "../../../assets/Bag.svg";

const ShoppingBag = function () {
  return (
    <>
      <picture className="bag-icon-container">
        <img className="bag-icon-img" src={BagIcon} alt="Bag icon" />
      </picture>
      <div className="bag-info">
        <p className="shopping-cart-text">Shopping cart:</p>
        <p>Rs. 570.00</p>
      </div>
    </>
  );
};

export default ShoppingBag;
