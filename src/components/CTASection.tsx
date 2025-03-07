
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

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
    <section id="pricing" className="py-20 bg-accent/50">
      <div className="section-container">
        <div ref={sectionRef}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Ready to Transform Your Accounting?
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Start your journey to intelligent financial management
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that fits your business needs and take control of your financial future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                description: "Perfect for freelancers and small businesses",
                features: [
                  "AI-powered transaction categorization",
                  "Basic financial reporting",
                  "Connect up to 2 accounts",
                  "Email support"
                ]
              },
              {
                name: "Professional",
                price: "$79",
                description: "Ideal for growing businesses",
                featured: true,
                features: [
                  "Everything in Starter, plus:",
                  "Advanced financial insights",
                  "Tax optimization suggestions",
                  "Connect up to 10 accounts",
                  "Priority support",
                  "Custom report builder"
                ]
              },
              {
                name: "Enterprise",
                price: "$199",
                description: "For established businesses with complex needs",
                features: [
                  "Everything in Professional, plus:",
                  "Dedicated account manager",
                  "API access",
                  "Unlimited accounts",
                  "Custom integrations",
                  "Advanced forecasting models",
                  "Team collaboration tools"
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
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
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
                      ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                      : 'bg-primary text-white hover:bg-primary/90'
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
            <p className="text-muted-foreground">Need a custom solution? <a href="#" className="text-primary hover:underline">Contact our sales team</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
