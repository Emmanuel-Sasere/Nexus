import React from "react";
import { Link } from "react-router-dom";
import Girl from "../../assets/girlwriting.png";
import Parallax from "../../gsap/Parallex";

const AboutSection2 = () => {
  return (
    <div className="max-w-6xl me-auto ms-auto md:mt-20">
      <div className="md:flex items-center justify-between md:p-0 p-3 gap-32 mt-10">
        <div className="overflow-hidden md:w-1/2 w-full">
          <Parallax>
            <img className="rounded-lg w-[500px]" src={Girl} alt="" />
          </Parallax>
        </div>
        <div className="md:w-1/2 w-full md:mt-0 mt-5">
          <h2 className="font-bold md:text-4xl text-3xl ">
            Empowering Young Minds Through Education
          </h2>
          <p className="md:text-lg text-md mt-5 mb-5">
            Education is the key to unlocking a child's potential and shaping a
            brighter future. Our programs focus on providing quality education
            to children, equipping them with the knowledge and skills they need
            to succeed in life. Join us in empowering young minds and building a
            better tomorrow.
          </p>
          <Link to="about">
            <button className="bg-black text-white hover:bg-white hover:text-black duration-100 px-10 py-3 rounded-lg">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
