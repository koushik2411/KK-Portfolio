import { FaPaintBrush, FaUsers } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoNodejs, IoLogoReact, IoTimer } from "react-icons/io5";
import { RiSpeakAiFill } from "react-icons/ri";
import { SiBootstrap, SiExpress, SiFirebase, SiFramer, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// - - - Frontend - - - //
export const skillCategories = [
    {
        title: "All",
        value: "All",
    },
    {
        title: "Frontend",
        value: "frontend",
    },
    {
        title: "Backend & Database",
        value: "backend",
    },
    {
        title: "Tools",
        value: "tools",
    },
    {
        title: "Soft Skills",
        value: "soft",
    },
]


// - - - Frontend - - - //
export const skills = [
    {
        title: "HTML",
        icon: <IoLogoHtml5/>,
        progress: 95,
        category: "frontend",
        iconColor: "#E34F26",
    },
    {
        title: "CSS",
        icon: <IoLogoCss3/>,
        progress: 95,
        category: "frontend",
        iconColor: "#1572B6",
    },
    {
        title: "JavaScript",
        icon: <SiJavascript/>,
        progress: 85,
        category: "frontend",
        iconColor: "#F7DF1E",
    },
    {
        title: "TypeScript",
        icon: <SiTypescript/>,
        progress: 70,
        category: "frontend",
        iconColor: "#3178C6",
    },
    {
        title: "React",
        icon: <IoLogoReact/>,
        progress: 90,
        category: "frontend",
        iconColor: "#61DAFB",
    },
    {
        title: "Next.js",
        icon: <SiNextdotjs/>,
        progress: 85,
        category: "frontend",
        iconColor: "#EDEDED",
    },
    {
        title: "Tailwind CSS",
        icon: <SiTailwindcss/>,
        progress: 90,
        category: "frontend",
        iconColor: "#06B6D4",
    },
    {
        title: "Bootstrap",
        icon: <SiBootstrap/>,
        progress: 90,
        category: "frontend",
        iconColor: "#7952B3",
    },
    {
        title: "Framer Motion",
        icon: <SiFramer/>,
        progress: 70,
        category: "frontend",
        iconColor: "#0055FF",
    },
    {
        title: "React Native",
        icon: <TbBrandReactNative/>,
        progress: 65,
        category: "frontend",
        iconColor: "#61DAFB",
    },
    {
        title: "Node.js",
        icon: <IoLogoNodejs/>,
        progress: 80,
        category: "backend",
        iconColor: "#5FA04E",
    },
    {
        title: "Express.js",
        icon: <SiExpress/>,
        progress: 65,
        category: "backend",
        iconColor: "#EDEDED",
    },
    {
        title: "MongoDB",
        icon: <SiMongodb/>,
        progress: 65,
        category: "backend",
        iconColor: "#47A248",
    },
    {
        title: "Supabase",
        icon: <SiSupabase/>,
        progress: 65,
        category: "backend",
        iconColor: "#3FCF8E",
    },
    {
        title: "Firebase",
        icon: <SiFirebase/>,
        progress: 65,
        category: "backend",
        iconColor: "#FFCA28",
    },
    {
        title: "Github",
        icon: <SiGithub/>,
        progress: 70,
        category: "tools",
        iconColor: "#F0F6FC",
    },
    {
        title: "Canva",
        icon: <FaPaintBrush/>,
        progress: 70,
        category: "tools",
        iconColor: "#00C4CC",
    },
    {
        title: "Communication",
        icon: <RiSpeakAiFill/>,
        progress: 80,
        category: "soft",
        iconColor: "#3B82F6",
    },
    {
        title: "Leadership",
        icon: <FaUsers/>,
        progress: 80,
        category: "soft",
        iconColor: "#0EA5E9",
    },
    {
        title: "Time Management",
        icon: <IoTimer/>,
        progress: 80,
        category: "soft",
        iconColor: "#F59E0B",
    },
    {
        title: "Team Work",
        icon: <GiTeamIdea/>,
        progress: 80,
        category: "soft",
        iconColor: "#0066CC",
    },
]
