
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  variant?: 'stars' | 'particles' | 'grid' | 'waves';
  intensity?: 'low' | 'medium' | 'high';
  color?: 'purple' | 'blue' | 'white' | 'multicolor';
}

const AnimatedBackground = ({ 
  variant = 'stars', 
  intensity = 'medium',
  color = 'purple' 
}: AnimatedBackgroundProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const counts = { low: 20, medium: 40, high: 80 };
    const count = counts[intensity];
    
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }));
    
    setParticles(newParticles);
  }, [intensity]);

  const colorClasses = {
    purple: 'bg-purple-400',
    blue: 'bg-blue-400',
    white: 'bg-white',
    multicolor: 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400'
  };

  const renderStars = () => (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${colorClasses[color]} opacity-60`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );

  const renderParticles = () => (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${colorClasses[color]} opacity-40`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </>
  );

  const renderGrid = () => (
    <div className="absolute inset-0 opacity-10">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 2px, transparent 2px),
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px'
        }}
      />
    </div>
  );

  const renderWaves = () => (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-10 -left-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );

  const variants = {
    stars: renderStars,
    particles: renderParticles,
    grid: renderGrid,
    waves: renderWaves
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {variants[variant]()}
    </div>
  );
};

export default AnimatedBackground;
