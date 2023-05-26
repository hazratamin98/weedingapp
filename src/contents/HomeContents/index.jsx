import React from "react";

//components
import Navbar from "../../components/Navbar";
import Hero from "@/components/Hero";
import HeroFooter from "../../components/HeroFooter";

const HomeContent = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroFooter />
    </div>
  );
};

export default HomeContent;
