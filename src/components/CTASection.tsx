
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Zap, Activity, Building } from 'lucide-react';

const CTASection = () => {
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
  
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-violet-50 via-accent/5 to-background">
      <div className="section-container">
        <div ref={sectionRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-6">
              Flexible Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find your perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">rhythm</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that keeps your finances in perfect sync. Scale smoothly as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                icon: <Activity className="h-5 w-5" />,
                description: "Perfect tempo for small businesses",
                features: [
                  "Real-time transaction monitoring",
                  "Smart financial insights",
                  "Connect 3 financial accounts",
                  "24/7 email support",
                  "Basic financial forecasting"
                ]
              },
              {
                name: "Growth",
                price: "$79",
                icon: <Zap className="h-5 w-5" />,
                description: "Amplify your financial performance",
                featured: true,
                features: [
                  "Everything in Starter, plus:",
                  "Advanced AI-powered insights",
                  "Cash flow optimization",
                  "Connect up to 10 accounts",
                  "Priority support",
                  "Custom financial dashboards",
                  "Team collaboration tools"
                ]
              },
              {
                name: "Enterprise",
                price: "$199",
                icon: <Building className="h-5 w-5" />,
                description: "Ultimate control for large organizations",
                features: [
                  "Everything in Growth, plus:",
                  "Dedicated financial advisor",
                  "Custom API integration",
                  "Unlimited accounts",
                  "Advanced automation",
                  "Predictive analytics",
                  "Enterprise-grade security",
                  "Custom training sessions"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`
                  rounded-xl p-8 
                  ${plan.featured 
                    ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' 
                    : 'glass-card'
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`
                    p-2 rounded-lg
                    ${plan.featured ? 'bg-primary-foreground/20' : 'bg-violet-100'}
                  `}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm ml-1">/month</span>
                </div>
                <p className={`
                  mb-6
                  ${plan.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}
                `}>
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`
                        flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
                        ${plan.featured ? 'bg-primary-foreground/20' : 'bg-primary/10'}
                      `}>
                        <Check className={`
                          h-3 w-3 
                          ${plan.featured ? 'text-primary-foreground' : 'text-primary'}
                        `} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`
                    w-full group
                    ${plan.featured 
                      ? 'bg-primary-foreground text-violet-600 hover:bg-primary-foreground/90' 
                      : 'bg-violet-600 text-white hover:bg-violet-700'
                    }
                  `}
                >
                  {plan.featured ? 'Get Started' : 'Choose Plan'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Need a custom solution? <a href="#" className="text-violet-600 hover:underline font-medium">Let's talk</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
