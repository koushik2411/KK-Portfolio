import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoMailOpen } from 'react-icons/io5'
import { SiFiverr } from 'react-icons/si'

function Footer() {
    return (
        <footer className=' w-full py-4 text-4xl text-cyan-600 flex justify-evenly items-center border-t bg-black/55'>
            <a href='https://www.linkedin.com/in/koushik-manjhi-1798251b9/' target='blank'>
                <FaLinkedin className='homeLinks'/>
            </a>
            <a href='https://www.instagram.com/koushikkr_8?igsh=MW8zaWV1NTUzeHB0Mw==' target='blank'>
                <FaInstagram className='homeLinks'/>
            </a>
            <a href='https://www.facebook.com/koushik.kumar.52493499/' target='blank'>
                <FaFacebook className='homeLinks'/>
            </a>
            <a href='https://www.fiverr.com/koushik_kr?public_mode=true' target='blank'>
                <SiFiverr className='homeLinks'/>
            </a>
            <a href='mailto:koushikrk1324@gmail.com' target='blank'>
                <IoMailOpen className='homeLinks'/>
            </a>
            <a href='https://wa.me/917542805733' target='blank'>
                <FaWhatsapp className='homeLinks'/>
            </a>
        </footer>
    )
}

export default Footer