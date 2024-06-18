import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import skills from "../constants/Skills";

function SkillList({ indexArray,direction }) {
  const positions = ["one", "two", "three"];

  const sliderVarients = {
    one: { x: "-100%", scale: 0.9, zIndex: 10 },
    two: { x: "0%", scale: 1, zIndex: 5 },
    three: { x: "100%", scale: 0.9, zIndex: 1 },
  };
  return (
    <>
      {indexArray.map((index, i) => (
        <motion.div
          key={index}
          initial={direction === "prev" ? "three" : "one"}
          animate={positions[i]}
          variants={sliderVarients}
          transition={{ duration: 0.5 }}
          className="hidden md:absolute md:block overflow-scroll scroll-m-0 md:h-96 md:w-96 rounded-lg border border-gray-100 border-b-0 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-600 via-red-500 to-orange-400"></span>
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {skills[index].name}
              </h3>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-pretty text-sm text-white font-thin">
              {skills[index].content}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default SkillList;
