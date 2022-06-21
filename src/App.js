import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details/Details";
import { createContext, useState } from "react";

export const BlogContext = createContext();
function App() {
  const [blogs, setBlogs] = useState([]);
  
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:Key" element={<Details />} />
        <Route />
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
