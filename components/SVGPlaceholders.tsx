import React from 'react';

// Using specified dimensions and styling
export const PlaceholderHero = () => (
  <svg width="100%" height="100%" viewBox="0 0 1080 1350" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="bg-primary-1">
    <rect width="1080" height="1350" fill="#1A237E"/>
    <circle cx="540" cy="675" r="300" fill="#3949AB" fillOpacity="0.5"/>
    <path d="M0 1000 L1080 1200 V1350 H0 Z" fill="#FFC400" fillOpacity="0.1"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#C5CAE9" fontSize="60" fontFamily="sans-serif">
      1080 x 1350
    </text>
  </svg>
);

export const PlaceholderCard = () => (
  <svg width="100%" height="auto" viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-t-[14px]">
    <rect width="640" height="360" fill="#E8EAF6"/>
    <rect x="280" y="140" width="80" height="80" rx="40" fill="#C5CAE9"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#3949AB" fontSize="30" fontFamily="sans-serif">
      640 x 360
    </text>
  </svg>
);

export const PlaceholderAvatar = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full">
    <circle cx="60" cy="60" r="60" fill="#E8EAF6"/>
    <circle cx="60" cy="50" r="20" fill="#C5CAE9"/>
    <path d="M30 100 Q60 120 90 100 V110 H30 V100 Z" fill="#C5CAE9"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#1A237E" fontSize="14" fontFamily="sans-serif">
      Avatar
    </text>
  </svg>
);

export const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const IconUser = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export const IconWhatsapp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export const IconFacebook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);