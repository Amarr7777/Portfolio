import React from "react";
import skills from "../constants/Skills";
import { motion, AnimatePresence } from "framer-motion";

function SkillCardMobile({ indexMobile,direction }) {
  const skill = skills[indexMobile];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={skill.name}
        initial={{ x: direction == "prev" ? "50%": "-50%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        exit={{ x: direction == "prev" ? "-50%": "50%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden relative block overflow-hidden h-64 w-72 rounded-lg border border-gray-100 border-b-0 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-600 via-red-500 to-orange-400"></span>
        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              {skill.name}
            </h3>
          </div>
        </div>
        <div className="mt-1 overflow-scroll">
          <p className="text-sm text-gray-500">{skill.content}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SkillCardMobile;
