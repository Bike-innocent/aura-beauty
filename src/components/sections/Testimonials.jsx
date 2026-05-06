import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "David M.",
      text: "My makeup looked absolutely stunning! The artist was fast, polite, and so professional.",
      rating: 5,
      type: "Bridal Makeup"
    },
    {
      name: "Jessica R.",
      text: "I booked Aura Beauty for a special event. The color matching was perfect and my skin was glowing.",
      rating: 5,
      type: "Party Makeup"
    },
    {
      name: "Mark T.",
      text: "The attention to detail on my lash extensions and skincare routine is unmatched. Extremely professional and highly recommended.",
      rating: 5,
      type: "Lash & Skincare"
    }
  ];

  return (
    <Section id="testimonials" bg="neutral">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">Customer Reviews</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Don't Just Take Our Word For It</h2>
        <p className="text-gray-600 text-lg font-medium">
          See what your neighbors are saying about our premium beauty services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <Card key={index} className="p-8 border-t-4 border-t-secondary rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="bg-primary/5 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                {review.type}
              </span>
            </div>
            
            <p className="text-gray-700 font-medium mb-8 leading-relaxed italic">"{review.text}"</p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner">
                {review.name[0]}
              </div>
              <div>
                <div className="font-bold text-primary text-lg">{review.name}</div>
                <div className="text-gray-500 text-sm font-medium">Verified Customer</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
