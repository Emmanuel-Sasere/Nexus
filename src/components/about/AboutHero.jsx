import React from "react";
import Parallax from "../../gsap/Parallex";

const AboutHero = () => {
  return (
    <div>
      <Parallax className="abouthero_bg  ">
        <div className="max-w-6xl ms-auto me-auto relative">
          <div className="absolute z-20 md:mt-20 mt-40 flex flex-col md:gap-10 gap-5 bg-black bg-opacity-10 rounded-lg p-5">
            <h1 className="font-black text-white md:text-6xl text-3xl">
              Empowering Young Minds <br />
              Through Literacy
            </h1>
            <p className="text-white text-2xl  md:flex hidden ">
              Discover Our Story and Mission to Provide Access to Books, <br />
              Workshops, and Resources That Ignite a Love <br />
              for Reading in Children Worldwide
            </p>
            {/* Mobile view for <p> */}
            <p className="text-white  text-lg md:hidden ">
              Discover Our Story and Mission to Provide Access to Books,
              Workshops, and Resources That Ignite a Love for Reading in
              Children Worldwide
            </p>
            <div className="md:flex hidden items-center justify-start gap-20">
              <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
                Volunteer
              </button>
              <button className="bg-black text-white hover:bg-white hover:text-black duration-100 px-10 py-3 rounded-lg">
                Donate Now
              </button>
            </div>
            <div className="flex md:hidden flex-col w-full items-center justify-start gap-5">
              <button className="hover:bg-black w-full hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
                Volunteer
              </button>
              <button className="bg-black w-full text-white hover:bg-white hover:text-black duration-100 px-10 py-3 rounded-lg">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutHero;
