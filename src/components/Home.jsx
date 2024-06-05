import React from "react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

function Home() {
  const count = 50;
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      {/* <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0  bg-opacity-50 backdrop-blur-sm"></div>
      </div> */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          ease: "linear",
          duration: 2,
          y: { duration: 0.9 },
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
      {/* <div className="absolute flex justify-center items-center h-screen top-0 right-0 w-full -z-10">
        {Array.from({ length: count }, (_, index) => (
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: Infinity }}
            key={index}
            className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-full h-screen bg-no-repeat opacity-30"
            style={{
              backgroundSize: "1px 100%",
              backgroundPosition: "left",
            }}
          ></motion.div>
        ))}
      </div>
      <div className="absolute flex flex-col justify-center items-center h-screen top-0 right-0 w-full -z-10">
        {Array.from({ length: count }, (_, index) => (
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: Infinity }}
            key={index}
            className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-full h-screen bg-no-repeat opacity-30"
            style={{
              backgroundSize: "100% 1px",
              backgroundPosition: "left",
            }}
          ></motion.div>
        ))}
      </div> */}
      
    </>
  );
}

export default Home;
