import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className, 
  ...props 
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center transition-all duration-200 active:translate-y-0 min-h-[44px]";
  
  const variants = {
    primary: "bg-accent text-primary-1 font-bold shadow-btn hover:-translate-y-[2px] hover:shadow-lg rounded-btn px-5 py-[14px]",
    secondary: "bg-primary-2 text-secondary-1 rounded-[10px] px-[18px] py-[12px] font-medium",
    ghost: "bg-transparent border-[1.5px] border-secondary-3 text-primary-1 rounded-[10px] px-4 py-[10px] font-medium"
  };

  return (
    <button 
      className={twMerge(
        baseStyles, 
        variants[variant], 
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}