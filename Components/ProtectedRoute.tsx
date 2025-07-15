'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: string[];
}) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !allowedRoles.includes(user.role)) {
      router.replace('/not-authorized'); // 👈 redirect if not allowed
    }
  }, [user, allowedRoles, router]);

  // While checking auth, we can show nothing or a loader
  if (!user) return null;

  return <>{children}</>;
}
