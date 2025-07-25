
import { Heart, Sparkles } from "lucide-react";

const PassionsSection = () => {
  const passions = [
    {
      title: "Ocean Conservation",
      description: "Protecting marine ecosystems through technology and advocacy. Working with conservation organizations to develop solutions for ocean health monitoring and sustainable practices.",
      icon: <img src="/lovable-uploads/e7231778-7a8e-4a43-9608-86168e731688.png" alt="Ocean Conservation" className="w-10 h-10 object-cover rounded-lg" />,
      gradient: "from-blue-400/20 to-cyan-500/20",
      border: "border-blue-400/30",
      accent: "text-blue-400",
      stats: [
        { label: "Marine Projects", value: "5+" },
        { label: "Organizations", value: "3" }
      ]
    },
    {
      title: "Equity in Tech",
      description: "Bridging diversity gaps in technology through mentorship, inclusive hiring practices, and creating opportunities for underrepresented communities in STEM fields.",
      icon: <img src="/lovable-uploads/a5271771-914e-48d7-b8a3-eeee98522b8e.png" alt="Equity in Tech" className="w-10 h-10 object-cover rounded-lg" />,
      gradient: "from-purple-400/20 to-violet-500/20",
      border: "border-purple-400/30",
      accent: "text-purple-400",
      stats: [
        { label: "Students Mentored", value: "25+" },
        { label: "Workshops Led", value: "12" }
      ]
    },
    {
      title: "Community Service",
      description: "Empowering local communities through technology education, digital literacy programs, and volunteer initiatives that create lasting positive impact.",
      icon: <img src="/lovable-uploads/4eb61dcb-c6fe-43a9-a136-1c81a8ea57ee.png" alt="Community Service" className="w-10 h-10 object-cover rounded-lg" />,
      gradient: "from-emerald-400/20 to-green-500/20",
      border: "border-emerald-400/30",
      accent: "text-emerald-400",
      stats: [
        { label: "Volunteer Hours", value: "200+" },
        { label: "Communities", value: "8" }
      ]
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Subtle starry background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full animate-twinkle"
            style={{
              width: Math.random() * 1.5 + 0.5 + 'px',
              height: Math.random() * 1.5 + 0.5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 4 + 's',
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/6 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">
              My{" "}
              <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-light">
                Passions
              </span>
            </h2>
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Using technology and leadership to drive meaningful change in the world
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {passions.map((passion, index) => (
              <div
                key={index}
                className={`group relative bg-gray-900/40 backdrop-blur-sm border ${passion.border} rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-500 hover:scale-[1.02] overflow-hidden`}
              >
                {/* Subtle background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${passion.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gray-800/60 border ${passion.border} flex items-center justify-center ${passion.accent} group-hover:scale-110 transition-transform duration-300`}>
                      {passion.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    {passion.title}
                  </h3>
                  
                  <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm">
                    {passion.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {passion.stats.map((stat, statIndex) => (
                      <div key={statIndex} className={`bg-gray-800/40 border ${passion.border} rounded-lg p-3 text-center`}>
                        <div className={`${passion.accent} text-lg font-semibold mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-gray-300 text-xs">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className={`absolute top-4 right-4 w-2 h-2 ${passion.border} rounded-full opacity-60`} />
                <div className={`absolute bottom-4 left-4 w-1 h-1 ${passion.border} rounded-full opacity-40`} />
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/40 border border-gray-800 rounded-full">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-gray-300 font-light">Making a difference, one project at a time</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;
