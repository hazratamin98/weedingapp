import { useEffect, useState } from "react";

import { motion } from "framer-motion";

//components
import Container from "./Container";

const Footer = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Calculate the remaining time until November 16th
    const targetDate = new Date("November 16, 2023 23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate remaining days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Clear interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="bg-footer-color">
      <Container>
        <footer className="flex md:flex-row flex-col justify-between  py-6 text-white text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
          >
            <p className="mb-2 font-bold text-3xl leading-9 font-Josefin">
              80% off until November 16th
            </p>
          </motion.div>

          {countdown && (
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="flex  md:gap-4 justify-center ">
                <div className=" flex md:flex-row text-base md:text-2xl gap-1 mx-1">
                  <span className="font-bold text-[28px] md:text-[40px] font-Josefin">
                    {countdown.days}
                  </span>
                  <span className="text-sm flex items-end font-Lato">
                    {" "}
                    days
                  </span>
                </div>
                <div className="flex md:flex-row text-base md:text-2xl gap-1 mx-1">
                  <span className="font-bold text-[28px] md:text-[40px] font-Josefin">
                    {countdown.hours}
                  </span>{" "}
                  <span className="text-sm flex items-end font-Lato">
                    hours
                  </span>
                </div>
                <div className=" flex md:flex-row text-base md:text-2xl gap-1  mx-1">
                  <span className="font-bold text-[28px] md:text-[40px] font-Josefin">
                    {countdown.minutes}
                  </span>{" "}
                  <span className="text-sm flex items-end font-Lato">
                    minutes
                  </span>
                </div>
                <div className="flex md:flex-row text-base md:text-2xl gap-1 mx-1">
                  <div className="font-bold text-[28px] md:text-[40px] font-Josefin">
                    {countdown.seconds}
                  </div>
                  <span className="text-sm flex items-end font-Lato">
                    seconds
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </footer>
      </Container>
    </div>
  );
};

export default Footer;

// export default function Home() {
//   // ...

//   return (
//     <div>
//       {/* ... */}
//       <Footer />
//     </div>
//   );
// }
