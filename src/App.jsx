import "./App.css";
import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
