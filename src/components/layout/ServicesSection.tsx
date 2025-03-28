
import React, { useEffect, useRef } from 'react';
import { Leaf, HomeIcon, PaintBucket, Palette, Building, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  className?: string;
}

const ServiceCard = ({ icon, title, description, delay, className }: ServiceCardProps) => (
  <div 
    className={cn(
      "bg-base-200/70 backdrop-blur-xs rounded-lg p-8 shadow-soft card-hover reveal",
      className
    )}
    style={{transitionDelay: `${delay}ms`}}
  >
    <div className="inline-flex items-center justify-center p-2 mb-6 rounded-lg bg-savanna-100 text-forest-700">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-primary mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export function ServicesSection(){
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <HomeIcon className="w-5 h-5" />,
      title: "Residential Design",
      description: "Transform your home into a sanctuary that reflects both your personality and Kenya's natural beauty."
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Commercial Spaces",
      description: "Create inspiring workplaces and commercial environments that embody your brand's identity."
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Design Consultancy",
      description: "Get expert advice on color schemes, materials, and layouts that enhance your existing spaces."
    },
    {
      icon: <PaintBucket className="w-5 h-5" />,
      title: "Custom Furnishings",
      description: "Commission bespoke furniture and decor items crafted by local artisans using sustainable materials."
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Biophilic Design",
      description: "Integrate natural elements into your space to improve wellbeing and create a connection to the outdoors."
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Project Management",
      description: "Comprehensive oversight of your design project from concept to completion, ensuring quality and timeliness."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-savanna-50 rounded-bl-[200px] opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-forest-50 rounded-tr-[150px] opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="section-subtitle reveal">WHAT WE OFFER</span>
        <h2 className="section-title reveal" style={{transitionDelay: '100ms'}}>Our Services</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground reveal" style={{transitionDelay: '200ms'}}>
          We provide a comprehensive range of interior design services, 
          tailored to create spaces that are both beautiful and functional.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={300 + (index * 100)}
            className={index === 2 ? "lg:transform lg:-translate-y-8" : ""} 
          />
        ))}
      </div>
      
      <div className="mt-16 text-center reveal" style={{transitionDelay: '900ms'}}>
        <a 
          href="#contact" 
          className="inline-block px-8 py-3 bg-forest-700 hover:bg-forest-800 text-white rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};


