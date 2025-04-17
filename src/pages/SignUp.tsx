
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const SignUp = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign up submitted");
  };

  return (
    <div className="w-full max-w-md px-4">
      <Card className="glass-card border-primary/30 glow-border-enhanced">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold hover:scale-105 transition-transform duration-300">Create an account</CardTitle>
          <CardDescription>Start your eco-friendly financial journey today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="name" placeholder="John Doe" className="pl-10 hover:border-primary/50 transition-colors duration-300" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="name@example.com" className="pl-10 hover:border-primary/50 transition-colors duration-300" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10 hover:border-primary/50 transition-colors duration-300" required />
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                <li className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Check className="h-3 w-3 mr-1 text-primary animate-pulse" /> At least 8 characters
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Check className="h-3 w-3 mr-1 text-primary animate-pulse" /> At least one uppercase letter
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Check className="h-3 w-3 mr-1 text-primary animate-pulse" /> At least one number or symbol
                </li>
              </ul>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="hover:scale-110 transition-transform duration-300" />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline hover:scale-105 transition-transform duration-300 inline-block">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline hover:scale-105 transition-transform duration-300 inline-block">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <Button type="submit" className="w-full neo-button hover:scale-105 transition-transform duration-300">
              Create account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Google", "Apple", "Facebook"].map((provider) => (
                <Button key={provider} variant="outline" className="border-primary/20 hover:bg-primary/10 hover:scale-105 transition-all duration-300" type="button">
                  {provider}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-primary hover:underline hover:scale-105 transition-transform duration-300 inline-block">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
