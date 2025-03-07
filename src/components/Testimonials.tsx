
import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  imageUrl: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "SmartLedger has completely transformed how we handle our finances. The AI-powered insights have helped us identify cost-saving opportunities we never would have found manually.",
    author: "Sarah Johnson",
    position: "CFO",
    company: "Novus Technologies",
    imageUrl: "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    content: "As a small business owner, I was spending 15+ hours a week on accounting tasks. With SmartLedger, that's down to less than 2 hours. The automation is simply incredible.",
    author: "Michael Chen",
    position: "Founder",
    company: "Brite Solutions",
    imageUrl: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    content: "The predictive analytics feature has been a game-changer for our financial planning. We can now forecast with remarkable accuracy and prepare for future challenges.",
    author: "Emily Rodriguez",
    position: "Financial Director",
    company: "Altura Partners",
    imageUrl: "https://randomuser.me/api/portraits/women/45.jpg"
  }
];

const Testimonial = ({ content, author, position, company, imageUrl }: TestimonialProps) => {
  return (
    <div className="glass-card p-8 rounded-xl flex flex-col h-full">
      <div className="flex mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-lg flex-grow mb-6">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={imageUrl} 
            alt={author} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="section-container" ref={sectionRef}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Customer Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Trusted by financial professionals worldwide
            </h2>
            <p className="text-muted-foreground text-lg">
              See how SmartLedger has transformed financial management for businesses of all sizes.
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div 
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
          ref={scrollContainerRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1.5rem)] snap-start"
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-3">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Forbes', 'TechCrunch', 'Inc.', 'Bloomberg', 'CNBC'].map((company, index) => (
              <div key={index} className="text-xl md:text-2xl font-semibold text-muted-foreground/50">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
