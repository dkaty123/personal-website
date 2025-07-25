
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
      {/* Enhanced Starry Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-40"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: '3px',
              height: '3px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.3)',
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 6px rgba(255, 255, 255, 0.3)',
                '0 0 12px rgba(168, 85, 247, 0.5)',
                '0 0 6px rgba(255, 255, 255, 0.3)',
              ],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.span 
              className="text-white"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.span>
            <br />
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
              Dev Katyal
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A passionate developer using AI to create environmental impact and build seamless digital experiences for founders worldwide.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            style={{ perspective: "1000px" }}
          >
            <Card className="p-8 bg-black/60 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-500 group relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <motion.div 
                    className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img 
                      src="/lovable-uploads/a5b98a6c-55a7-4b64-a0fd-140827038e4e.png" 
                      alt="Dev Katyal" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-2xl font-light text-white mb-2"
                      whileHover={{ x: 5 }}
                    >
                      Dev Katyal
                    </motion.h3>
                    <motion.p 
                      className="text-purple-400 font-light"
                      whileHover={{ x: 5 }}
                    >
                      Software Engineer & AI Innovator
                    </motion.p>
                  </div>
                </div>
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-6 font-light"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  Currently a Fall 2025 SWE Intern at Shopify, with previous experience at Health Canada and as an IBM Z Ambassador. 
                  Passionate about leveraging AI technology to solve real-world problems, particularly in environmental sustainability.
                </motion.p>
                <motion.div 
                  className="flex items-center gap-2 text-green-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <TreePine className="w-5 h-5" />
                  </motion.div>
                  <span className="text-sm font-light">Environmental Impact Focus</span>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, rotateY: -5 }}
            style={{ perspective: "1000px" }}
          >
            <Card className="p-8 bg-black/60 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-500 group relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h3 className="text-xl font-light text-white">Mission Statement</h3>
                </div>
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-6 font-light"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  "I believe technology should be a force for positive change. My mission is to harness the power of AI 
                  to address environmental challenges while helping founders transform their innovative ideas into 
                  impactful digital solutions."
                </motion.p>
                <div className="space-y-3">
                  {[
                    { text: "AI for Environmental Impact", color: "bg-purple-400" },
                    { text: "Sustainable Technology Solutions", color: "bg-pink-400" },
                    { text: "Founder-Focused Development", color: "bg-blue-400" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <motion.div 
                        className={`w-2 h-2 ${item.color} rounded-full`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                      <span className="text-sm text-gray-400 font-light">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Calendar className="w-6 h-6 text-purple-400" />
            </motion.div>
            <h3 className="text-2xl font-light text-white">Key Milestones</h3>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400 opacity-30"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ originY: 0 }}
            />
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div 
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 ${
                      item.type === 'award' ? 'bg-yellow-500/20 border-yellow-400' :
                      item.type === 'work' ? 'bg-green-500/20 border-green-400' :
                      'bg-blue-500/20 border-blue-400'
                    }`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.type === 'award' ? (
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <Award className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className={`w-2 h-2 rounded-full ${
                          item.type === 'work' ? 'bg-green-400' : 'bg-blue-400'
                        }`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      />
                    )}
                  </motion.div>
                  
                  <Card className="flex-1 p-4 bg-black/40 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.span 
                          className="text-purple-400 font-medium text-sm"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.year}
                        </motion.span>
                        <motion.h4 
                          className="font-light text-white"
                          whileHover={{ x: 5 }}
                        >
                          {item.title}
                        </motion.h4>
                      </div>
                      <motion.p 
                        className="text-gray-400 text-sm font-light"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-black/60 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-500 text-center group relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <h3 className="text-2xl font-light text-white">Recognition & Awards</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "RBC 21 Under 21", desc: "Recognition for outstanding achievements and potential", color: "yellow" },
                  { title: "Governor General's Award", desc: "Academic excellence and community contribution", color: "purple" }
                ].map((award, index) => (
                  <motion.div 
                    key={index}
                    className={`p-4 ${award.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-400/20' : 'bg-purple-500/10 border-purple-400/20'} rounded-lg border`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.h4 
                      className={`font-medium ${award.color === 'yellow' ? 'text-yellow-400' : 'text-purple-400'} mb-2`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {award.title}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-gray-400 font-light"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {award.desc}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
