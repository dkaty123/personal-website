
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
      {/* Enhanced animated background with more particles */}
      <motion.div className="absolute inset-0">
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.9, 0.1],
              scale: [1, 2, 1],
              y: [-50, 50, -50],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: Math.random() * 12 + 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Enhanced floating contact icons with more movement */}
      <div className="absolute inset-0">
        {[Mail, MessageCircle, Github, Sparkles].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/25"
            style={{
              left: `${10 + i * 22}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              rotate: [-5, 5, -5],
              scale: [1, 1.2, 1],
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

      {/* Dynamic gradient overlays with more complex animation */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(168,85,247,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.2) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))",
            "radial-gradient(circle at 60% 30%, rgba(236,72,153,0.25) 0%, transparent 50%), radial-gradient(circle at 40% 70%, rgba(168,85,247,0.3) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))",
            "radial-gradient(circle at 80% 80%, rgba(59,130,246,0.2) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(168,85,247,0.3) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))"
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header with better animations */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8"
            animate={{
              textShadow: [
                "0 0 30px rgba(255,255,255,0.1)",
                "0 0 60px rgba(168,85,247,0.4)",
                "0 0 30px rgba(255,255,255,0.1)"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white">Let's</span>
            <br />
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "300% 300%" }}
            >
              Connect
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to turn your ideas into reality? Let's discuss how we can create something amazing together.
          </motion.p>

          {/* Enhanced animated decoration */}
          <motion.div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-20 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent blur-xl"
            animate={{
              opacity: [0.4, 1, 0.4],
              scaleX: [0.8, 1.4, 0.8],
              scaleY: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Enhanced Contact Methods with better animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
                initial={{ opacity: 0, y: 80, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.3, 
                  duration: 1, 
                  type: "spring",
                  bounce: 0.4
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  y: -15,
                  rotateX: 8,
                  rotateY: 5,
                }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                className="group"
              >
                <Card className="bg-black/80 border border-gray-800 backdrop-blur-sm transition-all duration-700 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 relative overflow-hidden p-8 h-full">
                  {/* Enhanced animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                  />

                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent, transparent)",
                        "linear-gradient(45deg, rgba(168,85,247,0.2), transparent, rgba(168,85,247,0.2))",
                        "linear-gradient(45deg, transparent, transparent)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="relative z-10 text-center">
                    {/* Enhanced Icon */}
                    <motion.div 
                      className={`w-20 h-20 ${colorClasses.bg} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-transform duration-500`}
                      whileHover={{ 
                        rotate: 15,
                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(168, 85, 247, 0)",
                          "0 0 20px rgba(168, 85, 247, 0.3)",
                          "0 0 0px rgba(168, 85, 247, 0)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Icon className={`w-10 h-10 ${colorClasses.text}`} />
                    </motion.div>

                    {/* Enhanced Content */}
                    <motion.h3 
                      className="text-2xl font-light text-white mb-3 group-hover:text-purple-100 transition-colors duration-500"
                      whileHover={{ y: -3, scale: 1.05 }}
                    >
                      {method.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 text-sm mb-6 font-light"
                      whileHover={{ y: -2 }}
                    >
                      {method.description}
                    </motion.p>

                    <motion.a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block ${colorClasses.text} hover:text-white transition-colors duration-500 text-sm font-medium`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {method.value}
                    </motion.a>
                  </div>

                  {/* Enhanced floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                        style={{
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%',
                        }}
                        animate={{
                          y: [0, -30, 0],
                          x: [0, Math.random() * 20 - 10, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 2, 0],
                        }}
                        transition={{
                          duration: 3,
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
      </div>
    </section>
  );
};

export default ContactSection;
