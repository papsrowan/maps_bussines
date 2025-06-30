import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  const baseClasses = 'rounded-lg font-medium transition-all duration-300 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-400',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    accent: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400',
    outline: 'bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-50',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;