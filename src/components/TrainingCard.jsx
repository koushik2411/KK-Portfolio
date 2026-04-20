"use client";

import React from "react";
import { motion } from "framer-motion";

function TrainingCard({ training }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 16px rgba(34,211,238,0.7)",
      }}
      transition={{ duration: 0.4 }}
      className=" h-full w-full p-3 flex flex-col gap-3 items-center justify-evenly rounded-2xl bg-linear-to-b from-slate-800 to-black/55"
    >
      <div>
        <a href={training.image} target="blank">
            <img src={training.image} 
                className=" rounded-t-lg"
            />
        </a>
      </div>

      <h1 className=" mt-5 text-xl font-semibold text-center text-cyan-400">{training.name}</h1>

      <h2 className=" text-lg font-semibold text-center">{training.provider}</h2>

      <p className=" text-justify">{training.desc}</p>
    </motion.div>
  );
}

export default TrainingCard;
