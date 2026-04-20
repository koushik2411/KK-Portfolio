"use client";

import { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoVercel, IoMailOpen } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";

export default function Home() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("/api/visit")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if(data.count) setCount(data.count);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  return (
    <main className=" h-[92vh] min-h-full bg-linear-to-b from-slate-900 to-black/55/55 bg-fixed bg-cover text-slate-200">

      <div className=" h-full md:px-12 border-b border-cyan-600 flex flex-col-reverse justify-evenly md:flex-row lg:justify-center">

        {/*Text Div*/}
        <div className=" md:h-auto md:w-[60%] py-4 flex flex-col justify-evenly gap-1 md:justify-center items-center md:items-start">

          <h2 className=" md:text-lg lg:text-xl">
            Hello, I am
          </h2>

          <h1 className=" font-bold text-2xl md:text-3xl lg:text-5xl bg-linear-to-b from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            Koushik Kumar Manjhi
          </h1>

          <h2 className=" font-semibold text-lg md:text-xl lg:text-3xl">
            I am a <span className=" text-cyan-500">Full-Stack Developer</span>.
          </h2>

          {/* Homepage Links */}
          <div className=" mt-5 flex gap-5 text-cyan-600">
            <a href="https://www.linkedin.com/in/koushik-manjhi-1798251b9/" target="blank" className="homeLinks text-2xl" title="LinkedIn">
              <FaLinkedinIn/>
            </a>
            <a href="https://github.com/koushik2411" target="blank" className="homeLinks text-2xl lg:text-3xl" title="Github">
              <FaGithub/>
            </a>
            <a href="https://vercel.com/koushik27" target="blank" className="homeLinks text-2xl lg:text-3xl" title="Vercel">
              <IoLogoVercel/>
            </a>
            <a href="https://app.netlify.com/teams/koushikrk1324/projects" target="blank" className="homeLinks text-2xl lg:text-3xl" title="Netlify">
              <SiNetlify/>
            </a>
            <a href="mailto:koushikrk1324@gmail.com" target="blank" className="homeLinks text-2xl lg:text-3xl" title="E-mail">
              <IoMailOpen/>
            </a>
          </div>

          <button className=" mt-5 py-2 px-4 bg-linear-to-b from-cyan-400 to-cyan-600 text-slate-50 rounded-xl flex items-center gap-2 active:scale-[0.95] cursor-pointer">
            Download Resume <FaDownload/>
          </button>

        </div>

        {/*Image Div*/}
        <div className=" flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dcfjexbss/image/upload/q_auto/f_auto/v1767702578/327752_jvktop.jpg"
            className=" rounded-[55%] h-[85%] md:h-[60%] lg:h-[70%] customShadow"
          />
        </div>

      </div>

      {/*Visitors Count*/}
      {/* <div className=" flex items-center justify-end pr-4 py-1.5">
        <p className=" text-xs">
          Visitors: <span className="text-cyan-400">{count}</span>
        </p>
      </div> */}

    </main>
  );
}
