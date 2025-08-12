
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedText from "./AnimatedText";

const AnimatedStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { value: 15, label: "Projects Completed", suffix: "+", color: "from-purple-400 to-pink-500", icon: "🚀" },
    { value: 4, label: "Years of Experience", suffix: "+", color: "from-blue-400 to-cyan-500", icon: "⭐" },
    { value: 8, label: "Technologies Mastered", suffix: "+", color: "from-green-400 to-emerald-500", icon: "⚡" },
    { value: 100, label: "Client Satisfaction", suffix: "%", color: "from-orange-400 to-red-500", icon: "❤️" }
  ];

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let count = 0;
        const increment = stat.value / 60;
        const timer = setInterval(() => {
          count += increment;
          if (count >= stat.value) {
            count = stat.value;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(count);
            return newCounters;
          });
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section id="stats-section" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />
      
      <AnimatedBackground variant="particles" intensity="medium" color="purple" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedText variant="glow" className="text-4xl md:text-5xl font-light text-white mb-4">
            Numbers That
          </AnimatedText>
          <AnimatedText variant="gradient" className="text-4xl md:text-5xl font-light">
            Tell Stories
          </AnimatedText>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group perspective-1000"
            >
              <div className="relative preserve-3d">
                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 rounded-2xl blur-lg`} />
                
                <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Animated icon */}
                  <div className="text-3xl mb-2">
                    {stat.icon}
                  </div>
                  
                  {/* Animated counter */}
                  <div className="text-4xl md:text-5xl font-light text-white mb-2">
                    {isVisible ? counters[index] : 0}{stat.suffix}
                  </div>
                  
                  <div className="text-gray-400 text-sm font-light">
                    {stat.label}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1500`}
                      style={{ width: isVisible ? "100%" : "0%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;
