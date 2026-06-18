"use client";

import ContactForm from '@/components/ContactForm';
import React from 'react'
import { RiContactsBook3Fill } from 'react-icons/ri';

function Contact() {
  return (
    <section className=" min-h-screen w-full p-4 flex flex-col gap-5 bg-linear-to-b from-blue-50 to-blue-100 text-slate-900 dark:bg-linear-to-b dark:from-slate-900 dark:to-slate-900 dark:text-slate-100">

        {/* Section Header */}
        <h1 className=' px-0.5 pb-1 text-xl font-bold border-b-2 border-blue-500'>
            Contact <span className=' text-blue-500'>Me</span>
        </h1>

        {/* Content */}
        <div className=' p-2 flex justify-center items-center'>

            <div className=' max-w-220 flex flex-col lg:flex-row bg-slate-100 dark:bg-slate-800/50 rounded-xl shadow dark:shadow-blue-400'>

                {/* Icon Div */}
                <div className=' w-6/12 px-8 py-16 justify-center items-center hidden md:flex self-center'>

                    <h1 className=' text-[210px] text-slate-700 dark:text-blue-400'>
                        <RiContactsBook3Fill/>
                    </h1>
                </div>

                {/* Form Div */}
                <div className=' p-4 lg:p-6 flex flex-col items-center justify-center gap-10'>

                    <h2 className=' w-full p-1 text-blue-500 text-center text-xl font-semibold border-b-2'>
                        Contact Form
                    </h2>

                    <ContactForm/>

                </div>
            </div>

        </div>

    </section>
  )
}

export default Contact