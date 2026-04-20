import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <header className=' w-full h-16 p-3 flex justify-between items-center bg-linear-to-b from-black/55 to-slate-900 fixed top-0 right-0 z-50 backdrop-blur-xl'>

            <h1 className=' text-2xl font-bold py-1 px-2.5 bg-linear-to-b from-cyan-300 to-cyan-600 bg-clip-text text-transparent border-3 border-l-cyan-300 border-t-cyan-300 border-r-cyan-600 border-b-cyan-600 rounded-tr-2xl rounded-bl-2xl'>
                KOUSHIK
            </h1>

            <Navbar/>

        </header>
    )
}

export default Header