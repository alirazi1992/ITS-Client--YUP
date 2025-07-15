// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/context/AuthProvider';
import { UserSettingsProvider } from '@/context/UserSettingsContext';
import InnerLayout from '@/Components/InnerLayout'; // ✅ wrap with layout

export const metadata: Metadata = {
  title: 'Client Portal',
  description: 'Support Ticket System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body>
        <UserSettingsProvider>
          <AuthProvider>
            <InnerLayout>{children}</InnerLayout>
          </AuthProvider>
        </UserSettingsProvider>
      </body>
    </html>
  );
}
