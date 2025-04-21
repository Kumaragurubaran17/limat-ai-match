
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">About LIMAT</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <Card className="p-6">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6 text-lg">
              LIMAT is an AI-powered recruitment platform designed to revolutionize the hiring process.
              Our mission is to create a more efficient, fair, and effective recruitment experience
              for both candidates and recruiters through cutting-edge AI technology.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">The LIMAT Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Resume Screening</h3>
                <p>
                  Our AI analyzes resumes against job descriptions with unprecedented accuracy,
                  eliminating bias and identifying the most qualified candidates instantly.
                </p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">AI Interviewer</h3>
                <p>
                  LIMAT conducts initial interviews using advanced natural language processing,
                  text-to-speech, and speech-to-text technologies for a seamless candidate experience.
                </p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Skill Assessment</h3>
                <p>
                  Role-specific assessments measure practical skills and problem-solving abilities,
                  providing objective data on candidate capabilities.
                </p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Decision Support</h3>
                <p>
                  Our comprehensive ranking system combines all assessment data to provide recruiters
                  with clear, data-driven hiring recommendations.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-6 text-lg">
              LIMAT was developed as a final year project with the vision of addressing fundamental
              challenges in the recruitment industry. By combining artificial intelligence with
              human-centered design, we've created a platform that saves time, reduces bias,
              and identifies the best talent more effectively than traditional methods.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
            <p className="text-lg">
              As we continue to develop and refine our technology, we remain committed to our
              core principle: using AI not to replace human decision-making, but to enhance it
              by providing better information, more efficient processes, and a more engaging
              experience for everyone involved in recruitment.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
