import ContactForm from "@/components/contact/ContactForm";
import { MdContactPhone } from "react-icons/md";

export default function Contact() {
    return (
        <section className=" min-h-screen w-full max-w-420 mx-auto p-3 lg:p-6">

            <h2 className=" p-3 flex items-center gap-2.5 text-lg border-b-2 font-semibold">
                <MdContactPhone/> Contact
            </h2>

            <main className=" mt-4 flex justify-center items-center">

                <ContactForm/>

            </main>

        </section>
    )
};