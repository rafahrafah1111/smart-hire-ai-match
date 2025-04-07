
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full px-4 lg:px-8 py-4 flex items-center justify-between border-b">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cv-blue-500 to-cv-purple-600 flex items-center justify-center text-white font-bold text-xl">
          JA
        </div>
        <h1 className="text-xl font-display font-semibold">Jobseekers<span className="text-cv-blue-600">.ai</span></h1>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-sm font-medium hover:text-cv-blue-600 transition-colors">
          Home
        </Link>
        <Link to="/matcher" className="text-sm font-medium hover:text-cv-blue-600 transition-colors">
          CV Matcher
        </Link>
        <Link to="#" className="text-sm font-medium hover:text-cv-blue-600 transition-colors">
          Courses
        </Link>
        <Link to="#" className="text-sm font-medium hover:text-cv-blue-600 transition-colors">
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
