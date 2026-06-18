"use client";

import { FaDownload } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Header() {
    return (
        <header className=" p-2 bg-blue-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50">

            <div className=" p-2 w-full flex justify-between items-center">

                {/* LOGO */}
                <div>
                    <Link href="/">
                        <h1 className=" font-bold text-xl border-b-3 border-blue-500">KOUSHIK</h1>
                    </Link>
                </div>

                <div className=" flex gap-2">

                    {/* RESUME */}
                    <a href="/KOUSHIK resume.pdf" download>
                        <button className=" py-1.5 px-2.5 flex gap-2 items-center bg-slate-50 shadow dark:bg-slate-800/50 rounded-lg cursor-pointer hover:scale-[1.01] dark:hover:shadow-blue-400 dark:hover:shadow transition-all active:scale-[0.95] active:text-blue-500">
                            <span className=" hidden md:flex">Download Resume</span>    <FaDownload/>
                        </button>
                    </a>

                    {/* THEME TOGGLE SWITCH */}
                    <ThemeToggle/>
                </div>

            </div>

        </header>
    )
}