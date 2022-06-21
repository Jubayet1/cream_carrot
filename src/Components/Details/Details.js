import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [allDishesh, setAllDishes] = useState([]);

    useEffect(() => {
      fetch(`AllData.json`)
        .then((res) => res.json())
        .then((data) => setAllDishes(data));
    }, []);

  console.log(allDishesh.length);
  let { ProductKey } = useParams();
  console.log(ProductKey);
  return (
    <div>
      <p>this is details</p>
      {allDishesh.length}
    </div>
  );
};

export default Details;
