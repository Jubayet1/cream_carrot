import React from "react";

const Dish = ({ img, name, description, price }) => {
  return (
    <div className="flex flex-col py-8 items-center text-center rounded-lg hover:bg-sky-100">
      <img src={img} alt="" className="w-2/6 mb-4" />
      <p className="text-2xl">{name}</p>
      <p>{description}</p>
      <p className="text-xl">${price}</p>
    </div>
  );
};

export default Dish;
