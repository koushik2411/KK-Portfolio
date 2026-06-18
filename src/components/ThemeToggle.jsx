"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeToggle() {

    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=' py-1.5 px-2.5 flex gap-2 items-center bg-slate-50 shadow dark:bg-slate-800/50 rounded-lg'
    >
        {theme === "dark" ? <FaSun/> : <FaMoon/> }
    </button>
  );
}

export default ThemeToggle