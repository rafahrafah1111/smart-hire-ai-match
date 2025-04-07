
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface MatcherFormProps {
  onResult: (data: any) => void;
}

const MatcherForm = ({ onResult }: MatcherFormProps) => {
  const [cvText, setCvText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Sample CV and job description for demo purposes
  const sampleCV = `John Smith
Software Engineer | 5+ years experience
Email: john.smith@example.com | LinkedIn: linkedin.com/in/johnsmith

SKILLS
Languages: Python, JavaScript, TypeScript, Java, SQL
Frameworks/Libraries: React, Node.js, Express, Django, Flask
DevOps: Docker, Kubernetes, AWS, CI/CD pipelines
Databases: PostgreSQL, MongoDB, Redis

PROFESSIONAL EXPERIENCE
Senior Software Engineer | TechCorp Inc. | 2020 - Present
- Led development of a microservices architecture resulting in 40% improved system reliability
- Implemented CI/CD pipeline reducing deployment time from days to hours
- Mentored junior developers and conducted code reviews

Software Developer | WebSolutions | 2018 - 2020
- Developed RESTful APIs serving 10,000+ users daily
- Created data visualization dashboards using React and D3.js
- Optimized database queries, improving performance by 25%

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2014 - 2018

CERTIFICATIONS
- AWS Certified Solutions Architect
- MongoDB Certified Developer`;

  const sampleJobDescription = `Software Engineer - Cloud Infrastructure

ABOUT THE ROLE
We're looking for a skilled Software Engineer with experience in cloud infrastructure to join our growing team. You will design, develop and maintain our cloud-based systems, with a focus on reliability, scalability and security.

REQUIREMENTS
- 3+ years of software engineering experience
- Strong proficiency in Python, Java, or Go
- Experience with containerization (Docker, Kubernetes)
- Knowledge of AWS or Google Cloud Platform services
- Understanding of CI/CD pipelines and DevOps principles
- Experience with monitoring and logging systems
- Excellent problem-solving and communication skills

NICE TO HAVE
- Terraform or CloudFormation experience
- Experience with microservices architectures
- Knowledge of database systems (SQL and NoSQL)
- Security best practices in cloud environments

BENEFITS
- Competitive salary and equity options
- Health, dental, and vision insurance
- Flexible work arrangements
- Professional development budget`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cvText.trim() === "" || jobDescription.trim() === "") {
      toast.error("Please fill in both CV and job description fields.");
      return;
    }

    setIsLoading(true);

    try {
      // In a real application, this would be an API call to your backend
      // Simulating API call with timeout
      setTimeout(() => {
        const mockData = {
          score: 85,
          strengths: [
            "Software Development Experience (5+ years)",
            "Python Programming Skills",
            "DevOps Experience (Docker, Kubernetes)",
            "AWS Knowledge",
            "CI/CD Pipeline Implementation"
          ],
          gaps: [
            "No explicit Go language experience",
            "Limited mention of monitoring systems",
            "Cloud security specialization"
          ],
          recommendations: [
            "Highlight any Go programming language experience",
            "Add details about monitoring/logging tools used",
            "Consider obtaining a cloud security certification"
          ],
          courses: [
            {
              title: "Go Programming Language Fundamentals",
              provider: "Coursera",
              description: "A comprehensive introduction to Go programming language with practical exercises and real-world applications.",
              level: "Beginner",
              duration: "6 weeks",
              url: "#"
            },
            {
              title: "Cloud Monitoring and Observability",
              provider: "LinkedIn Learning",
              description: "Learn how to implement comprehensive monitoring for cloud applications using tools like Prometheus, Grafana, and ELK stack.",
              level: "Intermediate",
              duration: "4 weeks",
              url: "#"
            },
            {
              title: "AWS Security Specialization",
              provider: "AWS Training",
              description: "Comprehensive training on securing cloud infrastructure and applications in AWS environments.",
              level: "Advanced",
              duration: "10 weeks",
              url: "#"
            }
          ]
        };

        onResult(mockData);
        setIsLoading(false);
        toast.success("Analysis completed successfully!");
      }, 2000);
    } catch (error) {
      console.error("Error analyzing CV/job match:", error);
      toast.error("There was an error analyzing your submission. Please try again.");
      setIsLoading(false);
    }
  };

  const loadSample = () => {
    setCvText(sampleCV);
    setJobDescription(sampleJobDescription);
    toast.info("Sample CV and job description loaded.");
  };

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs defaultValue="input" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="input">Manual Input</TabsTrigger>
              <TabsTrigger value="upload">Upload Files</TabsTrigger>
            </TabsList>
            
            <TabsContent value="input" className="space-y-6">
              <div>
                <label htmlFor="cv" className="block text-sm font-medium mb-2">
                  CV/Resume Content
                </label>
                <Textarea 
                  id="cv"
                  placeholder="Paste your CV/resume text here..."
                  rows={10}
                  value={cvText}
                  onChange={(e) => setCvText(e.target.value)}
                  className="resize-none"
                />
              </div>
              
              <div>
                <label htmlFor="job" className="block text-sm font-medium mb-2">
                  Job Description
                </label>
                <Textarea 
                  id="job"
                  placeholder="Paste the job description here..."
                  rows={10}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="resize-none"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="upload" className="py-4">
              <div className="flex flex-col items-center justify-center space-y-4 p-8 border-2 border-dashed rounded-md border-gray-200">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  className="w-12 h-12 text-gray-400"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                  />
                </svg>
                <div className="text-center">
                  <h3 className="text-lg font-medium">Upload Files</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Drag and drop your CV and job description files (PDF or DOCX)
                  </p>
                </div>
                <Button variant="outline">Choose Files</Button>
                <p className="text-xs text-gray-500">Coming soon in full release</p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Button 
              type="button" 
              variant="outline"
              onClick={loadSample}
            >
              Load Sample Data
            </Button>
            
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 hover:from-cv-blue-700 hover:to-cv-purple-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                "Analyze Match"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MatcherForm;
