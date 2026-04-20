"use client";

import React from 'react'
import { motion } from 'framer-motion';

function ProjectCard({ project, onSelect }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 16px rgba(34,211,238,0.7)",
      }}
      transition={{ duration: 0.4 }}
      onClick={() => onSelect(project)}
      className=" h-full w-full p-4 flex flex-col gap-3 items-center justify-evenly rounded-2xl bg-linear-to-b from-slate-800 to-black/55"
        >
            <img
                    src={project.image}
                    className=" rounded-t-lg"
            />

            <h1 className=" mt-4 text-lg font-semibold text-center text-cyan-400">
                {project.name}
            </h1>

            <h2 className=' mb-4 text-sm'>
                {project.category}
            </h2>
        </motion.div>
    )
}

export default ProjectCard