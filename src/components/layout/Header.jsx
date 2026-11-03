import { Great_Vibes } from "next/font/google";
import Menu from "./Menu";

const logoFont = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Header() {

    return (
        <header className=" w-full py-4 px-5 flex justify-between lg:justify-evenly items-center sticky top-0 left-0 z-50 backdrop-blur-2xl">

            {/* Logo */}
            <div className=" bg-linear-to-b from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                <h1 className={` pb-1 text-3xl border-b-2 border-amber-500 rounded-br-2xl ${logoFont.className}`}>
                    Koushik...
                </h1>
            </div>

            {/* Menu & CTA buttons */}
            <Menu/>

        </header>
    )
}