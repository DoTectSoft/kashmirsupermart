import "./App.css";
import Header from "./layout/header/Header";
import Routers from "./routers/Routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
