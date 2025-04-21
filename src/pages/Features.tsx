
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const featureGroups = [
    {
      title: "Intelligent Resume Screening",
      features: [
        "AI-powered matching of resumes to job descriptions",
        "Bias reduction through objective skills assessment",
        "Automated shortlisting of qualified candidates",
        "Keyword and context analysis for deeper understanding",
        "Customizable matching criteria for each position"
      ]
    },
    {
      title: "Advanced AI Interviewer",
      features: [
        "Natural language processing for human-like conversations",
        "Text-to-speech technology for vocal interactions",
        "Speech-to-text transcription for accurate response analysis",
        "Dynamic question generation based on candidate responses",
        "Sentiment analysis for soft skills evaluation"
      ]
    },
    {
      title: "Comprehensive Skill Assessment",
      features: [
        "Role-specific technical challenges and evaluations",
        "Customizable assessment templates for different positions",
        "Automatic grading and scoring of assessments",
        "Benchmarking against industry standards",
        "Detailed skills gap analysis"
      ]
    },
    {
      title: "Data-Driven Decision Support",
      features: [
        "Sophisticated candidate ranking algorithms",
        "Comprehensive performance metrics across all stages",
        "Visual dashboards for quick decision-making",
        "Custom weighting for different assessment components",
        "Detailed candidate comparison reports"
      ]
    },
    {
      title: "Time and Resource Optimization",
      features: [
        "80% reduction in initial screening time",
        "Automated scheduling and candidate communication",
        "Simultaneous processing of multiple applications",
        "Decreased time-to-hire metrics",
        "Reduced cost-per-hire through automation"
      ]
    },
    {
      title: "Enhanced Candidate Experience",
      features: [
        "24/7 availability for interviews and assessments",
        "Consistent and fair evaluation process",
        "Immediate feedback after each assessment stage",
        "Flexible scheduling for candidate convenience",
        "Reduced waiting time between recruitment stages"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">LIMAT Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featureGroups.map((group, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="bg-primary text-primary-foreground p-4">
              <h2 className="text-xl font-bold">{group.title}</h2>
            </div>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {group.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Choose LIMAT?</h2>
            <p className="text-lg text-center max-w-3xl mx-auto">
              LIMAT combines cutting-edge AI technology with a deep understanding of the recruitment process
              to create a platform that delivers better results with less effort. By automating routine tasks
              and providing data-driven insights, LIMAT helps organizations make better hiring decisions while
              saving time and resources.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Features;
