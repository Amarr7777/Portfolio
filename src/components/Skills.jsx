import React, { useState } from "react";
import SkillCard from "./SkillCard";
import SkillCardMobile from "./SkillCardMobile";
import { motion } from "framer-motion";
import ChevronRight from "../assets/ChevronRight";
import ChevronLeft from "../assets/ChevronLeft";

function Skills() {
  const [indexArray, setIndexArray] = useState([0, 1, 2]);
  const [indexMobile, setIndexMobile] = useState(0);
  const prev = () => {
    switch (indexArray[0]) {
      case 0:
        setIndexArray([1, 2, 3]);
        setIndexMobile(1);
        break;
      case 1:
        setIndexArray([2, 3, 4]);
        setIndexMobile(2);
        break;
      case 2:
        setIndexArray([3, 4, 5]);
        setIndexMobile(3);
        break;
      case 3:
        setIndexArray([4, 5, 6]);
        setIndexMobile(4);
        break;
      case 4:
        setIndexArray([5, 6, 7]);
        setIndexMobile(5);
        break;
      case 5:
        setIndexArray([6, 7, 8]);
        setIndexMobile(6);
        break;
      case 6:
        setIndexArray([7, 8, 0]);
        setIndexMobile(7);
        break;
      case 7:
        setIndexArray([8, 0, 1]);
        setIndexMobile(8);
        break;
      case 8:
        setIndexArray([0, 1, 2]);
        setIndexMobile(0);
        break;
      default:
        setIndexArray([0, 1, 2]);
        setIndexMobile(0);
        break;
    }
  };
  const next = () => {
    switch (indexArray[0]) {
      case 0:
        setIndexArray([8, 0, 1]);
        setIndexMobile(8);
        break;
      case 1:
        setIndexArray([0, 1, 2]);
        setIndexMobile(0);
        break;
      case 2:
        setIndexArray([1, 2, 3]);
        setIndexMobile(1);
        break;
      case 3:
        setIndexArray([2, 3, 4]);
        setIndexMobile(2);
        break;
      case 4:
        setIndexArray([3, 4, 5]);
        setIndexMobile(3);
        break;
      case 5:
        setIndexArray([4, 5, 6]);
        setIndexMobile(4);
        break;
      case 6:
        setIndexArray([5, 6, 7]);
        setIndexMobile(5);
        break;
      case 7:
        setIndexArray([6, 7, 8]);
        setIndexMobile(6);
        break;
      case 8:
        setIndexArray([7, 8, 0]);
        setIndexMobile(7);
        break;
      default:
        setIndexArray([0, 1, 2]);
        setIndexMobile(0);
        break;
    }
  };

  return (
    <div className="flex h-screen items-center justify-evenly gap-5 px-5 ">
      <button onClick={prev} className="text-white bg-transparent">
        <ChevronLeft/>
      </button>
      <SkillCard indexArray={indexArray} />
      <SkillCardMobile indexMobile={indexMobile} />
      <button onClick={next} className="text-white bg-transparent">
        <ChevronRight/>
      </button>
    </div>
  );
}

export default Skills;
