"use client";

import NavCards from "@/components/NavCards";
import Link from "next/link";
import { FaBookReader, FaLaptopCode, FaTools, FaUser, FaUserGraduate } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { SiGmail, SiNetlify } from "react-icons/si";

export default function Home() {

  const navCards = [
    {
      id: 1,
      name: "About",
      location: "/about",
      icon: <FaUser/>,
    },
    {
      id: 2,
      name: "Skills",
      location: "/skills",
      icon: <FaTools/>,
    },
    {
      id: 3,
      name: "Trainings",
      location: "/trainings",
      icon: <FaBookReader/>,
    },
    {
      id: 4,
      name: "Certificates",
      location: "/certificates",
      icon: <FaUserGraduate/>,
    },
    {
      id: 5,
      name: "Projects",
      location: "/projects",
      icon: <FaLaptopCode/>,
    },
    {
      id: 6,
      name: "Contact",
      location: "/contact",
      icon: <MdContactPhone/>,
    },
  ];

  {/* Template */}
  // {
  //     name: "",
  //     location: "",
  //     icon: "",
  //   },

  return (
    <section className=" min-h-screen w-full p-4 flex flex-col lg:flex-row items-center lg:justify-center gap-10 bg-linear-to-b from-blue-50 to-blue-100 text-slate-900 dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-900 dark:text-slate-100">
      
      {/* CONTAINER DIV */}
      <div className=" lg:w-6/12 p-8 flex md:flex-row flex-col-reverse items-center justify-between gap-15 md:gap-25 lg:gap-15 lg:justify-center bg-slate-50 dark:bg-transparent rounded-2xl shadow-xl dark:shadow-none">

        {/* LEFT DIV - Intro & Links */}
        <div className=" flex flex-col gap-8 md:gap-12">

          {/* Introduction */}
          <div className=" flex flex-col gap-1.5">

            <h3>
              <span className=" font-semibold text-blue-500">Hello</span>, I am
            </h3>

            <h1 className=" text-2xl lg:text-4xl font-bold">
              Koushik Kumar Manjhi
            </h1>

            <h2 className=" text-lg lg:text-2xl font-semibold">
              I am a <span className=" text-blue-500">Full-Stack Developer</span>
            </h2>

          </div>

          {/* Social Links */}
          <div className=" flex justify-between lg:justify-start items-center lg:gap-5">

            <a href="https://www.linkedin.com/in/koushik-kumar-1798251b9/" target="blank" className="home-links border dark:text-slate-400  hover:scale-[1.1] hover:text-blue-500 hover:shadow-blue-400 dark:hover:shadow transition-all">
              <FaLinkedin/>
            </a>

            <a href="https://github.com/koushik2411" target="blank" className="home-links border dark:text-slate-400  hover:scale-[1.1] hover:text-blue-500 hover:shadow-blue-400 dark:hover:shadow transition-all">
              <FaGithub/>
            </a>

            <a href="https://vercel.com/koushik27" target="blank" className="home-links border dark:text-slate-400  hover:scale-[1.1] hover:text-blue-500 hover:shadow-blue-400 dark:hover:shadow transition-all">
              <IoLogoVercel/>
            </a>

            <a href="https://app.netlify.com/teams/koushikrk1324/projects" target="blank" className="home-links border dark:text-slate-400  hover:scale-[1.1] hover:text-blue-500 hover:shadow-blue-400 dark:hover:shadow transition-all">
              <SiNetlify/>
            </a>

            <a href="mailto:koushikrk1324@gmail.com" target="blank" className="home-links border dark:text-slate-400  hover:scale-[1.1] hover:text-blue-500 hover:shadow-blue-400 dark:hover:shadow transition-all">
              <SiGmail/>
            </a>

          </div>
          
        </div>

        {/* RIGHT DIV - Image */}
        <div className="">
          <img 
            src="https://res.cloudinary.com/dcfjexbss/image/upload/q_auto/f_auto/v1767702578/327752_jvktop.jpg"
            alt="kk"
            className=" rounded-2xl"
          />
        </div>

      </div>

      {/* SEPARATORS */}
      <hr className=" h-1 w-[85vw] bg-slate-400 text-slate-400 dark:bg-blue-400 dark:text-blue-400 rounded-full lg:hidden"/>

      <div className=" w-1 h-[70vh] bg-slate-400 dark:bg-blue-400 rounded-2xl hidden lg:flex"></div>

      {/* NAVIGATION LINKS DIV */}
      <nav className=" grid grid-cols-2 md:grid-cols-3 justify-items-center gap-5 md:gap-10 lg:grid-cols-3 lg:w-5/12">
        
        {navCards.map((opt) => (
          <NavCards opt={opt} key={opt.id}/>
        ))}
      </nav>

      <hr className=" h-1 w-[85vw] bg-slate-400 text-slate-400 dark:bg-blue-400 dark:text-blue-400 rounded-full lg:hidden"/>

    </section>
  )
}