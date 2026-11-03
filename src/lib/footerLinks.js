import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiGmail, SiNetlify } from "react-icons/si";

export const footerLinks = [
    {
        title: "LinkedIn",
        icon: <FaLinkedinIn/>,
        url: "",
        textColor: "#0a66c2",
        bgColor: "#fff",
    },
    {
        title: "Github",
        icon: <FaGithub/>,
        url: "",
        textColor: "#fff",
        bgColor: "#181717",
    },
    {
        title: "Vercel",
        icon: <IoLogoVercel/>,
        url: "",
        textColor: "#fff",
        bgColor: "#000",
    },
    {
        title: "Netlify",
        icon: <SiNetlify/>,
        url: "",
        textColor: "#00c7b7",
        bgColor: "#23272f",
    },
    {
        title: "E-mail",
        icon: <SiGmail/>,
        url: "",
        textColor: "#ea4335",
        bgColor: "#fce8e6",
    },
]