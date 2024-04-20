import React from "react";
import StoryImg1 from "../../assets/StoryImg1.png";
import StoryImg2 from "../../assets/StoryImg2.png";
import StoryImg3 from "../../assets/StoryImg3.png";
import Parallax from "../../gsap/Parallex";

const ChildStory = () => {
  return (
    <div className="md:mt-20 p-3 mt-14">
      <div className="max-w-6xl ms-auto me-auto">
        <h2 className="font-bold text-2xl md:text-4xl ">
          Discover the early stories of those
          <br /> we've supported.
        </h2>
        <div className="mt-5 md:flex hidden items-center justify-between  gap-5 md:gap-10  ">
          <div className="flex flex-col md:gap-5 gap-3  ">
            <Parallax>
              <img src={StoryImg1} alt="Image of an African Boy" />
            </Parallax>
            <div className="mt-10 md:mt-20">
              <h3 className="font-semibold text-xl text-black">
                Kwame O'Connor
              </h3>
              <span className="font-normal text-md text-gray-300">6 Years</span>
              <p>
                Kwame O'Connor, from Ghana, struggled with reading due to a lack
                of books. Our program provided him with books and workshops,
                boosting his skills. Now, he dreams of becoming a teacher.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-3 ">
            <Parallax>
              <img src={StoryImg2} alt="Image of an African Boy" />
            </Parallax>
            <div className="mt-10 md:mt-20">
              <h3 className="font-semibold text-xl text-black">
                Kwame O'Connor
              </h3>
              <span className="font-normal text-md text-gray-300">6 Years</span>
              <p>
                Kwame O'Connor, from Ghana, struggled with reading due to a lack
                of books. Our program provided him with books and workshops,
                boosting his skills. Now, he dreams of becoming a teacher.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-3">
            <Parallax>
              <img src={StoryImg3} alt="Image of an African Boy" />
            </Parallax>
            <div className="mt-10 md:mt-20">
              <h3 className="font-semibold text-xl text-black">
                Kwame O'Connor
              </h3>
              <span className="font-normal text-md text-gray-300">6 Years</span>
              <p>
                Kwame O'Connor, from Ghana, struggled with reading due to a lack
                of books. Our program provided him with books and workshops,
                boosting his skills. Now, he dreams of becoming a teacher.
              </p>
            </div>
          </div>
        </div>
        {/* MOBILE ======================== */}
        <div className="mt-5 flex md:hidden items-center justify-between flex-col gap-5 md:gap-10  ">
          <div className="flex flex-col md:gap-5 gap-3  ">
            <Parallax>
              <img src={StoryImg1} alt="Image of an African Boy" />
            </Parallax>
            <div className="mt-10 md:mt-16">
              <h3 className="font-semibold text-xl text-black">
                Kwame O'Connor
              </h3>
              <span className="font-normal text-md text-gray-300">6 Years</span>
              <p>
                Kwame O'Connor, from Ghana, struggled with reading due to a lack
                of books. Our program provided him with books and workshops,
                boosting his skills. Now, he dreams of becoming a teacher.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-3 ">
            <Parallax>
              <img src={StoryImg2} alt="Image of an African Boy" />
            </Parallax>
            <div className="mt-10 md:mt-16">
              <h3 className="font-semibold text-xl text-black">
                Kwame O'Connor
              </h3>
              <span className="font-normal text-md text-gray-300">6 Years</span>
              <p>
                Kwame O'Connor, from Ghana, struggled with reading due to a lack
                of books. Our program provided him with books and workshops,
                boosting his skills. Now, he dreams of becoming a teacher.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-3">
            <Parallax>
              <img src={StoryImg3} alt="Image of an African Boy" />
            </Parallax>
            <div className="mt-10 md:mt-16">
              <h3 className="font-semibold text-xl text-black">
                Kwame O'Connor
              </h3>
              <span className="font-normal text-md text-gray-300">6 Years</span>
              <p>
                Kwame O'Connor, from Ghana, struggled with reading due to a lack
                of books. Our program provided him with books and workshops,
                boosting his skills. Now, he dreams of becoming a teacher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildStory;
