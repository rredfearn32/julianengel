'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Icon } from '../Icon';

export const HeaderNav = () => {
  const [reactiveStyles, setReactiveStyles] = useState<string>('');

  const setBgColorState = () => {
    if (window?.scrollY > 0) {
      return setReactiveStyles('bg-white text-ocean');
    }
    setReactiveStyles('bg-transparent text-white');
  };

  useEffect(() => {
    setBgColorState();
    document.addEventListener('scroll', setBgColorState);

    return () => {
      document.removeEventListener('scroll', setBgColorState);
    };
  }, []);

  return (
    <div
      className={`fixed flex w-full justify-center py-5 transition duration-300 ${reactiveStyles}`}
    >
      <nav className="flex justify-end space-x-4 sm:container">
        <Link href="/">Home</Link>
        <Link href="/">Conservation</Link>
        <Link href="/blog">News & Media</Link>
        <Link href="/">Work</Link>
        <Link href="/">Map</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <a href="https://www.linkedin.com/in/robbie-redfearn/">
          <Icon name="LinkedIn" />
        </a>
      </nav>
    </div>
  );
};
