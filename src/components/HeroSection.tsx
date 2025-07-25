
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

  const generateStars = (count: number, keyPrefix: string) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const pseudoRandom1 = ((i * 17) % 100) / 100;
      const pseudoRandom2 = ((i * 31) % 100) / 100;
      const pseudoRandom3 = ((i * 47) % 100) / 100;
      const pseudoRandom4 = ((i * 61) % 100) / 100;
      
      const animationDelay = pseudoRandom3 * 4;
      const animationDuration = pseudoRandom4 * 3 + 3;
      
      stars.push(
        <motion.div
          key={`${keyPrefix}-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: pseudoRandom1 * 4 + 2 + 'px',
            height: pseudoRandom1 * 4 + 2 + 'px',
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            delay: animationDelay,
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
      
      const animationDelay = pseudoRandom3 * 3;
      const animationDuration = pseudoRandom4 * 2 + 2;
      
      stars.push(
        <motion.div
          key={`large-${i}`}
          className="absolute bg-white rounded-full"
          style={{
            width: '5px',
            height: '5px',
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
          }}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 2, 1],
            boxShadow: [
              '0 0 10px rgba(255, 255, 255, 0.5)',
              '0 0 20px rgba(255, 255, 255, 1)',
              '0 0 10px rgba(255, 255, 255, 0.5)'
            ]
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            delay: animationDelay,
            ease: "easeInOut"
          }}
        />
      );
    }
    return stars;
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced dynamic background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, rgba(168,85,247,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(59,130,246,0.3) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))",
            "radial-gradient(circle at 60% 40%, rgba(236,72,153,0.35) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(168,85,247,0.4) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))",
            "radial-gradient(circle at 80% 30%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(168,85,247,0.4) 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced light ray effect */}
      <motion.div 
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/30 via-purple-400/20 to-transparent blur-3xl transform -translate-x-32 -translate-y-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/40 via-blue-400/30 to-transparent blur-2xl transform -translate-x-20 -translate-y-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [10, 0, 10],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>
      
      {/* Enhanced animated stars */}
      <div className="absolute inset-0">
        {generateStars(80, 'star')}
      </div>
      
      <div className="absolute inset-0">
        {generateLargeStars(25)}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* Enhanced main heading */}
        <motion.div 
          className={`relative mb-8 transition-all duration-1000 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="px-12 py-16">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.9] text-white tracking-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.1)",
                  "0 0 40px rgba(168,85,247,0.3)",
                  "0 0 20px rgba(255,255,255,0.1)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              I help founders turn ideas
              <br />
              into seamless{" "}
              <motion.span 
                className="italic font-light bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: "300% 300%" }}
              >
                digital{" "}
              </motion.span>
              <br />
              <motion.span 
                className="italic font-light bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: "300% 300%" }}
              >
                experiences
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Enhanced glow effect */}
          <motion.div 
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-20 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.8, 1.4, 0.8],
              scaleY: [1, 1.5, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Enhanced name section */}
        <motion.div 
          className={`text-2xl font-light text-white mb-4 tracking-wide transition-all duration-1000 delay-300 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
          animate={{
            y: [0, -2, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          Hello, I'm{" "}
          <motion.span 
            className="font-medium bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Dev Katyal
          </motion.span>
        </motion.div>

        {/* Enhanced profile image */}
        <motion.div 
          className={`w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 mx-auto mb-3 shadow-lg transition-all duration-700 delay-500 ${
            isLoaded 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-75'
          }`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(168,85,247,0.3)",
              "0 0 40px rgba(168,85,247,0.6)",
              "0 0 20px rgba(168,85,247,0.3)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/lovable-uploads/1488e487-15ac-43d1-8dd4-eb4d69a298f3.png" 
            alt="Dev Katyal" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Enhanced Shopify section */}
        <motion.div 
          className={`flex items-center justify-center gap-2 mb-4 text-lg text-gray-300 transition-all duration-800 delay-700 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <span>Fall 2025 SWE Intern @</span>
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            animate={{
              filter: [
                "brightness(1)",
                "brightness(1.2)",
                "brightness(1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <img 
              src="/lovable-uploads/8ba65541-921d-43d7-b964-0ce741196f46.png" 
              alt="Shopify" 
              className="h-24 w-auto"
            />
          </motion.div>
        </motion.div>

        {/* Enhanced social links */}
        <motion.div 
          className={`flex items-center justify-center gap-8 transition-all duration-900 delay-900 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          animate={{
            y: [0, -2, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        >
          <motion.a 
            href="https://linkedin.com/in/dev-katyal" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 transition-all duration-500 hover:text-blue-400"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              textShadow: "0 0 20px rgba(59,130,246,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </motion.a>
          
          <motion.a 
            href="mailto:devkatyal01@gmail.com" 
            className="flex items-center gap-2 text-gray-400 transition-all duration-500 hover:text-red-400"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              textShadow: "0 0 20px rgba(239,68,68,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Gmail</span>
          </motion.a>
          
          <motion.a 
            href="https://github.com/dkaty123" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 transition-all duration-500 hover:text-purple-400"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              textShadow: "0 0 20px rgba(168,85,247,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
