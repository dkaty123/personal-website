
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Lightbulb, Users, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Purpose-Driven",
      description: "Building technology that creates meaningful impact and addresses real-world challenges.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Code,
      title: "Craft Excellence",
      description: "Committed to writing clean, efficient code and creating exceptional user experiences.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Always exploring new technologies and approaches to solve complex problems creatively.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Accessibility Focused",
      description: "Ensuring technology is inclusive and accessible to everyone, regardless of their abilities.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that can scale globally and make a difference in communities worldwide.",
      color: "from-purple-400 to-violet-500"
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Constantly growing, learning new technologies, and adapting to the evolving tech landscape.",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], color: "blue" },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"], color: "green" },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"], color: "purple" },
    { category: "Cloud", items: ["AWS", "Vercel", "Supabase", "Docker"], color: "orange" },
    { category: "Mobile", items: ["React Native", "Expo", "iOS", "Android"], color: "pink" },
    { category: "Tools", items: ["Git", "Figma", "VS Code", "Linear"], color: "cyan" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/10 text-blue-300 border-blue-400/30';
      case 'green': return 'bg-green-500/10 text-green-300 border-green-400/30';
      case 'purple': return 'bg-purple-500/10 text-purple-300 border-purple-400/30';
      case 'orange': return 'bg-orange-500/10 text-orange-300 border-orange-400/30';
      case 'pink': return 'bg-pink-500/10 text-pink-300 border-pink-400/30';
      case 'cyan': return 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30';
      default: return 'bg-gray-500/10 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Static background effects */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
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
        {[...Array(20)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute bg-white rounded-full opacity-15"
            style={{
              width: '3px',
              height: '3px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
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
            <span className="text-purple-300 text-sm font-light">About</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Building the</span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Passionate about creating technology that makes a meaningful difference in people's lives.
          </p>
        </div>

        {/* Story Section - removed animations */}
        <div className="mb-20">
          <Card className="p-8 bg-black/70 border border-gray-800 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-light text-white mb-6">My Journey</h3>
                <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                  <p>
                    I'm a Computer Science student at the University of Waterloo with a passion for AI and accessibility. 
                    My journey began with a simple belief: technology should empower everyone, regardless of their abilities or circumstances.
                  </p>
                  <p>
                    This philosophy led me to create <strong className="text-white">GlobalVision</strong>, an AI-powered accessibility platform 
                    that has won multiple innovation awards and helps thousands of visually impaired users access visual content.
                  </p>
                  <p>
                    Beyond accessibility, I'm deeply committed to climate action through technology. My work on projects like 
                    <strong className="text-white"> EcoPlastic</strong> demonstrates how AI can tackle environmental challenges at scale.
                  </p>
                  <p>
                    Currently, I'm excited to join <strong className="text-white">Shopify</strong> as a Software Engineering Intern, 
                    where I'll contribute to building the future of commerce while continuing my mission to create technology that matters.
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-1 text-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-white/10 mx-auto mb-6 shadow-lg">
                  <img 
                    src="/lovable-uploads/1488e487-15ac-43d1-8dd4-eb4d69a298f3.png" 
                    alt="Dev Katyal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                    Terry Fox Scholar 2025
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                    2× Innovation Winner
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Values Grid - removed animations */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-white text-center mb-12">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="group p-6 bg-black/70 border border-gray-800 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 rounded-xl"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h4 className="text-lg font-light text-white mb-2 group-hover:text-purple-100 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tech Stack - removed animations */}
        <div>
          <h3 className="text-3xl font-light text-white text-center mb-12">Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <Card 
                key={index}
                className="p-6 bg-black/70 border border-gray-800 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 rounded-xl"
              >
                <h4 className="text-lg font-light text-white mb-4">{stack.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex}
                      className={`${getColorClasses(stack.color)} text-xs`}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
