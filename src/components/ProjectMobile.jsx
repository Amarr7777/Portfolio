import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import projects from '../constants/projects'

function ProjectMobile() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectShow, setProjectShow] = useState(true);  
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <div className="flip-card md:hidden">
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={handleAnimationComplete}
        className="flip-card-inner"
      >
        <div className="flip-card-front flex flex-col h-screen justify-center items-center w-full">
          <h1 className="text-white text-center text-5xl font-semibold font-ConcertOne capitalize">
            PROJECTS
          </h1>
          <ul className="mt-6 space-y-4 flex flex-col items-center justify-center">
            {projects.map((project, index) => (
              <motion.li
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className="text-white text-center font-ConcertOne cursor-pointer bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                style={{
                  backgroundSize: "100% 3px",
                  backgroundPosition: "left bottom",
                }}
                onClick={() => {
                  setProjectIndex(index);
                  setProjectShow(false);
                  handleFlip();
                }}
              >
                {project.name}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flip-card-back flex flex-col h-screen items-start justify-center p-5">
          <h1 className="text-white text-xl font-semibold font-ConcertOne">
            {projects[projectIndex].name}
          </h1>
          <p className="text-white text-sm mt-6 text-justify font-ConcertOne font-thin">
            {projects[projectIndex].content}
          </p>
          <div className="flex items-center justify-evenly font-ConcertOne gap-5">
            <motion.a
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
              className="pt-2 text-white bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
              href={projects[projectIndex].link}
              style={{
                backgroundSize: "100% 3px",
                backgroundPosition: "left bottom",
              }}
            >
              Github
            </motion.a>
            <motion.p
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
              className="pt-2 text-white font-ConcertOne bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat cursor-pointer"
              style={{
                backgroundSize: "100% 3px",
                backgroundPosition: "left bottom",
              }}
              onClick={() => {
                setProjectShow(true);
                handleFlip();
              }}
            >
              Back
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectMobile;
