import React from "react";
import { motion } from "framer-motion";
import Github from "../assets/Github";
import LinkedIn from "../assets/LinkedIn";
import Mail from "../assets/Mail";
import ChevronDown from "../assets/ChevronDown";
import ChevronUp from "../assets/ChevronUp";

function Footer({ setPageIndex, pageIndex }) {
  const navigateUP = () => {
    switch (pageIndex) {
      case 0:
        setPageIndex(2);
        break;
      case 1:
        setPageIndex(0);
        break;
      case 2:
        setPageIndex(1);
        break;
      default:
        setPageIndex(0);
        break;
    }
  };
  const navigateDown = () => {
    switch (pageIndex) {
      case 0:
        setPageIndex(1);
        break;
      case 1:
        setPageIndex(2);
        break;
      case 2:
        setPageIndex(0);
        break;
      default:
        setPageIndex(0);
        break;
    }
  };
  return (
    <footer className="absolute bottom-0 px-2 gap-2 md:gap-0  flex flex-row w-full justify-evenly md:justify-between items-center z-1">
      <div className="flex w-full md:w-fit md:justify-evenly justify-around items-center text-white md:gap-10 pb-5 md:pl-5">
        <a href="https://github.com/Amarr7777" className="cursor-pointer">
          <Github />
        </a>
        <a
          href="http://www.linkedin.com/in/amargnath"
          className="cursor-pointer"
        >
          <LinkedIn />
        </a>
        <a href="mailto:amarpradeep0805@gmail.com" className="cursor-pointer">
          <Mail />
        </a>
      </div>

      <div className="hidden md:flex justify-evenly items-center text-white gap-10 pb-5 md:pr-5">
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={navigateUP}
        >
          <ChevronUp />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={navigateDown}
        >
          <ChevronDown />
        </motion.button>
      </div>
    </footer>
  );
}

export default Footer;
