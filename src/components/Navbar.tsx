"use client"
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar(){
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0  right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300",
        isScrolled ? "bg-savanna-50/40 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-primary font-heading text-xl md:text-2xl font-medium">
          SAVANNA<span className="text-accent">DESIGN</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-primary hover:text-accent transition-colors underline-animation"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between relative ${mobileMenuOpen ? 'transform' : ''}`}>
            <span className={`w-full h-0.5 bg-primary rounded-full transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-primary rounded-full transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-full h-0.5 bg-primary rounded-full transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md shadow-soft transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-60 py-4" : "max-h-0"
        )}
      >
        <div className="px-6 flex flex-col space-y-4">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-primary hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

