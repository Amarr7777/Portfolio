import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectWeb() {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = [
    {
      name: "OrderOnCampus",
      link: "https://github.com/Amarr7777/orderOnCampus-full.git",
      content:
        "orderOnCampus includes client and restaurant interfaces. The React Native and Redux-powered client app lets users browse menus, place orders, and track deliveries. The React and Redux restaurant dashboard empowers owners to manage orders, update menus, and analyze sales. Using Node.js, Express, MongoDB, and Stripe ensures seamless transactions.",
    },
    {
      name: "VocalVision",
      link: "https://github.com/Amarr7777/VocalVision.git",
      content:
        "VocalVision: A web app for visually impaired, converting images to audio descriptions. Uses YOLO for object detection, gTTS for narration. Accessible and easy integration. Frontend: React.js, Backend: Flask, CV: OpenCV, TTS: gTTS. #AccessibilityTech",
    },
    {
      name: "BookStore",
      link: "https://github.com/Amarr7777/bookstore.git",
      content:
        "This a bookstore where data is fetched from NY times API and shown in the web app and a search bar is which is completely functional",
    },
    {
      name: "DoneWithit",
      link: "https://github.com/Amarr7777/To-Do-App.git",
      content:
        "DoneWithit is a sleek and intuitive to-do app built entirely with React, focusing on simplicity and user experience. This project showcases the fundamental capabilities of React, including state management, component-based architecture, and responsive design.",
    },
  ];
  return (
    <div className="text-white hidden md:flex items-center justify-evenly h-screen ">
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
              className="pt-2  font-ConcertOne"
              href={projects[projectIndex].link}
            >
              <p
                className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                style={{
                  backgroundSize: "100% 3px",
                  backgroundPosition: "left bottom",
                }}
              >
                Github
              </p>
            </a>
          </div>
        </motion.div>
        <div className="lg:w-1/4 lg:p-5 py-5 pr-5 w-1/4">
          <h1 className="text-white text-5xl font-semibold font-ConcertOne">
            Projects
          </h1>
          <ul className="mt-6 space-y-4">
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-white cursor-pointer font-ConcertOne "
              onClick={() => {
                setProjectIndex(0);
              }}
            >
              <p
                className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                style={{
                  backgroundSize: "100% 3px",
                  backgroundPosition: "left bottom",
                }}
              >
                OrderOnCampus
              </p>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-white cursor-pointer font-ConcertOne"
              onClick={() => {
                setProjectIndex(1);
              }}
            >
              <p
                className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                style={{
                  backgroundSize: "100% 3px",
                  backgroundPosition: "left bottom",
                }}
              >
                VocalVision
              </p>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-white cursor-pointer font-ConcertOne "
              onClick={() => {
                setProjectIndex(2);
              }}
            >
              <p
                className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                style={{
                  backgroundSize: "100% 3px",
                  backgroundPosition: "left bottom",
                }}
              >
                Bookstore
              </p>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-white cursor-pointer font-ConcertOne "
              onClick={() => {
                setProjectIndex(3);
              }}
            >
              <p
                className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
                style={{
                  backgroundSize: "100% 3px",
                  backgroundPosition: "left bottom",
                }}
              >
                DoneWithIt
              </p>
            </motion.li>
          </ul>
        </div>
      </div>
      
    </div>

  );
}

export default ProjectWeb;
