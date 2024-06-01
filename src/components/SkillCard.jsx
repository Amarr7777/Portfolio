import React from "react";

const skills = [
  {
    name: "React.js",
    content:
      "React is an open-source JavaScript library developed by Facebook for building dynamic user interfaces, particularly single-page applications, using a component-based architecture. It optimizes performance through a virtual DOM, allowing efficient updates and rendering of components.",
  },
  {
    name: "Node.js",
    content:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is designed to build scalable network applications and allows for server-side scripting using JavaScript.",
  },
  {
    name: "Redux",
    content:
      "Redux is a predictable state container for JavaScript apps, commonly used with libraries like React for managing application state. It helps you write applications that behave consistently, run in different environments, and are easy to test.",
  },
  {
    name: "Express",
    content:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It simplifies the process of building server-side applications and APIs.",
  },
  {
    name: "MongoDB",
    content:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas to provide flexible and scalable data storage.",
  },
  {
    name: "Git",
    content:
      "Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work on the same project without interfering with each other's work.",
  },
  {
    name: "SQL",
    content:
      "SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. It is used to insert, update, delete, and query data in databases like MySQL, PostgreSQL, and SQLite.",
  },
  {
    name: "React Native",
    content:
      "React Native is an open-source framework for building mobile applications using JavaScript and React. It allows developers to create natively-rendered mobile apps for iOS and Android with a single codebase.",
  },
  {
    name: "Jetpack Compose",
    content:
      "Jetpack Compose is a modern toolkit for building native Android UI. It simplifies and accelerates UI development on Android with less code, powerful tools, and intuitive Kotlin APIs.",
  },
];

function SkillList({ indexArray }) {
  return (
    <>
      {indexArray.map((index) => (
        <div
          key={skills[index].name}
          className="hidden md:relative md:block overflow-scroll md:h-96 md:w-96 rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {skills[index].name}
              </h3>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              {skills[index].content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default SkillList;
