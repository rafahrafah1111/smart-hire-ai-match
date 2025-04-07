
import { useState } from "react";
import MatcherForm from "@/components/matcher/MatcherForm";
import MatchResult from "@/components/matcher/MatchResult";

const MatcherPage = () => {
  const [matchResult, setMatchResult] = useState<any>(null);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold font-display mb-4 bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 inline-block text-transparent bg-clip-text">
              CV & Job Match Analysis
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI analyzes your CV against job requirements to provide match scores, insights, and personalized course recommendations.
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
              How Jobseekers.ai Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">Our AI Analyzes:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cv-blue-600 font-bold">•</span>
                    <span>Your skills and experience against job requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cv-blue-600 font-bold">•</span>
                    <span>Semantic meaning, not just keywords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cv-blue-600 font-bold">•</span>
                    <span>Industry-specific qualifications and certifications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">You Receive:</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cv-purple-600 font-bold">•</span>
                    <span>Detailed match analysis with strengths and gaps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cv-purple-600 font-bold">•</span>
                    <span>Personalized recommendations to improve your CV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cv-purple-600 font-bold">•</span>
                    <span>Tailored course recommendations to build skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatcherPage;
