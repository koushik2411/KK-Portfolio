"use client";

import { motion } from "framer-motion";

function TrainingCard({course, index}) {
  return (
    <motion.div
      initial={{opacity: 0, y: 50,}}
      whileInView={{opacity: 1, y: 0,}}
      transition={{duration: 0.6, ease: "easeOut",}}
      viewport={{once: false}}
      key={index}
      className=' p-3.5 flex flex-col gap-3 rounded-xl shadow-xl bg-slate-100 dark:bg-slate-800/70'
    >

        <img
            src={course.image}
            className=' rounded-lg'
        />

        <div>

            {/* Name */}
            <h1 className=' font-semibold text-blue-500 text-center'>
                {course.name}
            </h1>

            {/* Provider */}
            <h2 className=' font-semibold text-center text-sm'>
                {course.provider}
            </h2>

            {/* Description */}
            <p>
                {course.description}
            </p>
        </div>

    </motion.div>
  )
}

export default TrainingCard