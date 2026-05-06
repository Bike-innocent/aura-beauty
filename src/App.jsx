import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Testimonials } from './components/sections/Testimonials';
import { FloatingWhatsApp } from './components/sections/FloatingWhatsApp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main> 
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
