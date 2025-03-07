
import { useEffect, useRef } from 'react';
import { 
  Activity,
  LineChart, 
  Sparkles, 
  Clock, 
  Shield, 
  TrendingUp, 
  Zap, 
  BarChart4,
  Heart
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col p-6 rounded-2xl hover:shadow-md transition-all duration-300 hover:bg-violet-50/50 group">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-600 mb-5 group-hover:scale-110 transition-transform">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your finances,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">always in rhythm.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the perfect harmony of real-time insights and intelligent automation with Pulse's next-generation financial platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" ref={featuresRef}>
          <Feature
            icon={<Activity className="h-6 w-6" />}
            title="Real-time Monitoring"
            description="Keep your finger on the pulse of your finances with instant updates and live transaction tracking."
          />
          <Feature
            icon={<Sparkles className="h-6 w-6" />}
            title="Smart Insights"
            description="AI-powered analysis that transforms your financial data into actionable intelligence."
          />
          <Feature
            icon={<Heart className="h-6 w-6" />}
            title="Financial Wellness"
            description="Maintain the perfect rhythm between income and expenses with health-focused metrics."
          />
          <Feature
            icon={<Shield className="h-6 w-6" />}
            title="Enterprise Security"
            description="Bank-grade encryption and advanced fraud detection to keep your financial pulse secure."
          />
          <Feature
            icon={<Clock className="h-6 w-6" />}
            title="Instant Updates"
            description="Feel every beat of your business with real-time notifications and alerts."
          />
          <Feature
            icon={<LineChart className="h-6 w-6" />}
            title="Trend Detection"
            description="Spot patterns and predict future trends with our advanced analytics engine."
          />
          <Feature
            icon={<TrendingUp className="h-6 w-6" />}
            title="Growth Insights"
            description="Uncover opportunities and optimize your financial performance in real-time."
          />
          <Feature
            icon={<Zap className="h-6 w-6" />}
            title="Lightning Fast"
            description="Experience the speed of modern finance with our high-performance platform."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
