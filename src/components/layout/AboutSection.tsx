"use client";

import React, { useRef } from 'react';
import { motion, useInView } from "motion/react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { agencyStats } from '@/data/stats';

export function AboutSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.1 });
  const scrollDirection = useScrollDirection();

  // Animation variants based on scroll direction
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 50 : -50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 30 : -30,
      x: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: scrollDirection === 'down' ? 30 : -30,
      x: 5 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { duration: 0.7 }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      x: scrollDirection === 'down' ? 10 : -10 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding relative bg-primary/5">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "20px 20px",
          }}></div>
      </div>

      <motion.div
        ref={contentRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}>
        {/* Image side */}
        <motion.div
          className="relative h-[500px] overflow-hidden rounded-lg"
          variants={imageVariants}>
          <div className="absolute inset-0 bg-forest-900/20 z-10 rounded-lg"></div>
          <img
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&h=1200"
            alt="Kenya forest"
            className="w-full h-full object-cover object-center rounded-lg"
          />

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-xs rounded-lg p-5 shadow-soft z-20 max-w-[240px]"
            variants={childVariants}>
            <p className="text-sm text-forest-950 font-medium leading-relaxed">
              &quot;Nature is not just our inspiration, it&apos;s our guiding principle in
              everything we create.&quot;
            </p>
            <div className="mt-3 flex items-center">
              <div className="w-10 h-0.5 bg-forest-700 mr-3"></div>
              <span className="text-xs font-semibold text-forest-700">DESIGN PHILOSOPHY</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div className="flex flex-col" variants={textVariants}>
          <motion.span className="section-subtitle" variants={childVariants}>
            OUR STORY
          </motion.span>

          <motion.h2 className="section-title" variants={childVariants}>
            Bringing Kenya&apos;s Natural Beauty Indoors
          </motion.h2>

          <div className="space-y-6 mt-2 ">
            <motion.p variants={childVariants}>
              Founded in 2015, Savanna Design has grown from a boutique design studio to one of
              Kenya&apos;s most respected interior design firms. We blend contemporary aesthetics
              with traditional African elements to create spaces that are both timeless and deeply
              connected to their environment.
            </motion.p>

            <motion.p variants={childVariants}>
              Our team of designers, artisans, and craftspeople share a passion for creating
              interiors that reflect the unique beauty of Kenya—from the golden hues of the savanna
              to the rich textures of the forest. We believe that thoughtful design has the power to
              enhance wellbeing and foster harmony with nature.
            </motion.p>

            <motion.div className="pt-4 grid grid-cols-2 gap-6" variants={childVariants}>
              {agencyStats.map((stat, idx) => {
                return (
                  <motion.div
                    key={stat.title}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: scrollDirection === "down" ? 20 : -20,
                        x: idx % 2 === 0 ? -10 : 10,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: idx * 0.4, // Increasing delay based on index
                        },
                      },
                    }}>
                    <span className="block  text-4xl font-serif font-bold">
                      {stat.count}
                    </span>
                    <span className="text-sm text-muted-foreground">{stat.title}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.a
              href="#services"
              className="inline-block mt-2 text-secondary font-medium hover:text-secondary/70 underline-animation"
              variants={childVariants}>
              Discover our services
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


