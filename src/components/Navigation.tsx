
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const Navigation = () => {
  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 backdrop-blur-lg border border-purple-500/50 rounded-full px-6 py-3 shadow-lg shadow-purple-500/20 ring-1 ring-purple-400/30 glow-ring">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6 text-sm">
          <button 
            onClick={() => handleSmoothScroll('hero-section')}
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleSmoothScroll('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleSmoothScroll('work')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => handleSmoothScroll('currently-working')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Current
          </button>
          <button 
            onClick={() => handleSmoothScroll('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
