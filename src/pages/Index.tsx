
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PersonalSection from "@/components/PersonalSection";
import ExperienceSection from "@/components/ExperienceSection";
import AwardsSection from "@/components/AwardsSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <PersonalSection />
      <ExperienceSection />
      <WorkSection />
      <AwardsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
