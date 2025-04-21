import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <section
        className="flex flex-col justify-center items-center"
        style={{
          minHeight: "60vh",
          background:
            "radial-gradient(ellipse at top, #212a4d 0%, #0a0d18 100%)",
        }}
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center py-24 px-4">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #f3f3f3 70%, #c5c5f5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            AI recruitment engine to hire
            <br />
            <span className="block mt-2">top global talent</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mt-9 font-medium">
            Source, vet, and onboard talent all in one place
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto text-lg bg-black border border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl px-8 py-5 shadow-md"
                style={{ minWidth: "230px" }}
              >
                Create an account
              </Button>
            </Link>
            <Link to="/register" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-8 py-5 shadow-indigo-700/30 shadow-lg"
                style={{ minWidth: "230px" }}
              >
                Book a demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Revolutionize Your Recruitment Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              LIMAT combines cutting-edge AI with human-centered design to make hiring faster, 
              fairer, and more effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Resume Screening",
                description: "AI-powered matching of resumes to job descriptions with bias reduction and automated shortlisting.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                )
              },
              {
                title: "AI Interviewer",
                description: "Conduct initial interviews using text-to-speech and speech-to-text with dynamic question generation.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="22"></line>
                  </svg>
                )
              },
              {
                title: "Skill Assessment",
                description: "Role-specific assessments measure practical skills with automatic grading and benchmarking.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>
                )
              },
              {
                title: "Decision Support",
                description: "Data-driven insights with sophisticated candidate ranking algorithms and visual dashboards.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-primary">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How LIMAT Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated AI recruitment platform streamlines every step of the hiring process
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Resume Screening",
                  description: "Upload job descriptions and candidate resumes. Our AI analyzes and ranks candidates based on qualifications and skills."
                },
                {
                  number: "02",
                  title: "AI Interviews",
                  description: "Shortlisted candidates proceed to automated interviews using our advanced text-to-speech and speech-to-text technologies."
                },
                {
                  number: "03",
                  title: "Skill Assessment",
                  description: "Top candidates complete role-specific assessments to demonstrate their practical abilities."
                },
                {
                  number: "04",
                  title: "Decision Support",
                  description: "Receive comprehensive candidate reports with data-driven insights to make informed hiring decisions."
                }
              ].map((step, i) => (
                <div key={i} className="flex">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-background rounded-lg p-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="How LIMAT Works" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how LIMAT has transformed the recruitment process for organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "LIMAT reduced our time-to-hire by 45% and significantly improved the quality of candidates reaching the final interview stage.",
                author: "Sarah Johnson",
                role: "HR Director, TechCorp Inc."
              },
              {
                quote: "The AI interview system provided consistent evaluations across all candidates, eliminating unconscious bias from our initial screening.",
                author: "Michael Chen",
                role: "Head of Talent Acquisition, Global Solutions"
              },
              {
                quote: "As a candidate, I appreciated the flexibility of the AI interview and the immediate feedback after each assessment stage.",
                author: "Priya Patel",
                role: "Software Engineer"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-background rounded-lg p-6 shadow-sm border">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary/40">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Transform Your Recruitment Process Today
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join organizations that have revolutionized their hiring with LIMAT's AI-powered platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" variant="secondary" className="px-8">Get Started</Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
