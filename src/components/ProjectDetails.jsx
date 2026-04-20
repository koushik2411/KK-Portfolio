"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";

function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" p-3 md:p-12 lg:p-15 min-h-screen w-full fixed inset-0 z-50 top-0 right-0 backdrop-blur-lg flex items-center justify-center"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className=" px-5 py-3 lg:w-[75%] lg:h-[92vh] flex flex-col gap-3 items-center bg-linear-to-b from-slate-800 to-black/95 backdrop-blur-3xl rounded-xl text-slate-200 border-b-6 border-cyan-700 overflow-y-scroll"
        >
          <button onClick={onClose} className=" w-full flex items-center justify-end text-red-500 text-xl">
            <FaWindowClose/>
          </button>

          <img src={project.image} className=" rounded"/>

          <h2 className=" mt-3 text-cyan-400 text-xl font-bold border-b-2 p-2">
            {project.name}
          </h2>

          <div className=" px-3 w-full flex flex-col gap-3">
            <p>
              <span className=" text-cyan-400">Category:</span>{" "}
              {project.category}
            </p>

            <p>
              <span className=" text-cyan-400 text-justify">Description:</span>{" "}
              {project.desc}
            </p>

            <p>
              <span className=" text-cyan-400">Tech Stacks:</span>{" "}
              {project.techStacks}
            </p>

            <p>
              <span className=" text-cyan-400">Features:</span>{" "}
              {project.features}
            </p>
          </div>

          <a href={project.viewLink} target="blank">
            <button className=" my-3 py-1 px-3 bg-linear-to-b from-cyan-400 to-cyan-600 rounded-xl">
              View Project
            </button>
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectDetails;
