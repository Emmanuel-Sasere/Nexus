import React from "react";
import DonateImg from "../../assets/donation.png";
import HandImg from "../../assets/hands.png";
import LoveImg from "../../assets/love.png";
import VolunteerImg from "../../assets/volunteer.png";

const AboutSection1 = () => {
  return (
    <div className="bg-[#5C5959] py-10">
      <div className="max-w-6xl me-auto ms-auto p-5 md:flex hidden items-center justify-between ">
        {/* LEFT SIDE CONTENT FOR THE ABOUT PAGE */}
        <div className="text-white flex flex-col items-start justify-start gap-5 w-1/2">
          <h2 className="font-bold text-4xl">
            Transforming Lives <br />
            Through Literacy
          </h2>
          <p className="text-lg">
            At our core, we believe that literacy is the key to unlocking <br />{" "}
            a world of possibilities for children. Through our programs,
            <br /> we provide not just books, but also engaging workshops
            <br /> and resources that inspire a lifelong love for reading.{" "}
            <br /> Join us in our mission to empower children,
            <br /> one book at a time
          </p>
          <div>
            <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        {/* RIGHT SIDE CONTENT FOR THE ABOUT PAGE */}
        <div className="w-1/2">
          <div className="flex items-start justify-between gap-10 w-full">
            <div className="text-white flex flex-col items-start justify-between gap-3">
              <img width={"60px"} src={HandImg} alt="Image of thankfull Hand" />
              <h3 className="text-xl font-semibold ">Leave a Legacy</h3>
              <p className="text-start text-lg">
                Leaving a legacy of opening children's minds is a profound and
                impactful endeavor that can shape the future for generations to
                come.
              </p>
            </div>
            <div className="text-white flex flex-col items-start justify-between gap-3">
              <img width={"60px"} src={DonateImg} alt="Image of gift park" />
              <h3 className="text-xl font-semibold text-center">
                Make Donation
              </h3>
              <p v>
                Go to our dedicated donation page there you will find detailed
                information and instructions on how to donate.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-10 w-full mt-10">
            <div className="text-white flex flex-col items-start justify-between gap-3">
              <img width={"60px"} src={LoveImg} alt="Image of thankfull Hand" />
              <h3 className="text-xl font-semibold ">Become a Fundraiser</h3>
              <p className="text-start text-lg">
                Helping young ones develop a love for reading is a gift that
                will enrich their lives
              </p>
            </div>
            <div className="text-white flex flex-col items-start justify-between gap-3">
              <img
                width={"60px"}
                src={VolunteerImg}
                alt="Image of thankfull Hand"
              />
              <h3 className="text-xl font-semibold text-center">
                Become a Volunteer
              </h3>
              <p v>
                You can make a difference in the lives of young people by
                providing mentorship and academic support.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}

      <div className=" w-full flex md:hidden items-center justify-between flex-col ">
        {/* LEFT SIDE CONTENT FOR THE ABOUT PAGE */}
        <div className="text-white w-full flex flex-col items-start justify-start gap-5 p-3">
          <h2 className="font-bold text-4xl">
            Transforming Lives <br />
            Through Literacy
          </h2>
          <p className="text-md">
            At our core, we believe that literacy is the key to unlocking a
            world of possibilities for children. Through our programs, we
            provide not just books, but also engaging workshops and resources
            that inspire a lifelong love for reading. Join us in our mission to
            empower children, one book at a time
          </p>
          <div>
            <button className="hover:bg-black hover:text-white bg-white text-black duration-100 px-10 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        {/* RIGHT SIDE CONTENT FOR THE ABOUT PAGE */}
        <div className="w-full p-3 mt-10">
          <div className="flex  items-start justify-between gap-10 w-full">
            <div className="text-white flex flex-col items-start justify-between gap-2">
              <img width={"50px"} src={HandImg} alt="Image of thankfull Hand" />
              <h3 className="text-lg font-semibold ">Leave a Legacy</h3>
              <p className="text-start text-[12px]">
                Leaving a legacy of opening children's minds is a profound and
                impactful endeavor that can shape the future for generations to
                come.
              </p>
            </div>
            <div className="text-white flex flex-col items-start justify-between gap-2">
              <img width={"50px"} src={DonateImg} alt="Image of gift park" />
              <h3 className="text-lg font-semibold text-center">
                Make Donation
              </h3>
              <p className="text-start text-[12px]">
                Go to our dedicated donation page there you will find detailed
                information and instructions on how to donate.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-10 w-full mt-10">
            <div className="text-white flex flex-col items-start justify-between gap-3">
              <img width={"50px"} src={LoveImg} alt="Image of thankfull Hand" />
              <h3 className="text-lg font-semibold ">Become a Fundraiser</h3>
              <p className="text-start text-[12px]">
                Helping young ones develop a love for reading is a gift that
                will enrich their lives
              </p>
            </div>
            <div className="text-white flex flex-col items-start justify-between gap-3">
              <img
                width={"50px"}
                src={VolunteerImg}
                alt="Image of thankfull Hand"
              />
              <h3 className="text-lg font-semibold text-center">
                Become a Volunteer
              </h3>
              <p className="text-start text-[12px]">
                You can make a difference in the lives of young people by
                providing mentorship and academic support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection1;
