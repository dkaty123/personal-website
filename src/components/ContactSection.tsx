
import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Sparkles, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      value: "devkatyal01@gmail.com",
      href: "mailto:devkatyal01@gmail.com",
      color: "blue"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      value: "github.com/dkaty123",
      href: "https://github.com/dkaty123",
      color: "purple"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "linkedin.com/in/dev-katyal",
      href: "https://linkedin.com/in/dev-katyal",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-400/30' };
      case 'purple': return { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-400/30' };
      case 'cyan': return { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-400/30' };
      default: return { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-400/30' };
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Enhanced animated background */}
      <motion.div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-40"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              y: [-30, 30, -30],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </motion.div>
      
      {/* Floating contact icons */}
      <div className="absolute inset-0">
        {[Mail, MessageCircle, Github, Sparkles].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/20"
            style={{
              left: `${15 + i * 20}%`,
              top: `${25 + (i % 2) * 35}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-3, 3, -3],
            }}
            transition={{
              delay: i * 1.5,
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* Enhanced gradient overlays with animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"
        animate={{
          background: [
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(76,29,149,0.2), rgba(0,0,0,1))",
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(168,85,247,0.25), rgba(0,0,0,1))",
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(76,29,149,0.2), rgba(0,0,0,1))"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
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
            <span className="text-white">Let's</span>
            <br />
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Connect
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to turn your ideas into reality? Let's discuss how we can create something amazing together.
          </motion.p>

          {/* Animated decoration */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-16 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colorClasses = getColorClasses(method.color);
            
            return (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateX: 5
                }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                className="group"
              >
                <Card className="bg-black/70 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden p-8 h-full">
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ 
                        rotate: 10,
                        boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                      }}
                    >
                      <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                    </motion.div>

                    {/* Content */}
                    <motion.h3 
                      className="text-xl font-light text-white mb-2 group-hover:text-purple-100 transition-colors duration-300"
                      whileHover={{ y: -2 }}
                    >
                      {method.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 text-sm mb-4 font-light"
                      whileHover={{ y: -2 }}
                    >
                      {method.description}
                    </motion.p>

                    <motion.a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block ${colorClasses.text} hover:text-white transition-colors duration-300 text-sm font-medium`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {method.value}
                    </motion.a>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
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
                          delay: i * 0.4,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
