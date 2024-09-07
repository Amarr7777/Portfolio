import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Header({ pageIndex, setPageIndex }) {
  const [visibility, setVisibility] = useState(false);

  return (
    <header className="absolute flex w-full items-center justify-between p-5 cursor-pointer">
      {pageIndex === 1 ? (
        <>
          <motion.h1
            key={pageIndex}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-white text-xl font-bold font-ConcertOne"
          >
            <span className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-transparent bg-clip-text text-4xl">
              S
            </span>
            KILLS
          </motion.h1>
        </>
      ) : (
        <>
          <motion.h1
            key={pageIndex}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-white text-xl font-bold font-ConcertOne"
          >
            <span className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 text-transparent bg-clip-text text-4xl">
              P
            </span>
            ORTFOLIO
          </motion.h1>
        </>
      )}

      {/* Animate presence around the menu and close icons */}
      <button className="md:hidden cursor-pointer z-50" onClick={() => setVisibility(!visibility)}>
        <AnimatePresence mode="wait">
          {!visibility ? (
            <motion.div
              key="menuIcon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MenuRoundedIcon className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="closeIcon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CloseRoundedIcon className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Animate presence around the menu items */}
      <AnimatePresence mode="wait">
        {visibility && (
          <motion.ul
            key="menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 w-full h-screen flex flex-col justify-center items-center space-y-6 z-10 bg-black bg-opacity-90 text-white left-0"
          >
            <li
              onClick={() => {
                setPageIndex(0);
                setVisibility(false);
              }}
              className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
              style={{
                backgroundSize: "100% 3px",
                backgroundPosition: "left bottom",
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                setPageIndex(1);
                setVisibility(false);
              }}
              className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
              style={{
                backgroundSize: "100% 3px",
                backgroundPosition: "left bottom",
              }}
            >
              Skills
            </li>
            <li
              onClick={() => {
                setPageIndex(2);
                setVisibility(false);
              }}
              className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-400 w-fit bg-no-repeat"
              style={{
                backgroundSize: "100% 3px",
                backgroundPosition: "left bottom",
              }}
            >
              Projects
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;