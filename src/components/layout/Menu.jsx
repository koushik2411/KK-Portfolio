"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaLaptopCode, FaSun, FaTools, FaUser, FaUserGraduate } from "react-icons/fa";
import { IoCall, IoClose, IoHome } from "react-icons/io5";
import { motion } from "framer-motion";
import { RiPagesFill } from "react-icons/ri";

export default function Menu() {

    const pathname = usePathname();
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=" lg:w-6/12 flex items-center justify-between">

            {/* - - - Desktop Menu - - - */}
            <nav className=" hidden lg:flex items-center gap-5">

                <Link href="/" className={` ${pathname === "/" ? " border-b-3 border-blue-500 text-blue-500 rounded-sm font-semibold" : "" }`}>Home</Link>
                <Link href="/about" className={` ${pathname.includes("about") ? " border-b-3 border-blue-500 text-blue-500 rounded-sm font-semibold" : "" }`}>About</Link>
                <Link href="/skills" className={` ${pathname.includes("skills") ? " border-b-3 border-blue-500 text-blue-500 rounded-sm font-semibold" : "" }`}>Skills</Link>
                <Link href="/projects" className={` ${pathname.includes("projects") ? " border-b-3 border-blue-500 text-blue-500 rounded-sm font-semibold" : "" }`}>Projects</Link>
                <Link href="/certificates" className={` ${pathname.includes("certificates") ? " border-b-3 border-blue-500 text-blue-500 rounded-sm font-semibold" : "" }`}>Certificates</Link>
                <Link href="/contact" className={` ${pathname.includes("contact") ? " border-b-3 border-blue-500 text-blue-500 rounded-sm font-semibold" : "" }`}>Contact</Link>

            </nav>


            {/* - - - CTA buttons - - - */}
            <div className=" flex items-center justify-end gap-3">

                <a>
                    <button
                      className=" py-1.5 px-4 hidden sm:flex items-center gap-1.5 rounded-3xl hover:bg-linear-to-br hover:from-blue-500 hover:to-purple-600 cursor-pointer transition-all"
                    >
                        Resume <RiPagesFill/>
                    </button>
                </a>

                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={` p-2 rounded-full lg:hidden transition-all text-2xl hover:bg-linear-to-b from-blue-500 to-violet-500 cursor-pointer ${menuOpen ? "bg-red-600 text-white" : ""}`}
                >
                    { menuOpen ? <IoClose/> : <FaBars/> }
                </button>

                {/* <button
                  className={` p-2 rounded-full hidden lg:flex transition-all hover:bg-linear-to-b from-blue-500 to-violet-500 cursor-pointer`}
                >
                    <FaSun/>
                </button> */}

            </div>

            {/* - - - Mobile Nav - - - */}
            {menuOpen && (
                <div 
                  onClick={() => setMenuOpen(false)}
                  className=" w-full min-h-screen absolute top-18 right-0 bg-black/90 transition-all"
                >
                    
                    <motion.nav 
                      initial={{ x: 30, y: -30, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      exit={{ x: 30, y: -30, opacity: 0}}
                      transition={{ delay: 0.2, duration: 0.2}}
                      className=" w-72 p-8  absolute top-5 right-5 border-3 border-blue-600/30 flex flex-col gap-6 rounded-3xl backdrop-blur-xs bg-linear-to-b from-blue-800/30 to-violet-600/10"
                    >

                        <Link href="/" className={` flex items-center gap-2.5 ${pathname === "/" ? " border border-r-6 p-3 rounded-3xl text-blue-400" : ""}`}><IoHome/> Home</Link>
                        <Link href="/about" className={` flex items-center gap-2.5 ${pathname.includes("about") ? " border border-r-6 p-3 rounded-3xl text-blue-400" : ""}`}><FaUser/> About</Link>
                        <Link href="/skills" className={` flex items-center gap-2.5 ${pathname.includes("skills") ? " border border-r-6 p-3 rounded-3xl text-blue-400" : ""}`}><FaTools/> Skills</Link>
                        <Link href="/projects" className={` flex items-center gap-2.5 ${pathname.includes("projects") ? " border border-r-6 p-3 rounded-3xl text-blue-400" : ""}`}><FaLaptopCode/> Projects</Link>
                        <Link href="/certificates" className={` flex items-center gap-2.5 ${pathname.includes("certificates") ? " border border-r-6 p-3 rounded-3xl text-blue-400" : ""}`}><FaUserGraduate/> Certificates</Link>
                        <Link href="/contact" className={` flex items-center gap-2.5 ${pathname.includes("contact") ? " border border-r-6 p-3 rounded-3xl text-blue-400" : ""}`}><IoCall/> Contact</Link>

                        <a>
                            <button
                              className=" mt-4 w-full py-3 flex items-center justify-center gap-2 rounded-3xl bg-linear-to-b from-blue-500 to-purple-600 cursor-pointer transition-all"
                            >
                                Resume <RiPagesFill/>
                            </button>
                        </a>

                    </motion.nav>
                </div>
            )}

        </div>
    )
}