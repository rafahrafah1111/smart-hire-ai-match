
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Course = {
  id: string;
  title: string;
  provider: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  category: string;
  rating: number;
  url: string;
  featured?: boolean;
};

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses: Course[] = [
    {
      id: "1",
      title: "Python Programming Fundamentals",
      provider: "Coursera",
      description: "A comprehensive introduction to Python programming with practical exercises and real-world applications.",
      level: "Beginner",
      duration: "6 weeks",
      category: "Programming",
      rating: 4.8,
      url: "#",
      featured: true,
    },
    {
      id: "2",
      title: "Data Science with R",
      provider: "edX",
      description: "Learn data manipulation, visualization, and analysis using R programming language.",
      level: "Intermediate",
      duration: "8 weeks",
      category: "Data Science",
      rating: 4.7,
      url: "#",
    },
    {
      id: "3",
      title: "AWS Cloud Architect Certification",
      provider: "AWS Training",
      description: "Prepare for the AWS Solutions Architect certification with hands-on labs and expert instruction.",
      level: "Advanced",
      duration: "10 weeks",
      category: "Cloud Computing",
      rating: 4.9,
      url: "#",
      featured: true,
    },
    {
      id: "4",
      title: "UI/UX Design Principles",
      provider: "Udemy",
      description: "Master the fundamentals of user interface and user experience design for web and mobile applications.",
      level: "Beginner",
      duration: "4 weeks",
      category: "Design",
      rating: 4.6,
      url: "#",
    },
    {
      id: "5",
      title: "Machine Learning Engineering",
      provider: "Stanford Online",
      description: "Deep dive into machine learning algorithms, model deployment, and production systems.",
      level: "Advanced",
      duration: "12 weeks",
      category: "AI & ML",
      rating: 4.9,
      url: "#",
      featured: true,
    },
    {
      id: "6",
      title: "Digital Marketing Foundations",
      provider: "LinkedIn Learning",
      description: "Learn core digital marketing strategies including SEO, social media, and content marketing.",
      level: "Beginner",
      duration: "4 weeks",
      category: "Marketing",
      rating: 4.5,
      url: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "Programming", name: "Programming" },
    { id: "Data Science", name: "Data Science" },
    { id: "Cloud Computing", name: "Cloud Computing" },
    { id: "AI & ML", name: "AI & ML" },
    { id: "Design", name: "Design" },
    { id: "Marketing", name: "Marketing" },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCourses = courses.filter(course => course.featured);

  // Get course level badge color
  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold font-display mb-4 bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 inline-block text-transparent bg-clip-text">
              Skill-Building Courses
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover courses tailored to enhance your skillset and address gaps identified in your CV. 
              Our AI recommends personalized learning paths to boost your employability.
            </p>
          </div>

          <Tabs defaultValue="browse" className="w-full mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="browse">Browse Courses</TabsTrigger>
              <TabsTrigger value="recommended">Recommended For You</TabsTrigger>
            </TabsList>
            
            <TabsContent value="browse" className="mt-6">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative w-full md:w-2/3">
                  <Input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10"
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} levelBadgeColor={getLevelBadgeColor(course.level)} />
                  ))
                ) : (
                  <div className="col-span-3 py-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400">No courses match your search criteria.</p>
                    <Button 
                      variant="link" 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended" className="mt-6">
              {featuredCourses.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredCourses.map(course => (
                    <CourseCard key={course.id} course={course} levelBadgeColor={getLevelBadgeColor(course.level)} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Get Personalized Recommendations</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-4">
                    Upload your CV and a job description in the CV Matcher to receive personalized course recommendations.
                  </p>
                  <Button asChild>
                    <a href="/matcher">Go to CV Matcher</a>
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

interface CourseCardProps {
  course: Course;
  levelBadgeColor: string;
}

const CourseCard = ({ course, levelBadgeColor }: CourseCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{course.title}</CardTitle>
            <CardDescription className="mt-1">{course.provider}</CardDescription>
          </div>
          <Badge className={`${levelBadgeColor} ml-2`}>
            {course.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {course.description}
        </p>
        <div className="mt-auto">
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.duration}
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {course.rating.toFixed(1)}
            </div>
          </div>
          <Button asChild className="w-full bg-gradient-to-r from-cv-blue-600 to-cv-purple-600 hover:from-cv-blue-700 hover:to-cv-purple-700">
            <a href={course.url} target="_blank" rel="noopener noreferrer">View Course</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoursesPage;
