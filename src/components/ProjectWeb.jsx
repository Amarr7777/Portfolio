import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../constants/projects";

function ProjectWeb() {
  const [projectIndex, setProjectIndex] = useState(0);

  return (
    <div className="text-white hidden md:flex items-center justify-evenly h-screen">
      <div className="flex items-start justify-evenly w-full gap-5 px-20">
        <motion.div
          key={projectIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          exit={{ x: -100 }}
          className="w-3/4 py-5 md:h-80"
        >
          <h1 className="text-white text-5xl font-semibold font-ConcertOne">
            {projects[projectIndex].name}
          </h1>
          <p className="text-white mt-6 font-ConcertOne text-justify font-thin">
            {projects[projectIndex].content}
          </p>
          <div className="pt-6">
            <a
              className="pt-2 font-ConcertOne"
              href={projects[projectIndex].link}
            >
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                style={{
                  backgroundSize: "100% 3px",
                  backgroundPosition: "left bottom",
                }}
              >
                Github
              </motion.p>
            </a>
          </div>
        </motion.div>

        <div className="lg:w-1/4 lg:p-5 py-5 pr-5 w-1/4">
          <h1 className="text-white text-5xl font-semibold font-ConcertOne">
            Projects
          </h1>
          <ul className="mt-6 space-y-4">
            {projects.map((project, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                className="text-white cursor-pointer font-ConcertOne"
                onClick={() => {
                  setProjectIndex(index);
                }}
              >
                <p
                  className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                  style={{
                    backgroundSize: "100% 3px",
                    backgroundPosition: "left bottom",
                  }}
                >
                  {project.name}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectWeb;
