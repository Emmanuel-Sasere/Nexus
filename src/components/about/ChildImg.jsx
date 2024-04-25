import React from "react";
import Children from "../../assets/childreading1.png";
import Parallax from "../../gsap/Parallex";

const ChildImg = () => {
  return (
    <div className="overflow-hidden md:mt-20 mt-5">
      <Parallax speed={2}>
        <div className="">
          <img src={Children} alt="" />
        </div>
        ;
      </Parallax>
    </div>
  );
};

export default ChildImg;
