
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
            Designed to work.<br />The way you do.
          </h2>
          <p className="text-muted-foreground text-lg">
            SmartLedger combines refined simplicity with accounting intelligence to anticipate your needs and streamline your financial workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" ref={featuresRef}>
          <Feature
            icon={<Brain className="h-6 w-6" />}
            title="AI-Powered Analysis"
            description="Our deep learning algorithms analyze your financial data to provide actionable insights and forecast trends."
          />
          <Feature
            icon={<Zap className="h-6 w-6" />}
            title="Automated Bookkeeping"
            description="Say goodbye to manual data entry. Our system automatically categorizes and reconciles transactions."
          />
          <Feature
            icon={<FileText className="h-6 w-6" />}
            title="Smart Reporting"
            description="Generate comprehensive financial reports with a single click, tailored to your specific business needs."
          />
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Advanced Security"
            description="Bank-level encryption and security protocols ensure your financial data remains protected."
          />
          <Feature
            icon={<Clock className="h-6 w-6" />}
            title="Real-time Updates"
            description="Access up-to-the-minute financial information about your business from anywhere, anytime."
          />
          <Feature
            icon={<LineChart className="h-6 w-6" />}
            title="Predictive Insights"
            description="Foresee potential financial issues before they occur with our predictive modeling."
          />
          <Feature
            icon={<DollarSign className="h-6 w-6" />}
            title="Cost Optimization"
            description="Identify areas for cost reduction and efficiency improvements with AI-driven recommendations."
          />
          <Feature
            icon={<BarChart4 className="h-6 w-6" />}
            title="Performance Metrics"
            description="Track key financial indicators with customizable dashboards and visual analytics."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
