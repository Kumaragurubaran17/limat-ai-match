
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const RecruiterPortal = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Recruiter Portal</h1>
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Active Jobs</CardTitle>
                <CardDescription>Your current job postings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">8</div>
                <Button variant="link" className="p-0 h-auto">Manage Jobs</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Pending Reviews</CardTitle>
                <CardDescription>Candidates awaiting your review</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">14</div>
                <Button variant="link" className="p-0 h-auto">Review Candidates</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Time Saved</CardTitle>
                <CardDescription>Hours saved using LIMAT this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">42.5</div>
                <Button variant="link" className="p-0 h-auto">View Report</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent AI Matches</CardTitle>
                <CardDescription>Top candidates matched by our AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: "Sarah Chen", job: "Senior Backend Developer", match: 94 },
                    { name: "Marcus Johnson", job: "UX Designer", match: 91 },
                    { name: "Priya Patel", job: "Frontend Engineer", match: 89 }
                  ].map((candidate, i) => (
                    <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between mb-1">
                        <div>
                          <h3 className="font-bold">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.job}</p>
                        </div>
                        <div className="text-lg font-bold text-primary">{candidate.match}%</div>
                      </div>
                      <Progress value={candidate.match} className="h-2 mb-2" />
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View Profile</Button>
                        <Button size="sm">Schedule Interview</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming AI Interviews</CardTitle>
                <CardDescription>Scheduled automated interviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: "David Wilson", job: "DevOps Engineer", date: "Today, 2:00 PM" },
                    { name: "Leila Rodriguez", job: "Product Manager", date: "Tomorrow, 10:30 AM" },
                    { name: "Thomas Anderson", job: "Data Scientist", date: "Apr 24, 1:00 PM" }
                  ].map((interview, i) => (
                    <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-bold">{interview.name}</h3>
                          <p className="text-sm text-muted-foreground">{interview.job}</p>
                        </div>
                        <div className="text-sm font-medium">{interview.date}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View Profile</Button>
                        <Button variant="outline" size="sm">View Questions</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Manage Job Postings</CardTitle>
                  <CardDescription>Create and manage your job listings</CardDescription>
                </div>
                <Button>+ Create New Job</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { title: "Senior Backend Developer", status: "Active", applicants: 28, matching: 12 },
                  { title: "UX Designer", status: "Active", applicants: 45, matching: 18 },
                  { title: "DevOps Engineer", status: "Active", applicants: 16, matching: 7 },
                  { title: "Marketing Specialist", status: "Draft", applicants: 0, matching: 0 },
                  { title: "Product Manager", status: "Active", applicants: 32, matching: 14 },
                  { title: "Data Scientist", status: "Active", applicants: 22, matching: 9 },
                  { title: "Frontend Engineer", status: "Active", applicants: 37, matching: 15 },
                  { title: "Sales Representative", status: "Closed", applicants: 56, matching: 22 }
                ].map((job, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <div className="flex space-x-4 mt-1">
                          <p className="text-sm text-muted-foreground">Status: <span className={`font-medium ${job.status === 'Active' ? 'text-green-600' : job.status === 'Draft' ? 'text-amber-600' : 'text-red-600'}`}>{job.status}</span></p>
                          <p className="text-sm text-muted-foreground">Applicants: <span className="font-medium">{job.applicants}</span></p>
                          <p className="text-sm text-muted-foreground">AI Matches: <span className="font-medium">{job.matching}</span></p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">View Candidates</Button>
                        {job.status === 'Active' && <Button size="sm">View Matches</Button>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="candidates">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Candidate Management</CardTitle>
                  <CardDescription>Review and manage candidates in your pipeline</CardDescription>
                </div>
                <Button>Filter Candidates</Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">Showing candidates across all job positions</p>
              
              <div className="space-y-6">
                {[
                  { name: "Sarah Chen", position: "Senior Backend Developer", stage: "AI Interview Completed", match: 94 },
                  { name: "Marcus Johnson", position: "UX Designer", stage: "Assessment Completed", match: 91 },
                  { name: "Priya Patel", position: "Frontend Engineer", stage: "Resume Screening", match: 89 },
                  { name: "David Wilson", position: "DevOps Engineer", stage: "AI Interview Scheduled", match: 85 },
                  { name: "Leila Rodriguez", position: "Product Manager", stage: "AI Interview Scheduled", match: 83 }
                ].map((candidate, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{candidate.name}</h3>
                        <p className="text-muted-foreground">{candidate.position}</p>
                        <div className="flex space-x-4 mt-1">
                          <p className="text-sm">Stage: <span className="font-medium">{candidate.stage}</span></p>
                          <p className="text-sm">Match: <span className="font-medium text-primary">{candidate.match}%</span></p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">View Profile</Button>
                        <Button variant="outline" size="sm">View Resume</Button>
                        <Button size="sm">Take Action</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interviews">
          <Card>
            <CardHeader>
              <CardTitle>AI Interview Management</CardTitle>
              <CardDescription>Monitor and review AI-conducted interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-6">
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="settings">Interview Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming">
                  <div className="space-y-6">
                    {[
                      { name: "David Wilson", position: "DevOps Engineer", date: "Today, 2:00 PM" },
                      { name: "Leila Rodriguez", position: "Product Manager", date: "Tomorrow, 10:30 AM" },
                      { name: "Thomas Anderson", position: "Data Scientist", date: "Apr 24, 1:00 PM" }
                    ].map((interview, i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg">{interview.name}</h3>
                            <p className="text-muted-foreground">{interview.position}</p>
                            <p className="text-sm mt-1">Scheduled for: <span className="font-medium">{interview.date}</span></p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View Profile</Button>
                            <Button variant="outline" size="sm">Customize Questions</Button>
                            <Button size="sm">Reschedule</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="space-y-6">
                    {[
                      { name: "Alex Thompson", position: "Full Stack Developer", date: "Apr 18, 2025", score: 87 },
                      { name: "Maya Patel", position: "UX Researcher", date: "Apr 15, 2025", score: 92 },
                      { name: "Carlos Mendez", position: "DevOps Engineer", date: "Apr 12, 2025", score: 78 }
                    ].map((interview, i) => (
                      <div key={i} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-lg">{interview.name}</h3>
                            <p className="text-muted-foreground">{interview.position}</p>
                            <div className="flex space-x-4 mt-1">
                              <p className="text-sm">Date: <span className="font-medium">{interview.date}</span></p>
                              <p className="text-sm">Score: <span className="font-medium">{interview.score}/100</span></p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View Transcript</Button>
                            <Button variant="outline" size="sm">View Analysis</Button>
                            <Button size="sm">Review Results</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="settings">
                  <div className="space-y-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">Interview Templates</h3>
                      <p className="mb-4">Customize question sets for different job roles</p>
                      <div className="flex space-x-2">
                        <Button variant="outline">View Templates</Button>
                        <Button>Create New Template</Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">AI Interviewer Settings</h3>
                      <p className="mb-4">Customize AI voice, response analysis, and scoring settings</p>
                      <Button>Configure Settings</Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">Scheduling Preferences</h3>
                      <p className="mb-4">Set availability and notification preferences for interviews</p>
                      <Button>Update Preferences</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Recruitment Analytics</CardTitle>
              <CardDescription>Data-driven insights into your recruitment process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Time-to-Hire</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18 days</div>
                    <p className="text-xs text-muted-foreground">↓ 42% from traditional process</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Interview Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94%</div>
                    <p className="text-xs text-muted-foreground">↑ 23% from last quarter</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Quality of Hire</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <p className="text-xs text-muted-foreground">↑ 15% from traditional process</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Recruitment Pipeline Analysis</h3>
                  <p className="mb-4">View detailed metrics for each stage of your recruitment process</p>
                  <Button>View Detailed Report</Button>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">AI Matching Accuracy</h3>
                  <p className="mb-4">Analyze the effectiveness of AI-powered candidate matching</p>
                  <Button>View Matching Report</Button>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">Cost Savings Analysis</h3>
                  <p className="mb-4">Quantify time and resource savings from using LIMAT</p>
                  <Button>View Cost Analysis</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecruiterPortal;
