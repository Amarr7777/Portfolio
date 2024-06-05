import React from "react";
import CircleFill from "../assets/CircleFill";
import Circle from "../assets/Circle";

function SideBar({ setPageIndex, pageIndex }) {
  return (
    <div className="hidden md:flex flex-col items-end justify-center absolute right-0 bottom-20 px-5 space-y-5 text-white font-ConcertOne z-10">
      <div
        onClick={() => setPageIndex(0)}
        className="cursor-pointer flex justify-evenly items-center gap-5"
      >
        {pageIndex === 0 ? <CircleFill /> : <Circle />}
      </div>
      <div
        onClick={() => setPageIndex(1)}
        className="cursor-pointer flex justify-evenly items-center gap-5"
      >
        {pageIndex === 1 ? <CircleFill /> : <Circle />}
      </div>
      <div
        onClick={() => setPageIndex(2)}
        className="cursor-pointer flex justify-evenly items-center gap-5"
      >
        {pageIndex === 2 ? <CircleFill /> : <Circle />}
      </div>
    </div>
  );
}

export default SideBar;
