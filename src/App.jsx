import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Cta from "./layout/cta/cta";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
        <Cta />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
