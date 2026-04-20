"use client";

import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";
import React from "react";

function page() {
  return (
    <section className=" p-3 bg-linear-to-b from-slate-900 to-black/55 bg-fixed bg-cover text-slate-200">
      <h1 className=" text-xl font-bold p-1 border-b-4 border-cyan-400">
        My <span className=" text-cyan-400">Skills</span>
      </h1>

      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className=" py-4 lg:p-6 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 w-full justify-items-center"
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </section>
  );
}

export default page;
