import Routers from "../../routers/Routers";
import Cta from "../../components/main/cta/cta";
import Testimonials from "../../components/main/Testimonials/Testimonials";

import "./Main.css";
const Main = function () {
  return (
    <div className="main-container">
      <Routers />
      <Testimonials />
      <Cta />
    </div>
  );
};
export default Main;
