

import React from 'react';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import {
  Sparkles,
  Heart,
  Star,
  Flower2,
  Smile,
  Sun
} from 'lucide-react';

import bridalMakeup from '../../assets/bridal-makeup.png';
import partyMakeup from '../../assets/party-makeup.png';
import lashExtensions from '../../assets/lash-extensions.png';
import facials from '../../assets/facials.png';
import geleTying from '../../assets/gele-tying.png';
import spaTreatments from '../../assets/spa-treatments.png';

export function Services() {
  const categories = [
    {
      title: "Bridal Makeup",
      description:
        "Flawless and long-lasting bridal makeup to make you look and feel stunning on your special day.",
      icon: <Heart size={36} className="text-white" />,
      image: bridalMakeup,
      whatsappMessage:
        "Hello, I’m interested in your Bridal Makeup service. I’d like to get a free quote and more details."
    },
    {
      title: "Party Makeup",
      description:
        "Glamorous and elegant party makeup tailored to suit your style for any special occasion or event.",
      icon: <Sparkles size={36} className="text-white" />,
      image: partyMakeup,
      whatsappMessage:
        "Hello, I’m interested in your Party Makeup service. I’d like to get a free quote and more details."
    },
    {
      title: "Lash Extensions",
      description:
        "Enhance your natural beauty with premium lash extensions for a fuller, more dramatic look.",
      icon: <Star size={36} className="text-white" />,
      image: lashExtensions,
      whatsappMessage:
        "Hello, I’m interested in your Lash Extensions service. I’d like to get a free quote and more details."
    },
    {
      title: "Facials & Skincare",
      description:
        "Rejuvenating facials and skincare treatments designed to give you a healthy, glowing complexion.",
      icon: <Sun size={36} className="text-white" />,
      image: facials,
      whatsappMessage:
        "Hello, I’m interested in your Facials & Skincare service. I’d like to get a free quote and more details."
    },
    {
      title: "Gele Tying",
      description:
        "Professional and beautiful Gele tying services to complete your elegant traditional attire.",
      icon: <Flower2 size={36} className="text-white" />,
      image: geleTying,
      whatsappMessage:
        "Hello, I’m interested in your Gele Tying service. I’d like to get a free quote and more details."
    },
    {
      title: "Spa Treatments",
      description:
        "Relax and unwind with our luxurious spa treatments, designed for ultimate comfort and rejuvenation.",
      icon: <Smile size={36} className="text-white" />,
      image: spaTreatments,
      whatsappMessage:
        "Hello, I’m interested in your Spa Treatments service. I’d like to get a free quote and more details."
    }
  ];

  return (
    <Section id="services" bg="neutral">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          Our Core Services
        </h2>

        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-600 text-lg font-medium">
          From glamorous makeup transformations to relaxing skincare routines, 
          our expert team ensures you look and feel your absolute best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group cursor-pointer overflow-hidden border-b-4 border-b-transparent hover:border-b-secondary transition-all rounded-xl"
          >
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors z-10 w-full h-full"></div>

              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
              />

              <div className="absolute bottom-4 left-4 z-20 bg-secondary p-3 rounded-lg shadow-lg">
                {category.icon}
              </div>
            </div>

            <div className="p-6 bg-white">
              <h3 className="text-2xl font-bold text-primary mb-3 mt-1">
                {category.title}
              </h3>

              <p className="text-gray-600 font-medium mb-6 leading-relaxed line-clamp-3">
                {category.description}
              </p>

              <a
                href={`https://wa.me/2349159029931?text=${encodeURIComponent(
                  category.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-bold uppercase tracking-wider text-secondary group-hover:text-primary transition-colors"
              >
                Get Free Quote

                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}