"use client";
import { AboutSection } from "@/components/layout/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/layout/HeroSection";
import { Navbar } from "@/components/Navbar";
// import { useEffect } from "react";


export default function Home() {
    // useEffect(() => {
    //   // Add custom styles for the diagonal clip path
    //   const style = document.createElement("style");
    //   style.textContent = `
    //   .clip-diagonal {
    //     clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
    //   }
    // `;
    //   document.head.appendChild(style);

    //   return () => {
    //     document.head.removeChild(style);
    //   };
    // }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <Footer/>
    </div>
  );
}
