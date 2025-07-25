
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Environmental Sustainability",
      excerpt: "Exploring how artificial intelligence can be leveraged to address climate change and create meaningful environmental impact through innovative technology solutions.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["AI", "Environment", "Sustainability"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Building Accessible Tech for Everyone",
      excerpt: "Lessons learned from developing GlobalVision and the importance of creating technology that serves all users, especially those with accessibility needs.",
      date: "Nov 28, 2024",
      readTime: "4 min read", 
      tags: ["Accessibility", "UX", "Social Impact"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "From Idea to Impact: A Founder's Guide",
      excerpt: "Key strategies for turning innovative concepts into successful digital products, based on experiences building award-winning applications.",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      tags: ["Startups", "Product", "Innovation"],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="blog" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Starry Background - matching hero */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Thoughts &</span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Reflections on AI, startups, climate tech, and building technology that makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="group bg-black/60 border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-light">{post.date}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-light">{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-light text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-400/10 transition-all duration-300 group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <Card className="p-8 bg-black/60 border border-white/10 backdrop-blur-sm text-center">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">✍️</span>
          </div>
          <h3 className="text-xl font-light text-white mb-2">More Articles Coming Soon</h3>
          <p className="text-gray-400 mb-4 font-light">
            Stay tuned for insights on AI innovation, environmental tech, and startup journeys.
          </p>
          <Button variant="outline" className="border-purple-400/30 text-purple-400 hover:bg-purple-400/10 bg-transparent">
            Subscribe for Updates
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default BlogSection;
