"use client";

import { useState, useRef } from 'react';
import { motion, useInView } from "motion/react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from '@/lib/utils';
import { Project, projects } from '@/data/projects';



type ProjectCardProps = {
  project: Project;
  index: number;
};

type FilterButtonProps = {
  category: string;
  currentFilter: string;
  onClick: (category: string) => void;
  index: number;
};



function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const scrollDirection = useScrollDirection();
  
  function createProjectCardVariants(index: number) {
    return {
      hidden: { 
        opacity: 0, 
        y: scrollDirection === 'down' ? 30 : -30,
        scale: 0.97
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { 
          duration: 0.7, 
          delay: 0.2 + (index * 0.1)
        }
      }
    };
  }
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg cursor-pointer h-[400px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={createProjectCardVariants(index)}
    >
      {/* Image with zoom effect */}
      <motion.div 
        className="absolute inset-0 bg-center bg-cover h-full w-full"
        style={{ backgroundImage: `url(${project.image})` }}
        animate={{
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.7 }}
      />
      
      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
        animate={{
          opacity: isHovered ? 1 : 0.7
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Content */}
      <motion.div 
        className="absolute inset-0 p-6 flex flex-col justify-end text-base-100"
        animate={{
          y: isHovered ? 0 : 10
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs uppercase tracking-wider text-white font-medium mb-2">
          {project.category}
        </span>
        <h3 className="text-2xl font-medium mb-2 text-white">{project.title}</h3>
        <motion.p 
          className="text-sm text-white max-w-md"
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 4
          }}
          transition={{ duration: 0.5 }}
        >
          {project.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

function FilterButton({ category, currentFilter, onClick, index }: FilterButtonProps) {
  function createFilterButtonVariants(index: number) {
    return {
      hidden: { opacity: 0, y: 15 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay: 0.3 + (index * 0.05)
        }
      }
    };
  }
  
  return (
    <motion.button
      variants={createFilterButtonVariants(index)}
      onClick={() => onClick(category)}
      whileHover={{
        y: -2,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
      className={cn(
        "px-4 py-2 text-sm rounded-full transition-all duration-300",
        currentFilter === category
          ? "bg-primary text-base-100 shadow-md"
          : "bg-base-100/80 text-primary hover:bg-base-100"
      )}>
      {category}
    </motion.button>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.1 });
  // const scrollDirection = useScrollDirection();
  
  function createContainerVariants() {
    return {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };
  }
  
  function createHeadingVariants() {
    return {
      hidden: { 
        opacity: 0, 
        // y: scrollDirection === 'down' ? 30 : -30 
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    };
  }
  
  function createButtonVariants() {
    return {
      hidden: { 
        opacity: 0, 
        y: 20
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: 0.8
        }
      }
    };
  }

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-base-200 relative">
      <motion.div 
        ref={contentRef}
        className="max-w-7xl mx-auto"
        variants={createContainerVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center mb-12">
          <motion.span 
            className="section-subtitle"
            variants={createHeadingVariants()}
          >
            OUR WORK
          </motion.span>
          
          <motion.h2 
            className="section-title"
            variants={createHeadingVariants()}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-base-content/70"
            variants={createHeadingVariants()}
          >
            Explore our portfolio of spaces that blend aesthetic beauty, functional design, and environmental harmony.
          </motion.p>
          
          {/* Category filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mt-8"
            variants={createHeadingVariants()}
          >
            {categories.map((category, index) => (
              <FilterButton
                key={index}
                category={category}
                currentFilter={filter}
                onClick={setFilter}
                index={index}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Project grid with staggered animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={createContainerVariants()}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={createButtonVariants()}
        >
          <a 
            href="#contact" 
            className="btn btn-outline btn-primary"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

