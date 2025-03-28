import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-heading font-medium mb-4">
              SAVANNA<span className="text-secondary">DESIGN</span>
            </h3>
            <p className=" mb-4 text-sm max-w-xs">
              Creating harmonious spaces inspired by Kenya&apos;s breathtaking landscapes and rich
              cultural heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className=" hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className=" hover:text-secondary transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className=" hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Projects", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className=" hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Residential Design",
                "Commercial Design",
                "Hospitality Design",
                "Sustainable Design",
                "Design Consultancy",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className=" hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-4">Newsletter</h4>
            <p className=" mb-4 text-sm">
              Subscribe to our newsletter for design inspiration and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-primary-foreground/10 rounded-l-md focus:outline-hidden focus:ring-2 focus:ring-savanna-300 text-sm w-full"
              />
              <button
                type="submit"
                className="bg-savanna-300 hover:bg-savanna-400 text-primary px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Savanna Design. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
