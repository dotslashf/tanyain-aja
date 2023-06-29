'use client';

import { signOut } from 'next-auth/react';
import Sidebar from '../components/layout/Sidebar';
import MainLayout from '../components/layout/MainLayout';

const Timeline = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainLayout>this is main page</MainLayout>
    </div>
  );
};

export default Timeline;
