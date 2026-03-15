import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    alt: 'Güzellik salonu iç mekan'
  },
  {
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    alt: 'Saç bakımı ve stil'
  },
  {
    url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796',
    alt: 'Cilt bakımı ve makyaj'
  },
  {
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
    alt: 'Manikür ve el bakımı'
  }
];

const getAnimationVariants = (index) => {
  switch (index) {
    case 0:
      return {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, transition: { duration: 0.8 } }
      };
    case 1:
      return {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, transition: { duration: 0.8 } }
      };
    case 2:
      return {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, transition: { duration: 0.8 } }
      };
    case 3:
      return {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, transition: { duration: 0.8 } }
      };
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      };
  }
};

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="absolute inset-0 w-full h-full object-cover"
          variants={getAnimationVariants(currentIndex)}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </AnimatePresence>
    </div>
  );
}
