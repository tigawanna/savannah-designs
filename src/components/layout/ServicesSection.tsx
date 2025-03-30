"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/services";

// Data that could be loaded from a CMS

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
        servicesData.cardAppearance.className,
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

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-base-100 relative">
      {/* Background decoration */}
      <div className={servicesData.decoration.topRight.className}></div>
      <div className={servicesData.decoration.bottomLeft.className}></div>

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
            {servicesData.sectionSubtitle}
          </motion.span>
          
          <motion.h2 
            className="section-title" 
            variants={createTextVariants()}
          >
            {servicesData.sectionTitle}
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-base-content/70"
            variants={createTextVariants()}
          >
            {servicesData.sectionDescription}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={createContainerVariants()}
        >
          {servicesData.servicesList.map((service, index) => (
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
            href={servicesData.ctaButton.href}
            className="btn btn-primary px-8 py-3 shadow-lg hover:shadow-xl">
            {servicesData.ctaButton.text}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
