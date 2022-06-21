import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:ProductKey" element={<Details />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
