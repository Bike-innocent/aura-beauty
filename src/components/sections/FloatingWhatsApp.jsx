import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/2348123456789"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
      animate={{ 
        y: [0, -10, 0],
        scale: [1, 1.05, 1],
        boxShadow: [
          "0px 0px 0px rgba(34, 197, 94, 0.4)",
          "0px 10px 20px rgba(34, 197, 94, 0.6)",
          "0px 0px 0px rgba(34, 197, 94, 0.4)"
        ]
      }}
      transition={{ 
        duration: 2.5, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      whileHover={{ scale: 1.1 }}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
