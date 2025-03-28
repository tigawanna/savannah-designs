"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.3 });
  const scrollDirection = useScrollDirection();

  // Animation variants based on scroll direction
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 100 : -100 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 30 : -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80")',
      }}
      initial={{ opacity: 1 }}
      >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-base-200/60 to-secondary/40 mix-blend-multiply"></div>

      {/* Content */}
      <motion.div 
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h1 
          className="text-base-content font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
          variants={itemVariants}
        >
          Where Nature Meets Elegance
        </motion.h1>

        <motion.div
          className="h-0.5 w-24 mx-auto bg-secondary/10 mb-6"
          variants={itemVariants}
        ></motion.div>

        <motion.p
          className="text-base-content/90 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          variants={itemVariants}
        >
          Creating harmonious spaces inspired by Kenya&apos;s breathtaking landscapes. Premium
          interior design that celebrates natural beauty.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="btn btn-primary btn-wide transition-all duration-300 shadow-lg hover:shadow-xl">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline border-[1px] transition-all duration-300">
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="text-base-content/80 text-sm mb-2">Scroll to explore</span>
        <div className="w-5 h-10 border-2 border-base-content/60 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-base-content rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          ></motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
