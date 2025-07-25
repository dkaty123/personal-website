
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Code, Zap, Sparkles, TrendingUp, Rocket } from 'lucide-react';
import ScholaSwiperMockup from './ScholaSwiperMockup';

const CurrentlyWorkingSection = () => {
  const currentProjects = [
    {
      title: "AI Agent Security Platform",
      description: "Building next-generation security tools for LangGraph workflows",
      status: "In Development",
      icon: Code,
      color: "purple",
      progress: 65
    },
    {
      title: "Climate Tech Innovation",
      description: "Developing sustainable solutions for environmental challenges",
      status: "Research Phase",
      icon: Sparkles,
      color: "emerald",
      progress: 30
    },
    {
      title: "Mobile Health Platform",
      description: "Creating personalized healthcare experiences",
      status: "Testing",
      icon: TrendingUp,
      color: "blue",
      progress: 80
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return { border: 'border-purple-400/30', bg: 'bg-purple-500/10', text: 'text-purple-400' };
      case 'emerald': return { border: 'border-emerald-400/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400' };
      case 'blue': return { border: 'border-blue-400/30', bg: 'bg-blue-500/10', text: 'text-blue-400' };
      default: return { border: 'border-purple-400/30', bg: 'bg-purple-500/10', text: 'text-purple-400' };
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-purple-300 text-sm font-light">Active Projects</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="text-white">Currently</span>{" "}
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Building
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Turning ideas into reality through innovative technology solutions
          </motion.p>
        </motion.div>

        {/* ScholaSwiper Interactive Demo */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-black/70 border border-purple-400/20 backdrop-blur-sm p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300 text-sm font-light">Featured Project</span>
                </div>
                <h3 className="text-4xl font-light text-white mb-4">ScholaSwiper</h3>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                  AI-powered scholarship discovery platform that uses machine learning to match students with personalized funding opportunities. 
                  Swipe through scholarships like dating apps, with intelligent recommendations based on academic profile, interests, and eligibility criteria.
                </p>
                <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                  <Badge variant="outline" className="border-purple-400/40 text-purple-400 bg-purple-400/10">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="border-blue-400/40 text-blue-400 bg-blue-400/10">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="border-green-400/40 text-green-400 bg-green-400/10">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-pink-400/40 text-pink-400 bg-pink-400/10">
                    TensorFlow
                  </Badge>
                </div>
              </div>
              
              <ScholaSwiperMockup />
            </div>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {currentProjects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            const Icon = project.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8, 
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateX: 5,
                  rotateY: 5
                }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                className="group"
              >
                <Card className="bg-black/70 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden p-6 h-full">
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%',
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Icon and Status */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ 
                          rotate: 10,
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                        }}
                      >
                        <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="outline" 
                          className={`${colorClasses.border} ${colorClasses.text} ${colorClasses.bg} text-xs`}
                        >
                          {project.status}
                        </Badge>
                      </motion.div>
                    </div>

                    <div className="mb-4">
                      <motion.h3 
                        className="text-xl font-light text-white mb-2 group-hover:text-purple-100 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-400 text-sm font-light leading-relaxed"
                        whileHover={{ x: 5 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs text-gray-400">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${
                            project.color === 'purple' ? 'from-purple-500 to-pink-500' :
                            project.color === 'emerald' ? 'from-emerald-500 to-teal-500' :
                            'from-blue-500 to-cyan-500'
                          }`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          transition={{ duration: 2, delay: index * 0.2 }}
                        />
                      </div>
                    </div>

                    <motion.div 
                      className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Details</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingSection;
