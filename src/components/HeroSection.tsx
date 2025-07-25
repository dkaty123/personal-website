
import { Linkedin, Mail, Github } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Generate consistent star positions and animations - completely static positioning
  const generateStars = (count: number, keyPrefix: string) => {
    // Use a fixed seed-based approach to ensure consistent positioning
    const stars = [];
    for (let i = 0; i < count; i++) {
      // Use index-based "random" values for consistent positioning
      const pseudoRandom1 = ((i * 17) % 100) / 100;
      const pseudoRandom2 = ((i * 31) % 100) / 100;
      const pseudoRandom3 = ((i * 47) % 100) / 100;
      const pseudoRandom4 = ((i * 61) % 100) / 100;
      
      const animationDelay = pseudoRandom3 * 3; // Reduced delay
      const animationDuration = pseudoRandom4 * 2 + 2; // Faster animation
      
      stars.push(
        <div
          key={`${keyPrefix}-${i}`}
          className="absolute bg-white rounded-full opacity-80 animate-float" // More visible
          style={{
            width: pseudoRandom1 * 3 + 2 + 'px', // Bigger stars
            height: pseudoRandom1 * 3 + 2 + 'px', // Bigger stars
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
            animationDelay: animationDelay + 's',
            animationDuration: animationDuration + 's',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)', // Glow effect
          }}
        />
      );
    }
    return stars;
  };

  const generateLargeStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      // Use index-based "random" values for consistent positioning
      const pseudoRandom1 = ((i * 23) % 100) / 100;
      const pseudoRandom2 = ((i * 41) % 100) / 100;
      const pseudoRandom3 = ((i * 59) % 100) / 100;
      const pseudoRandom4 = ((i * 73) % 100) / 100;
      
      const animationDelay = pseudoRandom3 * 2; // Faster
      const animationDuration = pseudoRandom4 * 1.5 + 1.5; // Faster
      
      stars.push(
        <div
          key={`large-${i}`}
          className="absolute bg-white rounded-full opacity-70 animate-twinkle" // More visible
          style={{
            width: '4px', // Bigger
            height: '4px', // Bigger
            left: pseudoRandom1 * 100 + '%',
            top: pseudoRandom2 * 100 + '%',
            boxShadow: '0 0 12px rgba(255, 255, 255, 0.8)', // Brighter glow
            animationDelay: animationDelay + 's',
            animationDuration: animationDuration + 's',
          }}
        />
      );
    }
    return stars;
  };

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
      
      {/* Light ray effect from top left corner */}
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/20 via-purple-400/10 to-transparent blur-3xl transform -translate-x-32 -translate-y-32 animate-pulse" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/30 via-blue-400/20 to-transparent blur-2xl transform -translate-x-20 -translate-y-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Enhanced animated stars - more visible movement */}
      <div className="absolute inset-0">
        {generateStars(50, 'star')}
      </div>
      
      <div className="absolute inset-0">
        {generateLargeStars(15)}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-8">
        {/* Main heading with entrance animation - Enhanced padding and container sizing */}
        <div className={`relative mb-8 transition-all duration-1000 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          {/* Added extra container with generous padding to prevent any cutoff */}
          <div className="px-12 py-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.9] text-white tracking-tight">
              I help founders turn ideas
              <br />
              into seamless{" "}
              <span className="italic font-light bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                digital{" "}
              </span>
              <br />
              <span className="italic font-light bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                experiences
              </span>
            </h1>
          </div>
          
          {/* Static glow effect */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-16 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-xl opacity-50" />
        </div>

        {/* Name with delayed entrance - Reduced margin */}
        <div className={`text-2xl font-light text-white mb-4 tracking-wide transition-all duration-1000 delay-300 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-6'
        }`}>
          Hello, I'm{" "}
          <span className="font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Dev Katyal
          </span>
        </div>

        {/* Profile image with scale animation - Made bigger */}
        <div className={`w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 mx-auto mb-3 shadow-lg transition-all duration-700 delay-500 ${
          isLoaded 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-75'
        }`}>
          <img 
            src="/lovable-uploads/1488e487-15ac-43d1-8dd4-eb4d69a298f3.png" 
            alt="Dev Katyal" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Shopify internship with slide-up animation */}
        <div className={`flex items-center justify-center gap-2 mb-4 text-lg text-gray-300 transition-all duration-800 delay-700 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <span>Fall 2025 SWE Intern @</span>
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8ba65541-921d-43d7-b964-0ce741196f46.png" 
              alt="Shopify" 
              className="h-24 w-auto"
            />
          </div>
        </div>

        {/* Social links with staggered entrance - Updated with correct links */}
        <div className={`flex items-center justify-center gap-8 transition-all duration-900 delay-900 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <a 
            href="https://linkedin.com/in/dev-katyal" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-105 hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:devkatyal01@gmail.com" 
            className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-red-400 hover:scale-105 hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Gmail</span>
          </a>
          
          <a 
            href="https://github.com/dkaty123" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-purple-400 hover:scale-105 hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;