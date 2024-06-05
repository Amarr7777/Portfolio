import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectMobile() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [projectShow, setProjectShow] = useState(true);
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
    <>
      {projectShow ? (
        <div className=" flex flex-col h-screen justify-center items-center md:hidden ">
          <h1 className="text-white text-center text-5xl font-semibold font-ConcertOne capitalize">
            PROJECTS
          </h1>
          <ul className="mt-6 space-y-4">
            <li
              className="text-white text-center font-ConcertOne  cursor-pointer"
              onClick={() => {
                setProjectIndex(0);
                setProjectShow(false);
              }}
            >
              OrderOncampus
            </li>
            <li
              className="text-white text-center font-ConcertOne  cursor-pointer"
              onClick={() => {
                setProjectIndex(1);
                setProjectShow(false);
              }}
            >
              VocalVision
            </li>
            <li
              className="text-white text-center font-ConcertOne  cursor-pointer"
              onClick={() => {
                setProjectIndex(2);
                setProjectShow(false);
              }}
            >
              Bookstore
            </li>
            <li
              className="text-white text-center font-ConcertOne  cursor-pointer"
              onClick={() => {
                setProjectIndex(3);
                setProjectShow(false);
              }}
            >
              DoneWithIt
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex flex-col h-screen items-start justify-center p-5 ">
          <h1 className="text-white text-xl font-semibold font-ConcertOne">
            {projects[projectIndex].name}
          </h1>
          <p className="text-white text-sm mt-6 text-justify font-ConcertOne font-thin">
            {projects[projectIndex].content}
          </p>
          <div className="flex items-center justify-evenly font-ConcertOne gap-5">
            <a
              className="pt-2 text-white underline "
              href={projects[projectIndex].link}
            >
              Github
            </a>
            <p
              className="pt-2 text-white font-ConcertOne underline"
              onClick={() => {
                setProjectShow(true);
              }}
            >
              Back
            </p>
          </div>
        </div>
      )}
      
    </>
  );
}

export default ProjectMobile;
