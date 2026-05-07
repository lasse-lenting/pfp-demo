'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LogoutButton from '@/components/LogoutButton';

export default function DemoHeader() {
  const pathname = usePathname();

  // Do not show header on the login page
  if (pathname === '/demo-login') {
    return null;
  }

  return (
    <header className="bg-pfp-cream-100 border-b border-pfp-cream-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 relative">
          <Image 
            src="/puntwerk.svg" 
            alt="Puntwerk Logo" 
            fill
            className="object-contain"
          />
        </div>
        <div className="font-bold text-xl text-gray-900">Puntwerk Demo</div>
      </div>
      <LogoutButton />
    </header>
  );
}
