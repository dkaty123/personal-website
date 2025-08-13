
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Target, TreePine } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const timeline = [
    {
      year: "2025",
      title: "Shopify SWE Intern",
      description: "Fall 2025 Software Engineering Internship",
      type: "work"
    },
    {
      year: "2024", 
      title: "Health Canada SWE Intern",
      description: "Software Engineering Internship",
      type: "work"
    },
    {
      year: "2024",
      title: "IBM Z Ambassador",
      description: "Ambassador for IBM Z Systems",
      type: "role"
    },
    {
      year: "2023",
      title: "RBC 21 Under 21",
      description: "Recognition Award",
      type: "award"
    },
    {
      year: "2023",
      title: "Governor General's Award",
      description: "Academic Excellence Award",
      type: "award"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Simple static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/5 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-purple-300 text-sm font-light">About Me</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8"
          >
            <span className="text-white">My</span>{" "}
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
              Journey
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            From coding enthusiast to software engineer, building the future one line at a time
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                Building the
                <br />
                <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Future
                </span>
              </h3>
            </div>
            
            <div className="space-y-6 text-white">
              <p className="font-light text-lg leading-relaxed">
                I'm passionate about creating innovative solutions that make a real impact. From AI-powered applications to full-stack web development, I love exploring new technologies and pushing the boundaries of what's possible.
              </p>
              
              <p className="font-light leading-relaxed">
                My journey in tech started with simple scripts and has evolved into building complex systems that serve thousands of users. I believe in writing clean, maintainable code and creating user experiences that delight.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-black/40 border border-white/10 rounded-lg">
                <div className="text-2xl font-light text-white mb-2">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-black/40 border border-white/10 rounded-lg">
                <div className="text-2xl font-light text-white mb-2">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 bg-black/40 border border-white/10 rounded-lg hover:border-purple-400/30 transition-all duration-300"
                whileHover={{ scale: 1.02, x: 8 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  {item.type === 'work' && <Calendar className="w-6 h-6 text-purple-400" />}
                  {item.type === 'award' && <Award className="w-6 h-6 text-purple-400" />}
                  {item.type === 'role' && <Target className="w-6 h-6 text-purple-400" />}
                </div>
                <div>
                  <div className="text-sm text-purple-400 font-medium">{item.year}</div>
                  <div className="text-white font-medium">{item.title}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
