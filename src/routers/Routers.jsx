import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Shop from "../pages/shop/Shop";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NoPage from "../pages/nopage/NoPage";

const Routers = function () {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="shop" element={<Shop />} />
      <Route path="blog" element={<Blog />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};
export default Routers;
