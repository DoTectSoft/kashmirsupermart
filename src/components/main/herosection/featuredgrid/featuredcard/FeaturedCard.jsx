import "./FeaturedCard.css";
const FeaturedCard = function ({ source, title, description }) {
  return (
    <>
      <div className="card-container">
        <div className="card-contents-container">
          <picture className="image-container">
            <img src={source} alt={title} />
          </picture>
          <div className="title-description-container">
            <div className="title-text-container">
              <p>{title}</p>
            </div>
            <div className="description-text-container">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedCard;
