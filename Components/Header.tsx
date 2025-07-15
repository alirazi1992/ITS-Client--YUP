'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const { user } = useAuth();
  const [avatar, setAvatar] = useState('/avatar.png');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedAvatar = localStorage.getItem('avatar');
    if (storedAvatar) setAvatar(storedAvatar);

    const darkMode = localStorage.getItem('theme') === 'dark';
    setDark(darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleDark = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 shadow-md">
      <h1 className="text-xl font-bold text-violet-600">🎟 سیستم پشتیبانی</h1>
      <div className="flex items-center gap-4">
        <button onClick={toggleDark} className="text-gray-600 dark:text-white">
          {dark ? '☀️' : '🌙'}
        </button>
        <span className="text-sm text-gray-800 dark:text-white">{user?.email}</span>
        <Image
          src={avatar}
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
        <Link href="/logout" className="text-red-500 text-sm underline">خروج</Link>
      </div>
    </header>
  );
};

export default Header;
