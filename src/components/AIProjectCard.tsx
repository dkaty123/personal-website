
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, TrendingUp, Zap, Database } from "lucide-react";

interface AIProjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  status: string;
  color: string;
  bgColor: string;
  image: string;
  techStack?: string[];
  metrics?: {
    [key: string]: string;
  };
}

const AIProjectCard: React.FC<AIProjectCardProps> = ({
  title,
  description,
  icon: Icon,
  progress,
  status,
  color,
  bgColor,
  image,
  techStack = [],
  metrics = {}
}) => {
  const statusColors = {
    active: "bg-green-500 shadow-green-500/50",
    focus: "bg-blue-500 shadow-blue-500/50", 
    ongoing: "bg-purple-500 shadow-purple-500/50",
    research: "bg-orange-500 shadow-orange-500/50",
  };

  return (
    <Card className="relative p-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-white/15 backdrop-blur-xl hover:border-blue-400/40 transition-all duration-700 hover:scale-[1.02] group overflow-hidden">
      {/* Enhanced image header with overlay effects */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        
        {/* Tech stack overlay */}
        <div className="absolute bottom-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {techStack.slice(0, 3).map((tech, i) => (
            <div key={i} className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-xs text-white border border-white/20">
              {tech}
            </div>
          ))}
        </div>
        
        {/* Enhanced neural network visualization */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg className="w-full h-full">
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <line
                  x1={`${Math.random() * 100}%`}
                  y1={`${Math.random() * 100}%`}
                  x2={`${Math.random() * 100}%`}
                  y2={`${Math.random() * 100}%`}
                  stroke="rgba(59, 130, 246, 0.4)"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
                <circle
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r="2"
                  fill="rgba(59, 130, 246, 0.6)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              </g>
            ))}
          </svg>
        </div>
        
        {/* Enhanced status badge */}
        <div className="absolute top-3 right-3">
          <Badge className={`${statusColors[status as keyof typeof statusColors]} text-white border-0 font-medium text-xs px-3 py-1 shadow-lg`}>
            {status.toUpperCase()}
          </Badge>
        </div>
      </div>

      {/* Enhanced content section */}
      <div className="relative p-6 space-y-4">
        {/* Header with enhanced icon */}
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${bgColor} rounded-xl flex items-center justify-center border border-white/20 relative`}>
            <Icon className="w-6 h-6 text-white" />
            <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-1">{title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <TrendingUp className="w-4 h-4" />
              <span>Performance: {progress}%</span>
            </div>
          </div>
        </div>

        {/* Enhanced description */}
        <p className="text-gray-300 font-light leading-relaxed text-sm">
          {description}
        </p>

        {/* Tech stack */}
        {techStack.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs text-gray-400 font-medium">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <Badge key={i} variant="outline" className="border-white/20 text-gray-300 bg-white/5 px-2 py-1 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Metrics display */}
        {Object.keys(metrics).length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-2">
            {Object.entries(metrics).slice(0, 3).map(([key, value], i) => (
              <div key={i} className="text-center p-2 bg-white/5 rounded-lg border border-white/10">
                <div className="text-sm font-medium text-white">{value}</div>
                <div className="text-xs text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced progress bar */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-gray-400 font-medium">Development Progress</span>
            </div>
            <span className="text-sm text-white font-medium">{progress}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out relative`}
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              <div className="absolute right-0 top-0 h-full w-2 bg-white/50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AIProjectCard;
