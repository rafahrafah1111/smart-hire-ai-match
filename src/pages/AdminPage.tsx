
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const AdminPage = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect if not admin
  React.useEffect(() => {
    if (!isAdmin) {
      navigate('/admin-login');
      toast.error('You must be logged in as admin to view this page');
    }
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const handleLogout = () => {
    logout();
    toast.success('Successfully logged out');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold font-display">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard 
          title="Users"
          value="1,234"
          description="Total registered users"
        />
        <DashboardCard 
          title="Job Matches"
          value="5,678"
          description="Total job matches analyzed"
        />
        <DashboardCard 
          title="Course Enrollments"
          value="892"
          description="Total course enrollments"
        />
      </div>
      
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Activity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <ActivityRow user="john.doe@example.com" activity="CV Match Analysis" date="2025-04-07" />
            <ActivityRow user="jane.smith@example.com" activity="Course Enrollment" date="2025-04-06" />
            <ActivityRow user="robert.johnson@example.com" activity="CV Match Analysis" date="2025-04-05" />
            <ActivityRow user="sarah.williams@example.com" activity="Course Enrollment" date="2025-04-04" />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, description }: { title: string, value: string, description: string }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
    <p className="text-3xl font-semibold text-gray-900 dark:text-white mt-2">{value}</p>
    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{description}</p>
  </div>
);

const ActivityRow = ({ user, activity, date }: { user: string, activity: string, date: string }) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{activity}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{date}</td>
  </tr>
);

export default AdminPage;
