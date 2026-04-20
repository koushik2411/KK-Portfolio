"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className=''>

            {/* Desktop Menu*/}
            <div className=' hidden md:flex gap-3 text-slate-300'>
                <Link href="/" className={pathname === "/" ? "text-cyan-400 border-b-4 rounded" : ""}>Home</Link>
                <Link href="/about" className={pathname === "/about" ? "text-cyan-400 border-b-4 rounded" : ""}>About</Link>
                <Link href="/skills" className={pathname === "/skills" ? "text-cyan-400 border-b-4 rounded" : ""}>Skills</Link>
                <Link href="/projects" className={pathname === "/projects" ? "text-cyan-400 border-b-4 rounded" : ""}>Projects</Link>
                <Link href="/trainings" className={pathname === "/trainings" ? "text-cyan-400 border-b-4 rounded" : ""}>Trainings</Link>
                <Link href="/certificates" className={pathname === "/certificates" ? "text-cyan-400 border-b-4 rounded" : ""}>Certificates</Link>
                <Link href="/contact" className={pathname === "/contact" ? "text-cyan-400 border-b-4 rounded" : ""}>Contact</Link>
            </div>

            {/* Menu Button */}
            <button className=' md:hidden border p-1.5 rounded-lg text-2xl text-slate-200' onClick={() => setOpen(!open)}>
                {open ? <IoClose className=' text-red-500 text-2xl'/> : <FaBars/>}
            </button>

            {/* Mobile Menu */}
            {open && (
                <motion.div 
                initial={{ opacity: 0, y: -10}}
                whileInView={{ opacity: 1, y: 0}}
                className=' md:hidden w-full py-5 px-9 flex flex-col gap-7 fixed right-0 top-16 bg-linear-to-b from-slate-900 to-black active:scale-80 transition text-slate-200 z-100'>
                    <Link href="/" onClick={() => setOpen(false)} className={pathname === "/" ? "border-l-6 px-3 text-cyan-400 rounded" : ""}>Home</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className={pathname === "/about" ? "border-l-6 px-3 text-cyan-400 rounded" : ""}>About</Link>
                    <Link href="/skills" onClick={() => setOpen(false)} className={pathname === "/skills" ? "border-l-6 px-3 text-cyan-400 rounded" : ""}>Skills</Link>
                    <Link href="/projects" onClick={() => setOpen(false)} className={pathname === "/projects" ? "border-l-6 px-3 text-cyan-400 rounded" : ""}>Projects</Link>
                    <Link href="/trainings" onClick={() => setOpen(false)} className={pathname === "/trainings" ? "border-l-6 px-3 text-cyan-400 rounded" : ""}>Trainings</Link>
                    <Link href="/certificates" onClick={() => setOpen(false)} className={pathname === "/certificates" ? "border-l-6 px-3 text-cyan-400 rounded" : ""}>Certificates</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className={pathname === "/contact" ? "border-l-6 px-3 text-cyan-400 rounded" : ""}>Contact</Link>
                </motion.div>
            )}

        </nav>
    )
}

export default Navbar