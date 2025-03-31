import { motion} from "motion/react";
// import { LazyImage } from "../helpers/LazyImage";
import { heroContent } from "@/data/hero";
import NextImage from "next/image";

export function HeroSection() {
  // const heroRef = useRef<HTMLDivElement>(null);
  // const contentRef = useRef<HTMLDivElement>(null);
  // const isInView = useInView(contentRef, { once: false, amount: 0.3 });

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
      // ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}>
      {/* Background image with blur effect */}
      <div className="absolute inset-0 w-full h-full">
        <NextImage
          className="absolute inset-0 object-cover min-h-screen object-center "
          fill
          alt="Nature background"
          priority
          quality={100}
          sizes="100vw"
          src="/sd-main.avif"
          // unoptimized
          // src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/60 via-black/50 to-base-100/20 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <motion.div
        // ref={contentRef}
        className="relative md:mt-28 z-10 max-w-2xl mx-auto text-hero-content h-full flex gap-6 flex-col items-center justify-center"
        variants={createContainerVariants()}
        initial="hidden"
        animate={"visible"}
        >
        <motion.h1
          className="font-serif text-6xl md:hidden text-center leading-tight tracking-tight"
          variants={createItemVariants()}>
          {heroContent.mainTitle}
        </motion.h1>

        <motion.h1
          className="font-serif hidden md:flex text-3xl md:text-5xl lg:text-6xl text-center leading-tight tracking-tight"
          variants={createItemVariants()}>
          {heroContent.subtitle}
        </motion.h1>


        <motion.div
          className="h-0.5 w-32 mx-auto bg-accent"
          variants={createItemVariants()}></motion.div>

        <motion.p
          className=" md:text-lg font-serif text-center   font-light md:leading-relaxed rounded-2xl text-sm max-w-[70%] md:max-w-xl"
          variants={createItemVariants()}>
          {heroContent.description}
        </motion.p>



        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-4"
          variants={createItemVariants()}>
          <a
            href={heroContent.primaryButton.href}
            className="btn btn-primary  btn-wide transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]">
            {heroContent.primaryButton.text}
          </a>
          <a
            href={heroContent.secondaryButton.href}
            className="btn bg-base-200 btn-outline text-base-content  border-1 transition-all duration-300 hover:bg-secondary/10">
            {heroContent.secondaryButton.text}
          </a>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          className=" flex flex-col mt-5 items-center"
          initial={{ opacity: 0 }}
          // animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}>
          <span className="text-primary text-sm mb-2">{heroContent.scrollIndicator}</span>
          <div className="w-5 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <motion.div
              className="size-5  bg-primary text-primary  rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
