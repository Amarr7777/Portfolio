import React, { useState } from "react";
import ProjectMobile from "./ProjectMobile";
import ProjectWeb from "./ProjectWeb";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ProjectMobile />
      <ProjectWeb />
    </motion.div>
  );
}

export default Projects;
