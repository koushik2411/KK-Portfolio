"use client";

import React from "react";
import { motion } from "framer-motion";
import { trainings } from "@/data/trainings";
import TrainingCard from "@/components/TrainingCard";

function page() {
  return (
    <section className=" p-3 min-h-full bg-linear-to-b from-slate-900 to-black/55 bg-fixed bg-cover text-slate-200">
      <h1 className=" text-xl font-bold p-1 border-b-4 border-cyan-400">
        My <span className=" text-cyan-400">Trainings</span>
      </h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className=" lg:px-5 py-7 flex flex-col gap-5 md:grid grid-cols-2 lg:grid-cols-3 lg:gap-6 "
      >
        {trainings.map((training, index) => {
          return <TrainingCard key={index} training={training} />
        })}
      </motion.div>
    </section>
  );
}

export default page;
