import React from "react";
import ChildStory from "../components/home/ChildStory";
import Hero from "../components/home/Hero";
import HomeService from "../components/home/HomeService";
import JoinUs from "../components/home/JoinUs";
import OurWork from "../components/home/OurWork";
import WhatOffered from "../components/home/WhatOffered";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeService />
      <OurWork />
      <ChildStory />
      <WhatOffered />
      <JoinUs />
    </div>
  );
};

export default Home;
