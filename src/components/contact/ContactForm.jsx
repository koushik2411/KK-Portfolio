"use client";

import { motion } from "framer-motion";
 import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { toast } from "sonner";

export default function ContactForm() {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();

            const data = text ? JSON.parse(text) : {};

            toast.success("Message sent successfully!");

            if (response.ok) {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className=" w-full p-6 sm:p-12 rounded-2xl backdrop-blur-2xl transition-all overflow-hidden">

            {/* Bubbles */}
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ x: [0, 70, -60, 30, 0], y: [0, -40, 30, -50, 0], scale: [1, 1.1, 0.9, 1.05, 1]}}
              transition={{ duration: 16, repeat: Infinity , repeatType: "reverse", ease: "easeInOut" }}
              className=" h-40 w-40 bg-linear-to-b from-blue-500 to-violet-800 absolute top-8 right-25 rounded-full blur-3xl"
            />

            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ x: [0, 60, -40, 30, 0], y: [0, -40, 30, -50, 0], scale: [1, 1.1, 0.9, 1.05, 1]}}
              transition={{ duration: 30, repeat: Infinity , repeatType: "reverse", ease: "easeInOut" }}
              className=" h-36 w-36 bg-linear-to-b from-pink-500 to-indigo-600 absolute top-90 right-40 rounded-full blur-3xl"
            />

            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ x: [0, 80, -40, 20, 0], y: [0, -80, 70, -40, 0], scale: [1, 1.1, 0.9, 1.05, 1]}}
              transition={{ duration: 16, repeat: Infinity , repeatType: "reverse", ease: "easeInOut" }}
              className=" h-20 w-20 bg-rose-300 absolute top-98 left-35 rounded-full blur-3xl"
            />

            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ x: [0, 90, -40, 50, 0], y: [0, -60, 90, -40, 0], scale: [1, 1.1, 0.9, 1.05, 1]}}
              transition={{ duration: 24, repeat: Infinity , repeatType: "reverse", ease: "easeInOut" }}
              className=" h-48 w-48 bg-linear-to-b from-blue-500 to-purple-800 absolute top-45 left-85 rounded-full blur-3xl"
            />

            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ x: [0, 50, -30, 20, 0], y: [0, -40, 30, -50, 0], scale: [1, 1.1, 0.9, 1.05, 1]}}
              transition={{ duration: 12, repeat: Infinity , repeatType: "reverse", ease: "easeInOut" }}
              className=" h-24 w-24 bg-blue-500 absolute top-28 left-15 rounded-full blur-3xl"
            />


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className=" w-full p-5 sm:p-8 flex flex-col items-center gap-8 border-3 border-violet-400/50 rounded-2xl relative z-50 bg-violet-800/5"
            >

                <h2 className=" w-full pb-2 text-center text-xl font-semibold border-b-2 border-violet-400/50 bg-linear-to-b from-white to-violet-300 bg-clip-text text-transparent">
                    Contact Form
                </h2>

                {/* Name */}
                <div className=" w-full flex flex-col gap-2">

                    <label className=" font-semibold">
                        Full Name :
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className=" border w-full p-2 rounded-lg outline-0 focus:bg-violet-100/15"
                    />
                </div>

                {/* Email */}
                <div className=" w-full flex flex-col gap-2">

                    <label className=" font-semibold">
                        Email :
                    </label>

                    <input
                      type="text"
                      name="email"
                      placeholder="example123@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className=" border w-full p-2 rounded-lg outline-0 focus:bg-violet-100/15"
                    />
                </div>

                {/* Message */}
                <div className=" w-full flex flex-col gap-2">

                    <label className=" font-semibold">
                        Message :
                    </label>

                    <textarea
                      rows={6}
                      name="message"
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className=" border w-full p-2 rounded-lg outline-0 resize-none focus:bg-violet-100/15"
                    />
                </div>

                {/* Button */}
                <button
                  disabled={loading}
                  className="w-60 my-2 p-2 self-center rounded-3xl bg-linear-to-b from-blue-500 to-violet-600 text-slate-50 active:scale-[0.97]"
                >
                    {loading 
                      ? <span className=" flex items-center gap-3 justify-center">Sending... <IoIosSend/></span>
                      : <span className=" flex items-center gap-3 justify-center">Send Message <IoSend/></span>
                    }
                </button>

            </form>

        </main>
    )
}