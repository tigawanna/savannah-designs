/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
// import { LazyImage } from "../helpers/LazyImage";
import { heroContent } from "@/data/hero";
import NextImage from "next/image";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.3 });

  function createContainerVariants() {
    return {
      hidden: {
        opacity: 0.1,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          staggerChildren: 0.15,
        },
      },
    };
  }

  function createItemVariants() {
    return {
      hidden: {
        opacity: 0.2,
      },
      visible: {
        opacity: 1,
        transition: { duration: 0.6 },
      },
    };
  }

  return (
    <motion.section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}>
      {/* Background image with blur effect */}
      <div className="absolute inset-0 w-full h-full">
        {/* <LazyImage
          props={{
            src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80",
            alt: "Nature background",
            className:
              "-z-10 object-cover absolute inset-0 min-h-screen object-center transition-opacity duration-1000 ease-in-out",
          }}
        /> */}
        <NextImage
          className="absolute inset-0 object-cover min-h-screen object-center blur-sm"
          fill
          alt="Nature background"
          priority
          quality={100}
          sizes="100vw"
          // unoptimized
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 via-base-300/70 to-base-100/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <motion.div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-primary text-center px-4"
        variants={createContainerVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}>
        <motion.h1
          className="font-serif text-7xl md:hidden mt-6 mb-6"
          variants={createItemVariants()}>
          {heroContent.mainTitle}
        </motion.h1>
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
          variants={createItemVariants()}>
          {heroContent.subtitle}
        </motion.h1>

        <motion.div
          className="h-0.5 w-24 mx-auto bg-secondary/10 mb-6"
          variants={createItemVariants()}></motion.div>

        <motion.p
          className="text-primary text-lg mb-4 px-6 py-4  rounded-lg font-thin md:text-xl max-w-2xl mx-auto "
          variants={createItemVariants()}>
          {heroContent.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={createItemVariants()}>
          <a
            href={heroContent.primaryButton.href}
            className="btn btn-primary btn-wide transition-all duration-300 shadow-lg hover:shadow-xl">
            {heroContent.primaryButton.text}
          </a>
          <a
            href={heroContent.secondaryButton.href}
            className="btn btn-neutral border-[1px] transition-all duration-300">
            {heroContent.secondaryButton.text}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className=" flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}>
        <span className="text-primary text-sm mb-2">{heroContent.scrollIndicator}</span>
        <div className="w-5 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}></motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
