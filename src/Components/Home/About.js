import React, { useEffect, useState } from "react";
import AboutCard from "./AboutCard";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    fetch("About.json")
      .then((res) => res.json())
      .then((data) => setAbouts(data));
  }, []);
  return (
    <div>
      <div className="text-center text-4xl my-16">
        <p>Why You'd Choose US?</p>
      </div>
      <div className="grid grid-cols-3 gap/8">
        {abouts.map((about) => (
          <AboutCard
            key={about.id}
            img={about.img}
            name={about.name}
            description={about.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
