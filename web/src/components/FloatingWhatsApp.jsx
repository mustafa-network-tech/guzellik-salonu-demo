import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { mkWhatsappUrl } from '@/lib/demo.js';

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    window.open(mkWhatsappUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 active:scale-95"
      aria-label="WhatsApp ile MK Digital Systems'e yazın"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.button>
  );
}
