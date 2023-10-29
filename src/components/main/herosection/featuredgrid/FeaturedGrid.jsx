import "./FeaturedGrid.css";
import FeaturedCard from "./featuredcard/FeaturedCard";

const FeaturedGrid = function () {
  return (
    <>
      <div className="featured-grid-container">
        <div className="featured-grid-content-container">
          <FeaturedCard
            source={"../../../../assets/herosection/freeshipping.jpg"}
            title="Free Shipping"
            description="Free shipping on all orders"
          />
        </div>
      </div>
    </>
  );
};
export default FeaturedGrid;
