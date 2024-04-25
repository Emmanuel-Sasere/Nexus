import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Nexus-Logo.png";
import Button from "../Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };
  return (
    <nav className=" bg-white z-50  shadow-md fixed -top-2 left-0 right-0">
      <div className="flex  items-center  font-medium justify-between max-w-6xl ms-auto me-auto ">
        <div className="z-50 md:w-auto py-5 px-3  w-full flex justify-between">
          <img src={Logo} alt="LCRNG Logo" className="md:cursor-pointer h-9" />

          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden items-center gap-8">
          <li>
            <Link
              to="/"
              className="py-7 hover:text-gray-600 text-black px-3 inline-block "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              className="py-7 px-3  hover:text-gray-600 text-black inline-block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="py-7 px-3  hover:text-gray-600 text-black inline-block"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="py-7 px-3  hover:text-gray-600 text-black inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Link to="donate">
            <Button />
          </Link>
        </div>

        {/* Mobile Navbar */}

        <ul
          className={`md:hidden z-40 bg-white absolute w-full h-[100vh] top-5 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link
              to="/"
              className="py-7 px-3  hover:text-gray-600 text-black inline-block"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="py-7 px-3  hover:text-gray-600 text-black inline-block"
              onClick={handleClick}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="py-7 px-3  hover:text-gray-600 text-black inline-block"
              onClick={handleClick}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="py-7 px-3  hover:text-gray-600 text-black inline-block"
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>

          <div className="py-5">
            <Link to="donate" onClick={handleClick}>
              <Button />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
