import React, { useState } from "react";

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
    <div className="text-white hidden md:flex items-center justify-evenly h-screen">
      <div className="flex items-start justify-evenly w-3/4 gap-5 ">
        <div className="w-3/4 p-5 md:h-80">
          <h1 className="text-white text-5xl font-semibold">
            {projects[projectIndex].name}
          </h1>
          <p className="text-white mt-6">{projects[projectIndex].content}</p>
          <div className="pt-6">
            <a className="pt-2 underline" href={projects[projectIndex].link}>
              Github
            </a>
          </div>
        </div>
        <div className="w-1/4 p-5">
          <h1 className="text-white text-5xl font-semibold">Projects</h1>
          <ul className="mt-6 space-y-4">
            <li
              className="text-white cursor-pointer"
              onClick={() => {
                setProjectIndex(0);
              }}
            >
              OrderOncampus
            </li>
            <li
              className="text-white cursor-pointer"
              onClick={() => {
                setProjectIndex(1);
              }}
            >
              VocalVision
            </li>
            <li
              className="text-white cursor-pointer"
              onClick={() => {
                setProjectIndex(2);
              }}
            >
              Bookstore
            </li>
            <li
              className="text-white cursor-pointer"
              onClick={() => {
                setProjectIndex(3);
              }}
            >
              DoneWithIt
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectWeb;
