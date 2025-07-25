
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, LucideIcon } from "lucide-react";

interface FlippableProjectCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  stats: string;
  technologies: string[];
  icon: LucideIcon;
  category: string;
  year: string;
  color: string;
  index: number;
  colorClasses: {
    border: string;
    shadow: string;
    text: string;
    glow: string;
  };
  links?: {
    view: string;
    code: string;
  };
}

const FlippableProjectCard: React.FC<FlippableProjectCardProps> = ({
  title,
  description,
  detailedDescription,
  image,
  stats,
  technologies,
  icon: IconComponent,
  category,
  year,
  color,
  index,
  colorClasses,
  links
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="group relative h-96 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700`}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        
        {/* Front of card - Improved layout */}
        <Card 
          className={`absolute inset-0 overflow-hidden bg-black/50 border ${colorClasses.border} backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${colorClasses.shadow}`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
          
          <div className="relative h-full overflow-hidden flex flex-col">
            {/* Image section - takes up 70% of the card */}
            <div className="relative h-3/4 overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              {/* Floating particles animation */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 ${colorClasses.text.replace('text-', 'bg-')} rounded-full animate-float`}
                    style={{
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Content section - takes up 30% of the card with solid background */}
            <div className="relative h-1/4 bg-black/90 border-t border-white/10 p-4 flex flex-col justify-center">
              <h3 className={`text-lg font-medium text-white group-hover:${colorClasses.text} transition-colors duration-300 mb-2`}>
                {title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed font-light line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colorClasses.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl`}></div>
        </Card>

        {/* Back of card - Detailed content with proper buttons */}
        <Card 
          className={`absolute inset-0 overflow-hidden bg-black/90 border ${colorClasses.border} backdrop-blur-sm`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.glow} opacity-20`}></div>
          
          <div className="p-6 h-full flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg flex items-center justify-center border border-white/20`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className={`text-lg font-medium ${colorClasses.text} mb-1`}>{title}</h3>
                  <span className="text-xs text-gray-400">{category} • {year}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">About</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded-md text-xs text-gray-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className={`inline-flex items-center px-2 py-1 bg-gradient-to-r ${colorClasses.glow} rounded-md`}>
                    <span className="text-xs font-medium text-white">{stats}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 mt-4">
              <div className="flex gap-2">
                {links && (
                  <>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1 text-xs"
                      onClick={() => handleLinkClick(links.code)}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent flex-1 text-xs"
                      onClick={() => handleLinkClick(links.view)}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FlippableProjectCard;
