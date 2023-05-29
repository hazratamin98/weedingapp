import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";

//components
import Container from "@/components/Container";

//Icons
import weeding1 from "../../assets/images/weeding-1.svg";
import weeding2 from "../../assets/images/weeding2.svg";
import weeding3 from "../../assets/images/weeding3.svg";

const WeddingPrep = () => {
  return (
    <Container>
      <div className="w-full h-screen bg-white">
        <div className="relative ">
          <Image src={weeding3} alt="..." className="" />
          <Image
            src={weeding1}
            alt="..."
            className="absolute top-[150px] left-0 "
          />
          <Image
            src={weeding2}
            alt="..."
            className="absolute top-[300px] left-[90px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default WeddingPrep;
