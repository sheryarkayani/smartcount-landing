
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl md:text-2xl font-semibold text-primary">
              SmartLedger
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full hover:bg-accent hover:text-primary transition-all">
              Sign In
            </Button>
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 transition-all">
              Try Free
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm border-t border-border md:hidden py-4 px-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground/80 hover:text-primary py-2 transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-primary py-2 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-primary py-2 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-foreground/80 hover:text-primary py-2 transition-colors">Pricing</a>
              <div className="flex flex-col space-y-3 pt-2">
                <Button variant="outline" className="w-full justify-center rounded-full">
                  Sign In
                </Button>
                <Button className="w-full justify-center rounded-full bg-primary text-white hover:bg-primary/90">
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
