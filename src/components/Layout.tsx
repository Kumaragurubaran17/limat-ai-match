import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full bg-black shadow-lg">
        <nav className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link
            to="/"
            className="text-white text-2xl font-extrabold tracking-tighter flex items-center"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            limat<span className="text-indigo-500 ml-px text-3xl align-top leading-none">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-white text-base font-medium">
            <div className="relative group">
              <button className="transition-colors hover:text-indigo-400 focus:outline-none">
                Products <span className="text-indigo-400">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="transition-colors hover:text-indigo-400 focus:outline-none">
                Use cases <span className="text-indigo-400">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="transition-colors hover:text-indigo-400 focus:outline-none">
                API <span className="text-indigo-400">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="transition-colors hover:text-indigo-400 focus:outline-none">
                Resources <span className="text-indigo-400">▼</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/candidate"
              className="hidden md:block text-white bg-transparent hover:text-indigo-400 transition px-4 py-2 rounded-md"
            >
              Get hired
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border border-white/40 bg-black text-white hover:bg-white/10 px-5 py-2 min-w-[100px]">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 min-w-[120px] shadow-lg font-bold">
                Book a demo
              </Button>
            </Link>
            <div className="md:hidden ml-2">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-background">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">LIMAT</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered recruitment platform for the modern hiring process.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Portals</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/candidate" className="text-sm text-muted-foreground hover:text-foreground">
                    Candidate Portal
                  </Link>
                </li>
                <li>
                  <Link to="/recruiter" className="text-sm text-muted-foreground hover:text-foreground">
                    Recruiter Portal
                  </Link>
                </li>
                <li>
                  <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground">
                    Admin Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LIMAT AI Recruitment. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
