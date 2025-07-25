
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
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-light text-white mb-4">ScholaSwiper Demo</h3>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Interactive prototype of the AI-powered scholarship discovery platform
        </p>
      </div>

      {/* iPhone Mockup */}
      <div className="relative">
        {/* Phone Frame */}
        <div className="w-[380px] h-[760px] bg-black rounded-[60px] p-2 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-[50px] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-2xl z-50"></div>
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-8 pt-12 pb-4 text-white text-sm font-medium">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                </div>
                <span className="ml-2">📶</span>
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Header */}
            <div className="px-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h1 className="text-white text-3xl font-bold">Discover</h1>
                  <p className="text-purple-200 text-base">Your perfect matches</p>
                </div>
                <div className="flex gap-4">
                  <Filter className="w-6 h-6 text-purple-200" />
                  <Bell className="w-6 h-6 text-purple-200" />
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-4 mt-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1">
                  {applicationsCount.toLocaleString()} applications
                </Badge>
                <span className="text-purple-200 text-sm">• Active today</span>
              </div>
            </div>

            {/* Card Stack */}
            <div className="relative px-6 h-[420px]">
              <AnimatePresence>
                <motion.div
                  key={currentScholarship.id}
                  className={`absolute inset-0 bg-gradient-to-br ${currentScholarship.color} rounded-3xl p-6 shadow-2xl cursor-grab active:cursor-grabbing`}
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
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                        {currentScholarship.icon}
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-medium">{currentScholarship.category}</p>
                        <p className="text-white text-lg font-bold">{currentScholarship.company}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white px-3 py-1 font-bold">
                      {currentScholarship.match}% Match
                    </Badge>
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-2xl font-bold mb-4 leading-tight">
                    {currentScholarship.title}
                  </h2>

                  {/* Amount & Rating */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-yellow-300 text-4xl font-bold">
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
                  <p className="text-white/90 text-base mb-6 leading-relaxed">
                    {currentScholarship.description}
                  </p>

                  {/* Eligibility */}
                  <div className="bg-white/10 rounded-2xl p-4 mb-6">
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
                      <Badge className="bg-red-500 text-white px-3 py-1 font-bold">
                        URGENT
                      </Badge>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSwipe('left')}
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <X className="w-8 h-8 text-white" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleSwipe('right')}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.button>
            </div>

            {/* Bottom Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
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
