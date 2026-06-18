import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub, FaUsers, } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { IoTimer } from "react-icons/io5";
import { RiLightbulbFlashFill, RiNextjsFill, RiSpeakFill } from "react-icons/ri";
import { SiCanva, SiExpress, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5/>,
        progress: 90,
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
        progress: 90,
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap />,
        progress: 80,
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss/>,
        progress: 85,
    },
    {
        name: "JavaScript",
        icon: <SiJavascript/>,
        progress: 75,
    },
    {
        name: "React",
        icon: <FaReact/>,
        progress: 75,
    },
    {
        name: "Next.js",
        icon: <RiNextjsFill/>,
        progress: 70,
    },
    {
        name: "Node.js",
        icon: <FaNodeJs/>,
        progress: 50,
    },
    {
        name: "Express.js",
        icon: <SiExpress/>,
        progress: 55,
    },
    {
        name: "MongoDB",
        icon: <SiMongodb/>,
        progress: 50,
    },
    {
        name: "Github",
        icon: <FaGithub/>,
        progress: 75,
    },
    {
        name: "Canva",
        icon: <SiCanva/>,
        progress: 65,
    },
    {
        name: "Communication",
        icon: <RiSpeakFill/>,
        progress: 80,
    },
    {
        name: "Leadership",
        icon: <FaUsers/>,
        progress: 80,
    },
    {
        name: "Time Management",
        icon: <IoTimer/>,
        progress: 80,
    },
    {
        name: "Problem Solving",
        icon: <RiLightbulbFlashFill/>,
        progress: 80,
    },
    {
        name: "Team Work",
        icon: <GiTeamIdea/>,
        progress: 80,
    },
]

export default skills;

// Template
// {
//         name: "",
//         icon: "",
//         progress: ,
//     },