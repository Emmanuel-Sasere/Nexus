import React from "react";

const JoinUs = () => {
  return (
    <div className="joinUs md:mt-40 mt-20  flex items-center justify-center">
      <div className="max-w-6xl me-auto ms-auto">
        <div>
          <h2 className="text-white font-bold md:text-5xl text-3xl text-center ">
            Join Our Global Effort
            <br /> Everyone Can Make a Difference!
          </h2>
        </div>
        <div className="mt-14 md:flex hidden  items-center justify-center gap-20 ">
          <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
            Volunteer
          </button>
          <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
            Donate Now
          </button>
        </div>
        <div className="mt-14 md:hidden flex flex-col gap-5  justify-center w-full">
          <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
            Volunteer
          </button>
          <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
