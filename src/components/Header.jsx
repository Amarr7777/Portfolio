import React from "react";
import { motion } from "framer-motion";

function Header({ pageIndex }) {
  return (
    <header className="absolute flex w-full items-center justify-start mx-auto p-5 cursor-pointer">
      {pageIndex == 1 ? (
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
      ) : (
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
          {/* {" "}{textClose} */}
        </motion.h1>
      )}
    </header>
  );
}

export default Header;
