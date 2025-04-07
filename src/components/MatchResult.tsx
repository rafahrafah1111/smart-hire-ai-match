
import { useState } from "react";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type MatchResultProps = {
  data: {
    score: number;
    strengths: string[];
    gaps: string[];
    recommendations: string[];
  };
};

const MatchResult = ({ data }: MatchResultProps) => {
  const [showJson, setShowJson] = useState(false);

  // Determine score color based on the value
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  // Determine progress color based on the value
  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Format the data as JSON for display
  const formattedJson = JSON.stringify(data, null, 2);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl">CV & Job Match Analysis</CardTitle>
            <CardDescription>AI-powered compatibility assessment</CardDescription>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1 font-display tracking-tight" aria-label={`Match score: ${data.score}%`}>
              <span className={getScoreColor(data.score)}>{data.score}%</span>
            </div>
            <div className="text-sm text-gray-500">Match Score</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Poor Match</span>
            <span>Excellent Match</span>
          </div>
          <Progress 
            value={data.score} 
            className={`h-2 ${getProgressColor(data.score)}`}
            aria-label={`Compatibility score: ${data.score}%`}
          />
        </div>
        
        <Tabs defaultValue="insights">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="insights">Key Insights</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="json" onClick={() => setShowJson(true)}>JSON Output</TabsTrigger>
          </TabsList>
          
          <TabsContent value="insights">
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-medium text-lg mb-3 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></span>
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {data.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-display font-medium text-lg mb-3 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0"></span>
                  Improvement Areas
                </h3>
                <ul className="space-y-2">
                  {data.gaps.map((gap, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4-9h8a1 1 0 110 2H6a1 1 0 110-2z" clipRule="evenodd" />
                      </svg>
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <h3 className="font-display font-medium w-full mb-2">Relevant Skills:</h3>
                <Badge className="bg-cv-blue-100 hover:bg-cv-blue-200 text-cv-blue-800">Python</Badge>
                <Badge className="bg-cv-blue-100 hover:bg-cv-blue-200 text-cv-blue-800">Docker</Badge>
                <Badge className="bg-cv-blue-100 hover:bg-cv-blue-200 text-cv-blue-800">Kubernetes</Badge>
                <Badge className="bg-cv-blue-100 hover:bg-cv-blue-200 text-cv-blue-800">AWS</Badge>
                <Badge className="bg-cv-blue-100 hover:bg-cv-blue-200 text-cv-blue-800">CI/CD</Badge>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recommendations">
            <div>
              <h3 className="font-display font-medium text-lg mb-3">How to Improve Your Match</h3>
              <ul className="space-y-4">
                {data.recommendations.map((recommendation, index) => (
                  <li key={index} className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span>{recommendation}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 border border-gray-200 dark:border-gray-800 rounded-md">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Pro Tip
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Tailor your CV specifically for this job by addressing the identified gaps. 
                  Focus on quantifiable achievements that demonstrate your expertise in the required skills.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="json">
            {showJson && (
              <div>
                <h3 className="font-display font-medium mb-3">JSON Output for Integration</h3>
                <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <pre className="text-sm whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">{formattedJson}</pre>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  This JSON output can be used for integrating results with your HR systems or for further analysis.
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Report
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Share Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchResult;
