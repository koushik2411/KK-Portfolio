"use client";

import { motion } from "framer-motion";

function ProjectCard( {project, index, setSelectedProject} ) {

    return (
        <motion.div
          initial={{opacity: 0, y: 50,}}
          whileInView={{opacity: 1, y: 0,}}
          transition={{duration: 0.4, ease: "easeOut",}}
          viewport={{once: false}}
          key={index}
          onClick={() => setSelectedProject(project)}
          className=" p-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg shadow hover:scale-[1.02] dark:hover:shadow-blue-400 dark:hover:shadow transition-all cursor-pointer"
        >

            <img
                src={project.image}
                alt={project.name}
                className=" rounded"
            />

            <div className=" text-center font-semibold">

                <h1 className=" text-blue-500">
                    {project.name}
                </h1>

                <h2 className=" text-sm">
                    {project.category}
                </h2>

            </div>

        </motion.div>
    )
}

export default ProjectCard