import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Heart, Sparkles, ExternalLink, Brain, TrendingUp, Code, Database, Globe, Smartphone, Github, Star, Calendar, Users, Fish, Leaf, Eye, Search, FileText, MessageSquare, MapPin, Stethoscope } from "lucide-react";
import FlippableProjectCard from "./FlippableProjectCard";
import { motion } from "framer-motion";

const WorkSection = () => {
  const projects = [
    {
      title: "MarineMatch",
      description: "AI-powered fish identification ($6K in awards)",
      detailedDescription: "Android app built in Java for identifying 60+ different types of ocean animals and fish species using advanced image classification and machine learning.",
      image: "/lovable-uploads/2b308d6a-e603-4982-a110-c0687d47697c.png",
      stats: "60+ Species",
      technologies: ["Java", "Android", "AI/ML", "Image Classification"],
      icon: Fish,
      category: "Mobile App",
      year: "2024",
      color: "blue",
      links: {
        view: "https://dkaty123.github.io/MarineMatchWeb/",
        code: "https://github.com/dkaty123/MarineMatch"
      }
    },
    {
      title: "EcoPlastic",
      description: "AI-powered app for recycling ($3K prize)",
      detailedDescription: "Revolutionary app that uses AI to counter plastic pollution, built in Android Studio using Kotlin with advanced recycling optimization algorithms.",
      image: "/lovable-uploads/47b4c4e1-c8fd-4abc-81cd-49da154d528e.png",
      stats: "Award Winner",
      technologies: ["Kotlin", "Android", "AI/ML", "Sustainability"],
      icon: Leaf,
      category: "Sustainability",
      year: "2024",
      color: "emerald",
      links: {
        view: "https://ecoplastic.netlify.app/",
        code: "https://github.com/dkaty123/EcoPlastic"
      }
    },
    {
      title: "NeuroTrace",
      description: "AI Agent Security and Observability Platform",
      detailedDescription: "Command center for dissecting, visualizing, and securing complex LangGraph agentic workflows. Dive deep into execution flow, uncover vulnerabilities.",
      image: "/lovable-uploads/54e3f7d5-bb2c-4a23-85ed-f7ceaab086db.png",
      stats: "AI Security",
      technologies: ["Python", "LangGraph", "AI/ML", "Security"],
      icon: Brain,
      category: "AI Security",
      year: "2024",
      color: "purple",
      links: {
        view: "https://github.com/dkaty123/NeuroTrace-main",
        code: "https://github.com/dkaty123/NeuroTrace-main"
      }
    },
    {
      title: "AlgoVisualizer",
      description: "Interactive algorithm visualization platform",
      detailedDescription: "Interactive platform that visualizes algorithms in four main domains: Trie data structure, Binary Search Tree, Path Finding and Sort Visual.",
      image: "/lovable-uploads/b8a4d035-3060-41cd-8e32-0e3708fab9fc.png",
      stats: "Interactive",
      technologies: ["React", "JavaScript", "Algorithms", "Data Structures"],
      icon: TrendingUp,
      category: "Education",
      year: "2023",
      color: "indigo",
      links: {
        view: "https://dkaty123.github.io/AlgoVisualizer/",
        code: "https://github.com/dkaty123/Algorithm-Visualizer-main"
      }
    },
    {
      title: "QuickScrape",
      description: "Automated marketplace deal finder",
      detailedDescription: "Desktop application built with TypeScript to automatically search Facebook Marketplace for deals and notify users with real-time alerts.",
      image: "/lovable-uploads/bf06cba1-73cd-46a3-b804-f963311ccf2b.png",
      stats: "Automated",
      technologies: ["TypeScript", "Desktop", "Automation", "Web Scraping"],
      icon: Search,
      category: "Desktop App",
      year: "2024",
      color: "cyan",
      links: {
        view: "https://github.com/dkaty123/facebook-bot",
        code: "https://github.com/dkaty123/facebook-bot"
      }
    },
    {
      title: "CodeScriber",
      description: "AI-powered code documentation generator",
      detailedDescription: "AI-powered tool built with Python to automatically generate comprehensive code documentation for various programming languages.",
      image: "/lovable-uploads/72677835-fb47-42fd-933e-0851a8ff81cc.png",
      stats: "AI-Powered",
      technologies: ["Python", "AI/ML", "Documentation", "NLP"],
      icon: FileText,
      category: "Developer Tools",
      year: "2023",
      color: "orange",
      links: {
        view: "https://github.com/dkaty123/CodeDocAI",
        code: "https://github.com/dkaty123/CodeDocAI"
      }
    },
    {
      title: "TalkTuahTherapist",
      description: "Privacy-first AI mental health therapy app",
      detailedDescription: "AI-powered mental health therapy app designed with privacy through the use of Ethereum Blockchain encryption.",
      image: "/lovable-uploads/0435e197-58ee-4d7e-af4f-07bdc9c1b13e.png",
      stats: "Privacy-First",
      technologies: ["AI/ML", "Blockchain", "Mental Health", "Encryption"],
      icon: MessageSquare,
      category: "Healthcare",
      year: "2024",
      color: "pink",
      links: {
        view: "https://talktuahtherapist.co/",
        code: "https://github.com/dkaty123/TalkTuahTherapist"
      }
    },
    {
      title: "PollutionUnwrapped",
      description: "Global plastic pollution visualization platform",
      detailedDescription: "Dash app which visualizes global plastic pollution from 200+ countries across the world.",
      image: "/lovable-uploads/3cc4aa2a-0af2-46fd-ad0e-697749865193.png",
      stats: "200+ Countries",
      technologies: ["Python", "Dash", "Data Viz", "Analytics"],
      icon: MapPin,
      category: "Data Visualization",
      year: "2023",
      color: "teal",
      links: {
        view: "https://github.com/dkaty123/PollutionUnwrapped-main",
        code: "https://github.com/dkaty123/PollutionUnwrapped-main"
      }
    },
    {
      title: "Bookd",
      description: "Personalized preventative healthcare platform",
      detailedDescription: "Personalized Preventative Care Platform with AI-powered health recommendations.",
      image: "/lovable-uploads/135a3681-0a5e-40a6-a5d9-dcf15d6aa49b.png",
      stats: "Health Tech",
      technologies: ["React", "Node.js", "AI/ML", "Healthcare"],
      icon: Stethoscope,
      category: "Healthcare",
      year: "2024",
      color: "violet",
      links: {
        view: "https://bookd.netlify.app/",
        code: "https://github.com/dkaty123/Bookd"
      }
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return { border: 'border-blue-400/40', shadow: 'shadow-blue-500/20', text: 'text-blue-400', glow: 'from-blue-500/5 to-blue-500/20' };
      case 'emerald': return { border: 'border-emerald-400/40', shadow: 'shadow-emerald-500/20', text: 'text-emerald-400', glow: 'from-emerald-500/5 to-emerald-500/20' };
      case 'pink': return { border: 'border-pink-400/40', shadow: 'shadow-pink-500/20', text: 'text-pink-400', glow: 'from-pink-500/5 to-pink-500/20' };
      case 'purple': return { border: 'border-purple-400/40', shadow: 'shadow-purple-500/20', text: 'text-purple-400', glow: 'from-purple-500/5 to-purple-500/20' };
      case 'indigo': return { border: 'border-indigo-400/40', shadow: 'shadow-indigo-500/20', text: 'text-indigo-400', glow: 'from-indigo-500/5 to-indigo-500/20' };
      case 'cyan': return { border: 'border-cyan-400/40', shadow: 'shadow-cyan-500/20', text: 'text-cyan-400', glow: 'from-cyan-500/5 to-cyan-500/20' };
      case 'orange': return { border: 'border-orange-400/40', shadow: 'shadow-orange-500/20', text: 'text-orange-400', glow: 'from-orange-500/5 to-orange-500/20' };
      case 'teal': return { border: 'border-teal-400/40', shadow: 'shadow-teal-500/20', text: 'text-teal-400', glow: 'from-teal-500/5 to-teal-500/20' };
      case 'violet': return { border: 'border-violet-400/40', shadow: 'shadow-violet-500/20', text: 'text-violet-400', glow: 'from-violet-500/5 to-violet-500/20' };
      default: return { border: 'border-purple-400/40', shadow: 'shadow-purple-500/20', text: 'text-purple-400', glow: 'from-purple-500/5 to-purple-500/20' };
    }
  };

  return (
    <section 
      id="work" 
      className="py-32 px-6 relative overflow-hidden bg-black"
    >
      {/* Simple static background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 relative">
          <motion.div 
            className="absolute -top-12 left-1/4 w-8 h-8 bg-purple-400/20 rounded-full"
            animate={{
              y: [-10, 10, -10],
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-8 right-1/3 w-6 h-6 bg-pink-400/20 rounded-full"
            animate={{
              y: [-15, 15, -15],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
          <motion.div 
            className="absolute -top-4 right-1/4 w-4 h-4 bg-blue-400/20 rounded-full"
            animate={{
              y: [-8, 8, -8],
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 4 }}
          />
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6"
          >
            <span className="text-white">
              Featured
            </span>
            <br />
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                backgroundPosition: { duration: 6, repeat: Infinity }
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Work
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            A curated collection of digital experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateX: 5
              }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <FlippableProjectCard
                title={project.title}
                description={project.description}
                detailedDescription={project.detailedDescription}
                image={project.image}
                stats={project.stats}
                technologies={project.technologies}
                icon={project.icon}
                category={project.category}
                year={project.year}
                color={project.color}
                index={index}
                colorClasses={getColorClasses(project.color)}
                links={project.links}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
