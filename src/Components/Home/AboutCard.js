import React from "react";

const AboutCard = ({ img, name, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
