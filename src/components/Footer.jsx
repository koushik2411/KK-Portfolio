"use client";

import { Counter } from "counterapi";
import { useEffect, useState } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {

    const [ visitors, setVisitors] = useState(null);

    useEffect(() => {
        const counter = new Counter({
            workspace: "koushik-kumars-team-4503",
        });

        const updateCounter = async () => {
            try {

                const hasVisited = localStorage.getItem("visited");

                if (!hasVisited) {
                    await counter.up("first-counter-4503");
                    localStorage.setItem("visited", "true");
                }

                const result = await counter.get("first-counter-4503");

                setVisitors(result.data.up_count);
            } catch (error) {
                console.error("Counter Error:", error);
            }
        };

        updateCounter();
    }, []);

    return (
        <footer className=" p-2 pb-5 bg-blue-100 text-slate-900 dark:bg-slate-900 dark:text-slate-400 flex flex-col md:flex-row gap-2">
            
            <div className=" w-full md:w-9/12 text-3xl flex items-center justify-center gap-5 lg:gap-7">

                <a href="https://www.linkedin.com/in/koushik-kumar-1798251b9/" target="blank" className=" p-2 rounded-xl shadow-xl bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-400  hover:scale-[1.05] hover:text-blue-500 dark:hover:shadow-blue-400 dark:hover:shadow transition-all active:scale-[0.95] active:text-blue-500">
                    <FaLinkedin/>
                </a>

                <a href="https://www.facebook.com/koushik.kumar.52493499/" target="blank" className=" p-2 rounded-xl shadow-xl bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-400  hover:scale-[1.05] hover:text-blue-500 dark:hover:shadow-blue-400 dark:hover:shadow transition-all active:scale-[0.95] active:text-blue-500">
                    <FaFacebookSquare/>
                </a>

                <a href="https://www.instagram.com/koushikkr_8?igsh=MW8zaWV1NTUzeHB0Mw==" target="blank" className=" p-2 rounded-xl shadow-xl bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-400  hover:scale-[1.05] hover:text-blue-500 dark:hover:shadow-blue-400 dark:hover:shadow transition-all active:scale-[0.95] active:text-blue-500">
                    <FaInstagramSquare/>
                </a>

                <a href="https://wa.me/917542805733" target="blank" className=" p-2 rounded-xl shadow-xl bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-400  hover:scale-[1.05] hover:text-blue-500 dark:hover:shadow-blue-400 dark:hover:shadow transition-all active:scale-[0.95] active:text-blue-500">
                    <FaWhatsappSquare/>
                </a>

                <a href="koushikrk1324@gmail.com" target="blank" className=" p-2 rounded-xl shadow-xl bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-400  hover:scale-[1.05] hover:text-blue-500 dark:hover:shadow-blue-400 dark:hover:shadow transition-all active:scale-[0.95] active:text-blue-500">
                    <SiGmail/>
                </a>
            </div>

            {/* Visitors Count */}
            <div className=" pr-3 font-semibold flex items-center justify-center gap-1">
                <span className=" font-bold text-blue-500">{visitors ?? "..."}</span> Visitors
            </div>
        </footer>
    )
}