import React from "react";
import Parallax from "../../gsap/Parallex";

const Hero = () => {
  return (
    <div>
      <Parallax className="hero_bg  ">
        <div className="max-w-6xl ms-auto me-auto relative">
          <div className="absolute z-20 mt-40 flex flex-col gap-10 bg-black bg-opacity-10 rounded-lg p-5">
            <h1 className="font-black text-white text-6xl">
              Unlocking Young Minds
            </h1>
            <p className="text-white text-2xl ">
              Empowering Children Through the Magic of Books. Join us in <br />
              building a brighter future by fostering a love for reading in our
              <br />
              children today
            </p>
            <div>
              <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
