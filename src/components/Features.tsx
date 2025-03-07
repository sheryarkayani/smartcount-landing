
import { useEffect, useRef } from 'react';
import { 
  Brain, 
  LineChart, 
  FileText, 
  Clock, 
  Shield, 
  DollarSign, 
  Zap, 
  BarChart4
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col p-6 rounded-2xl hover:shadow-sm transition-all duration-300 hover:bg-accent/40">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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
    
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);
  
  return (
    <section id="features" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Simple. Powerful.<br />Intelligently designed.
          </h2>
          <p className="text-muted-foreground text-lg">
            SmartLedger brings together elegant simplicity and sophisticated intelligence to create an accounting experience unlike any other.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" ref={featuresRef}>
          <Feature
            icon={<Brain className="h-6 w-6" />}
            title="Intelligent Analysis"
            description="Advanced machine learning that understands your financial patterns and provides insights that matter."
          />
          <Feature
            icon={<Zap className="h-6 w-6" />}
            title="Effortless Automation"
            description="Categorizes and reconciles transactions automatically, eliminating tedious manual entry."
          />
          <Feature
            icon={<FileText className="h-6 w-6" />}
            title="Beautiful Reports"
            description="Clear, elegant financial reports that communicate complex data with striking simplicity."
          />
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Privacy & Security"
            description="Industry-leading protection for your financial data, with end-to-end encryption built in."
          />
          <Feature
            icon={<Clock className="h-6 w-6" />}
            title="Real-time Updates"
            description="See your financial position as it happens, with instant updates across all your devices."
          />
          <Feature
            icon={<LineChart className="h-6 w-6" />}
            title="Predictive Insights"
            description="Anticipate financial trends before they happen with forward-looking analytics."
          />
          <Feature
            icon={<DollarSign className="h-6 w-6" />}
            title="Efficiency Engine"
            description="Discover hidden opportunities to optimize spending and increase profitability."
          />
          <Feature
            icon={<BarChart4 className="h-6 w-6" />}
            title="Visual Intelligence"
            description="Transform complex financial data into intuitive visualizations that tell the complete story."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
