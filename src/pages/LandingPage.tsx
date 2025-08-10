import React from "react";
import HeroSection from "../components/HeroSection";
import bgVideo from "../assets/background.mp4"; 
import ResponsiveMenu from "../components/ResponsiveMenu";

const LandingPage: React.FC = () => {
  return (
    <>
      <ResponsiveMenu />
      <HeroSection
        videoSrc={bgVideo}
        title="Where Smoke Turns Meat into Magic"
        subtitle="Slow-Smoked Meats Crafted for True Connoisseurs"
      />
    </>
  );
};

export default LandingPage;
