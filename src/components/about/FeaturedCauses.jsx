import React from "react";
import FirstImg from "../../assets/EI.png";
import SecondImg from "../../assets/KT.png";
import ThirdImg from "../../assets/rf.png";
import Parallax from "../../gsap/Parallex";

const FeaturedCauses = () => {
  return (
    <div className="max-w-6xl me-auto ms-auto">
      <div className="md:mt-28 mt-10">
        <div className="text-center">
          <h2 className="font-bold md:text-4xl text-2xl md:text-center text-start px-3 ">
            Featured Causes
          </h2>
          <p className="md:text-xl text-md md:mt-3 mt-1 md:text-center text-start px-3">
            Helping young ones develop a love for reading is a gift <br />
            that will enrich their lives
          </p>
        </div>
        <div className="md:flex items-center justify-between gap-2 p-3 ">
          <div>
            <Parallax className="overflow-hidden">
              <img src={FirstImg} alt="A girl reading" />
            </Parallax>
            <h3 className="font-semibold md:text-2xl text-xl mt-5">
              Encourage Interaction
            </h3>
            <p className="md:text-[16px] text-[12px] mt-2 mb-2 ">
              Encourage children to participate actively during storytime by
              asking questions, making predictions, and discussing the
              characters and plot.
            </p>
            <div>
              <button className="bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border duration-100 px-10 py-3 rounded-lg">
                Read More
              </button>
            </div>
          </div>
          <div>
            <Parallax className="overflow-hidden">
              <img src={SecondImg} alt="A girl reading" />
            </Parallax>
            <h3 className="font-semibold md:text-2xl text-xl mt-5 ">
              Keep teachers in the classroom
            </h3>
            <p className="md:text-[16px] text-[12px] mt-2 mb-2">
              we can ensure that every child has the opportunity to develop
              essential reading skills and embark on a journey of lifelong
              learning and discovery.
            </p>
            <div>
              <button className="bg-black text-white hover:bg-white hover:border-black hover:border hover:text-black duration-100 px-10 py-3 rounded-lg">
                Read More
              </button>
            </div>
          </div>
          <div>
            <Parallax className="overflow-hidden">
              <img src={ThirdImg} alt="A girl reading" />
            </Parallax>
            <h3 className="font-semibold md:text-2xl text-xl mt-5 ">
              Raise fund to helping little hands
            </h3>
            <p className="md:text-[16px] text-[12px] mt-2 mb-2">
              Raise awareness about the importance of early literacy through
              community outreach efforts such as presentations, workshops, and
              storytelling sessions.
            </p>
            <div>
              <button className="bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border duration-100 px-10 py-3 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCauses;
