
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, Heart, Filter, Bell, Star, Target, Calendar, DollarSign, Users, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ScholaSwiperMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const [likedCount, setLikedCount] = useState(47);
  const [passedCount, setPassedCount] = useState(123);
  const [applicationsCount, setApplicationsCount] = useState(1523);

  const scholarships = [
    {
      id: 1,
      title: "Microsoft Future Leaders Program",
      company: "Microsoft",
      amount: "$8,500",
      match: 89,
      description: "Empowering student leaders to drive innovation and positive change in technology.",
      deadline: "April 1, 2024",
      category: "Leadership",
      eligibility: "All universities eligible",
      rating: 5,
      isUrgent: true,
      icon: "🎯",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Google AI Research Grant",
      company: "Google",
      amount: "$12,000",
      match: 92,
      description: "Supporting cutting-edge research in artificial intelligence and machine learning applications.",
      deadline: "March 15, 2024",
      category: "Research",
      eligibility: "CS/AI majors only",
      rating: 5,
      isUrgent: false,
      icon: "🤖",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Tesla Engineering Excellence",
      company: "Tesla",
      amount: "$15,000",
      match: 78,
      description: "Fostering the next generation of sustainable energy and transportation engineers.",
      deadline: "May 20, 2024",
      category: "Engineering",
      eligibility: "Engineering students",
      rating: 4,
      isUrgent: false,
      icon: "⚡",
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      title: "Apple Developer Academy",
      company: "Apple",
      amount: "$10,000",
      match: 85,
      description: "Creating innovative mobile applications that transform user experiences worldwide.",
      deadline: "June 10, 2024",
      category: "Development",
      eligibility: "iOS developers",
      rating: 5,
      isUrgent: true,
      icon: "📱",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      title: "Amazon Web Services Cloud",
      company: "Amazon",
      amount: "$7,500",
      match: 91,
      description: "Building scalable cloud infrastructure solutions for the next generation of web applications.",
      deadline: "April 25, 2024",
      category: "Cloud Computing",
      eligibility: "Computer Science majors",
      rating: 4,
      isUrgent: false,
      icon: "☁️",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const currentScholarship = scholarships[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    
    if (direction === 'right') {
      setLikedCount(prev => prev + 1);
    } else {
      setPassedCount(prev => prev + 1);
    }
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % scholarships.length);
      setSwipeDirection(null);
    }, 300);
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      handleSwipe('right');
    } else if (info.offset.x < -threshold) {
      handleSwipe('left');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setApplicationsCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* iPhone 14 Pro Max Mockup */}
      <div className="relative">
        {/* Phone Shadow */}
        <div className="absolute inset-0 bg-black/30 rounded-[60px] blur-3xl transform translate-y-8 scale-105" />
        
        {/* Phone Frame */}
        <div className="relative w-[380px] h-[820px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[60px] p-2 shadow-2xl border border-gray-700/50">
          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[50px] overflow-hidden relative">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-full z-50 shadow-inner"></div>
            
            {/* Screen Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-8 pt-16 pb-4 text-white text-sm font-medium">
                <span className="text-white">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                  </div>
                  <span className="ml-2 text-white">📶</span>
                  <span className="text-white">🔋</span>
                </div>
              </div>

              {/* Header */}
              <div className="px-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h1 className="text-white text-3xl font-bold">Discover</h1>
                    <p className="text-gray-300 text-base">Your perfect matches</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Filter className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-4 mt-4">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                    {applicationsCount.toLocaleString()} applications
                  </Badge>
                  <span className="text-gray-400 text-sm">• Active today</span>
                </div>
              </div>

              {/* Card Stack */}
              <div className="relative px-6 h-[460px]">
                <AnimatePresence>
                  <motion.div
                    key={currentScholarship.id}
                    className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl cursor-grab active:cursor-grabbing overflow-hidden"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      x: swipeDirection === 'right' ? 300 : swipeDirection === 'left' ? -300 : 0,
                      rotate: swipeDirection === 'right' ? 20 : swipeDirection === 'left' ? -20 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Card Content */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
                            {currentScholarship.icon}
                          </div>
                          <div>
                            <p className="text-white/80 text-sm font-medium">{currentScholarship.category}</p>
                            <p className="text-white text-lg font-bold">{currentScholarship.company}</p>
                          </div>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 font-bold">
                          {currentScholarship.match}% Match
                        </Badge>
                      </div>

                      {/* Title */}
                      <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
                        {currentScholarship.title}
                      </h2>

                      {/* Amount & Rating */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-yellow-400 text-4xl font-bold">
                          {currentScholarship.amount}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < currentScholarship.rating ? 'fill-yellow-400 text-yellow-400' : 'text-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/90 text-base mb-6 leading-relaxed flex-1">
                        {currentScholarship.description}
                      </p>

                      {/* Eligibility */}
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/20">
                        <p className="text-white text-center font-medium">
                          {currentScholarship.eligibility}
                        </p>
                      </div>

                      {/* Deadline */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-white/70" />
                          <span className="text-white text-base">Deadline: {currentScholarship.deadline}</span>
                        </div>
                        {currentScholarship.isUrgent && (
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 px-3 py-1 font-bold">
                            URGENT
                          </Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSwipe('left')}
                  className="w-16 h-16 bg-red-500/20 border-2 border-red-500/40 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                >
                  <X className="w-8 h-8 text-red-400" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSwipe('right')}
                  className="w-16 h-16 bg-green-500/20 border-2 border-green-500/40 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                >
                  <Heart className="w-8 h-8 text-green-400" />
                </motion.button>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>

              {/* Bottom Indicators */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                {scholarships.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Below Phone */}
      <div className="mt-12 flex items-center gap-8 text-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div>
            <p className="text-2xl font-bold text-white">{passedCount}</p>
            <p className="text-sm text-gray-400">Passed</p>
          </div>
        </div>
        
        <div className="w-px h-12 bg-gray-600"></div>
        
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div>
            <p className="text-2xl font-bold text-white">{likedCount}</p>
            <p className="text-sm text-gray-400">Liked</p>
          </div>
        </div>
        
        <div className="w-px h-12 bg-gray-600"></div>
        
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          <div>
            <p className="text-2xl font-bold text-white">{Math.floor(currentScholarship.match)}%</p>
            <p className="text-sm text-gray-400">AI Match</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholaSwiperMockup;
