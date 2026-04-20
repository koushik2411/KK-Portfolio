"use client";

import { motion } from "framer-motion"

function CertificateCard({certificate}) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 16px rgba(34,211,238,0.7)",
      }}
      transition={{ duration: 0.4 }}
      className=" h-full w-full p-3 flex flex-col gap-3 items-center justify-evenly rounded-2xl bg-linear-to-b from-slate-800 to-black/55"
        >
            <a href={certificate.image} target="blank">
                <img
                    src={certificate.image}
                    className=" rounded-t-lg"
                />
            </a>

            <h1 className=" text-lg font-semibold text-center text-cyan-400">
                {certificate.name}
            </h1>

            <h2>
                {certificate.provider}
            </h2>
        </motion.div>
    )
}

export default CertificateCard