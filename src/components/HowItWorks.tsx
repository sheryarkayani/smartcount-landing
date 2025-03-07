
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

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
      title: "Connect your accounts",
      description: "Securely link your bank accounts, credit cards, and financial platforms to SmartLedger."
    },
    {
      number: "02",
      title: "AI analyzes your data",
      description: "Our intelligent system processes your transactions, learns your patterns, and establishes your financial baseline."
    },
    {
      number: "03",
      title: "Review smart insights",
      description: "Receive customized financial insights, tax optimization suggestions, and cost-saving opportunities."
    },
    {
      number: "04",
      title: "Take informed action",
      description: "Make strategic decisions with confidence, backed by data-driven recommendations and intelligent forecasting."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-accent/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" ref={sectionRef}>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Simplified Process
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                How SmartLedger transforms your accounting
              </h2>
              <p className="text-muted-foreground text-lg">
                Experience a seamless transition to intelligent financial management with our intuitive platform.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center font-semibold text-primary">
                    {step.number}
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
                  <h3 className="text-2xl font-semibold mb-6">Unlock the potential of AI accounting</h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Reduce accounting costs by up to 60%",
                      "Eliminate manual data entry errors",
                      "Save 15+ hours per week on bookkeeping",
                      "Receive actionable financial insights",
                      "Ensure tax compliance with automated checks",
                      "Access real-time financial reporting"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
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
                      <p className="text-xs text-muted-foreground">Financial professionals worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
