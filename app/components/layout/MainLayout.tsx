import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="w-full px-4 pt-8 sm:px-6 md:px-8">{children}</div>;
};

export default MainLayout;
