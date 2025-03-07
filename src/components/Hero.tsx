
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Cog, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('staggered-appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 md:py-32 overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-3 space-y-8" ref={heroRef}>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground">
                Accounting.<br />
                <span className="text-primary">Reimagined.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
                Beautifully intuitive. Remarkably intelligent. SmartLedger transforms the way you work with numbers, so you can focus on what truly matters.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group rounded-full bg-primary hover:bg-primary/90 text-white">
                Try SmartLedger
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full hover:bg-accent">
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
                <span>Advanced security</span>
              </div>
              <div className="flex items-center">
                <Cog className="mr-2 h-5 w-5 text-primary" />
                <span>Intelligent automation</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                <span>Insightful analytics</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/2 backdrop-blur-sm z-10"></div>
              <div className="glass-panel rounded-3xl overflow-hidden p-1">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="SmartLedger Interface" 
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="absolute top-6 -right-12 glass-card rounded-xl p-4 shadow-lg animate-float z-20">
                <div className="text-sm font-medium">Revenue</div>
                <div className="text-xl font-semibold text-primary">$42,580</div>
                <div className="text-xs text-green-600 font-medium">+12.3%</div>
              </div>
              
              <div className="absolute -bottom-4 -left-8 glass-card rounded-xl p-4 shadow-lg animate-float animation-delay-1000 z-20">
                <div className="text-sm font-medium">AI Insight</div>
                <div className="text-xs text-muted-foreground">Optimization potential</div>
                <div className="text-xl font-semibold text-primary mt-1">$3,450</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
