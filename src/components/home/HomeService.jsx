import React from "react";
import iconBook from "../../assets/iconBook.png";
import iconChild from "../../assets/iconChild.png";
import iconEarth from "../../assets/iconEarth.png";
import iconEducation from "../../assets/iconEducation.png";

const HomeService = () => {
  return (
    <div className="max-w-6xl me-auto ms-auto md:mt-20 mt-10 flex-wrap gap-5 justify-center flex items-center md:justify-between">
      <div className="bg-[#433F3F] rounded-none md:rounded-lg w-full md:w-[250px] p-5 flex flex-col gap-5 text-white  hover:bg-black duration-300">
        <img className="md:w-[45px] w-[40px] " src={iconBook} alt="Book Icon" />
        <h3 className="text-xl">Early Literacy Programs</h3>
        <p className="text-lg">
          Implementing engaging programs to introduce children to the world of
          books and storytelling.
        </p>
      </div>
      <div className="bg-[#433F3F] rounded-none md:rounded-lg w-full md:w-[250px] p-5 flex flex-col gap-5 text-white hover:bg-black duration-300">
        <img
          className="md:w-[30px] w-[40px] "
          src={iconChild}
          alt="Child Icon"
        />
        <h3 className="text-xl">Early Literacy Programs</h3>
        <p className="text-lg">
          Implementing engaging programs to introduce children to the world of
          books and storytelling.
        </p>
      </div>
      <div className="bg-[#433F3F] rounded-none md:rounded-lg w-full md:w-[250px] p-5 flex flex-col gap-5 text-white  hover:bg-black duration-300">
        <img
          className="md:w-[50px] w-[40px] "
          src={iconEducation}
          alt="Education Icon"
        />
        <h3 className="text-xl">Early Literacy Programs</h3>
        <p className="text-lg">
          Implementing engaging programs to introduce children to the world of
          books and storytelling.
        </p>
      </div>
      <div className="bg-[#433F3F] rounded-none md:rounded-lg w-full md:w-[250px] p-5 flex flex-col gap-5 text-white  hover:bg-black duration-300">
        <img
          className="md:w-[50px] w-[40px] "
          src={iconEarth}
          alt="Earth Icon"
        />
        <h3 className="text-xl">Early Literacy Programs</h3>
        <p className="text-lg">
          Implementing engaging programs to introduce children to the world of
          books and storytelling.
        </p>
      </div>
    </div>
  );
};

export default HomeService;
