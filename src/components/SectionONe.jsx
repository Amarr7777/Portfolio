import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import SideBar from "./SideBar";

function SectionOne() {
  const [pageIndex, setPageIndex] = useState(0);
  return (
    <div className="relative h-screen w-full">
      <Header pageIndex={pageIndex} setPageIndex={setPageIndex} />
      {pageIndex === 0 && <Home />}
      {pageIndex === 1 && <Skills />}
      {pageIndex === 2 && <Projects />}
      <SideBar setPageIndex={setPageIndex} pageIndex={pageIndex} />
      <Footer setPageIndex={setPageIndex} pageIndex={pageIndex} />
    </div>
  );
}

export default SectionOne;
