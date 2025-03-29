"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Leaf, HomeIcon, PaintBucket, Palette, Building, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  className?: string;
};

function ServiceCard({ icon, title, description, index, className }: ServiceCardProps) {
  function createCardVariants(index: number) {
    return {
      hidden: { 
        opacity: 0
      },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay: 0.3 + (index * 0.1)
        }
      }
    };
  }

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br from-primary/10 via-neutral/10 to-secondary/10 backdrop-blur-xs rounded-lg p-8 shadow-soft hover:shadow-md transition-shadow duration-300",
        className
      )}
      variants={createCardVariants(index)}
    >
      <div className="inline-flex items-center justify-center p-2 mb-6 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-primary mb-3">{title}</h3>
      <p className="text-base-content/70">{description}</p>
    </motion.div>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.1 });

  function createContainerVariants() {
    return {
      hidden: { 
        opacity: 0 
      },
      visible: { 
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  }

  function createTextVariants() {
    return {
      hidden: { 
        opacity: 0 
      },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.6 
        }
      }
    };
  }

  function createButtonVariants() {
    return {
      hidden: { 
        opacity: 0 
      },
      visible: { 
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay: 0.9 
        }
      }
    };
  }

  const services = [
    {
      icon: <HomeIcon className="w-5 h-5" />,
      title: "Residential Design",
      description:
        "Transform your home into a sanctuary that reflects both your personality and Kenya's natural beauty.",
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Commercial Spaces",
      description:
        "Create inspiring workplaces and commercial environments that embody your brand's identity.",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Design Consultancy",
      description:
        "Get expert advice on color schemes, materials, and layouts that enhance your existing spaces.",
    },
    {
      icon: <PaintBucket className="w-5 h-5" />,
      title: "Custom Furnishings",
      description:
        "Commission bespoke furniture and decor items crafted by local artisans using sustainable materials.",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Biophilic Design",
      description:
        "Integrate natural elements into your space to improve wellbeing and create a connection to the outdoors.",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Project Management",
      description:
        "Comprehensive oversight of your design project from concept to completion, ensuring quality and timeliness.",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-[200px] opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-[150px] opacity-50 -z-10"></div>

      <motion.div 
        ref={contentRef}
        className="max-w-7xl mx-auto"
        variants={createContainerVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16">
          <motion.span 
            className="section-subtitle" 
            variants={createTextVariants()}
          >
            WHAT WE OFFER
          </motion.span>
          
          <motion.h2 
            className="section-title" 
            variants={createTextVariants()}
          >
            Our Services
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-base-content/70"
            variants={createTextVariants()}
          >
            We provide a comprehensive range of interior design services, tailored to create spaces
            that are both beautiful and functional.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={createContainerVariants()}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              className={index % 2 === 0 ? "lg:transform lg:-translate-y-5" : ""}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={createButtonVariants()}
        >
          <a
            href="#contact"
            className="btn btn-primary px-8 py-3 shadow-lg hover:shadow-xl">
            Schedule a Consultation
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
