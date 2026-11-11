"use client"

import { socialHero } from "@/lib/socialHero";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section className={` min-h-screen md:min-h-[92vh] w-full max-w-360 mx-auto md:p-6 pb-12 sm:pb-0 flex flex-col-reverse lg:flex-row justify-evenly lg:justify-center items-center sm:gap-2 relative overflow-hidden`}>

            {/* Moving Bubbles */}
            <motion.div
              initial={{ x: 0, y: 0, scale: 0.8 }}
              animate={{x: [340, -340, 340, -340], y: [], scale: [1.5, 1, 1, 0.5] }}
              transition={{duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
              className=" h-24 w-24 bg-pink-900 absolute top-[50%] left-[50%] rounded-full blur-2xl"
            />

            <motion.div
              initial={{ x: 0, y: 0, scale: 0.8 }}
              animate={{x: [-340, 340, -340, 340], y: [], scale: [1, 0.5, 1.5, 1] }}
              transition={{duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
              className=" h-24 w-24 bg-pink-900 absolute top-[50%] left-[50%] rounded-full blur-2xl"
            />

            <motion.div
              initial={{ x: 0, y: 0, scale: 0.8 }}
              animate={{x: [], y: [340, -340, 340, -340], scale: [1.5, 1, 1, 0.5] }}
              transition={{duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
              className=" h-24 w-24 bg-pink-900 absolute top-[50%] left-[50%] rounded-full blur-2xl"
            />

            <motion.div
              initial={{ x: 0, y: 0, scale: 0.8 }}
              animate={{x: [], y: [-340, 340, -340, 340], scale: [1, 0.5, 1.5, 1] }}
              transition={{duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
              className=" h-24 w-24 bg-pink-900 absolute top-[50%] left-[50%] rounded-full blur-2xl"
            />


            {/* - - - Text Content - - - */}
            <main className=" lg:p-5 flex flex-col items-center md:items-start relative z-10">
                
                {/* Name and intro div */}
                <main className=" w-full sm:w-auto flex flex-col items-center md:items-start gap-2 lg:gap-6">

                    <h3 className=" text-lg sm:text-2xl">
                        <span className=" font-semibold bg-linear-to-b from-violet-50 to-violet-400 bg-clip-text text-transparent">Hello</span>, I am
                    </h3>

                    
                    <h1 className=" text-3xl sm:text-5xl lg:text-7xl font-semibold bg-linear-to-b from-white to-pink-200 bg-clip-text text-transparent">
                        Koushik Kumar Manjhi
                    </h1>

                    <h2 className=" text-xl sm:text-4xl">
                        I am a {' '}
                        <span className=" font-semibold bg-linear-to-b from-pink-100 to-violet-500 bg-clip-text text-transparent">
                            <TypeAnimation
                              sequence={[
                                'Frontend Developer', 2000,
                                'MERN Stack Developer',2000,
                                'React Native App Developer', 2000,
                              ]}
                              wrapper="span"
                              speed={50}
                              repeat={Infinity}
                            />
                        </span>
                    </h2>

                </main>

                {/* Social buttons div */}
                <main className=" mt-12 sm:mt-10 lg:mt-24 flex items-center gap-5 sm:gap-10">
                    {socialHero.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="blank"
                          className=" flex flex-col items-center gap-1 sm:gap-3 hover:scale-[1.05] transition-all"
                        >
                            <h2  
                              style={{ color: item.textColor, backgroundColor: item.bgColor, "--hoverShadow": item.textColor }}
                              className=" p-2 text-2xl border rounded-full sm:text-5xl hover:shadow-[0_10px_25px_var(--hoverShadow)] transition-all"
                            >
                                {item.icon}
                            </h2>

                            <p className={` text-sm `}>
                                {item.title}
                            </p>
                        </a>
                    ))}
                </main>

            </main>

            {/* - - - Image Content - - - */}
            <motion.main 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className=" mb-5 sm:mb-0 mx-auto relative z-10"
            >

                <Image
                  src="/koushik.png"
                  alt="Koushik"
                  height={400}
                  width={400}
                  loading="eager"
                  className=" w-72 sm:w-md object-contain object-center rounded-[60%] shadow-md"
                />
            </motion.main>

        </section>
    );
}