
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'bounce' | 'glow' | 'magnetic' | 'scale' | 'shimmer';
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'bounce',
  className = '',
  onClick,
  size = 'md'
}) => {
  const baseClasses = "relative overflow-hidden";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    bounce: {
      whileHover: { y: -2, scale: 1.05 },
      whileTap: { scale: 0.95, y: 0 },
      className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    },
    glow: {
      whileHover: { boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" },
      whileTap: { scale: 0.98 },
      className: "bg-purple-600 text-white rounded-lg border border-purple-400 shadow-md hover:border-purple-300 transition-all duration-300"
    },
    magnetic: {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.9 },
      className: "bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    },
    scale: {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      className: "bg-emerald-500 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    },
    shimmer: {
      whileHover: { backgroundPosition: "200% 0" },
      whileTap: { scale: 0.98 },
      className: "bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_100%] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500"
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      whileHover={currentVariant.whileHover}
      whileTap={currentVariant.whileTap}
      className={`${baseClasses} ${currentVariant.className} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedButton;
