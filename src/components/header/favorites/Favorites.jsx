import "./Favorites.css";
import FavoriteIcon from "../../../assets/Heart.svg";

const Favorites = function () {
  return (
    <>
      <picture className="favorites-icon-container">
        <img
          className="favorites-icon-img"
          src={FavoriteIcon}
          alt="favorite icon"
        />
      </picture>
    </>
  );
};

export default Favorites;
