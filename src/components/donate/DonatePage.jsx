import React from "react";
import Parallax from "../../gsap/Parallex";

const DonatePage = () => {
  return (
    <div>
      <Parallax className="donateImg">
        <div className="max-w-6xl ms-auto me-auto relative">
          <div className="absolute z-20 mt-40 flex flex-col md:gap-10 gap-5 bg-black bg-opacity-20 text-center rounded-lg p-5 items-center justify-center">
            <h1 className="font-black text-white md:text-6xl text-4xl ">
              Support Young Minds, Donate Today!
            </h1>
            <p className="text-white md:text-2xl md:w-[70%] ">
              Your donation can make a big impact! Help us provide books,
              workshops, and resources that ignite young imaginations and
              empower children to become confident readers. Join our mission to
              promote literacy and education—donate today!
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default DonatePage;
