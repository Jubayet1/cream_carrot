import React, { useEffect, useState } from "react";
import Dish from "./Dish";

const Items = () => {
  const [time, setTime] = useState("Breakfast");
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch(`${time}.json`)
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, [time]);

  useEffect(() => {
    fetch('AllData.json')
    .then((res) => res.json())
    .then(data=>console.log(data))
  }, [])
  return (
    <div>
      <div className="flex flex-row justify-center pt-8">
        <button
          className="mx-4 h-10 w-24 text-white rounded-full bg-red-500 hover:bg-red-600"
          onClick={() => {
            setTime("Breakfast");
          }}
        >
          Breakfast
        </button>
        <button
          className="mx-4 h-10 w-20 text-white rounded-full bg-red-500 hover:bg-red-600"
          onClick={() => {
            setTime("Lunch");
          }}
        >
          Lunch
        </button>
        <button
          className="mx-4 h-10 w-20 text-white rounded-full bg-red-500 hover:bg-red-600"
          onClick={() => {
            setTime("Dinner");
          }}
        >
          Dinner
        </button>
      </div>
      <div className="w-10/12 mx-auto my-16 grid grid-cols-3 gap-y-20 gap-x-4">
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            productKey={dish.productKey}
            img={dish.img}
            name={dish.name}
            description={dish.description}
            price={dish.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Items;
