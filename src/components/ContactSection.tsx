
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
      {/* Enhanced animated background with more complex patterns */}
      <motion.div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
              y: [-40, 40, -40],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Enhanced floating contact icons with more complex animations */}
      <div className="absolute inset-0">
        {[Mail, MessageCircle, Github, Sparkles, Linkedin].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/25"
            style={{
              left: `${10 + i * 18}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [0, Math.random() * 10 - 5, 0],
              rotate: [-5, 5, -5],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              delay: i * 2,
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-10 h-10" />
          </motion.div>
        ))}
      </div>

      {/* Enhanced gradient overlays with more dynamic animation */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 30%, rgba(76,29,149,0.15), transparent 60%)",
            "radial-gradient(ellipse at 70% 70%, rgba(168,85,247,0.25), transparent 60%)",
            "radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.2), transparent 60%)",
            "radial-gradient(ellipse at 30% 30%, rgba(76,29,149,0.15), transparent 60%)"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-purple-400/20"
            style={{
              width: Math.random() * 50 + 25 + 'px',
              height: Math.random() * 50 + 25 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '20%' : '8px',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.4, 0.1],
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header with more sophisticated animations */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-10"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.1)",
                "0 0 50px rgba(168,85,247,0.4)",
                "0 0 20px rgba(255,255,255,0.1)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="text-white">Let's</span>
            <br />
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Connect
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            style={{
              animationDuration: "4s",
              animationIterationCount: "infinite"
            }}
          >
            Ready to turn your ideas into reality? Let's discuss how we can create something amazing together.
          </motion.p>

          {/* Enhanced animated decoration */}
          <motion.div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-20 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-2xl"
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scaleX: [0.8, 1.4, 0.8],
              scaleY: [1, 1.5, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>

        {/* Enhanced Contact Methods with more dynamic animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const colorClasses = getColorClasses(method.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 1, 
                  type: "spring",
                  bounce: 0.4
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  y: -15,
                  rotateX: 8,
                  rotateY: 5
                }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                className="group"
              >
                <Card className="bg-black/80 border border-gray-800 backdrop-blur-sm transition-all duration-700 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden p-10 h-full">
                  {/* Enhanced animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                  />

                  {/* Enhanced animated border effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: "conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.4), transparent)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Enhanced Icon with more complex animations */}
                    <motion.div 
                      className={`w-20 h-20 ${colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 15,
                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                      }}
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 3, 0, -3, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <Icon className={`w-10 h-10 ${colorClasses.text}`} />
                    </motion.div>

                    {/* Enhanced Content with better animations */}
                    <motion.h3 
                      className="text-2xl font-light text-white mb-3 group-hover:text-purple-100 transition-colors duration-300"
                      whileHover={{ y: -3 }}
                      animate={{
                        textShadow: [
                          "0 0 0 rgba(255,255,255,0)",
                          "0 0 20px rgba(168,85,247,0.3)",
                          "0 0 0 rgba(255,255,255,0)"
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {method.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 text-sm mb-6 font-light"
                      whileHover={{ y: -3 }}
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {method.description}
                    </motion.p>

                    <motion.a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block ${colorClasses.text} hover:text-white transition-colors duration-300 text-sm font-medium`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {method.value}
                    </motion.a>
                  </div>

                  {/* Enhanced floating particles with more complex animations */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%',
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 2, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced footer with more sophisticated animations */}
        <motion.div 
          className="text-center mt-20 pt-10 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <motion.p 
            className="text-gray-400 text-sm font-light"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            © 2024 Dev Katyal. Building the future, one line of code at a time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
