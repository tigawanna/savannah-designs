"use client";

import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
// import { useScrollDirection } from "@/hooks/use-scroll-direction";

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  index: number;
};

function ContactInfo({ icon, title, content, index }: ContactInfoProps) {
  // const scrollDirection = useScrollDirection();

  function createContactItemVariants(index: number) {
    return {
      hidden: {
        opacity: 0,
        // x: 15,
        // y: scrollDirection === "down" ? 20 : -20,
      },
      visible: {
        opacity: 1,
        // x: 0,
        // y: 0,
        transition: {
          duration: 0.5,
          delay: 0.1 * index + 0.3,
        },
      },
    };
  }

  return (
    <motion.div className="flex space-x-4 items-start" variants={createContactItemVariants(index)}>
      <div className="shrink-0 mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-primary">{title}</h4>
        <div className="text-base-content/70">{content}</div>
      </div>
    </motion.div>
  );
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: false, amount: 0.1 });
  // const scrollDirection = useScrollDirection();

  function createContainerVariants() {
    return {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    };
  }

  function createHeadingVariants() {
    return {
      hidden: {
        opacity: 0,
        // y: scrollDirection === "down" ? 25 : -25,
      },
      visible: {
        opacity: 1,
        // y: 0,
        transition: { duration: 0.6 },
      },
    };
  }

  function createFormVariants() {
    return {
      hidden: {
        opacity: 0,
        // x: -30,
        // y: scrollDirection === "down" ? 20 : -20,
      },
      visible: {
        opacity: 1,
        // x: 0,
        // y: 0,
        transition: {
          duration: 0.7,
          delay: 0.2,
        },
      },
    };
  }

  function createInfoBoxVariants() {
    return {
      hidden: {
        opacity: 0,
        // x: 30,
        // y: scrollDirection === "down" ? 20 : -20,
      },
      visible: {
        opacity: 1,
        // x: 0,
        // y: 0,
        transition: {
          duration: 0.7,
          delay: 0.3,
        },
      },
    };
  }

  function createMapVariants() {
    return {
      hidden: {
        opacity: 0,
        scale: 0.9,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: 0.5,
        },
      },
    };
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-base-100  relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 -z-10 clip-diagonal"></div>

      <motion.div
        ref={contentRef}
        className="max-w-7xl mx-auto"
        variants={createContainerVariants()}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}>
        <motion.div className="text-center mb-16">
          <motion.span className="section-subtitle" variants={createHeadingVariants()}>
            GET IN TOUCH
          </motion.span>

          <motion.h2 className="section-title" variants={createHeadingVariants()}>
            Contact Us
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto text-base-content/70"
            variants={createHeadingVariants()}>
            Ready to transform your space? Our team is here to help bring your vision to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact form - 3 columns */}
          <motion.div
            className="lg:col-span-3 bg-gradient-to-br from-primary/10 via-neutral/10 to-secondary/10 backdrop-blur-xs rounded-lg p-8 shadow-soft hover:shadow-md transition-shadow duration-300"
            variants={createFormVariants()}>
            <h3 className="text-xl font-medium text-primary mb-6">Send us a message</h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-control">
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-base-100 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-base-100 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-base-100 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject of your message"
                  aria-required="true"
                />
              </div>

              <div className="form-control">
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-base-100 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message"
                  aria-required="true">
                </textarea>
              </div>

              <motion.button 
                type="submit" 
                className="btn btn-primary px-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info - 2 columns */}
          <div className="lg:col-span-2 space-y-6  bg-gradient-to-br from-primary/10 via-neutral/10 to-secondary/10 backdrop-blur-xs rounded-lg shadow-soft hover:shadow-md transition-shadow duration-300">
            <motion.div className="p-8 rounded-2xl" variants={createInfoBoxVariants()}>
              <h3 className="text-xl font-medium text-primary mb-6">Contact Information</h3>

              <motion.div className="space-y-5" variants={createContainerVariants()}>
                <ContactInfo
                  icon={<MapPin className="w-5 h-5" />}
                  title="Address"
                  content={
                    <address className="not-italic">
                      44 Ngong Rd, Karen
                      <br />
                      Nairobi, Kenya
                    </address>
                  }
                  index={0}
                />

                <ContactInfo
                  icon={<Phone className="w-5 h-5" />}
                  title="Phone"
                  content={
                    <a href="tel:+254712345678" className="hover:text-primary transition-colors">
                      +254 712 345 678
                    </a>
                  }
                  index={1}
                />

                <ContactInfo
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  content={
                    <a
                      href="mailto:hello@savannadesign.co.ke"
                      className="hover:text-primary transition-colors">
                      hello@savannadesign.co.ke
                    </a>
                  }
                  index={2}
                />

                <ContactInfo
                  icon={<Clock className="w-5 h-5" />}
                  title="Working Hours"
                  content={
                    <div>
                      <p>Monday-Friday: 9am to 5pm</p>
                      <p>Saturday: 10am to 2pm</p>
                    </div>
                  }
                  index={3}
                />
              </motion.div>
            </motion.div>

            {/* Map or image */}
            <motion.div
              className="rounded-2xl overflow-hidden h-[250px]"
              variants={createMapVariants()}>
              <Image
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=800&q=80"
                alt="Savanna Design Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
