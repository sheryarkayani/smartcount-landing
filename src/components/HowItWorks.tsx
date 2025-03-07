
import { useEffect, useRef } from 'react';
import { Check, Activity, Sparkles, LineChart, Zap } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const steps = [
    {
      number: "01",
      title: "Connect",
      icon: <Activity className="h-5 w-5 text-violet-600" />,
      description: "Link your accounts instantly and securely. Pulse starts monitoring your financial heartbeat."
    },
    {
      number: "02",
      title: "Monitor",
      icon: <LineChart className="h-5 w-5 text-violet-600" />,
      description: "Experience real-time tracking as Pulse learns your financial patterns and vital business metrics."
    },
    {
      number: "03",
      title: "Optimize",
      icon: <Sparkles className="h-5 w-5 text-violet-600" />,
      description: "Get AI-powered insights that reveal hidden opportunities and keep your business in perfect rhythm."
    },
    {
      number: "04",
      title: "Accelerate",
      icon: <Zap className="h-5 w-5 text-violet-600" />,
      description: "Make lightning-fast decisions with predictive analytics and real-time financial intelligence."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-violet-50 via-background to-accent/5">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" ref={sectionRef}>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-6">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your finances in perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">harmony</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Experience a revolutionary approach to financial management that adapts to your business rhythm.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center font-semibold text-violet-600">
                    {step.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="glass-panel rounded-2xl overflow-hidden p-1 bg-white/80">
                <div className="bg-white rounded-xl overflow-hidden p-8">
                  <h3 className="text-2xl font-bold mb-6">The Pulse Advantage</h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Real-time financial monitoring 24/7",
                      "85% faster decision-making process",
                      "20+ hours saved every week",
                      "AI-powered growth opportunities",
                      "Automated compliance & reporting",
                      "Instant financial insights"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-violet-600" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center pt-4 border-t border-border">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <img 
                            src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                            alt={`User ${i}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium">Trusted by 1,200+</p>
                      <p className="text-xs text-muted-foreground">Businesses worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-violet-200/50 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-violet-200/50 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
