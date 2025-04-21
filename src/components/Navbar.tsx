
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="w-full bg-background/80 border-b sticky top-0 z-50 backdrop-blur">
    <div className="container mx-auto px-4 flex justify-between items-center h-16">
      <Link to="/" className="flex items-center gap-2">
        <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">LIMAT</span>
      </Link>
      <div className="hidden md:flex gap-6">
        <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
        <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
        <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-primary">How It Works</Link>
        <Link to="/features" className="text-sm font-medium transition-colors hover:text-primary">Features</Link>
        <Link to="/login" className="text-sm font-medium hover:text-primary">Login</Link>
        <Link to="/register">
          <Button size="sm">Sign Up</Button>
        </Link>
      </div>
      {/* Mobile menu button, not interactive in this simple version */}
      <div className="md:hidden">
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>
  </nav>
);

export default Navbar;
