import React from "react";
import HeroSection from "../components/HeroSection";
import bgVideo from "../assets/background.mp4"; 
import ResponsiveMenu from "../components/ResponsiveMenu";
import AboutUsSection from "../components/AboutUsSection";
import Menu from "../components/MenuItemsSection";
import TestimonialCarousel from "../components/TestimonicalsSection";
import TrustAndQualitySection from "../components/TrustAndQualitySection";
import meatplatterimg from "../assets/meatplatter.jpg";
import FullWidthImage from "../components/FullWidthImageSection";
import ContactUs from "../components/ContactUsSection";
import PlaceOrder from "../components/PlaceOrderSection";


const LandingPage: React.FC = () => {
  return (
    <>
      <ResponsiveMenu />
      <HeroSection
        videoSrc={bgVideo}
        title="Where Smoke Turns Meat into Magic"
        subtitle="Slow-Smoked Meats Crafted for True Connoisseurs"
      />
      <AboutUsSection />
      <FullWidthImage imageUrl={meatplatterimg} altText="Meat Platter" />
      <TrustAndQualitySection />     
      <Menu />
      <PlaceOrder />
      <TestimonialCarousel />
      <ContactUs />

    </>
  );
};

export default LandingPage;
