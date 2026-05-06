import React from 'react';
import { Section } from '../ui/Section';
import { Clock, DollarSign, Award, ThumbsUp, ShieldCheck, Star } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Star size={28} />,
      title: "Professional Finish",
      description: "We deliver flawless, smooth, and perfect makeup and beauty results for every client."
    },
    {
      icon: <DollarSign size={28} />,
      title: "Affordable Pricing",
      description: "Transparent, upfront pricing with no hidden fees or surprise charges on your bill."
    },
    {
      icon: <Award size={28} />,
      title: "Experienced Team",
      description: "Fully licensed, insured, and highly trained professionals handling your property."
    },
    {
      icon: <Clock size={28} />,
      title: "Fast Delivery",
      description: "We respect your time. Our team works efficiently to meet agreed project deadlines."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Materials",
      description: "We use only premium, durable paints and materials for a finish that stands the test of time."
    },
    {
      icon: <ThumbsUp size={28} />,
      title: "Customer Satisfaction",
      description: "We don't leave until the job is done right and you are completely satisfied."
    }
  ];

  return (
    <Section id="why-us" className="bg-white py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">The Trusted Choice for Your Beauty Needs</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
            With decades of experience, we've built a reputation for reliable, high-quality beauty services. When you book Aura Beauty, you're partnering with experts who respect your time and comfort.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1 bg-neutral-bg p-3 rounded-lg shadow-sm border border-gray-100 text-secondary">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xl mb-2">{reason.title}</h4>
                  <p className="text-base text-gray-600 leading-relaxed font-medium">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative mt-10 lg:mt-0">
          <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional painter working"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
            
            <div className="absolute bottom-10 left-8 right-8 text-white">
              <h3 className="text-3xl font-extrabold mb-3">Committed to Quality</h3>
              <p className="text-gray-200 font-medium text-lg text-shadow-sm">Your local experts for all makeup and beauty needs.</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </Section>
  );
}
