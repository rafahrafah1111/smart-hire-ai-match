
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HowItWorks from "@/components/HowItWorks";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Match the Right Job with the Right Skills
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Our AI-powered platform analyzes your CV against job requirements to provide match scores, 
              insights, and personalized course recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-cv-blue-600 hover:bg-gray-100">
                <Link to="/matcher">Try CV Matcher</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 inline-block text-transparent bg-clip-text">
              How Jobseekers.ai Helps You Succeed
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform provides comprehensive tools to enhance your job search and career development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-cv-blue-100 dark:bg-cv-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cv-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Smart Matching</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI analyzes your CV against job descriptions to determine compatibility scores and insights.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-cv-purple-100 dark:bg-cv-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cv-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Skill Gap Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Identify missing skills and qualifications needed for your target roles and career advancement.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Personalized Courses</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get tailored course recommendations to build the skills employers are looking for.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-cv-blue-600 mb-2">95%</div>
              <p className="text-gray-600 dark:text-gray-300">Match Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-cv-purple-600 mb-2">10K+</div>
              <p className="text-gray-600 dark:text-gray-300">Courses Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-display text-green-600 mb-2">30%</div>
              <p className="text-gray-600 dark:text-gray-300">Improved Employability</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Enhance Your Career Prospects?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of jobseekers who have successfully improved their skills and landed better jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 hover:from-cv-blue-700 hover:to-cv-purple-700">
                <Link to="/matcher">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn About Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
