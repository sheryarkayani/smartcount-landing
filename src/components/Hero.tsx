
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Zap, LineChart } from 'lucide-react';

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
    <section className="min-h-screen flex items-center pt-20 pb-16 md:py-32 overflow-hidden bg-gradient-to-br from-violet-500/10 via-accent/5 to-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-3 space-y-8" ref={heroRef}>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                Feel the <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">Pulse</span><br />
                of your finances.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
                Real-time financial intelligence that keeps you in perfect rhythm with your money. Experience the next evolution of business accounting.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group rounded-full bg-primary hover:bg-primary/90 text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full hover:bg-accent">
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-primary animate-pulse" />
                <span>Real-time monitoring</span>
              </div>
              <div className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                <span>Lightning-fast insights</span>
              </div>
              <div className="flex items-center">
                <LineChart className="mr-2 h-5 w-5 text-primary" />
                <span>Predictive analytics</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg max-w-md mx-auto">
              {/* Header with Logo */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-violet-600" />
                  <span className="text-violet-600 text-xl font-semibold">Pulse</span>
                </div>
              </div>

              {/* Main Dashboard Card */}
              <div className="p-5">
                {/* AI Assistant Indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-violet-600">Financial Pulse Active</span>
                </div>

                {/* Stats Section */}
                <div className="space-y-4 mb-6">
                  {/* Monthly Revenue */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Monthly Revenue</div>
                    <div className="text-2xl font-semibold mt-1">$42,580</div>
                    <div className="flex items-center gap-1 text-green-500 text-sm mt-1">
                      <span>↑</span>
                      <span>+12.3%</span>
                    </div>
                  </div>

                  {/* AI Savings */}
                  <div className="bg-violet-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500">Optimization Found</div>
                    <div className="text-2xl font-semibold text-violet-600 mt-1">$3,450</div>
                    <div className="text-xs text-violet-400">Real-time Savings</div>
                  </div>
                </div>

                {/* AI Processing Animation */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-center items-center gap-3">
                    <div className="w-2 h-8 bg-violet-200 rounded-full animate-wave delay-0"></div>
                    <div className="w-2 h-8 bg-violet-200 rounded-full animate-wave [animation-delay:150ms]"></div>
                    <div className="w-2 h-8 bg-violet-200 rounded-full animate-wave [animation-delay:300ms]"></div>
                    <div className="w-2 h-8 bg-violet-200 rounded-full animate-wave [animation-delay:450ms]"></div>
                  </div>
                </div>

                {/* Smart Tags */}
                <div className="flex flex-wrap gap-2">
                  <div className="text-xs bg-violet-50 text-violet-600 px-3 py-1.5 rounded-full">Smart Insights</div>
                  <div className="text-xs bg-violet-50/50 text-violet-600 px-3 py-1.5 rounded-full">Real-time Tracking</div>
                  <div className="text-xs bg-violet-50/30 text-violet-600 px-3 py-1.5 rounded-full whitespace-nowrap">Predictive AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
