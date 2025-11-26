import React from 'react';
import { IconWhatsapp, IconFacebook } from './SVGPlaceholders';

export function BottomArea() {
  return (
    <div className="mt-section bg-secondary-2 p-padding pb-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <a href="#" className="flex items-center gap-3 text-primary-1 font-body font-medium hover:text-primary-2 transition-colors">
          <IconWhatsapp />
          <span dir="ltr">01153320488</span>
        </a>
        <div className="hidden md:block w-px h-6 bg-secondary-3"></div>
        <a href="#" className="flex items-center gap-3 text-primary-1 font-body font-medium hover:text-primary-2 transition-colors">
          <IconFacebook />
          <span dir="ltr">@Mr.AhmedSalah.Philosophy</span>
        </a>
      </div>
    </div>
  );
}