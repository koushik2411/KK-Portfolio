"use client";

import skills from '@/data/skills'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <section className=" min-h-screen w-full p-4 flex flex-col gap-5 bg-linear-to-b from-blue-50 to-blue-100 text-slate-900 dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-900 dark:text-slate-100">

        {/* Section Header */}
        <h1 className=' px-0.5 pb-1 text-xl font-bold border-b-2 border-blue-500'>
            My <span className=' text-blue-500'>Skills</span>
        </h1>

        {/* Content */}
        <div className=' grid grid-cols-2 md:grid-cols-3 gap-3'>

          {skills.map((skill, index) => (
            
            <motion.div
              initial={{opacity: 0, y: 50,}}
              whileInView={{opacity: 1, y: 0,}}
              transition={{duration: 0.4, ease: "easeOut",}}
              viewport={{once: false}}
              key={index}
              className=' p-5 flex flex-col gap-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:scale-[1.035] dark:hover:shadow-blue-400 dark:hover:shadow transition-all shadow'
            >

              {/* Icon */}
              <h1 className=' text-5xl text-blue-400'>
                {skill.icon}
              </h1>

              {/* Name and progress */}
              <div className=' flex flex-col gap-2'>

                <h2 className=' font-semibold'>
                  {skill.name}
                </h2>

                <div className=' w-full bg-slate-200 dark:bg-slate-600 rounded-3xl'>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%`}}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2, ease: "easeOut",}}
                    className=' h-1.5 bg-blue-400 rounded-3xl'
                  ></motion.div>
                </div>

              </div>

            </motion.div>

          ))}
        </div>

    </section>
  )
}

export default Skills