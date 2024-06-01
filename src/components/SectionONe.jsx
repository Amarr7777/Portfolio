import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import imgSrc from "../assets/back1.jpg";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

function SectionOne() {
  const [pageIndex,setPageIndex] = useState(0);
  return (
    <div className="relative h-screen w-full">
      <Header />
      {pageIndex === 0 && <Home />}
      {pageIndex === 1 && <Skills />}
      {pageIndex === 2 && <Projects />}
      <Footer setPageIndex={setPageIndex} pageIndex={pageIndex}/>
    </div>
  );
}

export default SectionOne;
