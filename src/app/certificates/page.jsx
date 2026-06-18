"use client";

import certificates from "@/data/certificates";
import { motion } from "framer-motion";

function Certificates() {
  return (
    <section className=" min-h-screen w-full p-4 flex flex-col gap-5 bg-linear-to-b from-blue-50 to-blue-100 text-slate-900 dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-900 dark:text-slate-100">

        {/* Section Header */}
        <h1 className=' px-0.5 pb-1 text-xl font-bold border-b-2 border-blue-500'>
            My <span className=' text-blue-500'>Certificates</span>
        </h1>

        {/* Content */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            {certificates.map((item, index) => (
                
                <motion.div
                  initial={{opacity: 0, y: 50,}}
                  whileInView={{opacity: 1, y: 0,}}
                  transition={{duration: 0.4, ease: "easeOut",}}
                  viewport={{once: false}}
                  key={index}
                  className=" p-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg shadow hover:scale-[1.02] dark:hover:shadow-blue-400 dark:hover:shadow transition-all"
                >

                    <a href={item.image}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className=" rounded"
                        />
                    </a>

                    <div className=" text-center font-semibold">

                        <h1 className=" text-blue-500">
                            {item.name}
                        </h1>

                        <h2 className=" text-sm">
                            {item.provider}
                        </h2>

                    </div>

                </motion.div>

            ))}
        </div>

    </section>
  )
}

export default Certificates