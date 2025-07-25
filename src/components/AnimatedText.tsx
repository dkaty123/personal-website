
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  variant?: 'glow' | 'gradient' | 'typewriter' | 'shimmer' | 'bounce';
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  variant = 'glow',
  className = '',
  delay = 0
}) => {
  const variants = {
    glow: (
      <motion.div
        className={`${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          textShadow: [
            "0 0 10px rgba(255,255,255,0.3)",
            "0 0 20px rgba(168,85,247,0.5)",
            "0 0 10px rgba(255,255,255,0.3)"
          ]
        }}
        transition={{ 
          duration: 2, 
          delay,
          textShadow: { 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {children}
      </motion.div>
    ),
    gradient: (
      <motion.div
        className={`bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent ${className}`}
        style={{ backgroundSize: "200% 200%" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{ 
          duration: 1,
          delay,
          backgroundPosition: { 
            duration: 3, 
            repeat: Infinity
          }
        }}
      >
        {children}
      </motion.div>
    ),
    typewriter: (
      <motion.div
        className={`${className}`}
        initial={{ width: 0 }}
        animate={{ width: "auto" }}
        transition={{ 
          duration: 2, 
          delay
        }}
      >
        {children}
      </motion.div>
    ),
    shimmer: (
      <motion.div
        className={`relative ${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1
        }}
        transition={{ 
          duration: 1, 
          delay
        }}
      >
        {children}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: delay + 1
          }}
        />
      </motion.div>
    ),
    bounce: (
      <motion.div
        className={`${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ 
          type: "spring",
          bounce: 0.4,
          duration: 1, 
          delay
        }}
      >
        {children}
      </motion.div>
    )
  };

  return variants[variant];
};

export default AnimatedText;
