import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import imgSrc from "../assets/back1.jpg";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import ProjectMobile from "./ProjectMobile";
import SideBar from "./SideBar";

function SectionOne() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className="relative h-screen w-full">
      <Header pageIndex={pageIndex} />
      {pageIndex === 0 && <Home />}
      {pageIndex === 1 && <Skills/>}
      {pageIndex === 2 && <Projects />}
      <SideBar setPageIndex={setPageIndex} pageIndex={pageIndex} />
      <Footer setPageIndex={setPageIndex} pageIndex={pageIndex} />
    </div>
  );
}

export default SectionOne;
