import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  fullWidth?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 border border-transparent',
    outline: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 focus:ring-gray-500'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;
  if (href) {
    return <Link to={href} className={combinedClassName}>
        {children}
      </Link>;
  }
  return <button className={combinedClassName} {...props}>
      {children}
    </button>;
}