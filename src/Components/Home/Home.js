import React from "react";
import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Items from "./Items";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Items />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
