
import React, { createContext, useContext, useState, useEffect } from 'react';

type UserType = 'jobseeker' | 'company' | null;

type AuthContextType = {
  isAdmin: boolean;
  userType: UserType;
  login: () => void;
  logout: () => void;
  setUserType: (type: UserType) => void;
  hasSelectedUserType: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [hasSelectedUserType, setHasSelectedUserType] = useState(false);

  // Check localStorage on initial load
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    const storedUserType = localStorage.getItem('userType') as UserType;
    const userTypeSelected = localStorage.getItem('hasSelectedUserType') === 'true';
    
    setIsAdmin(storedIsAdmin);
    setUserType(storedUserType);
    setHasSelectedUserType(userTypeSelected);
  }, []);

  const login = () => {
    // In a real app, you would validate credentials here
    setIsAdmin(true);
    localStorage.setItem('isAdmin', 'true');
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  const handleSetUserType = (type: UserType) => {
    setUserType(type);
    setHasSelectedUserType(true);
    localStorage.setItem('userType', type || '');
    localStorage.setItem('hasSelectedUserType', 'true');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAdmin, 
        userType, 
        login, 
        logout, 
        setUserType: handleSetUserType,
        hasSelectedUserType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
