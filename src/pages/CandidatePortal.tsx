
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CandidatePortal = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Candidate Portal</h1>
      
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
                <CardDescription>Your current applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Total Applications</span>
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In Review</span>
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interview Scheduled</span>
                    <span className="font-bold">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Assessment Pending</span>
                    <span className="font-bold">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Interview</CardTitle>
                <CardDescription>Your next AI interview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Senior Developer - Tech Innovations</h3>
                    <p className="text-sm text-muted-foreground">Interview in 2 days</p>
                  </div>
                  <Button className="w-full">Prepare for Interview</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skill Assessment</CardTitle>
                <CardDescription>Your pending assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Frontend Development - UI/UX Challenge</h3>
                    <p className="text-sm text-muted-foreground">Due in 5 days</p>
                  </div>
                  <Button className="w-full">Start Assessment</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recommended Jobs</CardTitle>
              <CardDescription>Based on your profile and skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3].map((job) => (
                  <div key={job} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-bold text-lg">Full Stack Developer</h3>
                    <p className="text-sm text-muted-foreground mb-2">TechCorp Inc. • Remote • Full-time</p>
                    <p className="mb-2">Join our innovative team to build next-generation web applications using React, Node.js, and cloud technologies.</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Your Applications</CardTitle>
              <CardDescription>Track the status of all your job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">Senior Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground">InnoTech Solutions • Applied on April 10, 2025</p>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">In Review</div>
                  </div>
                  <p className="mb-4">Your application is currently being reviewed by the hiring team.</p>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">Backend Engineer</h3>
                      <p className="text-sm text-muted-foreground">CloudSphere Inc. • Applied on April 5, 2025</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">Interview Scheduled</div>
                  </div>
                  <p className="mb-4">Your AI interview is scheduled for April 23, 2025 at 10:00 AM.</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button size="sm">Prepare for Interview</Button>
                  </div>
                </div>
                
                <div className="border p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">Full Stack Developer</h3>
                      <p className="text-sm text-muted-foreground">WebFusion Tech • Applied on March 28, 2025</p>
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">Assessment Pending</div>
                  </div>
                  <p className="mb-4">You have a pending technical assessment. Please complete it by April 25, 2025.</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button size="sm">Take Assessment</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interviews">
          <Card>
            <CardHeader>
              <CardTitle>Your Interviews</CardTitle>
              <CardDescription>Manage your upcoming and past interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-4">Upcoming Interviews</h3>
                  <div className="border p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold">Backend Engineer - AI Interview</h4>
                        <p className="text-sm text-muted-foreground">CloudSphere Inc. • April 23, 2025 at 10:00 AM</p>
                      </div>
                      <Button size="sm">Prepare</Button>
                    </div>
                    <p>This interview will be conducted by our AI interviewer. Be prepared to discuss your experience with database design, API development, and cloud infrastructure.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-4">Past Interviews</h3>
                  <div className="border p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold">Software Engineer - AI Interview</h4>
                        <p className="text-sm text-muted-foreground">CodeCraft Solutions • March 15, 2025</p>
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Passed</div>
                    </div>
                    <p className="mb-4">You successfully passed the AI interview stage.</p>
                    <Button variant="outline" size="sm">View Feedback</Button>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold">Mobile Developer - AI Interview</h4>
                        <p className="text-sm text-muted-foreground">AppFoundry • February 28, 2025</p>
                      </div>
                      <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">Not Selected</div>
                    </div>
                    <p className="mb-4">You were not selected to proceed to the next stage.</p>
                    <Button variant="outline" size="sm">View Feedback</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>Manage your personal information and resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-medium text-lg mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">Alex Johnson</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Address</p>
                      <p className="font-medium">alex.johnson@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone Number</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">New York, NY</p>
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline" size="sm">Edit Personal Information</Button>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-medium text-lg mb-4">Resume</h3>
                  <div className="border p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Alex_Johnson_Resume_2025.pdf</p>
                      <p className="text-sm text-muted-foreground">Uploaded on April 1, 2025</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="outline" size="sm">Replace</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-4">Skills and Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Top Skills</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-secondary px-2 py-1 rounded text-sm">JavaScript</span>
                        <span className="bg-secondary px-2 py-1 rounded text-sm">React</span>
                        <span className="bg-secondary px-2 py-1 rounded text-sm">Node.js</span>
                        <span className="bg-secondary px-2 py-1 rounded text-sm">TypeScript</span>
                        <span className="bg-secondary px-2 py-1 rounded text-sm">MongoDB</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Experience Level</p>
                      <p className="font-medium">5 years</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Job Preferences</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium">Remote / Hybrid</p>
                        </div>
                        <div>
                          <p className="font-medium">Full-time / Contract</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline" size="sm">Edit Skills and Preferences</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CandidatePortal;
