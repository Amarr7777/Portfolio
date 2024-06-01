import React, { useState } from "react";
import SkillCard from "./SkillCard";
import SkillCardMobile from "./SkillCardMobile";

function Skills() {
  const [indexArray, setIndexArray] = useState([0, 1, 2]);
  const [indexMobile, setIndexMobile] = useState(0);
  const prev = () => {
    switch (indexArray[0]) {
      case 0:
        setIndexArray([1, 2, 3]);
        setIndexMobile(1)
        break;
      case 1:
        setIndexArray([2, 3, 4]);
        setIndexMobile(2)
        break;
      case 2:
        setIndexArray([3, 4, 5]);
        setIndexMobile(3)
        break;
      case 3:
        setIndexArray([4, 5, 6]);
        setIndexMobile(4)
        break;
      case 4:
        setIndexArray([5, 6, 7]);
        setIndexMobile(5)
        break;
      case 5:
        setIndexArray([6, 7, 8]);
        setIndexMobile(6)
        break;
      case 6:
        setIndexArray([7, 8, 0]);
        setIndexMobile(7)
        break;
      case 7:
        setIndexArray([8, 0, 1]);
        setIndexMobile(8)
        break;
      case 8:
        setIndexArray([0, 1, 2]);
        setIndexMobile(9)
        break;
      default:
        setIndexArray([0, 1, 2]);
        setIndexMobile(0)
        break;
    }
    console.log("Prev", indexArray);
  };
  const next = () => {
    switch (indexArray[0]) {
      case 0:
        setIndexArray([8, 0, 1]);
        setIndexMobile(8)
        break;
      case 1:
        setIndexArray([0, 1, 2]);
        setIndexMobile(0)
        break;
      case 2:
        setIndexArray([1, 2, 3]);
        setIndexMobile(1)
        break;
      case 3:
        setIndexArray([2, 3, 4]);
        setIndexMobile(2)
        break;
      case 4:
        setIndexArray([3, 4, 5]);
        setIndexMobile(3)
        break;
      case 5:
        setIndexArray([4, 5, 6]);
        setIndexMobile(4)
        break;
      case 6:
        setIndexArray([5, 6, 7]);
        setIndexMobile(5)
        break;
      case 7:
        setIndexArray([6, 7, 8]);
        setIndexMobile(6)
        break;
      case 8:
        setIndexArray([7, 8, 0]);
        setIndexMobile(7)
        break;
      default:
        setIndexArray([0, 1, 2]);
        setIndexMobile(0)
        break;
    }
    console.log("Next", indexArray);
  };

  return (
    <div className="flex h-screen items-center justify-evenly gap-5 px-5">
      <button onClick={prev} className="text-white bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
      <SkillCard indexArray={indexArray}/>
      <SkillCardMobile indexMobile={indexMobile}/>
      <button onClick={next} className="text-white bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    </div>
  );
}

export default Skills;
