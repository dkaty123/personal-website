
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Globe, Code, Database, Layers, Mail, Sparkles, Zap, Heart, Star } from "lucide-react";
import TechBadge from "./TechBadge";

const BentoSection = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Enhanced Background decoration with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/15"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Bento Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[800px]">
          
          {/* Collaboration Card - Enhanced with advanced animations */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900/95 to-black/98 border border-gray-800/60 hover:border-purple-500/50 transition-all duration-700 group p-8 flex flex-col justify-between transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in">
            {/* Multi-layer background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 transform group-hover:translate-x-2 transition-transform duration-500">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center border border-gray-700/50 group-hover:border-purple-500/30 transition-colors duration-500 shadow-lg">
                  <Users className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-500" />
                </div>
                <span className="text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-500">Team Collaboration</span>
                <Sparkles className="w-4 h-4 text-purple-400/60 animate-pulse" />
              </div>
              
              {/* Super Enhanced Avatar Network with complex animations */}
              <div className="relative h-48 mb-8">
                {/* Central main avatar with pulsing rings */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24">
                  {/* Outer rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-purple-400/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-1 shadow-xl group-hover:shadow-purple-500/30 transition-shadow duration-500">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-purple-400/50 bg-gradient-to-br from-purple-400 to-blue-500">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/25 rounded-full backdrop-blur-sm flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced surrounding avatars with trails */}
                <div className="absolute top-2 left-8 w-14 h-14">
                  <div className="absolute inset-0 rounded-full bg-red-400/20 animate-ping"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-400 to-pink-500 p-0.5 shadow-lg hover:shadow-red-400/30 transition-shadow duration-300 animate-bounce">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500/90 to-pink-500/90 flex items-center justify-center">
                      <div className="w-7 h-7 bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 right-12 w-12 h-12">
                  <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-0.5 shadow-lg hover:shadow-green-400/30 transition-shadow duration-300 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500/90 to-emerald-500/90 flex items-center justify-center">
                      <div className="w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <Zap className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 w-16 h-16">
                  <div className="absolute inset-0 rounded-full bg-orange-400/20 animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 p-0.5 shadow-lg hover:shadow-orange-400/30 transition-shadow duration-300 animate-bounce" style={{ animationDelay: '1s' }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/90 to-red-500/90 flex items-center justify-center">
                      <div className="w-9 h-9 bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <Code className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-2 right-8 w-13 h-13">
                  <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" style={{ animationDelay: '1.5s' }}></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-0.5 shadow-lg hover:shadow-cyan-400/30 transition-shadow duration-300 animate-pulse" style={{ animationDelay: '1.5s' }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/90 to-blue-500/90 flex items-center justify-center">
                      <div className="w-7 h-7 bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <Database className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-2 w-10 h-10">
                  <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping" style={{ animationDelay: '2s' }}></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-0.5 shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300 animate-bounce" style={{ animationDelay: '2s' }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-500/90 to-orange-500/90 flex items-center justify-center">
                      <div className="w-5 h-5 bg-white/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <Globe className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Advanced Connection Lines with multiple gradients and animations */}
                <svg className="absolute inset-0 w-full h-full opacity-50">
                  <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(284 100% 70%)" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="hsl(270 100% 60%)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="hsl(260 100% 50%)" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(200 100% 70%)" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="hsl(220 100% 60%)" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                  <path d="M 60 50 Q 100 30 140 40" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" strokeDasharray="4,4" className="animate-pulse">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 60 80 Q 80 120 120 140" stroke="url(#lineGradient2)" strokeWidth="2" fill="none" strokeDasharray="4,4" className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 140 50 Q 160 80 180 120" stroke="url(#lineGradient1)" strokeWidth="1.5" fill="none" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '1s' }}>
                    <animate attributeName="stroke-dashoffset" values="0;6" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 40 60 Q 60 40 100 50" stroke="url(#lineGradient2)" strokeWidth="1.5" fill="none" strokeDasharray="3,3" className="animate-pulse" style={{ animationDelay: '1.5s' }}>
                    <animate attributeName="stroke-dashoffset" values="0;6" dur="2.8s" repeatCount="indefinite"/>
                  </path>
                </svg>
                
                {/* Floating connection indicators */}
                <div className="absolute top-12 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-8 right-16 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                I prioritize client collaboration, fostering open communication
              </h3>
            </div>
            
            <Button variant="ghost" className="self-start group/btn text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20">
              Book a call
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </Card>

          {/* Technologies Card - Enhanced with floating tech elements */}
          <Card className="bg-gradient-to-br from-gray-900/95 to-black/98 border border-gray-800/60 hover:border-purple-500/50 transition-all duration-700 group p-8 flex flex-col transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl font-bold mb-8 text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                Passionate about cutting-
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">edge technologies</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-500/30 rounded-lg hover:bg-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group/tech">
                    <span className="text-blue-400 text-sm font-bold group-hover/tech:animate-pulse">TS</span>
                    <span className="text-sm font-medium text-white">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/15 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group/tech">
                    <span className="text-cyan-400 text-sm group-hover/tech:animate-pulse">~</span>
                    <span className="text-sm font-medium text-white">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/15 border border-purple-500/30 rounded-lg hover:bg-purple-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group/tech">
                    <span className="text-purple-400 text-sm font-bold group-hover/tech:animate-pulse">M</span>
                    <span className="text-sm font-medium text-white">Motion</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/15 border border-blue-600/30 rounded-lg hover:bg-blue-600/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 group/tech">
                    <span className="text-blue-300 text-sm group-hover/tech:animate-bounce">🐘</span>
                    <span className="text-sm font-medium text-white">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/15 border border-green-500/30 rounded-lg hover:bg-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 group/tech">
                    <span className="text-green-400 text-sm group-hover/tech:animate-bounce">🍃</span>
                    <span className="text-sm font-medium text-white">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/15 border border-indigo-500/30 rounded-lg hover:bg-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 group/tech">
                    <span className="text-indigo-400 text-sm group-hover/tech:animate-pulse">△</span>
                    <span className="text-sm font-medium text-white">Prisma</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/15 border border-orange-500/30 rounded-lg hover:bg-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 group/tech">
                    <span className="text-orange-400 text-sm group-hover/tech:animate-bounce">📦</span>
                    <span className="text-sm font-medium text-white">pnpm</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/15 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 group/tech">
                    <span className="text-yellow-400 text-sm group-hover/tech:animate-bounce">🐰</span>
                    <span className="text-sm font-medium text-white">Bun</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-500/15 border border-red-500/30 rounded-lg hover:bg-red-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group/tech">
                    <span className="text-red-400 text-sm group-hover/tech:animate-pulse">🔧</span>
                    <span className="text-sm font-medium text-white">Git</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-500/15 border border-gray-500/30 rounded-lg hover:bg-gray-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 group/tech">
                    <span className="text-gray-400 text-sm group-hover/tech:animate-pulse">🐙</span>
                    <span className="text-sm font-medium text-white">GitHub</span>
                  </div>
                </div>
              </div>
              
              {/* Floating tech particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full animate-ping"></div>
              <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </Card>

          {/* Timezone Card - Enhanced with 3D globe effect */}
          <Card className="bg-gradient-to-br from-gray-900/95 to-black/98 border border-gray-800/60 hover:border-blue-500/50 transition-all duration-700 group p-8 flex flex-col justify-between relative overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-cyan-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                  I'm very flexible with time
                  <br />
                  <span className="text-blue-400">zone communications</span>
                </h3>
                <Globe className="w-6 h-6 text-blue-400 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/60 border border-gray-700/60 rounded-full hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <span className="text-sm animate-pulse">🇬🇧</span>
                  <span className="text-sm text-gray-300 font-medium">UK</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/25 border border-blue-500/50 rounded-full hover:bg-blue-500/35 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg shadow-blue-500/20">
                  <span className="text-sm animate-pulse">🇮🇳</span>
                  <span className="text-sm text-blue-300 font-medium">India</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/60 border border-gray-700/60 rounded-full hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <span className="text-sm animate-pulse">🇺🇸</span>
                  <span className="text-sm text-gray-300 font-medium">USA</span>
                </div>
              </div>
            </div>
            
            {/* Super Enhanced Globe visualization with 3D effect */}
            <div className="relative h-52 mb-4">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-44 h-44 rounded-full bg-gradient-to-t from-blue-600/30 to-transparent border-2 border-blue-500/40 overflow-hidden shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-500">
                {/* Globe grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                    <radialGradient id="globeGradient">
                      <stop offset="0%" stopColor="hsl(200 100% 70%)" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="hsl(220 100% 60%)" stopOpacity="0.1"/>
                    </radialGradient>
                  </defs>
                  {/* Longitude lines */}
                  {[...Array(8)].map((_, i) => (
                    <ellipse key={i} cx="50%" cy="50%" rx={`${20 + i * 5}%`} ry="45%" fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                  {/* Latitude lines */}
                  {[...Array(6)].map((_, i) => (
                    <ellipse key={i} cx="50%" cy="50%" rx="45%" ry={`${10 + i * 8}%`} fill="none" stroke="url(#globeGradient)" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                  ))}
                </svg>
                
                {/* Enhanced Globe dot pattern with layered animation */}
                <div className="absolute inset-4">
                  {[...Array(120)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/70 rounded-full animate-pulse hover:bg-blue-300 transition-colors"
                      style={{
                        left: `${10 + (i % 12) * 7}%`,
                        top: `${10 + Math.floor(i / 12) * 8}%`,
                        animationDelay: `${i * 0.03}s`,
                        opacity: Math.random() * 0.8 + 0.2,
                      }}
                    />
                  ))}
                </div>
                
                {/* Multiple pulsing location indicators */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                  <div className="absolute inset-1 w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Additional location points */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-12 right-12 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 right-8 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <div className="absolute bottom-6 left-6 text-sm text-gray-400 backdrop-blur-sm bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="font-medium text-gray-300">Remote Available</span>
                </div>
                <div className="font-bold text-blue-400 text-lg flex items-center gap-2">
                  <span>India</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Project Collaboration Card - Enhanced with floating elements */}
          <Card className="bg-gradient-to-br from-gray-900/95 to-black/98 border border-gray-800/60 hover:border-purple-500/50 transition-all duration-700 group p-8 flex flex-col justify-between relative overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-blue-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-4 right-4 w-8 h-8 border border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse"></div>
            
            <div className="relative z-10 text-center flex-1 flex flex-col justify-center">
              {/* Enhanced AB logo with multiple layers */}
              <div className="relative w-28 h-28 mx-auto mb-8">
                {/* Outer glow rings */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-3xl animate-ping"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-purple-500/30 to-blue-600/30 rounded-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                
                <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl flex items-center justify-center text-3xl font-bold text-white shadow-2xl transform hover:scale-110 transition-all duration-500 border-2 border-purple-400/50 backdrop-blur-sm group-hover:shadow-purple-500/50">
                  <span className="relative z-10 group-hover:animate-pulse">AB</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">Let's work together</h3>
              <p className="text-2xl font-bold text-white mb-8 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">on your next project</p>
              
              <div className="p-4 bg-gray-800/60 rounded-xl border border-gray-700/60 backdrop-blur-sm hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400 animate-pulse" />
                  <span className="font-medium group-hover:text-white transition-colors duration-300">hello@aayushbharti.in</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Website Showcase Card - Enhanced browser mockup */}
          <Card className="bg-gradient-to-br from-gray-900/95 to-black/98 border border-gray-800/60 hover:border-purple-500/50 transition-all duration-700 group p-8 flex flex-col relative overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative z-10 flex-1">
              <h3 className="text-xl font-bold mb-8 text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                Websites that stand out
                <br />
                and make a difference
              </h3>
              
              {/* Super Enhanced Browser mockup with animations */}
              <div className="bg-gray-800/50 rounded-2xl border border-gray-700/60 overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500 backdrop-blur-sm">
                <div className="flex items-center gap-2 p-4 bg-gray-800/80 border-b border-gray-700/60">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="flex-1 h-6 bg-gray-700/60 rounded-md ml-4 flex items-center px-3 border border-gray-600/50">
                    <div className="w-20 h-2 bg-gradient-to-r from-purple-400/50 to-blue-400/50 rounded animate-pulse"></div>
                  </div>
                  {/* Browser action buttons */}
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-gray-700/50 rounded border border-gray-600/50 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 h-44 bg-gradient-to-br from-gray-800/40 to-gray-900/60 flex items-center justify-center relative overflow-hidden">
                  {/* Background grid pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-gray-600/20"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-center w-full relative z-10">
                    <div className="flex gap-3 justify-center">
                      <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-medium text-white hover:from-purple-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                        Contact
                      </div>
                      <div className="px-6 py-3 bg-gray-700/60 border border-gray-600/60 rounded-full text-sm text-gray-300 hover:bg-gray-600/60 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        Read More
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded w-3/4 mx-auto animate-pulse"></div>
                      <div className="h-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded w-1/2 mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="h-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded w-2/3 mx-auto animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  
                  {/* Floating code elements */}
                  <div className="absolute top-2 right-2 text-xs text-purple-400/50 font-mono animate-pulse">&lt;/&gt;</div>
                  <div className="absolute bottom-2 left-2 text-xs text-blue-400/50 font-mono animate-pulse">{ }</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Current Status Card - Enhanced with advanced tech visualization */}
          <Card className="bg-gradient-to-br from-gray-900/95 to-black/98 border border-gray-800/60 hover:border-purple-500/50 transition-all duration-700 group p-8 flex flex-col justify-between relative overflow-hidden lg:col-span-3 transform hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/8 via-transparent to-blue-900/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-32 h-32 border border-purple-400/10 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-400/10 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 flex items-center justify-center border border-gray-700/60 group-hover:border-purple-500/40 transition-all duration-500 shadow-lg">
                      <Layers className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-500" />
                    </div>
                    <span className="text-sm text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-500">The Inside Scoop</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-500">
                    Currently building a SaaS Application
                  </h3>
                </div>
                
                {/* Super Enhanced Tech stack grid with advanced animations */}
                <div className="grid grid-cols-6 gap-12 text-center">
                  {[
                    { title: "API Gateway &\nDocumentation", icon: Code, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
                    { title: "User\nOnboarding\nFlow Design", icon: Users, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30" },
                    { title: "Payment\nSystem\nArchitecture", icon: Database, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
                    { title: "Monitoring &\nAnalytics\nInfrastructure", icon: Globe, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
                    { title: "Design System\n& UI\nConsistency", icon: Layers, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30" },
                    { title: "AI\nDevelopment", icon: Code, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" }
                  ].map((item, index) => (
                    <div key={index} className="group/item relative">
                      {/* Floating indicator */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className={`w-14 h-14 mx-auto mb-4 ${item.bg} rounded-xl flex items-center justify-center border ${item.border} group-hover/item:border-opacity-60 transition-all duration-500 hover:scale-110 hover:shadow-lg backdrop-blur-sm`}>
                        <item.icon className={`w-7 h-7 ${item.color} group-hover/item:scale-125 transition-all duration-500`} />
                      </div>
                      <p className="text-xs text-gray-400 whitespace-pre-line group-hover/item:text-gray-300 transition-colors duration-300 leading-tight font-medium">
                        {item.title}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="mt-2 w-full bg-gray-800/50 rounded-full h-1 overflow-hidden">
                        <div 
                          className={`h-full ${item.bg.replace('/10', '/50')} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${60 + Math.random() * 40}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
