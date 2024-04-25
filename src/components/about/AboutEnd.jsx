import React from "react";
import Parallax from "../../gsap/Parallex";

const AboutEnd = () => {
  return (
    <Parallax className="aboutEnd md:mt-20 mt-10">
      <div className="max-w-6xl me-auto ms-auto relative">
        <div className="absolute z-20 md:mt-20 mt-52 flex flex-col md:gap-10 gap-5 bg-black bg-opacity-25 text-center text-white rounded-lg p-10 md:left-14 left-3">
          <h2 className="font-bold md:text-6xl text-4xl ">
            Become a Volunteer
          </h2>
          <p className="md:text-lg text-[11px]">
            We are thrilled that you are interested in joining our community of
            passionate individuals dedicated to making a positive impact. <br />
            By volunteering with us, you have the opportunity to contribute your
            time, skills, and energy towards <br /> meaningful causes that
            benefit our community and beyond.
          </p>
          <div>
            <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
              Join us now
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AboutEnd;
