"use client";

import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { projects } from '@/data/projects';
import React, { useState } from 'react'

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <section className=" min-h-screen w-full p-4 flex flex-col gap-5 bg-linear-to-b from-blue-50 to-blue-100 text-slate-900 dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-900 dark:text-slate-100">

        {/* Section Header */}
        <h1 className=' px-0.5 pb-1 text-xl font-bold border-b-2 border-blue-500'>
            My <span className=' text-blue-500'>Projects</span>
        </h1>

        {/* Content */}
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

          {projects.map((project, index) => (
            <ProjectCard 
              project={project} 
              key={index}
              index={index}
              setSelectedProject={setSelectedProject}
            />
          ))}

        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>
        )}

    </section>
  )
}

export default Projects