// import React from 'react';
// import { Card } from '../ui/Card';
// import { Section } from '../ui/Section';
// import { Paintbrush, Home, PaintRoller, Layers, Droplets } from 'lucide-react';

// export function Services() {
//   const categories = [
//     {
//       title: "Interior Painting",
//       description: "Transform your living spaces with premium interior painting, featuring flawless finishes and perfect color matching.",
//       icon: <Paintbrush size={36} className="text-white" />,
//       image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       title: "Exterior Painting",
//       description: "Protect and beautify your home's exterior with weather-resistant paints and expert application techniques.",
//       icon: <Home size={36} className="text-white" />,
//       image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       title: "Wallpaper Design",
//       description: "Elevate your walls with stunning, high-quality wallpaper designs meticulously installed for a seamless and customized look.",
//       icon: <Layers size={36} className="text-white" />,
//       image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       title: "House Screeding",
//       description: "Professional wall screeding for perfectly smooth surfaces, creating an ideal foundation for any flawless finish.",
//       icon: <PaintRoller size={36} className="text-white" />,
//       image: "https://images.unsplash.com/photo-1517409249767-1b0722cc2624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       title: "Paint Production",
//       description: "Premium quality, durable paints produced in-house to ensure vibrant colors, excellent coverage, and long-lasting freshness.",
//       icon: <Droplets size={36} className="text-white" />,
//       image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//     }
//   ];

//   return (
//     <Section id="services" bg="neutral">
//       <div className="text-center max-w-3xl mx-auto mb-16">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">Our Core Services</h2>
//         <p className="text-gray-600 text-lg font-medium">
//           From precise interior touches to large-scale commercial renovations, our expert painters deliver excellence on every project.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {categories.map((category, index) => (
//           <Card key={index} className="group cursor-pointer overflow-hidden border-b-4 border-b-transparent hover:border-b-secondary transition-all rounded-xl">
//             <div className="h-56 overflow-hidden relative">
//               <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors z-10 w-full h-full"></div>
//               <img
//                 src={category.image}
//                 alt={category.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
//               />
//               <div className="absolute bottom-4 left-4 z-20 bg-secondary p-3 rounded-lg shadow-lg">
//                 {category.icon}
//               </div>
//             </div>
//             <div className="p-6 bg-white">
//               <h3 className="text-2xl font-bold text-primary mb-3 mt-1">{category.title}</h3>
//               <p className="text-gray-600 font-medium mb-6 leading-relaxed line-clamp-3">{category.description}</p>


//               <a
//                 href="https://wa.me/2349159029931"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-sm font-bold uppercase tracking-wider text-secondary group-hover:text-primary transition-colors"
//               >
//                 Get Free Quote
//                 <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                 </svg>
//               </a>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </Section>
//   );
// }


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

import interiorPaintingImg from '../../assets/interior-painting.png';
import exteriorPaintingImg from '../../assets/exterior-painting.png';
import wallpaperDesignImg from '../../assets/wallpaper-design.png';
import houseScreedingImg from '../../assets/house-screeding.png';
import paintProductionImg from '../../assets/paint-production.png';

export function Services() {
  const categories = [
    {
      title: "Bridal Makeup",
      description:
        "Flawless and long-lasting bridal makeup to make you look and feel stunning on your special day.",
      icon: <Heart size={36} className="text-white" />,
      image: interiorPaintingImg,
      whatsappMessage:
        "Hello, I’m interested in your Bridal Makeup service. I’d like to get a free quote and more details."
    },
    {
      title: "Party Makeup",
      description:
        "Glamorous and elegant party makeup tailored to suit your style for any special occasion or event.",
      icon: <Sparkles size={36} className="text-white" />,
      image: exteriorPaintingImg,
      whatsappMessage:
        "Hello, I’m interested in your Party Makeup service. I’d like to get a free quote and more details."
    },
    {
      title: "Lash Extensions",
      description:
        "Enhance your natural beauty with premium lash extensions for a fuller, more dramatic look.",
      icon: <Star size={36} className="text-white" />,
      image: wallpaperDesignImg,
      whatsappMessage:
        "Hello, I’m interested in your Lash Extensions service. I’d like to get a free quote and more details."
    },
    {
      title: "Facials & Skincare",
      description:
        "Rejuvenating facials and skincare treatments designed to give you a healthy, glowing complexion.",
      icon: <Sun size={36} className="text-white" />,
      image: houseScreedingImg,
      whatsappMessage:
        "Hello, I’m interested in your Facials & Skincare service. I’d like to get a free quote and more details."
    },
    {
      title: "Gele Tying",
      description:
        "Professional and beautiful Gele tying services to complete your elegant traditional attire.",
      icon: <Flower2 size={36} className="text-white" />,
      image: paintProductionImg,
      whatsappMessage:
        "Hello, I’m interested in your Gele Tying service. I’d like to get a free quote and more details."
    },
    {
      title: "Spa Treatments",
      description:
        "Relax and unwind with our luxurious spa treatments, designed for ultimate comfort and rejuvenation.",
      icon: <Smile size={36} className="text-white" />,
      image: interiorPaintingImg,
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