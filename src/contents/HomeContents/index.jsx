import React from "react";

//components
import Navbar from "../../components/Navbar";
import Hero from "@/components/Hero";
import HeroFooter from "../../components/HeroFooter";
import WeddingPrep from "./WeedingPrep";
import Provide from "./Provide";
import Guarantee from "./Guarantee";
import Spots from "./Spots";
import Footer from "@/components/Footer";

const HomeContent = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroFooter />
      {/* <WeddingPrep /> */}
      <Provide />
      <Guarantee />
      <Spots />
      <Footer />
    </div>
  );
};

export default HomeContent;
