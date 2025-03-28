"use client";

import { useEffect, useRef } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroElement = heroRef.current;

      // Parallax effect for background
      heroElement.style.backgroundPositionY = `${scrollY * 0.5}px`;

      // Fade out text on scroll
      const opacity = 1 - scrollY / 700;
      const contentElement = heroElement.querySelector(".hero-content") as HTMLElement;
      if (contentElement) {
        contentElement.style.opacity = Math.max(0, opacity).toString();
        contentElement.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80")',
      }}>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-base-200/60 to-secondary/40 mix-blend-multiply"></div>

      {/* Content */}
      <div className=" relative z-10 max-w-4xl mx-auto text-center px-4 transition-all duration-300">
        <h1 className="text-base-content font-serif text-4xl md:text-6xl lg:text-7xl mb-6 opacity-0 animate-fade-in">
          Where Nature Meets Elegance
        </h1>

        <div
          className="h-0.5 w-24 mx-auto bg-secondary/10 mb-6 opacity-0 animate-scale-in"
          style={{ animationDelay: "300ms" }}></div>

        <p
          className="text-base-content/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}>
          Creating harmonious spaces inspired by Kenya&apos;s breathtaking landscapes. Premium
          interior design that celebrates natural beauty.
        </p>

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "900ms" }}>
          <a
            href="#projects"
            className="btn btn-primary btn-wide  transition-all duration-300 shadow-lg hover:shadow-xl">
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline border-[1px]  transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in"
        style={{ animationDelay: "1200ms" }}>
        <span className="text-base-content/80 text-sm mb-2">Scroll to explore</span>
        <div className="w-5 h-10 border-2 border-base-content/60 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-base-content rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
}
