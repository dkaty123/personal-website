
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingElements from "@/components/FloatingElements";

const Portfolio = () => {
  return (
    <motion.div 
      className="min-h-screen bg-black relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Global background animations */}
      <AnimatedBackground variant="stars" intensity="low" color="purple" />
      <FloatingElements count={30} variant="mixed" color="mixed" size="small" speed="slow" />
      
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroSection />
      </motion.div>
      
      <div>
        <ExperienceSection />
      </div>
      
      <div>
        <WorkSection />
      </div>
      
      <div>
        <AboutSection />
      </div>
      
      <div>
        <PersonalSection />
      </div>
      
      <div>
        <ContactSection />
      </div>
    </motion.div>
  );
};

export default Portfolio;
