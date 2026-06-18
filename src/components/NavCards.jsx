"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function NavCards({opt}) {
  return (
    <Link href={opt.location} key={opt.id}>

        <motion.div 
          initial={{opacity: 0, y: 70,}}
          whileInView={{opacity: 1, y: 0,}}
          transition={{duration: 0.4, ease: "easeOut",}}
          viewport={{once: false}}
          className=" h-40 md:h-50 lg:h-53 w-35 md:w-50 lg:w-45 p-5 flex flex-col items-center justify-evenly gap-2 rounded-xl shadow-xl bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-400  hover:scale-[1.05] hover:text-blue-500 dark:hover:shadow-blue-400 dark:hover:shadow transition-all active:scale-[0.95] active:text-blue-500"
        >

          {/* Icon */}
          <h1 className=" text-5xl">
            {opt.icon}
          </h1>

          {/* Section */}
          <h2 className=" font-semibold">
            {opt.name}
          </h2>

        </motion.div>

    </Link>
  )
}

export default NavCards