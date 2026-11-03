import BeyondCode from "@/components/about/BeyondCode";
import BriefIntro from "@/components/about/BriefIntro";
import Education from "@/components/about/Education";
import Experience from "@/components/about/Experience";
import Exploring from "@/components/about/Exploring";
import { HiMiniIdentification } from "react-icons/hi2";

export default function About() {
    return (
        <section className=" min-h-screen p-3 lg:p-6">

            <h2 className=" p-3 flex items-center gap-2.5 text-lg border-b-2 font-semibold">
                <HiMiniIdentification/> About Me
            </h2>

            <main className=" mt-6 p-2 flex flex-col md:flex-row gap-6">

                {/* - - - Sidebar - Brief Intro with social links - - - */}
                <BriefIntro/>

                <div className=" w-full flex flex-col gap-6 overflow-x-auto">

                    {/* - - - Row 2 - Experience - - - */}
                    <Experience/>

                    {/* - - - Row 3 -  Education Journey - - - */}
                    <Education/>

                    {/* - - - Row 4 - Beyond Coding - - - */}
                    <BeyondCode/>

                    {/* - - - Row 5 - Currently Exploring - - - */}
                    <Exploring/>

                </div>

            </main>

        </section>
    )
};