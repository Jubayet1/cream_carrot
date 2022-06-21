import React from "react";
import { useNavigate } from "react-router-dom";

const Dish = ({ img, name, description, price, productKey }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col py-8 items-center text-center rounded-lg hover:bg-sky-100">
      <img src={img} alt="" className="w-2/6 mb-4" />
      <p className="text-2xl">{name}</p>
      <p>{description}</p>
      <p className="text-xl">${price}</p>
      <button onClick={() => navigate(`/item/${productKey}`)}>order now</button>
    </div>
  );
};

export default Dish;
