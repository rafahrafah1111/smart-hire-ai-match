
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatcherForm from "@/components/MatcherForm";
import MatchResult from "@/components/MatchResult";

const Matcher = () => {
  const [matchResult, setMatchResult] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold font-display mb-4 text-gradient">
                CV & Job Description Matcher
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Find out how well your CV matches the job requirements and get personalized recommendations.
              </p>
            </div>
            
            {!matchResult ? (
              <div className="mb-8">
                <MatcherForm onResult={setMatchResult} />
              </div>
            ) : (
              <div className="space-y-8">
                <MatchResult data={matchResult} />
                <div className="text-center">
                  <button 
                    onClick={() => setMatchResult(null)}
                    className="text-cv-blue-600 hover:text-cv-blue-800 underline font-medium"
                  >
                    Start New Analysis
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-16 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-display font-medium mb-4 text-center">
                How to Get the Best Results
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-2">For Your CV:</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cv-blue-600 font-bold">•</span>
                      <span>Use clean formatting without special characters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cv-blue-600 font-bold">•</span>
                      <span>Include relevant skills and experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cv-blue-600 font-bold">•</span>
                      <span>Quantify achievements where possible</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">For Job Description:</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cv-purple-600 font-bold">•</span>
                      <span>Include the complete job listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cv-purple-600 font-bold">•</span>
                      <span>Make sure requirements section is included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cv-purple-600 font-bold">•</span>
                      <span>Add company information if available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Matcher;
