
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Brain, Cpu, Zap, TrendingUp, Activity, Network } from "lucide-react";

const AIMetricsDisplay = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [counts, setCounts] = useState({ models: 0, dataPoints: 0, experiments: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 6);
    }, 2500);

    // Animate counters
    const animateCounters = () => {
      setCounts({
        models: Math.floor(Math.random() * 5) + 45,
        dataPoints: Math.floor(Math.random() * 0.5) + 2.1,
        experiments: Math.floor(Math.random() * 3) + 11
      });
    };

    animateCounters();
    const counterInterval = setInterval(animateCounters, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(counterInterval);
    };
  }, []);

  const metrics = [
    { 
      label: "Neural Networks", 
      value: counts.models.toString(), 
      icon: Brain, 
      color: "from-blue-400 to-cyan-400",
      bg: "from-blue-400/10 to-cyan-400/10" 
    },
    { 
      label: "Data Points", 
      value: `${counts.dataPoints.toFixed(1)}M`, 
      icon: TrendingUp, 
      color: "from-green-400 to-emerald-400",
      bg: "from-green-400/10 to-emerald-400/10" 
    },
    { 
      label: "Active Models", 
      value: counts.experiments.toString(), 
      icon: Activity, 
      color: "from-purple-400 to-pink-400",
      bg: "from-purple-400/10 to-pink-400/10" 
    },
    { 
      label: "GPU Clusters", 
      value: "8", 
      icon: Cpu, 
      color: "from-orange-400 to-red-400",
      bg: "from-orange-400/10 to-red-400/10" 
    },
    { 
      label: "Inference Speed", 
      value: "12ms", 
      icon: Zap, 
      color: "from-yellow-400 to-orange-400",
      bg: "from-yellow-400/10 to-orange-400/10" 
    },
    { 
      label: "Edge Nodes", 
      value: "24", 
      icon: Network, 
      color: "from-cyan-400 to-blue-400",
      bg: "from-cyan-400/10 to-blue-400/10" 
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const isActive = activeMetric === index;
        
        return (
          <Card 
            key={index} 
            className={`relative p-6 bg-gradient-to-br ${metric.bg} border border-white/10 backdrop-blur-sm text-center overflow-hidden transition-all duration-700 ${
              isActive ? 'scale-105 border-white/30 shadow-2xl' : 'hover:scale-102'
            }`}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
                backgroundSize: '20px 20px'
              }} />
            </div>

            {/* Glowing orb effect */}
            {isActive && (
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${metric.color} rounded-full blur-3xl opacity-20 animate-pulse`} />
            )}
            
            <div className="relative z-10">
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-500 ${
                isActive ? 'rotate-12 scale-110' : ''
              }`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              
              <div className={`text-3xl font-light text-white mb-1 transition-all duration-500 ${
                isActive ? 'scale-110' : ''
              }`}>
                {metric.value}
              </div>
              
              <div className={`text-sm text-gray-400 font-light transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-70'
              }`}>
                {metric.label}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AIMetricsDisplay;
