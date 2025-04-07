
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-cv-blue-600 font-medium" : "text-gray-600 hover:text-cv-blue-600 transition-colors";
  };

  return (
    <header className="w-full px-4 lg:px-8 py-4 flex items-center justify-between border-b bg-white dark:bg-gray-950">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cv-blue-500 to-cv-purple-600 flex items-center justify-center text-white font-bold text-xl">
          JA
        </div>
        <Link to="/" className="text-xl font-display font-semibold">
          Jobseekers<span className="text-cv-blue-600">.ai</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className={`text-sm ${isActive("/")}`}>
          Home
        </Link>
        <Link to="/matcher" className={`text-sm ${isActive("/matcher")}`}>
          CV Matcher
        </Link>
        <Link to="/courses" className={`text-sm ${isActive("/courses")}`}>
          Courses
        </Link>
        <Link to="#" className="text-sm text-gray-600 hover:text-cv-blue-600 transition-colors">
          Pricing
        </Link>
      </nav>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden md:flex">Sign In</Button>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
