"use client";

import { useState } from "react";
import { skillCategories, skills } from "@/lib/skills";
import { FaToolbox } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section className=" min-h-screen w-full max-w-420 mx-auto p-3 lg:p-6">

            <h2 className=" p-3 flex items-center gap-2.5 text-lg border-b-2 font-semibold">
                <FaToolbox/> Skills
            </h2>

            <main>

                {/* Category bar */}
                <div className=" w-full min-w-0 p-3 py-4 lg:py-6 flex items-center justify-start sm:justify-center gap-4 overflow-auto border-b-2 whitespace-nowrap transition-all">

                    {skillCategories.map((cat) => (
                        <button
                          key={cat.value}
                          onClick={() => setActiveCategory(cat.value)}
                          className={` border shrink-0 h-fit p-2 px-8 rounded-3xl cursor-pointer ${activeCategory.includes(cat.value) ? " bg-linear-to-b from-blue-500 to-violet-500 border-0" : "hover:text-blue-500 transition-all hover:bg-blue-800/10 hover:scale-[1.02]" }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* Skill cards */}
                <div className=" mt-3 p-2 lg:p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-8 transition-all">

                    {filteredSkills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{  y: 30, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          viewport={{ once: false }}
                          className=" border border-violet-200 p-4 lg:p-8 flex flex-col justify-between gap-4 lg:gap-8 rounded-lg hover:scale-[1.025] shadow-md hover:shadow-violet-300 hover:bg-violet-950/15 hover:border-violet-500 transition-all"
                        >
                            <div className=" flex items-center justify-between">

                                <h2>
                                    {skill.title}
                                </h2>
                                
                                <h1 
                                  className=" text-2xl md:text-5xl text-blue-500"
                                  style={{ color: skill.iconColor}}
                                >
                                    {skill.icon}
                                </h1>

                            </div>

                            <div className=" h-2 w-full bg-gray-500 rounded-3xl">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.progress}%`}}
                                  viewport={{ once: false }}
                                  transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                                  className=" h-2 bg-linear-to-l from-blue-500 to-violet-400 rounded-3xl" 
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </main>

        </section>
    )
};