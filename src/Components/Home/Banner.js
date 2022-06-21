import React from "react";
import img from "../../Assets/images/bannerNEWbackground.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={img} alt="" className="image" />
      <div className="text-area">
        <p className="text-center text-4xl mb-4">
          Best Food Waiting For Your Tummy !
        </p>
        <div>
          <div class="flex justify-center items-center">
            <div class="relative">
              <div class="absolute top-4 left-3">
                <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
              </div>
              <input
                type="text"
                class="h-14 w-96 pl-10 pr-20 rounded-full z-0 focus:shadow focus:outline-none"
                placeholder="Search anything..."
              />
              <div class="absolute top-2 right-2">
                <button class="h-10 w-20 text-white rounded-full bg-red-500 hover:bg-red-600">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
