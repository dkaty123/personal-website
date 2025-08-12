
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Code, Coffee, Music, Camera, Gamepad2, Dumbbell, Brain, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const PersonalSection = () => {
  const interests = [
    { icon: Code, label: "Coding", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Coffee, label: "Coffee", color: "text-amber-400", bg: "bg-amber-500/10" },
    { icon: Music, label: "Music", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: Camera, label: "Photography", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: Gamepad2, label: "Gaming", color: "text-red-400", bg: "bg-red-500/10" },
    { icon: Dumbbell, label: "Fitness", color: "text-orange-400", bg: "bg-orange-500/10" },
    { icon: Brain, label: "AI/ML", color: "text-cyan-400", bg: "bg-cyan-500/10" },
    { icon: BookOpen, label: "Reading", color: "text-pink-400", bg: "bg-pink-500/10" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology"
    },
    {
      title: "Impact",
      description: "Creating solutions that make a real difference"
    },
    {
      title: "Growth",
      description: "Continuous learning and self-improvement"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6">
            <span className="text-white">Explore,</span>
            <br />
            <span className="text-white">experiment</span>
            <br />
            <span className="text-white">&& </span>
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              say hello
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            When I'm not coding, you'll find me exploring new technologies, experimenting with creative projects, or simply enjoying life's simple pleasures.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                className="bg-black/70 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 p-6 text-center group"
              >
                <div className={`w-12 h-12 ${interest.bg} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${interest.color}`} />
                </div>
                <p className="text-white text-sm font-light group-hover:text-purple-100 transition-colors duration-300">
                  {interest.label}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-black/70 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20 p-8 text-center group"
            >
              <h3 className="text-xl font-light text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Let's Connect
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
