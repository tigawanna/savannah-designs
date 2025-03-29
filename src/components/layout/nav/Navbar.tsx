"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { routes } from "./routes";


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12",
        isScrolled ? "bg-base-100/70 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-primary font-heading text-xl md:text-2xl font-medium">
          SAVANNA<span className="text-accent">DESIGN</span>
        </a>

        {/* Desktop Navigation */}
        <DesktopNav routes={routes} />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu">
          <div
            className={`w-6 h-5 flex flex-col justify-between relative ${
              mobileMenuOpen ? "transform" : ""
            }`}>
            <span
              className={`w-full h-0.5 bg-primary rounded-full transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}></span>
            <span
              className={`w-full h-0.5 bg-primary rounded-full transition-all ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}></span>
            <span
              className={`w-full h-0.5 bg-primary rounded-full transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        routes={routes}
        isOpen={mobileMenuOpen}
        onItemClick={() => setMobileMenuOpen(false)}
      />
    </motion.nav>
  );
}


type Route = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type DesktopNavProps = {
  routes: Route[];
};

export function DesktopNav({ routes }: DesktopNavProps) {
  return (
    <div className="hidden md:flex space-x-8 items-center">
      {routes.map((route, index) => (
        <motion.a
          key={route.name}
          href={route.href === "/" ? "#home" : `#${route.name}`}
          className="text-sm font-medium text-primary hover:text-accent transition-colors underline-animation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          whileHover={{ scale: 1.05 }}>
          {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
        </motion.a>
      ))}
    </div>
  );
}






type MobileNavProps = {
  routes: Route[];
  isOpen: boolean;
  onItemClick: () => void;
};

export function MobileNav({ routes, isOpen, onItemClick }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden absolute left-0 right-0 bg-base-100/95 backdrop-blur-md shadow-soft overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <div className="px-6 py-4 flex flex-col space-y-4">
            {routes.map((route, index) => (
              <motion.a
                key={route.name}
                href={route.href === "/" ? "#home" : `#${route.name}`}
                className="text-sm font-medium text-primary hover:text-accent transition-colors py-2 flex items-center gap-2"
                onClick={onItemClick}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}>
                <span className="text-primary/70">{route.icon}</span>
                <span>{route.name.charAt(0).toUpperCase() + route.name.slice(1)}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
