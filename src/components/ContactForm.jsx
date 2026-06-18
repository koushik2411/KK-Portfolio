"use client";

import { useState } from "react";
import { toast } from "sonner";

function ContactForm() {

    const [loading , setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange =(e) => {
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

            toast.success("Message sent successfully");

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
    }

    return (
        <form
          onSubmit={handleSubmit}
          className=" w-full flex flex-col gap-4"
        >

            {/* Name */}
            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className=" border w-[70vw] lg:w-[35vw] p-2 rounded-lg outline-0"
            />

            {/* Email */}
            <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
                required
                className=" border w-[70vw] lg:w-[35vw] p-2 rounded-lg outline-0"
            />

            {/* Message */}
            <textarea
                rows="6"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className=" border w-[70vw] lg:w-[35vw] p-2 rounded-lg outline-0 resize-none"
            />

            {/* Button */}
            <button
              disabled={loading}
              className=" w-[30vw] lg:w-[35vw] my-2 p-2 self-center rounded-lg bg-linear-to-b from-blue-500 to-blue-600 text-slate-50 active:scale-[0.97]"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>

        </form>
    )
}

export default ContactForm