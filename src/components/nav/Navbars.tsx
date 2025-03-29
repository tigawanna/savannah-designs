"use client";


import { motion, AnimatePresence } from "motion/react";
import { ModeToggle } from "../theme/ThemeToggle";

type Route = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type DesktopNavProps = {
  routes: Route[];
};

// function scrollToPageHash(location: string) {
//   const element = document.getElementById(location);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// }

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
      <ModeToggle/>
    </div>
  );
}






type MobileNavProps = {
  routes: Route[];
  isOpen: boolean;
  onItemClick: () => void;
};

export function MobileNav({ routes, onItemClick }: MobileNavProps) {
  return (
    <AnimatePresence>
      <div className="flex flex-col justify-center gap-4">
        <a
          href="#"
          onClick={onItemClick}
          className="text-primary font-heading text-xl md:text-2xl font-medium">
          SAVANNA<span className="text-accent">DESIGNS</span>
        </a>
        <motion.div
          className="md:hidden  backdrop-blur-md shadow-soft overflow-hidden"
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
        <div className="flex justify-evenly">
          <ModeToggle />
        </div>
      </div>
    </AnimatePresence>
  );
}
