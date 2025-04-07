
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // This is a simple example - in a real application, you would validate against your backend
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // In a real app, NEVER hardcode passwords
      login();
      toast.success('Successfully logged in as admin');
      navigate('/admin');
    } else {
      toast.error('Invalid admin password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-900 rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-2xl font-bold font-display text-gray-900 dark:text-white">Admin Login</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Enter your password to access the admin area</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Admin password"
              className="appearance-none relative block w-full px-3 py-2"
            />
          </div>
          
          <div>
            <Button type="submit" className="w-full" size="lg">
              Sign in
            </Button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For demo purposes, use password: admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
