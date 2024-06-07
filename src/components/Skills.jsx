import React, { useState } from "react";
import SkillCard from "./SkillCard";
import SkillCardMobile from "./SkillCardMobile";
import { motion } from "framer-motion";
import ChevronRight from "../assets/ChevronRight";
import ChevronLeft from "../assets/ChevronLeft";
import CircleFill from "../assets/CircleFill";
import Circle from "../assets/Circle";

function Skills() {
  const [indexArray, setIndexArray] = useState([0, 1, 2]);
  const [indexMobile, setIndexMobile] = useState(0);
  const [direction, setDirection] = useState("next");
  const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const prev = () => {
    const newIndex = (indexArray[0] - 1 + indices.length) % indices.length;
    setIndexArray([
      newIndex,
      (newIndex + 1) % indices.length,
      (newIndex + 2) % indices.length,
    ]);
    setIndexMobile(newIndex);
    setDirection("prev")
  };

  const next = () => {
    const newIndex = (indexArray[0] + 1) % indices.length;
    setIndexArray([
      newIndex,
      (newIndex + 1) % indices.length,
      (newIndex + 2) % indices.length,
    ]);
    setIndexMobile(newIndex);
    setDirection("next")
  };

  return (
    <>
      <div className="flex h-screen items-center justify-evenly gap-5 px-5 w-full ">
        <button
          onClick={prev}
          className="text-white bg-transparent absolute left-5 z-50"
        >
          <ChevronLeft />
        </button>
        <SkillCard indexArray={indexArray} indices={indices} direction={direction} />
        <SkillCardMobile indexMobile={indexMobile} direction={direction}/>
        <button
          onClick={next}
          className="text-white bg-transparent absolute right-5 z-50"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute w-full bottom-[15%] sm:bottom-[20%] flex items-end justify-center px-2 sm:px-5 space-x-2 sm:space-x-5 text-white font-ConcertOne z-10">
        {indices.map((index) => (
          <div
            key={index}
            onClick={() => {
              setIndexArray([index, (index + 1) % 9, (index + 2) % 9]);
              setIndexMobile(index);
            }}
            className="cursor-pointer flex justify-center items-center gap-2 sm:gap-5"
          >
            {indexArray[0] === index ? <CircleFill /> : <Circle />}
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
