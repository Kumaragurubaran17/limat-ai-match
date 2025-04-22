
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">How LIMAT Works</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="relative">
          <div className="absolute left-8 h-full w-1 bg-primary/20 rounded"></div>
          
          <div className="ml-16 mb-12 relative">
            <div className="absolute -left-10 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4">Resume Screening</h2>
                <p className="mb-4">
                  When recruiters upload job descriptions, LIMAT's AI analyzes requirements, qualifications, and key skills.
                </p>
                <p className="mb-4">
                  Candidates submit their resumes through our platform. Our AI then:
                </p>
                <ul className="list-disc ml-5 mb-4 space-y-2">
                  <li>Extracts relevant information from each resume</li>
                  <li>Compares candidate qualifications against job requirements</li>
                  <li>Scores each candidate based on match percentage</li>
                  <li>Filters out candidates who don't meet minimum requirements</li>
                  <li>Creates a shortlist of the most qualified candidates</li>
                </ul>
                <p>
                  This automated process eliminates bias and dramatically reduces the time spent on initial resume screening.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="ml-16 mb-12 relative">
            <div className="absolute -left-10 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4">AI Interviewer</h2>
                <p className="mb-4">
                  Shortlisted candidates proceed to our AI interview stage. Here's how it works:
                </p>
                <ul className="list-disc ml-5 mb-4 space-y-2">
                  <li>LIMAT schedules interviews with candidates via email</li>
                  <li>Our AI interviewer uses text-to-speech to ask role-specific questions</li>
                  <li>Candidates respond verbally, and speech-to-text technology transcribes their answers</li>
                  <li>Question Generation Intelligence (QGI) adapts follow-up questions based on previous responses</li>
                  <li>The AI evaluates responses for relevance, clarity, and specific knowledge</li>
                </ul>
                <p>
                  This provides a consistent interview experience for all candidates while dramatically reducing the time recruiters spend on initial interviews.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="ml-16 mb-12 relative">
            <div className="absolute -left-10 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4">Role-Specific Assessment</h2>
                <p className="mb-4">
                  Candidates who perform well in the interview proceed to role-specific assessments:
                </p>
                <ul className="list-disc ml-5 mb-4 space-y-2">
                  <li>Technical candidates receive coding challenges or technical problem-solving tasks</li>
                  <li>Marketing roles are assessed with creative briefs or campaign analysis</li>
                  <li>Management candidates face situational judgment tests</li>
                  <li>All assessments are automatically scored and evaluated</li>
                </ul>
                <p>
                  These assessments provide objective data on practical skills and problem-solving abilities.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="ml-16 relative">
            <div className="absolute -left-10 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">4</span>
            </div>
            <Card className="p-6">
              <CardContent className="p-0">
                <h2 className="text-2xl font-bold mb-4">Decision Support System</h2>
                <p className="mb-4">
                  Finally, LIMAT compiles comprehensive candidate reports:
                </p>
                <ul className="list-disc ml-5 mb-4 space-y-2">
                  <li>Combines scores from resume screening, interviews, and skills assessments</li>
                  <li>Ranks candidates based on overall performance</li>
                  <li>Provides detailed feedback on each candidate's strengths and areas for improvement</li>
                  <li>Highlights the top candidates for the position</li>
                </ul>
                <p>
                  Recruiters receive this data-rich report, enabling them to make informed decisions based on comprehensive assessments rather than gut feelings or unconscious biases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
