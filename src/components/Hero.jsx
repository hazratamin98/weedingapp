import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//components
import Container from "./Container";

//Icons
import Image1 from "../icons/image1.svg";
import Image2 from "../icons/image2.svg";

const Hero = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-14 md:pt-28 pb-32 gap-4">
        <div className="max-w-[633px]">
          <h1 className=" font-bold text-4xl md:text-[56px] leading-10 md:leading-[76px] text-secondary font-Josefin">
            3 day wedding without sweating
          </h1>
          <p className="font-normal text-sm md:text-lg text-primary leading-5 md:leading-7 mt-4 font-Lato ">
            Most couples are sweating With wedding Preparations. We will Make
            sure that you are not one of them!
          </p>
          <div className="flex  items-center  gap-4 mt-8">
            <button className="buy-now-btn py-3 px-6 rounded-md bg-secondary text-white font-Lato">
              Buy now - $247
            </button>
            <p className="font-normal text-sm md:text-base leading-6 text-primary font-Lato">
              (80% off, usually 1240$)
            </p>
          </div>
        </div>

        <div className="flex md:justify-end relative w-fit md:w-full md:mt-0 mt-5 ">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 1 },
            }}
          >
            <Image
              src={Image1}
              alt="..."
              // width={348}
              height={400}
              className=" w-[224px] md:w-[348px] "
            />
          </motion.div>

          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 1 },
            }}
          >
            <Image
              src={Image2}
              alt="..."
              height={334}
              className="absolute  top-[120px] right-[-60px] md:right-0 md:left-[120px] w-[174px] md:w-[272px] "
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
