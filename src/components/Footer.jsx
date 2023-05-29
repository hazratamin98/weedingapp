import React from "react";
import Image from "next/image";

import Logo from "../assets/images/Icong.svg";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="    ">
            <Image src={Logo} alt="Wedding Logo" width={52} height={52} />
            <h1 className="font-bold text-2xl md:text-3xl  text-primary font-Josefin">
              {" "}
              Wedding
            </h1>
            <p className="max-w-[411px] mt-6 font-Lato text-base font-normal text-secondary">
              Ut in nam augue pulvinar. Amet lectus faucibus scelerisque cursus.
              Tortor ac, egestas leo dignissim duis dignissim pretium a varius.
              Fringilla facilisi nunc ut congue elit elementum accumsan vehicula
              faucibus.{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-5 gap-x-8 gap-y-3 pt-28 pb-20 ">
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
            <h1 className="text-primary text-base font-bold font-Lato ">
              Home
            </h1>
            <h1 className="text-primary text-base font-bold font-Lato ">
              Program
            </h1>
            <h1 className="text-primary text-base font-bold font-Lato">
              Bonuses
            </h1>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </Container>
    </div>
  );
};

export default Footer;
