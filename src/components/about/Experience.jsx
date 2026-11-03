"use client"

import { experiences } from "@/lib/experiences";
import { motion } from "framer-motion";
import { FaAnglesRight, FaBuildingColumns, FaUserTie } from "react-icons/fa6";
import { IoBriefcase, IoBulb } from "react-icons/io5";

export default function Experience() {
    return (
        <motion.section 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className=" border border-violet-600/35 w-full p-3 rounded-2xl backdrop-blur-2xl"
        >

            <main className=" p-3 flex flex-col gap-6">

                <h2 className=" text-xl font-semibold">
                    Work Experience
                </h2>

                {/* Cards */}
                <div className=" flex items-center gap-6 overflow-x-auto no-scrollbar">

                    {experiences.map((item, index) => (
                        <div
                          key={index}
                          className={` border rounded-xl lg:w-120 p-8 flex flex-col-reverse lg:flex-row gap-8 justify-between items-center relative overflow-hidden shadow-md ${item.category === "Internship" ? "bg-sky-950/10 border-sky-600/45" : "bg-teal-950/10 border-teal-600/45"}`}
                        >
                            
                            {/* Details */}
                            <div className=" flex flex-col gap-3 items-center lg:items-start text-center lg:text-start">
                            
                                <h1 className=" mb-3 text-xl flex items-center gap-4">
                                    <FaBuildingColumns/> {item.organization}
                                </h1>

                                <h2 className=" flex items-center gap-4">
                                    <FaUserTie/> {item.title}
                                </h2>

                                <div className=" mt-2 flex flex-col md:flex-row items-center gap-5">


                                    <p className=" border border-teal-900 text-teal-500 rounded-3xl py-1.5 px-4">
                                        {item.duration}
                                    </p>

                                    <p className=" border border-amber-900 text-amber-500 rounded-3xl py-1.5 px-4">
                                        {item.mode}
                                    </p>

                                </div>
                            
                            </div>

                            {/* Category */}
                            <div>
                                {
                                    item.category === "Internship"
                                    ? <div className=" h-24 w-24 flex flex-col items-center justify-center gap-0 rounded-full bg-linear-to-b from-sky-600 to-blue-900 text-white">

                                        <IoBulb className=" text-3xl"/> Internship
                                    </div>
                                    : <div className=" h-24 w-24 flex flex-col items-center justify-center gap-1 rounded-full bg-linear-to-b from-teal-600 to-emerald-900 text-white">
                                        
                                        <IoBriefcase className=" text-3xl" /> Job
                                    </div>
                                }
                            </div>

                            <p className={` h-14 w-14 pl-4 pb-2 rounded-full absolute -top-5 -right-5 flex items-end ${item.category === "Internship" ? "bg-sky-600/20" : "bg-teal-600/20"}`}>
                                {index + 1}
                            </p>

                        </div>
                    ))}
                </div>
                
            </main>

            <p className=" p-3 pl-8 flex gap-2 items-center animate-pulse text-violet-300">
                Swipe <FaAnglesRight/>
            </p>

        </motion.section>
    )
}