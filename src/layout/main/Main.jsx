import Routers from "../../routers/Routers";
import Cta from "../../components/main/cta/cta";

import "./Main.css";
const Main = function () {
  return (
    <div className="main-container">
      <Routers />
      <Cta />
    </div>
  );
};
export default Main;
