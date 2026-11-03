/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";

import { projectCategories, projects } from "@/lib/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

export default function Projects() {

    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

    
    // Project Category colors on cards
    const categoryColor = (category) => {
        const colors = {
            "Frontend": "text-cyan-500 border-cyan-500/50 bg-cyan-500/10",
            "Full Stack": "text-violet-500 border-violet-500/50 bg-violet-500/10",
            "Android": "text-emerald-500 border-emerald-500/50 bg-emerald-500/10",
            "iOS": "text-orange-500 border-orange-500/50 bg-orange-500/10",
        };

        return colors[category] || "text-gray-500 border-gray-500/50 bg-gray-500/10";
    };

    return (
        <section className=" min-h-screen w-full max-w-420 mx-auto p-3 lg:p-6 relative">

            <h2 className=" p-3 flex items-center gap-2.5 text-lg border-b-2 font-semibold">
                <FaLaptopCode/> Projects
            </h2>

            <main>

                {/* Category bar */}
                <div className=" w-full p-3 py-4 lg:py-6 flex items-center justify-center gap-4 overflow-auto border-b-2 whitespace-nowrap transition-all">

                    {projectCategories.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(item)}
                          className={` border w-full h-fit p-2 px-8 rounded-3xl cursor-pointer ${activeCategory.includes(item) ? " bg-linear-to-b from-blue-500 to-violet-500 border-0" : "hover:text-blue-500 transition-all hover:bg-blue-800/10 hover:scale-[1.02]" }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Project cards */}
                <div className=" mt-3 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredProjects.map((project,index) => (
                        <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}  
                        key={index}
                          className=" p-4 border border-violet-600/35 rounded-3xl relative overflow-hidden hover:scale-[1.02] hover:shadow-md shadow-violet-300 transition-all"
                        >

                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className=" mb-3 rounded-xl"
                            />

                            {/* Text div */}
                            <div className=" mt-4 space-y-4 items-center">

                                <h1 className=" text-xl text-center font-semibold">
                                    {project.title}
                                </h1>

                                <p className={` w-fit mx-auto px-3 py-1 text-center border rounded-3xl text-xs ${categoryColor(project.category)}`}>
                                    {project.category}
                                </p>

                                <button
                                  onClick={() => setSelectedProject(project)}
                                  className=" border w-full h-fit mb-4 p-2 px-8 rounded-3xl cursor-pointer hover:bg-linear-to-b hover:from-blue-500 hover:to-violet-500 hover:border-0 transition-all"
                                >
                                    View project
                                </button>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </main>


            {/* PROJECT DETAILS MODAL */}

            {selectedProject && (
                <main
                  onClick={() => setSelectedProject(null)}
                  className=" h-screen w-full p-3 sm:p-8 pt-8 fixed inset-0 zoom-100 flex items-center lg:items-start justify-center bg-black/70 backdrop-blur-xs overflow-auto"
                >
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0}}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.3 }}
                      onClick={(e) => e.stopPropagation()}
                      className=" w-full max-w-3xl md:mt-12 border p-5 bg-black flex flex-col gap-6 rounded-3xl overflow-auto border-violet-600/35 bg-linear-to-b from-blue-900/10 to-violet-900/25"
                    >

                        {/* Close button */}
                        <button
                          onClick={() => setSelectedProject(null)}
                          className=" w-fit px-3 py-1 flex items-center self-end gap-1 text-white bg-linear-to-b from-red-500 to-red-700 rounded-3xl"
                        >

                            Close <IoCloseCircle className="text-xl"/>
                        </button>


                        {/* Images Div */}
                        {selectedProject.images?.map((image, index) => (
                            <img
                               key={index}
                               src={image}
                               alt={`${selectedProject.title} ${index + 1}`}
                               className=" max-w-3xl rounded-xl"
                            />
                        ))}


                        {/* Text Div */}
                        <div className=" flex flex-col gap-3 sm:gap-6">

                            <h1 className=" my-4 text-center text-2xl font-semibold">
                                {selectedProject.title}
                            </h1>

                            <h2 className=" flex gap-3">
                                <strong>Category:</strong> <span className={` w-fit px-3 py-1 text-center border rounded-3xl text-xs ${categoryColor(selectedProject.category)}`}>{selectedProject.category}</span>
                            </h2>

                            <p className=" space-x-3">
                                <strong>Description:</strong> <span>{selectedProject.description}</span>
                            </p>

                            <div className=" flex gap-3">
                                <strong>Tools:</strong> <span className=" flex items-center gap-2 flex-wrap">
                                    {selectedProject?.tools.map((tool, index) => (
                                        <p
                                          key={index}
                                          className=" w-fit px-3 py-1 text-center border rounded-3xl text-xs whitespace-nowrap border-teal-500 bg-teal-200/10 text-teal-500"
                                        >
                                            {tool}
                                        </p>
                                    ))}
                                </span>
                            </div>

                        </div>


                        {/* Visit button */}
                        <a
                          href={selectedProject.visitLink}
                          target="blank"
                          className=" mt-4 mx-auto w-fit min-w-72"
                        >
                            
                            <button
                              className=" w-full h-fit mb-4 p-2 px-8 rounded-3xl cursor-pointer bg-linear-to-b from-blue-500 to-violet-500 text-white transition-all shadow-md flex items-center justify-center gap-2"
                            >

                                Visit {selectedProject.title} <FaExternalLinkAlt/>
                            </button>
                        </a>


                    </motion.div>

                </main>
            )}

        </section>
    )
};