import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main
        key={location.pathname}
        className="animate-pageTransition"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout; 