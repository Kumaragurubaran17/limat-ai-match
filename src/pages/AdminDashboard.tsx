
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="recruiters">Recruiters</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Jobs</CardTitle>
                <CardDescription>Total active job postings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">24</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Candidates</CardTitle>
                <CardDescription>Total registered candidates</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">1,342</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Interviews</CardTitle>
                <CardDescription>Interviews conducted this month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">89</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Successful Placements</CardTitle>
                <CardDescription>Candidates successfully placed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">42</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>AI recruitment system metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">98.5%</p>
                <p className="text-sm text-muted-foreground">Accuracy rate</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Time Saved</CardTitle>
                <CardDescription>Average recruiter time saved per hire</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">14.2 hrs</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="candidates">
          <Card>
            <CardHeader>
              <CardTitle>Candidates Management</CardTitle>
              <CardDescription>View and manage all candidates in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Candidate management interface will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recruiters">
          <Card>
            <CardHeader>
              <CardTitle>Recruiters Management</CardTitle>
              <CardDescription>View and manage all recruiters with access</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Recruiter management interface will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure the LIMAT AI Recruitment platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">System settings interface will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
