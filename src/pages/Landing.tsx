
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Shield, Zap, ChevronRight, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* Left Column - Hero Content */}
      <div className="flex-1 space-y-8 md:pr-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="italic-text text-primary glow-green">Track</span> and <span className="italic-text text-primary glow-green">Reduce</span> Your Carbon Footprint
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300">
          GreenPocket offers a seamless, secure experience for monitoring your carbon impact, earning eco-rewards, and making sustainable financial decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild className="neo-button">
            <Link to="/sign-up" className="flex items-center gap-2">
              Get started <ChevronRight size={18} />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10 shadow-lg shadow-primary/5">
            <Link to="/sign-in">Sign in to account</Link>
          </Button>
        </div>
        
        {/* Trust badges */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-card border border-primary/20 flex items-center justify-center text-xs shadow-md">
                {i}
              </div>
            ))}
          </div>
          <span>Trusted by 10,000+ users worldwide</span>
        </div>
      </div>
      
      {/* Right Column - Features */}
      <div className="flex-1 glass-card p-6 md:p-8 rounded-xl max-w-xl w-full space-y-6 border border-primary/20 glow-border">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why Choose <span className="italic-text text-primary glow-green">GreenPocket</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="p-4 rounded-lg bg-black/40 border border-primary/10 hover-lift">
            <div className="rounded-full bg-green-900/30 w-10 h-10 flex items-center justify-center mb-3">
              <Leaf className="text-primary" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Eco Analysis</h3>
            <p className="text-sm text-gray-300">Automatically analyze your spending to determine environmental impact.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="p-4 rounded-lg bg-black/40 border border-primary/10 hover-lift">
            <div className="rounded-full bg-green-900/30 w-10 h-10 flex items-center justify-center mb-3">
              <Shield className="text-primary" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Maximum Security</h3>
            <p className="text-sm text-gray-300">Your financial data is protected with cutting-edge security protocols.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="p-4 rounded-lg bg-black/40 border border-primary/10 hover-lift">
            <div className="rounded-full bg-green-900/30 w-10 h-10 flex items-center justify-center mb-3">
              <Zap className="text-primary" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Instant Rewards</h3>
            <p className="text-sm text-gray-300">Earn eco-points for sustainable purchases that convert to real benefits.</p>
          </div>
          
          {/* Feature 4 */}
          <div className="p-4 rounded-lg bg-black/40 border border-primary/10 hover-lift">
            <div className="rounded-full bg-green-900/30 w-10 h-10 flex items-center justify-center mb-3">
              <LineChart className="text-primary" size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Eco Investments</h3>
            <p className="text-sm text-gray-300">Automatically invest in ESG funds based on your eco-savings.</p>
          </div>
        </div>
        
        {/* Demo preview */}
        <div className="mt-8 relative rounded-lg overflow-hidden border border-primary/20 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          <img src="/lovable-uploads/f9bd8ed3-8006-4ced-bf98-a09b6dbbf82c.png" alt="GreenPocket Dashboard Preview" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
