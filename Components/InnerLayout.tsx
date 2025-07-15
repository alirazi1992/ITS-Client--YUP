'use client';

import { useAuth } from '@/hooks/useAuth';
import Sidebar from '@/Components/Siderbar';
import Header from '@/Components/Header';
import { ToastContainer } from 'react-toastify';

export default function InnerLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        {user?.role === 'admin' && (
          <div className="md:w-64 w-full md:block hidden">
            <Sidebar />
          </div>
        )}
        <div className="flex-1 p-4 md:mr-64">
          <Header />
          <main className="mt-4">{children}</main>
        </div>
      </div>
    </>
  );
}
