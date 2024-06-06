import React from "react";
import { motion } from "framer-motion";
function Home() {
  const count = 50;
  return (
    <>
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{
          ease: "linear",
          duration: 2,
          y: { duration: 0.6 },
        }}
        className="relative bg-transparent flex flex-col h-full justify-center items-center text-center px-5 z-10"
      >
        <h1 className="text-white  text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-ConcertOne">
          WELCOME
        </h1>
        <p className="font-ConcertOne text-white font-thin leading-5 text-justify md:px-20 lg:px-60 py-5">
          Hello! I'm Amar G Nath, a passionate and dedicated software engineer
          with a strong background in web and mobile development. With a keen
          interest in solving complex problems through innovative solutions, I
          have honed my skills across various technologies and frameworks.
        </p>
      </motion.div>
    </>
  );
}

export default Home;
