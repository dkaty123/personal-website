
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bot, Cpu, Network, Zap, Code, Activity, Sparkles, TrendingUp, Database, Server, CloudCog, BarChart3, LineChart, Workflow, GitBranch, MonitorSpeaker } from "lucide-react";
import AIProjectCard from './AIProjectCard';
import AINetworkDiagram from './AINetworkDiagram';
import AIDataFlow from './AIDataFlow';
import AIMetricsDisplay from './AIMetricsDisplay';

const CurrentlySection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [pulseActive, setPulseActive] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const pulseTimer = setInterval(() => {
      setPulseActive(prev => !prev);
    }, 3000);

    const projectTimer = setInterval(() => {
      setActiveProject(prev => (prev + 1) % 4);
    }, 4000);

    const statusTimer = setInterval(() => {
      const statuses = ['OPERATIONAL', 'OPTIMIZING', 'LEARNING', 'SCALING'];
      setSystemStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(pulseTimer);
      clearInterval(projectTimer);
      clearInterval(statusTimer);
    };
  }, []);

  const currentActivities = [
    {
      icon: Brain,
      title: "Climate Intelligence Platform",
      description: "Advanced neural networks processing 50TB+ of satellite imagery daily for climate pattern recognition, environmental impact prediction, and carbon footprint optimization across 127 countries",
      status: "active",
      color: "from-green-400 to-emerald-400",
      bgColor: "from-green-400/20 to-emerald-400/20",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      progress: 85,
      techStack: ["PyTorch", "CUDA", "Apache Kafka", "Docker"],
      metrics: { accuracy: "94.7%", latency: "12ms", throughput: "2.3M/s" }
    },
    {
      icon: Bot,
      title: "Autonomous Multi-Agent System",
      description: "Distributed AI agents with advanced reasoning capabilities, natural language processing, and real-time decision making. Handles complex workflows with 99.2% accuracy across financial, healthcare, and logistics domains",
      status: "focus",
      color: "from-blue-400 to-cyan-400", 
      bgColor: "from-blue-400/20 to-cyan-400/20",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
      progress: 70,
      techStack: ["GPT-4", "LangChain", "Redis", "Kubernetes"],
      metrics: { agents: "156", tasks: "12.4K", uptime: "99.97%" }
    },
    {
      icon: Network,
      title: "Federated Learning Infrastructure",
      description: "Enterprise-grade federated learning platform enabling secure, privacy-preserving ML across 500+ edge devices. Supports real-time model updates with differential privacy and homomorphic encryption",
      status: "ongoing",
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-400/20 to-pink-400/20",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      progress: 65,
      techStack: ["TensorFlow", "gRPC", "Istio", "Prometheus"],
      metrics: { nodes: "500+", models: "24", bandwidth: "1.2GB/s" }
    },
    {
      icon: Cpu,
      title: "Real-Time Edge AI Optimizer",
      description: "Ultra-low latency inference engine optimized for edge computing with dynamic model quantization, pruning, and hardware-specific optimizations. Deployed across IoT networks for autonomous systems",
      status: "research",
      color: "from-orange-400 to-red-400",
      bgColor: "from-orange-400/20 to-red-400/20",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      progress: 60,
      techStack: ["ONNX", "TensorRT", "OpenVINO", "ARM NEON"],
      metrics: { latency: "0.8ms", power: "2.1W", fps: "240" }
    },
  ];

  const techIcons = [Brain, Cpu, Network, Database, Server, GitBranch];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      {/* Enhanced dynamic background with more complexity */}
      <div className="absolute inset-0">
        {/* Multi-layer animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-purple-500/8 to-cyan-500/8 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tl from-green-500/5 via-pink-500/5 to-orange-500/5 animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Enhanced particle system */}
        {[...Array(80)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full transition-all duration-6000 ${
              pulseActive ? 'opacity-80 scale-125' : 'opacity-30 scale-95'
            }`}
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              background: `linear-gradient(45deg, 
                hsl(${Math.random() * 60 + 200}, 85%, 65%), 
                hsl(${Math.random() * 60 + 260}, 85%, 65%))`,
              boxShadow: `0 0 ${Math.random() * 30 + 15}px rgba(59, 130, 246, 0.4)`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
        
        {/* Dynamic neural network visualization */}
        <svg className="absolute inset-0 w-full h-full opacity-25">
          {[...Array(25)].map((_, i) => (
            <g key={`neural-${i}`}>
              <line
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#neuralGradient)"
                strokeWidth={Math.random() * 2 + 0.5}
                className={`transition-all duration-4000 ${
                  pulseActive ? 'opacity-60' : 'opacity-20'
                }`}
                strokeDasharray={`${Math.random() * 10 + 5},${Math.random() * 10 + 5}`}
              />
              <circle
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={Math.random() * 3 + 1}
                fill="url(#nodeGradient)"
                className={`transition-all duration-3000 ${
                  pulseActive ? 'opacity-70' : 'opacity-30'
                }`}
              />
            </g>
          ))}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
              <stop offset="33%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6" />
              <stop offset="66%" stopColor="rgb(236, 72, 153)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* System Status Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 ${
                  pulseActive ? 'animate-ping' : ''
                }`} />
                <div className="absolute inset-0 w-5 h-5 rounded-full bg-green-400 animate-pulse" />
              </div>
              <span className="text-green-400 font-mono text-sm font-medium">SYSTEM {systemStatus}</span>
            </div>
            
            <div className="w-px h-6 bg-gray-600" />
            
            <div className="flex items-center gap-4">
              <Activity className="w-5 h-5 text-blue-400" />
              <p className="text-gray-300 font-light">AI Infrastructure Online</p>
            </div>
            
            <div className="w-px h-6 bg-gray-600" />
            
            <div className="flex items-center gap-3">
              <div className="text-gray-300 font-light font-mono text-sm">
                {currentTime.toLocaleTimeString([], { 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Currently</span>
            <br />
            <span className="italic bg-gradient-to-r from-blue-400 via-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Building AI
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-6">
              Architecting next-generation artificial intelligence systems that push the boundaries of what's possible
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span>50TB+ Data Processed Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                <span>99.97% System Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>12ms Average Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-4 h-4" />
                <span>500+ Edge Nodes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced AI Architecture Overview */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MonitorSpeaker className="w-8 h-8 text-blue-400" />
              <h3 className="text-4xl font-light text-white">AI Infrastructure</h3>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Distributed neural network architecture with real-time inference capabilities, 
              federated learning protocols, and autonomous optimization systems
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              <Badge variant="outline" className="border-blue-400/40 text-blue-400 bg-blue-400/10 px-4 py-2 backdrop-blur-sm">
                <Brain className="w-4 h-4 mr-2" />
                Neural Networks: 47
              </Badge>
              <Badge variant="outline" className="border-green-400/40 text-green-400 bg-green-400/10 px-4 py-2 backdrop-blur-sm">
                <Database className="w-4 h-4 mr-2" />
                Training Data: 2.1M samples
              </Badge>
              <Badge variant="outline" className="border-purple-400/40 text-purple-400 bg-purple-400/10 px-4 py-2 backdrop-blur-sm">
                <CloudCog className="w-4 h-4 mr-2" />
                Cloud Instances: 156
              </Badge>
            </div>
          </div>
          <AINetworkDiagram />
        </div>

        {/* Enhanced Data Flow */}
        <div className="mb-24">
          <AIDataFlow />
        </div>

        {/* Enhanced Live Metrics */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <LineChart className="w-8 h-8 text-green-400" />
              <h3 className="text-4xl font-light text-white">Performance Metrics</h3>
            </div>
            <p className="text-gray-400 text-lg">Real-time performance indicators and system health monitoring</p>
          </div>
          <AIMetricsDisplay />
        </div>

        {/* Enhanced Active Projects */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Workflow className="w-8 h-8 text-purple-400" />
              <h3 className="text-4xl font-light text-white">Active Research Projects</h3>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Cutting-edge AI research initiatives spanning climate intelligence, autonomous systems, 
              federated learning, and edge computing optimization
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentActivities.map((activity, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  activeProject === index ? 'scale-105 z-10' : 'scale-100'
                }`}
              >
                <AIProjectCard {...activity} />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Launch Preview */}
        <Card className="relative p-12 bg-gradient-to-br from-black/90 via-gray-900/60 to-black/90 border border-white/20 backdrop-blur-xl text-center overflow-hidden">
          {/* Advanced animated background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-l from-green-500/10 via-pink-500/10 to-orange-500/10 animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          {/* Floating tech elements */}
          {[...Array(12)].map((_, i) => {
            const IconComponent = techIcons[i % 6];
            return (
              <div
                key={`tech-float-${i}`}
                className="absolute opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: '4s',
                }}
              >
                <IconComponent className="w-6 h-6 text-blue-400/40" />
              </div>
            );
          })}
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-400 rounded-3xl flex items-center justify-center relative">
                <Zap className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-400 rounded-3xl blur-xl opacity-50 animate-pulse" />
              </div>
              <div>
                <h3 className="text-5xl font-light text-white mb-2">AI Platform Launch</h3>
                <p className="text-lg text-blue-400 font-light">Next Generation Intelligence</p>
              </div>
            </div>
            
            <p className="text-gray-300 font-light mb-12 text-xl max-w-5xl mx-auto leading-relaxed">
              Comprehensive AI-powered environmental monitoring and prediction platform featuring real-time satellite imagery analysis, 
              autonomous decision-making capabilities, predictive climate modeling, and distributed edge computing infrastructure. 
              <span className="text-blue-400">Expected to process 100TB+ daily and serve 1M+ users globally.</span>
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-1">Q1 2025</div>
                <div className="text-sm text-gray-400">Launch Date</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-green-400 mb-1">100TB+</div>
                <div className="text-sm text-gray-400">Daily Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-blue-400 mb-1">1M+</div>
                <div className="text-sm text-gray-400">Global Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-purple-400 mb-1">99.99%</div>
                <div className="text-sm text-gray-400">Uptime SLA</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Badge variant="outline" className="border-blue-400/50 text-blue-400 bg-blue-400/15 px-6 py-3 text-base backdrop-blur-sm">
                <Activity className="w-5 h-5 mr-2" />
                Climate Intelligence
              </Badge>
              <Badge variant="outline" className="border-green-400/50 text-green-400 bg-green-400/15 px-6 py-3 text-base backdrop-blur-sm">
                <Brain className="w-5 h-5 mr-2" />
                Neural Networks
              </Badge>
              <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/15 px-6 py-3 text-base backdrop-blur-sm">
                <Zap className="w-5 h-5 mr-2" />
                Real-time Processing
              </Badge>
              <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/15 px-6 py-3 text-base backdrop-blur-sm">
                <Network className="w-5 h-5 mr-2" />
                Global Infrastructure
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CurrentlySection;
