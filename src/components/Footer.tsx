
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full px-4 lg:px-8 py-12 bg-gray-50 dark:bg-gray-950 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cv-blue-500 to-cv-purple-600 flex items-center justify-center text-white font-bold text-lg">
              SM
            </div>
            <h2 className="text-lg font-display font-semibold">SmartMatch</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-md">
            AI-powered CV and job description matching tool that provides meaningful insights and recommendations for job seekers and recruiters.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-gray-500 hover:text-cv-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-cv-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-cv-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-display font-medium mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">About</Link></li>
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">Careers</Link></li>
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">Blog</Link></li>
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">Press</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-medium mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">Documentation</Link></li>
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">API</Link></li>
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">Privacy</Link></li>
            <li><Link to="#" className="text-sm text-gray-500 hover:text-cv-blue-600">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 text-center">© 2025 SmartMatch AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
