import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiGmail, SiNetlify } from "react-icons/si";

export const socialHero = [
    {
        title: "LinkedIn",
        icon: <FaLinkedinIn/>,
        url: "https://www.linkedin.com/in/koushik-kumar-1798251b9/",
        textColor: "#0a66c2",
        bgColor: "#fff",
    },
    {
        title: "Github",
        icon: <FaGithub/>,
        url: "https://github.com/koushik2411",
        textColor: "#fff",
        bgColor: "#181717",
    },
    {
        title: "Vercel",
        icon: <IoLogoVercel/>,
        url: "https://vercel.com/koushik27",
        textColor: "#fff",
        bgColor: "#000",
    },
    {
        title: "Netlify",
        icon: <SiNetlify/>,
        url: "https://app.netlify.com/teams/koushikrk1324/projects",
        textColor: "#00c7b7",
        bgColor: "#23272f",
    },
    {
        title: "E-mail",
        icon: <SiGmail/>,
        url: "mailto:koushikrk1324@gmail.com",
        textColor: "#ea4335",
        bgColor: "#fce8e6",
    },
];