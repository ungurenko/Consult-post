import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-olive text-white hover:bg-olive-dark shadow-lg shadow-olive/20 hover:shadow-olive/30",
    secondary: "bg-terracotta text-white hover:bg-terracotta-hover shadow-lg shadow-terracotta/20",
    outline: "border-2 border-olive text-olive bg-transparent hover:bg-olive hover:text-white"
  };

  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base md:text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};