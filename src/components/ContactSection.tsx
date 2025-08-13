
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
      {/* Simple static background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8"
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
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to turn your ideas into reality? Let's discuss how we can create something amazing together.
          </motion.p>
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
