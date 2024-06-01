import React from "react";

function Header({ pageIndex }) {
  const text = [
    { text: "HEY, WHAT'S UP 👋🏻" },
    { text: "SKILLS" },
    { text: "HEY, WHAT'S UP 👋🏻" },
  ];
  return (
    <header className="absolute flex w-full items-center justify-start mx-auto p-5 z-10 cursor-pointer">
      <h1 className="text-white text-xl font-bold font-ConcertOne">
        {text[pageIndex].text}
      </h1>
    </header>
  );
}

export default Header;
