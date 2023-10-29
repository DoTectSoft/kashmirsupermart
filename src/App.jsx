import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
