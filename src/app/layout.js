import { Ubuntu } from "next/font/google";
import "./globals.css";
import AnimatedBg from "@/components/layout/AnimatedBg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
})

export const metadata = {
  title: "Koushik K.M.",
  description: "Koushik's digital portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ubuntu.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <AnimatedBg/>

        <Header/>
        
        {children}

        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="system"
          duration={5000}
        />

        <Footer/>
        
      </body>
    </html>
  );
}
