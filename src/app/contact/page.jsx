"use client";

import { useState } from "react";

function ContactPage() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch("/api/contact", {
  //     method: "POST",
  //     body: JSON.stringify(form),
  //   });

  //   const data = await res.json();
  //   alert(data.message);
  // };

  return (
    <section className=" p-3 min-h-[83vh] lg:min-h-full bg-linear-to-b from-slate-900 to-black/55 bg-fixed bg-cover text-slate-200">
      <h1 className=" text-xl font-bold p-1 border-b-4 border-cyan-400">
        Contact <span className=" text-cyan-400">Me !</span>
      </h1>

      <div className=" w-full min-h-full p-5 flex flex-col gap-5 items-center justify-evenly">
        <form className=" p-3 w-full max-w-150 flex flex-col gap-5 bg-linear-to-b from-slate-900 to-black/55 rounded-xl">
          <div className="inputDiv">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Ninja Hattori"
              // onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="inputDiv">
            <label>Email</label>
            <input
              type="email"
              placeholder="hattori@ninja.com"
              // onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="inputDiv">
            <label>Message</label>
            <textarea
              placeholder="Enter your message..."
              rows={6}
              // onChange={(e) => setForm({ ...form, message: e.target.value })}
              className=" border px-2 py-1 rounded-xl resize-none outline-none"
            />
          </div>

          <button className=" p-2 mt-5 bg-linear-to-b from-cyan-400 to-cyan-600 rounded-xl active:scale-[0.95]">
            Submit
          </button>
        </form>

        <div className=" p-5 flex flex-col gap-3">
          <p className=" text-center text-xs text-red-400 animate-pulse">
            Form is not working currently.
          </p>
          <p className=" text-xs text-cyan-100">
            You can also contact me on social media. Links are given below in
            footer section.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
