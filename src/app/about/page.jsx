import React from "react";

function page() {
  return (
    <section className=" p-3 pb-6 h-full flex flex-col gap-4 bg-linear-to-b from-slate-900 to-black/55 bg-fixed bg-cover text-slate-200">
      <h1 className=" p-1 text-xl border-b-4 border-cyan-400 font-bold">
        About <span className=" text-cyan-400">Me</span>
      </h1>

      <div className=" text-justify flex flex-col gap-5 lg:flex-row lg:gap-8 xl:gap-6 lg:p-5 w-full">
        <div className="py-5 flex justify-center items-center lg:w-[30vw]">
          <img
            src="https://res.cloudinary.com/dcfjexbss/image/upload/q_auto/f_auto/v1754742770/DSC_0341_it4kep.jpg"
            className=" rounded-[50%] p-1 h-[45vh] lg:h-[55vh] customShadow"
          />
        </div>

        <div className=" lg:w-[60vw]">
          <p>
            I'm Koushik Kumar Manjhi, a Full-Stack Developer with a strong
            interest in building clean, responsive, and user-friendly web
            applications. I enjoy turning ideas into functional digital products
            that not only look good but also deliver a smooth user experience.
          </p>
          <br />

          <p>
            I began my academic journey in Automobile Engineering, where I
            developed a strong foundation in problem-solving, logical thinking,
            and understanding how complex systems work. Over time, I discovered
            a deep interest in technology and web development, which motivated
            to transition into Computer Science and Web Development.
          </p>
          <br />

          <p>
            I primarily work with HTML, CSS, TailwindCSS, JavaScript, MERN and
            Next.js. focusing on writing clean, maintainable, and scalable code.
            I follow a hands-on learning approach by building real-world
            projects and continuously improving through consistent practice.
          </p>
          <br />

          <p>
            I am actively seeking opportunities as a Frontend Developer or
            Full-Stack Developer where I can contribute meaningful projects,
            learn from experienced developers, and grow as a professional in the
            tech industry.
          </p>
          <br />

          <p>
            Apart from technical and mechanical background, I also have a sports
            background. I played volleyball during my school years and
            represented my respective schools as a member of our school's
            volleyball team. Currently, I continue to play professional cricket
            at the divisional level alongside my studies.
          </p>
          <br />

          <p>
            In my free time, I enjoy traveling, playing outdoor games, and
            photography. I'm driven by curiosity, consistency, and a strong
            desire to build products that create real value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;
