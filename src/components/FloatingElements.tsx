
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  count?: number;
  variant?: 'circles' | 'squares' | 'triangles' | 'mixed';
  color?: 'purple' | 'blue' | 'pink' | 'green' | 'mixed';
  size?: 'small' | 'medium' | 'large';
  speed?: 'slow' | 'medium' | 'fast';
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 20,
  variant = 'mixed',
  color = 'mixed',
  size = 'medium',
  speed = 'medium'
}) => {
  const shapes = {
    circles: 'rounded-full',
    squares: 'rounded-md',
    triangles: 'clip-polygon-triangle',
    mixed: ['rounded-full', 'rounded-md', 'clip-polygon-triangle']
  };

  const colors = {
    purple: 'bg-purple-400/20',
    blue: 'bg-blue-400/20',
    pink: 'bg-pink-400/20',
    green: 'bg-green-400/20',
    mixed: ['bg-purple-400/20', 'bg-blue-400/20', 'bg-pink-400/20', 'bg-green-400/20']
  };

  const sizes = {
    small: { min: 4, max: 8 },
    medium: { min: 8, max: 16 },
    large: { min: 16, max: 32 }
  };

  const speeds = {
    slow: { min: 6, max: 12 },
    medium: { min: 3, max: 8 },
    fast: { min: 1, max: 4 }
  };

  const getRandomShape = () => {
    const shapeArray = Array.isArray(shapes[variant]) ? shapes[variant] : [shapes[variant]];
    return shapeArray[Math.floor(Math.random() * shapeArray.length)];
  };

  const getRandomColor = () => {
    const colorArray = Array.isArray(colors[color]) ? colors[color] : [colors[color]];
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };

  const getRandomSize = () => {
    const sizeRange = sizes[size];
    return Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
  };

  const getRandomSpeed = () => {
    const speedRange = speeds[speed];
    return Math.random() * (speedRange.max - speedRange.min) + speedRange.min;
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const elementSize = getRandomSize();
        const animationSpeed = getRandomSpeed();
        
        return (
          <motion.div
            key={i}
            className={`absolute ${getRandomShape()} ${getRandomColor()}`}
            style={{
              width: elementSize,
              height: elementSize,
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: animationSpeed,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
