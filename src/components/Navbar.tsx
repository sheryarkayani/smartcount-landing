
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Activity } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-5",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
        "border-b border-violet-100/20"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-bold text-violet-600 flex items-center gap-2 group">
              <Activity className="h-6 w-6 group-hover:animate-pulse transition-all" />
              Pulse
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-violet-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-violet-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-violet-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-foreground/80 hover:text-violet-600 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full hover:bg-violet-50 hover:text-violet-600 border-violet-200 transition-all">
              Sign In
            </Button>
            <Button className="rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all">
              Try Free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground/80 hover:text-violet-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-t border-border md:hidden py-4 px-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground/80 hover:text-violet-600 py-2 transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-violet-600 py-2 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-violet-600 py-2 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-foreground/80 hover:text-violet-600 py-2 transition-colors">Pricing</a>
              <div className="flex flex-col space-y-3 pt-2">
                <Button variant="outline" className="w-full justify-center rounded-full border-violet-200 hover:bg-violet-50 hover:text-violet-600">
                  Sign In
                </Button>
                <Button className="w-full justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700">
                  Try Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
