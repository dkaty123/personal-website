
import { Card } from "@/components/ui/card";

const ImpactSection = () => {
  const impactMoments = [
    // Row 1
    { image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop", caption: "Mentoring young developers at tech meetups", size: "w-64 h-48", rotation: "rotate-2" },
    { image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop", caption: "Building AI solutions for environmental monitoring", size: "w-56 h-64", rotation: "-rotate-3" },
    { image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&h=500&fit=crop", caption: "Open source contributions reaching 10k+ developers", size: "w-72 h-44", rotation: "rotate-6" },
    { image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop", caption: "Leading workshops on sustainable tech", size: "w-48 h-56", rotation: "-rotate-4" },
    
    // Row 2
    { image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop", caption: "AI research presentation at university", size: "w-68 h-52", rotation: "rotate-4" },
    { image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=800&fit=crop", caption: "Winning hackathon with climate tech solution", size: "w-52 h-68", rotation: "-rotate-5" },
    { image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700&h=400&fit=crop", caption: "Speaking at tech conference about AI ethics", size: "w-76 h-48", rotation: "rotate-7" },
    { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop", caption: "Late night coding sessions building impactful apps", size: "w-60 h-50", rotation: "-rotate-2" },
    
    // Row 3
    { image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=700&fit=crop", caption: "Tree planting initiative - 500+ trees planted", size: "w-48 h-64", rotation: "rotate-8" },
    { image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop", caption: "Environmental impact tracking dashboard launch", size: "w-72 h-56", rotation: "-rotate-6" },
    { image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=500&fit=crop", caption: "IBM Z Ambassador recognition ceremony", size: "w-64 h-48", rotation: "rotate-3" },
    { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop", caption: "Team collaboration on innovative solutions", size: "w-56 h-52", rotation: "-rotate-7" },
    
    // Row 4
    { image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=600&fit=crop", caption: "Code review sessions with mentors", size: "w-48 h-60", rotation: "rotate-5" },
    { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=500&fit=crop", caption: "Women in tech panel discussion", size: "w-68 h-48", rotation: "-rotate-4" },
    { image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop", caption: "Building sustainable technology solutions", size: "w-64 h-52", rotation: "rotate-6" },
    { image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=700&fit=crop", caption: "Data visualization workshop", size: "w-52 h-64", rotation: "-rotate-3" },
    
    // Row 5
    { image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", caption: "Machine learning model deployment", size: "w-76 h-56", rotation: "rotate-4" },
    { image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=500&fit=crop", caption: "University programming competition", size: "w-60 h-48", rotation: "-rotate-5" },
    { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=400&fit=crop", caption: "Industry networking events", size: "w-72 h-44", rotation: "rotate-7" },
    { image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=600&fit=crop", caption: "Open source project contributions", size: "w-48 h-58", rotation: "-rotate-6" },
    
    // Row 6
    { image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&h=450&fit=crop", caption: "Tech startup pitch competition", size: "w-64 h-50", rotation: "rotate-3" },
    { image: "https://images.unsplash.com/photo-1522071901873-411886a10004?w=500&h=700&fit=crop", caption: "Volunteer coding bootcamp instructor", size: "w-52 h-68", rotation: "-rotate-4" },
    { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop", caption: "Global developer summit keynote", size: "w-80 h-52", rotation: "rotate-5" },
    { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop", caption: "Cross-team collaboration sessions", size: "w-56 h-56", rotation: "-rotate-2" }
  ];

  return (
    <section id="impact" className="py-32 px-6 relative overflow-hidden bg-black min-h-screen">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-40"
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
            className="absolute bg-white rounded-full opacity-30"
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

      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Making an</span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            A collection of moments, milestones, and memories that capture the journey of creating meaningful change through technology.
          </p>
        </div>

        {/* Scrapbook Layout - Arranged in rows of 4 */}
        <div className="space-y-24">
          {Array.from({ length: 6 }, (_, rowIndex) => (
            <div key={rowIndex} className="flex justify-center items-center gap-8 flex-wrap">
              {impactMoments.slice(rowIndex * 4, (rowIndex + 1) * 4).map((moment, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className={`transform ${moment.rotation} hover:scale-105 transition-all duration-500 hover:z-50 relative`}
                  style={{
                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
                  }}
                >
                  <Card className={`${moment.size} bg-black/60 border-2 ${
                    index % 4 === 0 ? 'border-purple-400/60' :
                    index % 4 === 1 ? 'border-pink-400/60' :
                    index % 4 === 2 ? 'border-blue-400/60' :
                    'border-emerald-400/60'
                  } p-3 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm hover:border-opacity-100`}>
                    <div className="w-full h-4/5 overflow-hidden rounded-sm mb-2">
                      <img
                        src={moment.image}
                        alt={moment.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-white font-medium text-center leading-tight px-1">
                      {moment.caption}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          ))}

          {/* Scattered decorative elements */}
          <div className="absolute top-20 left-1/4 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse" />
          <div className="absolute top-96 right-1/3 w-6 h-6 bg-pink-400/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-[40rem] left-1/2 w-10 h-10 bg-blue-400/30 rounded-full animate-pulse delay-500" />
          <div className="absolute top-[60rem] right-1/4 w-4 h-4 bg-green-400/30 rounded-full animate-pulse delay-300" />
          <div className="absolute top-[75rem] left-1/3 w-12 h-12 bg-yellow-400/30 rounded-full animate-pulse delay-700" />
          <div className="absolute top-[90rem] right-1/2 w-6 h-6 bg-cyan-400/30 rounded-full animate-pulse delay-200" />
          <div className="absolute top-[105rem] left-1/5 w-8 h-8 bg-indigo-400/30 rounded-full animate-pulse delay-900" />

          {/* Dark themed tape effects */}
          <div className="absolute top-8 left-12 w-16 h-6 bg-purple-400/40 transform rotate-45 opacity-60 backdrop-blur-sm" 
               style={{ clipPath: 'polygon(0 0, 100% 20%, 85% 100%, 0% 80%)' }} />
          <div className="absolute top-72 right-16 w-12 h-8 bg-purple-400/40 transform -rotate-12 opacity-60 backdrop-blur-sm"
               style={{ clipPath: 'polygon(20% 0%, 100% 0, 80% 100%, 0% 100%)' }} />
          <div className="absolute top-[52rem] left-16 w-20 h-5 bg-purple-400/40 transform rotate-12 opacity-60 backdrop-blur-sm"
               style={{ clipPath: 'polygon(0 0, 90% 0, 100% 100%, 10% 100%)' }} />
          <div className="absolute top-[88rem] right-20 w-14 h-6 bg-purple-400/40 transform -rotate-8 opacity-60 backdrop-blur-sm"
               style={{ clipPath: 'polygon(10% 0%, 90% 0, 100% 100%, 0% 100%)' }} />

          {/* Dark themed paper clips */}
          <div className="absolute top-32 right-20 w-3 h-8 border-2 border-purple-400/60 rounded-full opacity-70" />
          <div className="absolute top-[28rem] left-24 w-3 h-8 border-2 border-purple-400/60 rounded-full opacity-70 rotate-45" />
          <div className="absolute top-[68rem] right-16 w-3 h-8 border-2 border-purple-400/60 rounded-full opacity-70 -rotate-12" />
          <div className="absolute top-[95rem] left-1/3 w-3 h-8 border-2 border-purple-400/60 rounded-full opacity-70 rotate-30" />

          {/* Additional scrapbook elements */}
          <div className="absolute top-[15rem] right-1/4 text-purple-400/40 transform rotate-12">📎</div>
          <div className="absolute top-[35rem] left-1/5 text-pink-400/40 transform -rotate-8">📌</div>
          <div className="absolute top-[55rem] right-1/3 text-purple-400/40 transform rotate-45">📎</div>
          <div className="absolute top-[78rem] left-1/4 text-blue-400/40 transform -rotate-12">📌</div>
          <div className="absolute top-[100rem] right-1/5 text-purple-400/40 transform rotate-30">📎</div>
        </div>

        {/* Impact Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-black/60 border border-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-light text-purple-400 mb-2">500+</div>
            <div className="text-sm text-gray-400 font-light">Trees Planted</div>
          </div>
          <div className="p-6 bg-black/60 border border-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-light text-green-400 mb-2">10k+</div>
            <div className="text-sm text-gray-400 font-light">Developers Reached</div>
          </div>
          <div className="p-6 bg-black/60 border border-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-light text-blue-400 mb-2">25+</div>
            <div className="text-sm text-gray-400 font-light">Projects Launched</div>
          </div>
          <div className="p-6 bg-black/60 border border-white/10 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-light text-pink-400 mb-2">3</div>
            <div className="text-sm text-gray-400 font-light">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
