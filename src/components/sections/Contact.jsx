import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.description) return;
    
    const message = `Hello Aura Beauty!\n\nI would like to book an appointment.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service Details:*\n${formData.description}`;
    
    const whatsappUrl = `https://wa.me/2349159029931?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section id="contact" bg="white">
      <div className="max-w-6xl mx-auto border border-gray-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        
        {/* Contact Information Box */}
        <div className="bg-primary text-white p-10 md:p-16 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Ready to Enhance Your Beauty?</h2>
            <p className="text-gray-300 font-medium mb-10 leading-relaxed">
              Book your session today. Call us or send a WhatsApp message for inquiries and appointments.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-1">Call Us</h4>
                  <p className="text-2xl font-black text-white">08123456789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-1">Email Us</h4>
                  <p className="text-lg font-bold text-white break-all">aurabeatuy@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-bold text-white">Ilorin,<br/>Kwara State</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <Clock className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-300 uppercase text-xs tracking-wider mb-1">Business Hours</h4>
                  <p className="text-lg font-bold text-white">Mon-Sat, 8am-6pm<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action/Form Box */}
        <div className="bg-neutral-bg p-10 md:p-16 lg:w-3/5">
          <h3 className="text-3xl font-black text-primary mb-6">Book an Appointment</h3>
          <p className="text-gray-600 font-medium mb-10">
            Fill out the form below for inquiries, or for a faster response, it will direct you to our WhatsApp automatically.
          </p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary uppercase tracking-wide">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white font-medium"
                  placeholder="08012345678"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary uppercase tracking-wide">Service Details / Inquiry</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white min-h-[120px] font-medium resize-none"
                placeholder="Briefly describe the beauty service you need..."
              ></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full py-4 text-lg mt-4 shadow-xl">
              Book Appointment
            </Button>
          </form>
        </div>

      </div>
    </Section>
  );
}
