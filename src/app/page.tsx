"use client";
import { AboutSection } from "@/components/layout/AboutSection";
import { ContactSection } from "@/components/layout/ContactSection";
import { FooterSection } from "@/components/layout/FooterSection";
import { HeroSection } from "@/components/layout/HeroSection";
import { ResponsiveGenericToolbar } from "@/components/nav/ResponsiveGenericToolbar";
import { ProjectsSection } from "@/components/layout/ProjectsSection";
import { ServicesSection } from "@/components/layout/ServicesSection";
// import { Navbar } from "@/components/Navbar";



export default function Home() {
  return (
    <ResponsiveGenericToolbar>
      <div className="flex flex-col min-h-screen ">
        {/* <Navbar /> */}
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </ResponsiveGenericToolbar>
  );
}
