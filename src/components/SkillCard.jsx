"use client";

import React from "react";
import { motion } from "framer-motion";

function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{
            once: false,
            amount: 0.3,
        }}
        whileHover={{
            scale: 1.05,
            boxShadow: "0 0 16px rgba(34,211,238,0.7)",
        }}
        transition={{ duration: 0.4}}
      className=" h-full w-full p-4 flex flex-col gap-4 justify-evenly items-center md:items-start rounded-xl bg-linear-to-b from-slate-800 to-black/55"
    >
      <div className=" flex flex-col md:flex-row gap-4 items-center">
        <h1 className=" text-5xl text-cyan-400">{skill.icon}</h1>
        <h2 className=" text-lg text-slate-200">{skill.name}</h2>
      </div>
      <div className=" w-full my-2 h-2 overflow-hidden bg-slate-600 rounded-full">
        <motion.div
            initial={{ width: 0}}
            animate={{ width: `${skill.level}%`}}
            transition={{ duration: 1}}
            className=" h-2 bg-cyan-100 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default SkillCard;
