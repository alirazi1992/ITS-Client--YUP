'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import AdminTicketView from '@/app/tickets/AdminTicketView';

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user?.role !== 'admin') {
      router.replace('/not-authorized');
    }
  }, [user, router]);

  if (user?.role !== 'admin') return null;

  return <AdminTicketView />;
}
