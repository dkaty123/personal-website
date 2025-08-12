
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Music, Plane, Book, Coffee, Mountain, Palette, GamepadIcon } from "lucide-react";

const PersonalSection = () => {
  const interests = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and stories through the lens, especially in nature and urban environments.",
      image: "/lovable-uploads/4536c24c-6664-4328-b654-b1bfde0378f1.png"
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Creating electronic music and exploring sound design in my spare time.",
      image: "/lovable-uploads/39df3872-97f4-4986-868b-7e1b19fd62a4.png"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring different cultures and gaining new perspectives from around the world.",
      image: "/lovable-uploads/93d910f6-d6cf-40ee-867b-29efa21470a6.png"
    },
    {
      icon: Book,
      title: "Reading",
      description: "Diving into science fiction, technology trends, and philosophy books.",
      image: "/lovable-uploads/4eb61dcb-c6fe-43a9-a136-1c81a8ea57ee.png"
    }
  ];

  const hobbies = [
    { icon: Coffee, name: "Coffee Brewing", level: "Expert" },
    { icon: Mountain, name: "Hiking", level: "Enthusiast" },
    { icon: Palette, name: "Digital Art", level: "Beginner" },
    { icon: GamepadIcon, name: "Gaming", level: "Casual" }
  ];

  const achievements = [
    "📸 Featured photographer in university magazine",
    "🎵 Released 3 electronic music tracks on SoundCloud",
    "✈️ Visited 12 countries across 4 continents",
    "📚 Read 24 books in 2024",
    "☕ Perfected the art of pour-over coffee",
    "🥾 Hiked 200+ miles in Canadian national parks"
  ];

  return (
    <section id="personal" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Static background effects */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute bg-white rounded-full opacity-15"
            style={{
              width: '3px',
              height: '3px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - removed animations */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-purple-300 text-sm font-light">Personal</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Beyond</span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Code
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            When I'm not building the next big thing, you'll find me exploring the world through different lenses.
          </p>
        </div>

        {/* Interests Grid - removed animations */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-white text-center mb-12">Passions & Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <Card 
                  key={index}
                  className="group bg-black/70 border border-gray-800 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-light text-white mb-3 group-hover:text-purple-100 transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Hobbies & Achievements - removed animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hobbies */}
          <Card className="p-8 bg-black/70 border border-gray-800 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 rounded-2xl">
            <h3 className="text-2xl font-light text-white mb-6">Current Hobbies</h3>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-light">{hobby.name}</span>
                    </div>
                    <Badge variant="outline" className="border-gray-700 text-gray-300 bg-gray-800/50 text-xs">
                      {hobby.level}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Fun Achievements */}
          <Card className="p-8 bg-black/70 border border-gray-800 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 rounded-2xl">
            <h3 className="text-2xl font-light text-white mb-6">Fun Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors">
                  <span className="text-lg">{achievement.split(' ')[0]}</span>
                  <span className="text-gray-300 text-sm font-light leading-relaxed">
                    {achievement.substring(achievement.indexOf(' ') + 1)}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
