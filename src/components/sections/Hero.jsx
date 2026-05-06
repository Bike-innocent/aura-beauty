import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroBg from '../../assets/hero.png';

export function Hero() {
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7)), url(${heroBg})`
      }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <span data-aos="fade-in" className="inline-block py-1.5 px-3 rounded-md bg-secondary/80 text-white font-bold text-sm mb-6 border border-secondary uppercase tracking-widest">
            #1 Beauty & Artistry Brand
          </span>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight font-serif italic">
            Enhancing Your<br className="hidden md:block"/> 
            Natural Beauty
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-medium">
            Discover confidence, elegance, and professionalism with our expert makeup and premium beauty services tailored just for you.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap gap-4">
            <a href="https://wa.me/2349159029931" target="_blank" rel="noreferrer">
              <Button variant="secondary" size="lg" className="gap-2 font-bold shadow-lg shadow-secondary/30 cursor-pointer">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" size="lg" className="gap-2 bg-white/10 text-white border-white/30  hover:text-primary cursor-pointer">
                View Our Services
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
          
          <div data-aos="fade-in" data-aos-delay="400" className="mt-12 flex flex-wrap items-center gap-8 text-sm font-bold text-gray-200 uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-pulse"></div>
              Free Inspections
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white opacity-80"></div>
              Quality Materials
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white opacity-80"></div>
              Professional Finish
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
