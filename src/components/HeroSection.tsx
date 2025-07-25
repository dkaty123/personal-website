
import { Linkedin, Mail, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Generate consistent star positions and animations
  const generateStars = (count: number, keyPrefix: string) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const pseudoRandom1 = ((i * 17) % 100) / 100;
      const pseudoRandom2 = ((i * 31) % 100) / 100;
      const pseudoRandom3 = ((i * 47) % 100) / 100;
      const pseudoRandom4 = ((i * 61) % 100) / 100;
      
      stars.push(
        <motion.div
          key={`${keyPrefix}-${i}`}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: pseudoRandom1 * 3 + 2 + 'px',
            height: pseudoRandom1 * 3 + 2 + 'px',
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: pseudoRandom4 * 2 + 2,
            repeat: Infinity,
            delay: pseudoRandom3 * 3,
            ease: "easeInOut"
          }}
        />
      );
    }
    return stars;
  };

  const generateLargeStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const pseudoRandom1 = ((i * 23) % 100) / 100;
      const pseudoRandom2 = ((i * 41) % 100) / 100;
      const pseudoRandom3 = ((i * 59) % 100) / 100;
      const pseudoRandom4 = ((i * 73) % 100) / 100;
      
      stars.push(
        <motion.div
          key={`large-${i}`}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            width: '4px',
            height: '4px',
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
            boxShadow: '0 0 12px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 2, 1],
            rotate: [0, 360],
            boxShadow: [
              '0 0 12px rgba(255, 255, 255, 0.8)',
              '0 0 24px rgba(168, 85, 247, 0.8)',
              '0 0 12px rgba(255, 255, 255, 0.8)'
            ]
          }}
          transition={{
            duration: pseudoRandom4 * 1.5 + 1.5,
            repeat: Infinity,
            delay: pseudoRandom3 * 2,
            ease: "easeInOut"
          }}
        />
      );
    }
    return stars;
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced background with floating orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: Math.random() * 300 + 200 + 'px',
              height: Math.random() * 300 + 200 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.3, 1],
              background: [
                'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
                'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
                'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
                'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Enhanced light ray effect */}
      <motion.div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/20 via-purple-400/10 to-transparent blur-3xl transform -translate-x-32 -translate-y-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/30 via-blue-400/20 to-transparent blur-2xl transform -translate-x-20 -translate-y-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
      
      {/* Enhanced animated stars */}
      <div className="absolute inset-0">
        {generateStars(60, 'star')}
      </div>
      
      <div className="absolute inset-0">
        {generateLargeStars(20)}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* Enhanced main heading with wave animation */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : 50,
            scale: isLoaded ? 1 : 0.8
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="px-12 py-16">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.9] text-white tracking-tight"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.1)',
                  '0 0 40px rgba(168,85,247,0.3)',
                  '0 0 20px rgba(255,255,255,0.1)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              I help founders turn ideas
              <br />
              into seamless{" "}
              <motion.span 
                className="italic font-light bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                digital{" "}
              </motion.span>
              <br />
              <motion.span 
                className="italic font-light bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                experiences
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Enhanced glow effect */}
          <motion.div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-16 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Enhanced name with floating effect */}
        <motion.div 
          className="text-2xl font-light text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : 30 
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Hello, I'm{" "}
          </motion.span>
          <motion.span 
            className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          >
            Dev Katyal
          </motion.span>
        </motion.div>

        {/* Enhanced profile image with orbit effect */}
        <motion.div 
          className="relative w-32 h-32 mx-auto mb-3"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 0.5,
            rotate: isLoaded ? 0 : -180
          }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <motion.div
            className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-lg"
            animate={{
              boxShadow: [
                '0 0 20px rgba(255,255,255,0.2)',
                '0 0 40px rgba(168,85,247,0.4)',
                '0 0 20px rgba(255,255,255,0.2)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/lovable-uploads/1488e487-15ac-43d1-8dd4-eb4d69a298f3.png" 
              alt="Dev Katyal" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Orbiting particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                rotate: [0, 360],
                x: Math.cos(i * Math.PI / 2) * 80,
                y: Math.sin(i * Math.PI / 2) * 80,
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced Shopify internship with wave effect */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-4 text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : 20 
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.span
            animate={{
              x: [0, 2, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Fall 2025 SWE Intern @
          </motion.span>
          <motion.div 
            className="flex items-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/lovable-uploads/8ba65541-921d-43d7-b964-0ce741196f46.png" 
              alt="Shopify" 
              className="h-24 w-auto"
            />
          </motion.div>
        </motion.div>

        {/* Enhanced social links with magnetic effect */}
        <motion.div 
          className="flex items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : 30 
          }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { href: "https://linkedin.com/in/dev-katyal", icon: Linkedin, label: "LinkedIn", color: "blue" },
            { href: "mailto:devkatyal01@gmail.com", icon: Mail, label: "Gmail", color: "red" },
            { href: "https://github.com/dkaty123", icon: Github, label: "GitHub", color: "purple" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-${social.color}-400`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <social.icon className="w-5 h-5" />
              </motion.div>
              <span className="text-sm">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
