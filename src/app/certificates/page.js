"use client"

import { useState } from "react";
import { certificateCategories, certificates } from "@/lib/certificates";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Certificates() {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredCertificates = activeCategory === "All"
      ? certificates 
      : certificates.filter((certificate) => certificate.category === activeCategory)

    return (
        <section className=" min-h-screen w-full max-w-420 mx-auto p-3 lg:p-6">

            <h2 className=" p-3 flex items-center gap-2.5 text-lg border-b-2 font-semibold">
                <FaUserGraduate/> Certificates
            </h2>

            <main className=" w-full min-w-0">

                {/* - - - Categories - - - */}
                <div className=" w-full min-w-0 p-3 py-4 lg:py-6 flex items-center justify-start sm:justify-center gap-4 overflow-x-auto border-b-2 whitespace-nowrap transition-all">

                    {certificateCategories.map((item,index) => (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(item)}
                          className={` border shrink-0 h-fit p-2 px-8 rounded-3xl cursor-pointer ${activeCategory.includes(item) ? " bg-linear-to-b from-blue-500 to-violet-500 border-0" : "hover:text-blue-500 transition-all hover:bg-blue-800/10 hover:scale-[1.02]" }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* - - - Certificate Cards - - - */}
                <div className=" mt-3 p-3 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">

                    {filteredCertificates.map((certificate, index) => (
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.5 }}
                          key={index}
                          className=" p-4 border border-violet-600/35 rounded-3xl relative overflow-hidden hover:scale-[1.02] shadow-md hover:shadow-violet-300 transition-all"
                        >

                            {/* Bubbles
                            <div className=" h-36 w-36 md:h-48 md:w-48 lg:h-72 md: lg:w-72 rounded-full absolute -top-20 -left-20 bg-blue-800/15 blur-xl pointer-events-none z-0"/>

                            <div className=" h-36 w-36 md:h-48 md:w-48 lg:h-72 md: lg:w-72 rounded-full absolute -bottom-20 -right-20 bg-violet-800/15 blur-xl pointer-events-none z-0"/> */}

                            {/* Card Content */}
                            <div className=" w-full relative z-10 backdrop-blur-2xl">

                                <a
                                  href={certificate.image}
                                  className=" w-full flex flex-col items-center justify-between gap-2"
                                >

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                      src={certificate.image}
                                      alt={certificate.title}
                                      className=" w-full mb-3 rounded-xl"
                                    />

                                    <h1 className=" text-lg">
                                        {certificate.title}
                                    </h1>

                                    <h2 className=" text-violet-300">
                                        {certificate.provider}
                                    </h2>
                                
                                </a>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </main>

        </section>
    )
};