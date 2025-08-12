import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Github, Mail } from "lucide-react";
import SkillsCarousel from "@/components/SkillsCarousel";
import confetti from 'canvas-confetti';
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const PersonalSection = () => {
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('devkatyal01@gmail.com');
      
      // Trigger confetti animation
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a855f7', '#ec4899', '#3b82f6', '#10b981']
      });

      // Show success toast
      toast({
        title: "Email copied!",
        description: "devkatyal01@gmail.com has been copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy email to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.section 
      className="py-32 px-6 relative overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Animated Starry Background */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute bg-purple-400 rounded-full opacity-15 animate-pulse"
            style={{
              width: '3px',
              height: '3px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 8px rgba(168, 85, 247, 0.3)',
              animationDelay: Math.random() * 4 + 's',
              animationDuration: (Math.random() * 3 + 3) + 's',
            }}
          />
        ))}
      </div>

      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black animate-pulse" 
           style={{ animationDuration: '8s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(168,85,247,0.2)",
                "0 0 30px rgba(168,85,247,0.4)",
                "0 0 20px rgba(168,85,247,0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div 
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-purple-300 text-sm font-light">Get to know me</span>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.1)",
                "0 0 40px rgba(168,85,247,0.3)",
                "0 0 20px rgba(255,255,255,0.1)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Explore, experiment
            </motion.span>
            <br />
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                opacity: { delay: 0.4, duration: 0.8 },
                scale: { delay: 0.4, duration: 0.8 },
                backgroundPosition: { duration: 5, repeat: Infinity }
              }}
              style={{ backgroundSize: "200% 200%" }}
              viewport={{ once: true }}
            >
              && say hello
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Enhanced Cards Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
            whileHover={{ 
              y: -10, 
              rotateX: 5,
              boxShadow: "0 20px 40px rgba(59,130,246,0.3)"
            }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="group p-8 bg-black/70 border border-blue-400/40 backdrop-blur-sm transition-all duration-500 scale-[1.02] shadow-2xl shadow-blue-500/20 relative overflow-hidden h-[480px] flex flex-col">
            {/* Image Section - Fixed positioning */}
            <div className="flex justify-center mb-8 pt-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/20640057-55d3-4e0b-9ef7-c9d9b7de0d3a.png" 
                  alt="University of Waterloo" 
                  className="w-36 h-36 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Content Section - Fixed positioning */}
            <div className="text-center mb-8">
              <span className="text-white font-medium text-lg block mb-2">University of Waterloo</span>
              <span className="text-blue-400 text-sm block mb-1">Computer Science (Co-op Program)</span>
            </div>
            
            {/* Bottom Section - Fixed positioning */}
            <div className="mt-auto">
              <Badge variant="outline" className="mb-3 border-blue-400/30 text-blue-300 bg-blue-500/10">
                Education
              </Badge>
              <h3 className="text-xl font-light text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                Building foundations
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                CS at Canada's most innovative university, where cutting-edge theory meets real-world application
              </p>
            </div>
          </Card>
          </motion.div>

          {/* Fun Facts Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            whileHover={{ 
              y: -10, 
              rotateX: 5,
              boxShadow: "0 20px 40px rgba(236,72,153,0.3)"
            }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="group p-8 bg-black/70 border border-pink-400/40 backdrop-blur-sm transition-all duration-500 scale-[1.02] shadow-2xl shadow-pink-500/20 relative overflow-hidden h-[480px] flex flex-col">
            {/* Image Section - Fixed positioning */}
            <div className="flex justify-center mb-8 pt-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/93d910f6-d6cf-40ee-867b-29efa21470a6.png" 
                  alt="Laptop" 
                  className="w-36 h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Content Section - Fixed positioning */}
            <div className="text-center mb-8">
              <span className="text-white font-medium text-lg block mb-2">Coffee • Night Coding</span>
              <span className="text-xs text-gray-400">Peak productivity: 11 PM</span>
            </div>
            
            {/* Bottom Section - Fixed positioning */}
            <div className="mt-auto">
              <Badge variant="outline" className="mb-3 border-pink-400/30 text-pink-300 bg-pink-500/10">
                Fun Facts
              </Badge>
              <h3 className="text-xl font-light text-white mb-2 group-hover:text-pink-100 transition-colors duration-300">
                Beyond the code
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                When I'm not coding, you'll find me exploring virtual worlds or perfecting the perfect brew
              </p>
            </div>
          </Card>
          </motion.div>

          {/* Always Growing Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            whileHover={{ 
              y: -10, 
              rotateX: 5,
              boxShadow: "0 20px 40px rgba(16,185,129,0.3)"
            }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Card className="group p-8 bg-black/70 border border-emerald-400/40 backdrop-blur-sm transition-all duration-500 scale-[1.02] shadow-2xl shadow-emerald-500/20 relative overflow-hidden h-[480px] flex flex-col">
            {/* Image Section - Fixed positioning */}
            <div className="flex justify-center mb-8 pt-4">
              <div className="w-40 h-40 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/aaf775f6-8ae4-40e0-9059-a650f8485091.png" 
                  alt="Growing Tree" 
                  className="w-32 h-36 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Content Section - Fixed positioning */}
            <div className="text-center mb-8">
              <span className="text-white font-medium text-lg block mb-2">Continuous Learning</span>
              <span className="text-xs text-gray-400">React • AI/ML • 3D Web Development</span>
            </div>
            
            {/* Bottom Section - Fixed positioning */}
            <div className="mt-auto">
              <Badge variant="outline" className="mb-3 border-emerald-400/30 text-emerald-300 bg-emerald-500/10">
                Always Growing
              </Badge>
              <h3 className="text-xl font-light text-white mb-2 group-hover:text-emerald-100 transition-colors duration-300">
                Never stop learning
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Constantly pushing boundaries and exploring new technologies to stay ahead of the curve
              </p>
            </div>
          </Card>
          </motion.div>
        </div>

        {/* Enhanced About Me Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                Full-Stack Developer
                <br />
                <span className="text-2xl md:text-3xl text-white">
                  crafting digital experiences with{" "}
                </span>
                <br />
                <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  passion && precision
                </span>
              </h3>
            </div>
            
            <div className="space-y-6 text-white">
              <p className="font-light text-lg leading-relaxed">
                I'm <span className="text-white font-medium">Dev Katyal</span>, a Computer Science student at 
                <span className="text-white"> University of Waterloo</span>, incoming intern @ 
                <span className="text-white"> Shopify</span>, bringing 4+ years of coding experience to the table.
              </p>
              
              <p className="font-light leading-relaxed">
                I have built cool stuff like <span className="text-white">EcoPlastic</span>, deep-learning AI Android app for recycling 
                (1st place @ WUSA change engine, $3K) or <span className="text-white">MarineMatch</span>, AI for fish recognition 
                ($6K+ in awards). Currently exploring the exciting world of 3D web development and AI integrations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-gray-400/40 text-gray-400 hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/10 bg-transparent group transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/dev-katyal', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-gray-400/40 text-gray-400 hover:text-purple-500 hover:border-purple-500/40 hover:bg-purple-500/10 bg-transparent group transition-all duration-300"
                onClick={() => window.open('https://github.com/dkaty123', '_blank')}
              >
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-gray-400/40 text-gray-400 hover:text-red-500 hover:border-red-500/40 hover:bg-red-500/10 bg-transparent group cursor-pointer transition-all duration-300"
                onClick={handleEmailClick}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Contact
              </Button>
            </div>

            <motion.div 
              className="mt-12 -mx-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SkillsCarousel />
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-end items-center mt-16"
            initial={{ opacity: 0, x: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            viewport={{ once: true }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"
                animate={{
                  rotate: [12, 18, 12],
                  y: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl"
                animate={{
                  rotate: [-12, -18, -12],
                  y: [5, -5, 5],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              <motion.div 
                className="w-80 h-80 relative"
                whileHover={{ rotateY: 15 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl"
                  animate={{
                    rotate: [6, 12, 6],
                    background: [
                      "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))",
                      "linear-gradient(135deg, rgba(236,72,153,0.3), rgba(168,85,247,0.3))",
                      "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))"
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute inset-4 bg-black border border-white/20 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Fixed image with proper orientation */}
                  <motion.img 
                    src="/lovable-uploads/e0ae7d83-9255-40a8-ade0-394aae8b958c.png" 
                    alt="Dev Katyal" 
                    className="w-full h-full object-cover object-center"
                    style={{ 
                      transform: "rotate(90deg)",
                      transformOrigin: "center"
                    }}
                    animate={{
                      filter: [
                        "brightness(1) contrast(1)",
                        "brightness(1.05) contrast(1.05)",
                        "brightness(1) contrast(1)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-2xl"
                  animate={{
                    opacity: [0.6, 0.9, 0.6],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PersonalSection;
