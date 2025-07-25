
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PersonalSection from "@/components/PersonalSection";
import ExperienceSection from "@/components/ExperienceSection";
import AwardsSection from "@/components/AwardsSection";
import MovingSkillsSection from "@/components/MovingSkillsSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import CurrentlyWorkingSection from "@/components/CurrentlyWorkingSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <PersonalSection />
      <ExperienceSection />
      <MovingSkillsSection />
      <WorkSection />
      <CurrentlyWorkingSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
