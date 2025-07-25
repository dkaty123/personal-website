
import { Linkedin, Mail, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Generate enhanced floating particles
  const generateFloatingParticles = (count: number) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      const pseudoRandom1 = ((i * 17) % 100) / 100;
      const pseudoRandom2 = ((i * 31) % 100) / 100;
      const pseudoRandom3 = ((i * 47) % 100) / 100;
      
      particles.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: pseudoRandom1 * 4 + 2 + 'px',
            height: pseudoRandom1 * 4 + 2 + 'px',
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, pseudoRandom3 * 20 - 10, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: pseudoRandom3 * 6 + 4,
            repeat: Infinity,
            delay: pseudoRandom2 * 3,
            ease: "easeInOut"
          }}
        />
      );
    }
    return particles;
  };

  // Generate enhanced stars with better animation
  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const pseudoRandom1 = ((i * 23) % 100) / 100;
      const pseudoRandom2 = ((i * 41) % 100) / 100;
      const pseudoRandom3 = ((i * 59) % 100) / 100;
      
      stars.push(
        <motion.div
          key={`star-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: '3px',
            height: '3px',
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: pseudoRandom3 * 4 + 2,
            repeat: Infinity,
            delay: pseudoRandom1 * 2,
            ease: "easeInOut"
          }}
        />
      );
    }
    return stars;
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced animated background layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"
        animate={{
          background: [
            "linear-gradient(to bottom, #000, rgba(76,29,149,0.2), #000)",
            "linear-gradient(to bottom, #000, rgba(168,85,247,0.3), #000)",
            "linear-gradient(to bottom, #000, rgba(76,29,149,0.2), #000)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Enhanced light rays with animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/15 via-purple-400/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transform: "translate(-30%, -30%)" }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-400/20 via-blue-400/15 to-transparent blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ transform: "translate(30%, -30%)" }}
        />
      </motion.div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {generateFloatingParticles(40)}
      </div>
      
      {/* Enhanced stars */}
      <div className="absolute inset-0">
        {generateStars(25)}
      </div>

      {/* Orbiting elements around the main content */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="w-full h-full bg-purple-400/50 rounded-full"
              style={{
                transformOrigin: `${100 + i * 30}px center`,
              }}
              animate={{
                rotate: [0, -360],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* Enhanced main heading with improved animations */}
        <motion.div 
          className="relative mb-8"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : 50,
            scale: isLoaded ? 1 : 0.9 
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            type: "spring",
            bounce: 0.3
          }}
        >
          <div className="px-12 py-16">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.9] text-white tracking-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.1)",
                  "0 0 40px rgba(168,85,247,0.2)",
                  "0 0 20px rgba(255,255,255,0.1)"
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
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                digital{" "}
              </motion.span>
              <br />
              <motion.span 
                className="italic font-light bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                experiences
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Enhanced glow effect */}
          <motion.div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-16 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1.2, 0.8],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Enhanced name with typing effect */}
        <motion.div 
          className="text-2xl font-light text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ 
            duration: 1, 
            delay: 0.8,
            type: "spring",
            bounce: 0.4
          }}
        >
          Hello, I'm{" "}
          <motion.span 
            className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Dev Katyal
          </motion.span>
        </motion.div>

        {/* Enhanced profile image with floating animation */}
        <motion.div 
          className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 mx-auto mb-3 shadow-lg"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 0.5,
            rotate: isLoaded ? 0 : -180
          }}
          transition={{ 
            duration: 1.2, 
            delay: 1.2,
            type: "spring",
            bounce: 0.6
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)"
          }}
        >
          <motion.img 
            src="/lovable-uploads/1488e487-15ac-43d1-8dd4-eb4d69a298f3.png" 
            alt="Dev Katyal" 
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Enhanced Shopify internship with slide and glow animation */}
        <motion.div 
          className="flex items-center justify-center gap-2 mb-4 text-lg text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
          transition={{ 
            duration: 1, 
            delay: 1.6,
            type: "spring",
            bounce: 0.3
          }}
        >
          <motion.span
            animate={{
              color: ["rgb(209, 213, 219)", "rgb(168, 85, 247)", "rgb(209, 213, 219)"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Fall 2025 SWE Intern @
          </motion.span>
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.1 }}
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
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

        {/* Enhanced social links with staggered hover effects */}
        <motion.div 
          className="flex items-center justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ 
            duration: 1, 
            delay: 2,
            type: "spring",
            bounce: 0.4
          }}
        >
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/dev-katyal", color: "blue" },
            { icon: Mail, label: "Gmail", href: "mailto:devkatyal01@gmail.com", color: "red" },
            { icon: Github, label: "GitHub", href: "https://github.com/dkaty123", color: "purple" }
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  color: social.color === 'blue' ? '#3b82f6' : 
                        social.color === 'red' ? '#ef4444' : '#a855f7'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <span className="text-sm">{social.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
