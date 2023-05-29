import React from "react";
import Image from "next/image";

import Logo from "../assets/images/Icong.svg";

//Components
import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex w-full items-center justify-between pt-16">
        <div className=" flex items-center justify-center gap-4 ">
          <Image src={Logo} alt="Wedding Logo" width={52} height={52} />
          <p className="font-bold text-2xl md:text-3xl  text-primary font-Josefin">
            {" "}
            Wedding
          </p>
        </div>
        <div className="md:flex hidden gap-10 items-center ">
          <div className="flex gap-10 ">
            <h1 className="text-primary text-base font-bold font-Lato ">
              Home
            </h1>
            <h1 className="text-primary text-base font-bold font-Lato ">
              Program
            </h1>
            <h1 className="text-primary text-base font-bold font-Lato">
              Bonuses
            </h1>
            <h1 className="text-primary text-base font-bold font-Lato ">
              Guarantee
            </h1>
          </div>

          <button className="buy-now-btn text-base font-bold text-white py-2.5 px-2.5 rounded-md bg-secondary">
            Buy Now
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
