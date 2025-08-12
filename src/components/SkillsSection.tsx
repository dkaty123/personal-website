
import React from 'react';
import { motion } from 'framer-motion';
import TechBadge from './TechBadge';
import AnimatedText from './AnimatedText';
import FloatingElements from './FloatingElements';

const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'Node.js', level: 80, icon: '🚀' },
    { name: 'Python', level: 88, icon: '🐍' },
    { name: 'Java', level: 82, icon: '☕' },
    { name: 'JavaScript', level: 92, icon: '💛' },
    { name: 'HTML/CSS', level: 95, icon: '🎨' },
    { name: 'MongoDB', level: 78, icon: '🍃' },
    { name: 'PostgreSQL', level: 75, icon: '🐘' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'AWS', level: 73, icon: '☁️' },
    { name: 'Git', level: 87, icon: '📝' },
    { name: 'AI/ML', level: 85, icon: '🤖' },
    { name: 'TensorFlow', level: 80, icon: '🧠' },
    { name: 'Flutter', level: 76, icon: '📱' },
    { name: 'Kotlin', level: 74, icon: '🔥' },
    { name: 'Swift', level: 72, icon: '🍎' },
    { name: 'GraphQL', level: 68, icon: '🔗' },
    { name: 'Redis', level: 65, icon: '🔴' },
    { name: 'Kubernetes', level: 62, icon: '⚙️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section 
      id="skills" 
      className="py-32 px-6 relative overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Floating Elements */}
      <FloatingElements count={15} variant="circles" color="purple" size="medium" speed="slow" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 0.5 + 'px',
              height: Math.random() * 2 + 0.5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 3D Decorative Element */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <AnimatedText 
            variant="glow" 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6"
          >
            Technical Skills
          </AnimatedText>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 10,
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              <TechBadge
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
