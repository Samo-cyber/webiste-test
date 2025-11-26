import React from 'react';
import Link from 'next/link';
import { IconMenu, IconUser } from './SVGPlaceholders';

export function Header() {
  return (
    <header className="h-[68px] px-5 flex items-center justify-between bg-primary-1 sticky top-0 z-50 shadow-md">
      {/* Left: Menu */}
      <button aria-label="Menu" className="p-2">
        <IconMenu />
      </button>

      {/* Center: Arabic Title */}
      <Link href="/" className="font-title font-bold text-secondary-1 text-[18px] md:text-[22px]">
        أحمد صلاح
      </Link>

      {/* Right: Account */}
      <div className="flex gap-4">
        <Link href="/my-bookings" aria-label="My Bookings" className="p-2">
          <IconUser />
        </Link>
      </div>
    </header>
  );
}