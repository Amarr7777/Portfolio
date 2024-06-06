import React, { useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import skills from '../constants/Skills'


function SkillList({ indexArray }) {
  return (
    <>
      {indexArray.map((index) => (
        <motion.div
          className="hidden md:relative md:block overflow-scroll md:h-96 md:w-96 rounded-lg border border-gray-100 border-b-0 p-4 sm:p-6 lg:p-8"
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
