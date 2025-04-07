
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatcherForm from "@/components/MatcherForm";
import MatchResult from "@/components/MatchResult";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [matchResult, setMatchResult] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Match the Right Job with the Right Talent
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Our AI-powered SmartMatch technology analyzes CVs and job descriptions to provide actionable insights and recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-cv-blue-600 hover:bg-gray-100">
                  <Link to="/matcher">Try It Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="#how-it-works">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center text-gradient">
                Try SmartMatch AI
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                Input your CV and a job description to see how well they match. Get detailed insights and recommendations.
              </p>
              
              {!matchResult ? (
                <MatcherForm onResult={setMatchResult} />
              ) : (
                <div className="space-y-6">
                  <MatchResult data={matchResult} />
                  <div className="text-center">
                    <Button 
                      variant="outline" 
                      onClick={() => setMatchResult(null)}
                    >
                      Start New Analysis
                    </Button>
                  </div>
                </div>
              )}
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
                <p className="text-gray-600 dark:text-gray-300">Accuracy in Matching</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-display text-cv-purple-600 mb-2">50%</div>
                <p className="text-gray-600 dark:text-gray-300">Reduced Hiring Time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-display text-green-600 mb-2">30%</div>
                <p className="text-gray-600 dark:text-gray-300">Better Retention Rate</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Join companies that are already using SmartMatch to find the perfect candidates faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 hover:from-cv-blue-700 hover:to-cv-purple-700">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
