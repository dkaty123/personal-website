
import React, { useState, useEffect } from 'react';
import { ArrowRight, Database, Brain, Zap, Activity } from 'lucide-react';

const AIDataFlow = () => {
  const [flowStep, setFlowStep] = useState(0);
  const [pulseNodes, setPulseNodes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowStep(prev => (prev + 1) % 4);
    }, 2000);

    const pulseInterval = setInterval(() => {
      setPulseNodes([Math.floor(Math.random() * 4)]);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(pulseInterval);
    };
  }, []);

  const steps = [
    { icon: Database, label: 'Data Ingestion', color: 'from-green-400 to-emerald-400', desc: 'Real-time streams' },
    { icon: Brain, label: 'Neural Processing', color: 'from-blue-400 to-cyan-400', desc: 'Deep learning' },
    { icon: Zap, label: 'AI Analysis', color: 'from-purple-400 to-pink-400', desc: 'Pattern recognition' },
    { icon: Activity, label: 'Insights Output', color: 'from-orange-400 to-red-400', desc: 'Actionable results' },
  ];

  return (
    <div className="relative bg-gradient-to-br from-black/80 via-gray-900/50 to-black/80 rounded-2xl border border-white/10 p-8 backdrop-blur-xl overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 bg-blue-400/40 rounded-full transition-all duration-2000 ${
            pulseNodes.includes(i % 4) ? 'animate-pulse scale-150' : ''
          }`}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      <div className="relative z-10">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-light text-white mb-2">AI Data Pipeline</h4>
          <p className="text-gray-400 text-sm">Processing millions of data points in real-time</p>
        </div>
        
        <div className="flex items-center justify-between relative mb-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = flowStep >= index;
            const isPulsing = pulseNodes.includes(index);
            
            return (
              <div key={index} className="flex flex-col items-center relative">
                <div className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center transition-all duration-700 ${
                  isActive ? 'scale-110 shadow-2xl' : 'scale-90 opacity-60'
                } ${isPulsing ? 'animate-pulse' : ''}`}>
                  <IconComponent className="w-8 h-8 text-white" />
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-30 ${
                    isActive ? 'scale-150' : 'scale-100'
                  } transition-all duration-700`} />
                </div>
                
                <div className={`mt-3 text-center transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-60'
                }`}>
                  <div className="text-white font-medium text-sm">{step.label}</div>
                  <div className="text-gray-400 text-xs mt-1">{step.desc}</div>
                </div>

                {/* Connection arrows */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-20 flex items-center">
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-white/20 to-transparent w-12 relative overflow-hidden">
                      <div 
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-700 ${
                          flowStep > index ? 'w-full opacity-100' : 'w-0 opacity-0'
                        }`}
                      />
                    </div>
                    <ArrowRight className={`w-4 h-4 ml-2 transition-all duration-500 ${
                      flowStep > index ? 'text-cyan-400 opacity-100' : 'text-white/20 opacity-40'
                    }`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="bg-white/5 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 transition-all duration-2000 rounded-full"
            style={{ width: `${((flowStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AIDataFlow;
