'use client'
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const PlatformDashboard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image1.png',
    '/images/image2.png',
  ];

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }

    const imageInterval = setInterval(() => {
      if (isVisible) {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 4000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [isVisible, inView]);

  return (
    <div className="h-full bg-backgroundColor text-white">
      {/* Header Section */}
      <div className="container mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 text-sm uppercase tracking-wider mb-4 inline-block">Platform</span>
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-primaryText">Application</span>
          </h1>
        </motion.div>

        {/* Main Content */}
        <div ref={ref} className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Panel - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative l overflow-hidden bg-gradient-to-br from-[#1616166b] to-[#1b1a1a6c] p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#14141460] to-[#030303] rounded-[10px] "></div>
              <div className="relative  p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="aspect-video rounded-lg overflow-hidden"
                  >
                    <img
                      src={images[currentImage]}
                      alt={`Platform Image ${currentImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Content */}
          <motion.div 
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="lg:w-1/2 w-full"
>
  <div className="space-y-6">
    <div className="inline-block px-4 py-2 bg-gray-900/50 rounded-full text-sm text-orange-500 mb-4">
      Worship Platform
    </div>
    <h2 className="text-4xl font-bold mb-6">Application Features</h2>
    <p className="text-gray-400 mb-8">
      Explore a comprehensive platform designed to enhance worship experiences through innovative and interactive features.
    </p>
    <motion.div 
      className="flex flex-wrap gap-2" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      {[
        'Stream live worship sessions effortlessly',
        'Interactive sermon notes for participants',
        'Real-time donations and tithing',
        'Event scheduling and reminders',
        'Customizable prayer requests section',
        'Integrated scripture search and sharing',
        'Community chat and support groups',
        'Volunteer coordination and management tools',
        'Audio and video sermon archives',
        'Personalized daily devotionals',
      ].map((feature, index) => (
        <div key={index} className="flex-wrap">
          <Button 
            className="hover:bg-[#3f3121c5] bg-[#1d1c1c] text-primaryText px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            {feature}
          </Button>
        </div>
      ))}
    </motion.div>
  </div>  
</motion.div>

        </div>
      </div>
    </div>
  );
};

export default PlatformDashboard;