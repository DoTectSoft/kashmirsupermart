import "./BannersGrid.css";
import bigbanner from "../../../../assets/herosection/bigbanner.jpg";
import summersale from "../../../../assets/herosection/summersale.jpg";
import bestdeal from "../../../../assets/herosection/bestdeal.jpg";
const BannersGrid = function () {
  return (
    <>
      <div className="hero-banners-container">
        <section className="hero-bigbanner-section">
          <picture>
            <img src={bigbanner} alt="big banner" />
          </picture>
        </section>
        <section className="hero-smallbanner-section">
          <picture>
            <img src={summersale} alt="big banner" />
          </picture>
          <picture>
            <img src={bestdeal} alt="big banner" />
          </picture>
        </section>
      </div>
    </>
  );
};
export default BannersGrid;
