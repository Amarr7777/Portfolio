import React from "react";

function Header({ pageIndex }) {
  const text = "</";
  const textClose = ">";
  return (
    <header className="absolute flex w-full items-center justify-start mx-auto p-5 cursor-pointer">
      {pageIndex == 1 ? (
        <h1 className="text-white text-xl font-bold font-ConcertOne">
          <span className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-transparent bg-clip-text text-4xl">
            S
          </span>
          KILLS
        </h1>
      ) : (
        <h1 className="text-white text-xl font-bold font-ConcertOne">
          <span className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-transparent bg-clip-text text-4xl">
            P
          </span>
          ORTFOLIO
          {/* {" "}{textClose} */}
        </h1>
      )}
    </header>
  );
}

export default Header;
