'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  // Do not show header on the login page
  if (pathname === '/demo-login') {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pfp-cream-200 bg-pfp-cream-50/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/certified.png" 
            alt="PFP Certified Logo" 
            width={120} 
            height={44} 
            className="h-11 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-pfp-dark-800">
          <Link href="#" className="hover:text-primary transition-colors">About me</Link>
          <Link href="#" className="hover:text-primary transition-colors">Why Us</Link>
          <Link href="#" className="hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#" className="hover:text-primary transition-colors">Learn</Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center">
          <Button size="xl" className="rounded-full">
            Join waitlist
          </Button>
        </div>
      </Container>
    </nav>
  );
}
