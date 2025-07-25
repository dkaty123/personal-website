
import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Database, Network, Zap, Activity } from 'lucide-react';

const AINetworkDiagram = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [pulsingConnections, setPulsingConnections] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 6);
    }, 2000);

    const connectionInterval = setInterval(() => {
      setPulsingConnections([
        Math.floor(Math.random() * 6),
        Math.floor(Math.random() * 6)
      ]);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(connectionInterval);
    };
  }, []);

  const nodes = [
    { icon: Brain, label: 'Neural Networks', x: 50, y: 15, color: 'from-blue-400 to-cyan-400' },
    { icon: Database, label: 'Data Processing', x: 15, y: 40, color: 'from-green-400 to-emerald-400' },
    { icon: Cpu, label: 'ML Compute', x: 85, y: 40, color: 'from-purple-400 to-pink-400' },
    { icon: Network, label: 'Edge Networks', x: 30, y: 75, color: 'from-orange-400 to-red-400' },
    { icon: Zap, label: 'Real-time Processing', x: 70, y: 75, color: 'from-yellow-400 to-orange-400' },
    { icon: Activity, label: 'Analytics Engine', x: 50, y: 95, color: 'from-cyan-400 to-blue-400' },
  ];

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-black/60 via-gray-900/30 to-black/60 rounded-2xl border border-white/20 overflow-hidden backdrop-blur-xl">
      {/* Enhanced background grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 2px, transparent 2px),
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 30px 30px, 30px 30px'
        }} />
      </div>

      {/* Data flow particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`data-particle-${i}`}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s',
          }}
        />
      ))}

      {/* Enhanced connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((targetNode, j) => {
            const connectionIndex = i * nodes.length + (i + j + 1);
            const isPulsing = pulsingConnections.includes(connectionIndex % 6);
            
            return (
              <line
                key={`${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${targetNode.x}%`}
                y2={`${targetNode.y}%`}
                stroke="url(#connectionGradient)"
                strokeWidth={isPulsing ? "2" : "1"}
                filter={isPulsing ? "url(#glow)" : "none"}
                className={`transition-all duration-700 ${
                  activeNode === i || activeNode === i + j + 1 || isPulsing
                    ? 'opacity-80' 
                    : 'opacity-20'
                }`}
                strokeDasharray={isPulsing ? "5,5" : "none"}
              />
            );
          })
        )}
      </svg>

      {/* Enhanced nodes */}
      {nodes.map((node, index) => {
        const IconComponent = node.icon;
        const isActive = activeNode === index;
        const isPulsing = pulsingConnections.includes(index);
        
        return (
          <div
            key={index}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              isActive ? 'scale-125 z-20' : 'scale-100 z-10'
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {/* Glow effect */}
            {(isActive || isPulsing) && (
              <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${node.color} rounded-2xl blur-xl opacity-40 animate-pulse scale-150`} />
            )}
            
            <div className={`relative w-14 h-14 bg-gradient-to-br ${node.color} rounded-2xl flex items-center justify-center border-2 ${
              isActive ? 'border-white/40 shadow-2xl' : 'border-white/20'
            } backdrop-blur-sm transition-all duration-500`}>
              <IconComponent className={`w-7 h-7 text-white transition-transform duration-300 ${
                isActive ? 'scale-110' : ''
              }`} />
            </div>
            
            <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 ${
              isActive ? 'opacity-100 scale-110' : 'opacity-70'
            }`}>
              <div className="text-xs text-white font-medium whitespace-nowrap bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                {node.label}
              </div>
            </div>
          </div>
        );
      })}

      {/* Central pulsing core */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-60" />
        <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default AINetworkDiagram;
