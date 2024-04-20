import React from "react";
import HomeService1 from "../../assets/HomeService1.png";
import HomeService2 from "../../assets/HomeService2.png";
import HomeService3 from "../../assets/HomeService3.png";
import HomeService4 from "../../assets/HomeService4.png";
import HomeService5 from "../../assets/HomeService5.png";
import HomeService6 from "../../assets/HomeService6.png";
import HomeService7 from "../../assets/HomeService7.png";
import Parallax from "../../gsap/Parallex";

const OurWork = () => {
  return (
    <div className="relative overflow-hidden mt-15 md:mt-28 max-w-6xl me-auto ms-auto">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className=" text-2xl font-bold tracking-normal sm:text-4xl">
              What We have Done With <br />
              Your Help
            </h1>
            <p className="mt-7 sm:text-lg text- text-gray-500">
              We spark young minds with literacy programs, provide books to
              underserved communities, offer interactive reading workshops, and
              promote literacy through community engagement.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* <!-- Decorative image grid --> */}
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <Parallax className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={HomeService1}
                          className="h-[300px] w-full object-cover object-center"
                        />
                      </Parallax>
                      <Parallax
                        speed={1}
                        className="h-64 w-44 overflow-hidden rounded-lg"
                      >
                        <img
                          src={HomeService2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </Parallax>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <Parallax className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={HomeService3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </Parallax>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={HomeService4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <Parallax className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={HomeService5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </Parallax>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <Parallax className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={HomeService6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </Parallax>
                      <Parallax className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={HomeService7}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </Parallax>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-lg border border-transparent bg-black py-3 px-8 text-center font-medium text-white hover:bg-gray-600"
              >
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
