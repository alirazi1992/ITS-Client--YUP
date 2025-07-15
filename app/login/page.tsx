'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'admin' | 'user'>('user');
  const router = useRouter();

  const handleLogin = () => {
    if (!email) return alert('Please enter your email');

    localStorage.setItem(
      'fake-user',
      JSON.stringify({ email, role })
    );
    router.push('/'); // redirect to home or dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">🔐 Fake Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as 'admin' | 'user')}
          className="w-full border p-2 rounded"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
