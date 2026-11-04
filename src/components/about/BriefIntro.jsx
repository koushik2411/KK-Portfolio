
"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp, IoMdMailOpen } from "react-icons/io";

export default function BriefIntro() {
    return (
        <motion.section 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className=" border border-violet-600/35 h-full w-full sm:w-md lg:max-w-sm p-3 rounded-2xl relative overflow-hidden backdrop-blur-md shadow-md"
        >

            {/* Bubbles */}
            <div className=" h-28 w-28 md:h-36 md:w-36 lg:h-48 lg:w-48 rounded-full blur-2xl absolute -top-10 -left-10 bg-blue-800/60" />

            <div className=" h-28 w-28 md:h-36 md:w-36 lg:h-48 lg:w-48 rounded-full blur-2xl absolute -bottom-10 -right-10 bg-violet-800/60" />


            <main className=" relative z-10 flex flex-col gap-3">

                {/* Image Card */}
                <Image
                  src="/koushik.png"
                  alt="kk"
                  height={200}
                  width={200}
                  loading="eager"
                  className=" w-56 md:my-6 mx-auto object-contain object-center rounded-[60%]"
                />


                {/* Intro Card */}
                <div>

                    <p className=" p-4 text-justify">
                        Hello, I am Koushik Kumar Manjhi, a Full Stack Developer passionate about building modern and user-friendly digital experiences. I specialize in web development and also work on mobile app development, turning ideas into functional and scalable applications. I enjoy exploring new technologies, solving problems, and continuously expanding my skills to build better digital solutions.
                    </p>

                </div>

                <div className=" h-1.5 w-[75%] mt-5 mx-auto rounded-[50%] bg-violet-500/20"/>


                {/* Social links */}
                <div className=" p-6 flex flex-col gap-5">

                    <a
                      href="https://www.linkedin.com/in/koushik-kumar-1798251b9/"
                      target="blank"
                      className=" flex items-center gap-3"
                    >
                        <span className=" text-blue-400  p-2 text-xl border rounded-full" ><FaLinkedinIn/></span> LinkedIn
                    </a>
                    
                    <a
                      href="mailto:koushikrk1324@gmail.com"
                      target="blank"
                      className=" flex items-center gap-3"
                    >
                        <span className=" text-yellow-300  p-2 text-xl border rounded-full"><IoMdMailOpen /></span> E-mail
                    </a>

                    <a
                      href="https://wa.me/7542805733"
                      target="blank"
                      className=" flex items-center gap-3"
                    >
                        <span className=" text-green-700  p-2 text-xl border rounded-full" ><IoLogoWhatsapp/></span> WhatsApp
                    </a>

                    <a
                      href="https://www.instagram.com/koushikkr_8?igsh=MW8zaWV1NTUzeHB0Mw=="
                      target="blank"
                      className=" flex items-center gap-3"
                    >
                        <span className=" text-pink-500  p-2 text-xl border rounded-full" ><GrInstagram/></span> Instagram
                    </a>

                    <a
                      href="https://www.facebook.com/share/1AqqiFL4eq/"
                      target="blank"
                      className=" flex items-center gap-3"
                    >
                        <span className=" text-blue-600  p-2 text-xl border rounded-full" ><FaFacebookF/></span> Facebook
                    </a>

                </div>

            </main>

        </motion.section>
    )
}