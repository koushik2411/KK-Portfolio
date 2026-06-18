import React from 'react'

function About() {
  return (
    <section className=" min-h-screen w-full p-4 flex flex-col gap-5 bg-linear-to-b from-blue-50 to-blue-100 text-slate-900 dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-900 dark:text-slate-100">

        {/* Section Header */}
        <h1 className=' px-0.5 pb-1 text-xl font-bold border-b-2 border-blue-500'>
            About <span className=' text-blue-500'>Me</span>
        </h1>

        {/* Content */}
        <div className=' p-2 flex flex-col md:flex-row items-center lg:items-start gap-6'>

            {/* Image */}
            <img 
                src='https://res.cloudinary.com/dcfjexbss/image/upload/q_auto/f_auto/v1754742770/DSC_0341_it4kep.jpg'
                alt='kk'
                className='w-10/12 md:w-3/12 rounded-4xl shadow'
            />

            {/* Text */}
            <div className=' p-6 flex flex-col gap-6 text-justify bg-slate-50 dark:bg-slate-800/60 dark:text-slate-100 rounded-2xl shadow dark:shadow-blue-400'>
                <p>
                    I'm Koushik Kumar Manjhi, a Full-Stack Developer passionate about building clean, responsive, and user-friendly web applications. I enjoy transforming ideas into functional digital products that deliver seamless user experiences and solve real-world problems.
                </p>

                <p>
                    My academic journey began in Automobile Engineering, where I developed strong analytical thinking, problem-solving skills, and an understanding of complex systems. Over time, my interest in technology and software development grew, leading me to transition into Computer Science and Web Development.
                </p>

                <p>
                    I specialize in modern web technologies including HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, and the MERN stack. I focus on writing clean, maintainable, and scalable code while continuously improving my skills through hands-on project development and practical learning.
                </p>

                <p>
                    I am actively seeking opportunities as a Frontend Developer or Full-Stack Developer where I can contribute to impactful projects, collaborate with experienced professionals, and continue growing within the tech industry.
                </p>

                <p>
                    Beyond technology, I have a strong sports background. I played volleyball during my school years and represented my schools in competitive tournaments. Currently, I continue to play divisional-level cricket alongside my studies.
                </p>

                <p>
                    In my free time, I enjoy traveling, photography, and outdoor sports. I am driven by curiosity, consistency, and a passion for building products that create meaningful value for users.
                </p>

            </div>

        </div>

    </section>
  )
}

export default About