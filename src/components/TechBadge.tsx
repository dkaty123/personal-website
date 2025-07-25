
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TechBadgeProps {
  icon: string;
  name: string;
  level?: number;
}

const TechBadge = ({ icon, name, level = 80 }: TechBadgeProps) => {
  const getLevelColor = (level: number) => {
    if (level >= 90) return "from-green-400 to-emerald-500";
    if (level >= 80) return "from-blue-400 to-cyan-500";
    if (level >= 70) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-pink-500";
  };

  return (
    <motion.div
      className="group relative"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Badge 
        className="
          bg-black/40 border border-white/20 text-white px-4 py-2 
          backdrop-blur-sm hover:bg-black/60 hover:border-white/40 
          transition-all duration-300 cursor-pointer
          shadow-lg hover:shadow-xl
        "
      >
        <motion.span 
          className="mr-2 text-lg"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {icon}
        </motion.span>
        <span className="font-medium">{name}</span>
      </Badge>
      
      {/* Level indicator - shows on hover */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${getLevelColor(level).split(' ')[1]}, ${getLevelColor(level).split(' ')[3]})`
        }}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        animate={{ 
          boxShadow: [
            "0 0 5px rgba(168,85,247,0.5)",
            "0 0 15px rgba(168,85,247,0.8)",
            "0 0 5px rgba(168,85,247,0.5)"
          ]
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity }
        }}
      >
        {level}
      </motion.div>
      
      {/* Skill level progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        style={{
          background: `linear-gradient(to right, ${getLevelColor(level)})`
        }}
        initial={{ width: 0 }}
        whileHover={{ width: `${level}%` }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${getLevelColor(level)})`
        }}
      />
    </motion.div>
  );
};

export default TechBadge;
