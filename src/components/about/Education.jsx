"use client"

import { educations } from "@/lib/educations";
import { motion } from "framer-motion";
import { FaAnglesRight } from "react-icons/fa6";

export default function Education() {
    return (
        <motion.section 
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className=" border border-violet-600/35 w-full p-3 rounded-2xl backdrop-blur-2xl transition-all"
        >

            <main className=" p-3 flex flex-col gap-6">

                <h2 className=" text-xl font-semibold">
                    Education
                </h2>

                {/* Cards */}
                <div className=" w-full flex gap-6 overflow-x-auto no-scrollbar">

                    {educations.map((item, index) => (
                        <div
                          key={index}
                          className=" border rounded-xl min-w-64 lg:min-w-120 p-8 flex flex-col-reverse lg:flex-row gap-4 justify-between items-center relative overflow-hidden"
                        >

                            {/* content */}
                            <div className=" p-2 flex flex-col gap-3 items-center text-center lg:items-start lg:text-start">

                                <h1 className=" mb-5 text-xl">
                                    {item.title}
                                </h1>

                                <h2>
                                    {item.board}
                                </h2>
                                
                                <p className=" w-fit mt-5 border border-teal-900 text-teal-500 rounded-3xl py-1.5 px-4">
                                    {item.session}
                                </p>

                                <p className={` w-fit border border-yellow-900 text-yellow-500 rounded-3xl py-1.5 px-4 ${item.stream === "" ? "hidden" : "block" }`}>
                                    {item.stream}
                                </p>

                            </div>

                            {/* icon */}
                            <p className=" h-28 w-28 flex flex-col items-center justify-center gap-0 rounded-full bg-linear-to-b from-pink-600 to-violet-900 text-white text-[40px] font-semibold shrink-0">
                                {item.icon}
                            </p>

                            <p className=" h-14 w-14 pl-4 pb-2 rounded-full absolute -top-5 -right-5 flex items-end bg-pink-600/20">
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