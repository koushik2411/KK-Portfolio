"use client";

import { AnimatePresence, motion } from "framer-motion";

function ProjectModal({ project, onClose}) {
  return (
    <AnimatePresence>

        {project && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className=" fixed inset-0 bg-black/60 z-40 flex items-center justify-center"
                >

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 40}}
                  transition={{ duration: 0.25 }}
                  className=" w-[90%] max-w-2xl max-h-[90vh] p-4 flex flex-col gap-5 rounded-xl border z-50 bg-slate-100 dark:bg-slate-900 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700"
                >
                    <button
                      onClick={onClose}
                      className=" py-1 px-3 top-1 right-1 bg-red-500 text-white rounded-lg active:scale-[0.98] self-end"
                    >
                        X
                    </button>

                    <img
                        src={project.image}
                        alt={project.name}
                        className=" rounded"
                    />

                    <h1 className=" pb-1 font-bold text-blue-500 text-center text-lg border-b-2">
                        {project.name}
                    </h1>

                    <div className=" flex flex-col gap-2">

                        <h2>
                            <span className=" font-semibold text-blue-500">Category:</span> {project.category}
                        </h2>

                        <p className=" text-justify">
                            <span className=" font-semibold text-blue-500">Description:</span> {project.desc}
                        </p>

                        <p>
                            <span className=" font-semibold text-blue-500">Tech Stacks & Tools:</span> {project.techStacks}
                        </p>

                        <p>
                            <span className=" font-semibold text-blue-500">Features:</span> {project.features}
                        </p>

                    </div>
                    
                    <a href={project.viewLink} target="blank" className=" self-center">
                        <button className=" my-2 p-2 self-center rounded-lg bg-linear-to-b from-blue-500 to-blue-600 text-slate-50 active:scale-[0.97]">
                            View Project
                        </button>
                    </a>

                </motion.div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
  )
}

export default ProjectModal