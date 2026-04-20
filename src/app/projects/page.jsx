"use client";

import ProjectCard from "@/components/ProjectCard";
import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/data/projects";
import React, { useState } from "react";
import { motion } from "framer-motion";

function page() {
    const [selected, setSelected] = useState(null);

  return (
    <section className=" p-3 min-h-screen bg-linear-to-b from-slate-900 to-black/55 bg-fixed bg-cover text-slate-200">
      <h1 className=" text-xl font-bold p-1 border-b-4 border-cyan-400">
        My <span className=" text-cyan-400">Projects</span>
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
        className=" lg:px-5 py-7 flex flex-col gap-5 md:grid grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} onSelect={setSelected} />;
        })}
      </motion.div>

      <ProjectDetails
        project={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

export default page;
