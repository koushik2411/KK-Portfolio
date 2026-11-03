"use client";

import { footerLinks } from "@/lib/footerLinks";
import { Counter } from "counterapi";
import { useEffect, useState } from "react";

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
        <footer className=" h-24 p-4 backdrop-blur-2xl flex flex-col md:flex-row gap-2" suppressHydrationWarning>
            
            <div className=" w-full md:w-9/12 text-3xl flex items-center justify-center gap-5 lg:gap-7">

                {footerLinks.map((link,index) => (
                    <a
                      key={index}
                      className=" p-2 text-xl md:text-2xl border rounded-full" style={{ color: link.textColor, backgroundColor: link.bgColor}}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            {/* Visitors Count */}
            <div className=" pr-3 font-semibold flex items-center justify-center gap-1">
                <span className=" text-amber-400">{visitors ?? "..."}</span> Visitors
            </div>
        </footer>
    )
}