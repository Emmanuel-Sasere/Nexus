import React from "react";
import AboutEnd from "../components/about/AboutEnd";
import AboutHero from "../components/about/AboutHero";
import AboutSection1 from "../components/about/AboutSection1";
import AboutSection2 from "../components/about/AboutSection2";
import ChildImg from "../components/about/ChildImg";
import FeaturedCauses from "../components/about/FeaturedCauses";
import PartnerLogo from "../components/about/PartnerLogo";

const About = () => {
  return (
    <div>
      <AboutHero />
      <PartnerLogo />
      <AboutSection1 />
      <AboutSection2 />
      <ChildImg />
      <FeaturedCauses />
      <AboutEnd />
    </div>
  );
};

export default About;
