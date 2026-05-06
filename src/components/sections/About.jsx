import React from 'react';
import { Section } from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';
import About1 from '../../assets/about1.png';
import About2 from '../../assets/about2.png';


export function About() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "100%", label: "Satisfaction" },
    { value: "Fast", label: "Turnaround" }
  ];

  return (
    <Section id="about" bg="neutral" className="py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={About1} 
                alt="About me" 
                className="rounded-2xl shadow-lg w-full h-64 md:h-96 object-cover border border-secondary"
              />
              <img 
                src={About2} 
                alt="" 
                className="rounded-2xl shadow-lg w-full h-64 md:h-96 object-cover mt-12 border border-secondary"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">About Aura Beauty</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Expert Beauty Solutions You Can Trust</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-medium">
              Founded over 15 years ago, Aura Beauty has grown into the city's most reliable premium beauty service. We believe in enhancing your natural beauty, ensuring you look and feel your absolute best.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
              We employ only fully licensed and vetted beauty professionals armed with top-quality premium products and proven techniques. No look is too complex, no detail is too small.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {['Certified Artists', 'Premium Products', 'Hygienic Studio', 'Satisfaction Guarantee'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" size={24} />
                  <span className="font-bold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-20 bg-primary rounded-2xl p-10 shadow-2xl relative overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
          <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-secondary-light font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
