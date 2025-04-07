
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';

const UserTypeSelection = () => {
  const { setUserType } = useAuth();

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold font-display mb-4 bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 inline-block text-transparent bg-clip-text">
          Welcome to Jobseekers.ai
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Please select how you'd like to continue to personalize your experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">I'm a Jobseeker</CardTitle>
            <CardDescription>Looking for job opportunities and skill enhancement</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-24 h-24 bg-cv-blue-100 dark:bg-cv-blue-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cv-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6 text-left">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Upload your CV for smart job matching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Get personalized course recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Track your skill development progress</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 hover:from-cv-blue-700 hover:to-cv-purple-700"
              onClick={() => setUserType('jobseeker')}
            >
              Continue as Jobseeker
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">I'm a Company</CardTitle>
            <CardDescription>Looking to find the perfect candidates</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-24 h-24 bg-cv-purple-100 dark:bg-cv-purple-900 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cv-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6 text-left">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Post job listings with smart matching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Find candidates that match your requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Streamline your recruitment process</span>
              </li>
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-cv-purple-600 to-cv-blue-600 hover:from-cv-purple-700 hover:to-cv-blue-700"
              onClick={() => setUserType('company')}
            >
              Continue as Company
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserTypeSelection;
