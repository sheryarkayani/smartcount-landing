
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Activity,
  Heart,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-foreground-foreground">
      <div className="bg-gradient-to-b from-violet-50 via-background to-foreground/95 py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-8">
            <div className="lg:col-span-2">
              <a href="/" className="text-2xl font-bold text-violet-600 mb-4 inline-flex items-center gap-2 group">
                <Activity className="h-6 w-6 group-hover:animate-pulse transition-all" />
                Pulse
              </a>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Keep your finger on the pulse of your finances. Real-time monitoring and AI-powered insights for modern businesses.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-violet-900">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Press</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Security</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Community</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-violet-600 transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-4">Stay Connected</h3>
              <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-foreground/5 border-border/20"
                />
                <Button className="bg-violet-600 hover:bg-violet-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Pulse. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-violet-600 transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-violet-600 transition-colors">Legal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
