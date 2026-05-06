import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench, PhoneCall, Paintbrush } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Defer the scroll slightly to allow the menu close animation to start 
    // and prevent mobile browsers from canceling the smooth scroll
    setTimeout(() => {
      if (href.startsWith('#') && href !== '#') {
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;
  
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },

  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-primary py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src="/favicon.png" alt="Logo" className="w-10 h-10 rounded-sm" />
            <span className={`text-xl font-black tracking-tight ${isScrolled ? 'text-primary' : 'text-white'} `}>
              Aura Beauty
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              <Button variant="secondary" className="gap-2 shadow-lg shadow-secondary/30">
                <PhoneCall size={18} />
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-bold text-gray-800 hover:text-secondary hover:bg-gray-50 rounded-md uppercase"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                <Button variant="secondary" className="w-full justify-center gap-2">
                  <PhoneCall size={18} />
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
