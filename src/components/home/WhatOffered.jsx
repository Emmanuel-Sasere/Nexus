import React from "react";
import MapAfrica from "../../assets/MapAfrica.png";
import WeDo from "../../assets/WeDo.png";
import Parallax from "../../gsap/Parallex";

function WhatOffered() {
  return (
    <div>
      <div className="max-w-6xl ms-auto me-auto md:mt-20 mt-10">
        <div className="md:flex hidden items-center justify-between ">
          <Parallax>
            <img src={MapAfrica} alt="" />
          </Parallax>
          <Parallax>
            <h2 className="font-bold md:text-4xl text-2xl md:mb-10 mb-5">
              Bringing Help Where It's Needed,
              <br /> Bridging Gaps in Access to <br /> Resources
            </h2>
            <img width={"400px"} src={WeDo} alt="" />
          </Parallax>
        </div>
        <div className="flex items-center md:hidden justify-between flex-col-reverse p-3">
          <Parallax className="mt-10">
            <img src={MapAfrica} alt="" />
          </Parallax>
          <Parallax>
            <h2 className="font-bold md:text-4xl text-2xl md:mb-10 mb-5">
              Bringing Help Where It's Needed,
              <br /> Bridging Gaps in Access to <br /> Resources
            </h2>
            <img width={"500px"} src={WeDo} alt="" />
          </Parallax>
        </div>
      </div>
    </div>
  );
}

export default WhatOffered;
