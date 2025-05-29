// Button.jsx
import React from 'react';

export function Button({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default", 
  ...props 
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "border border-blue-600 text-blue-600 hover:bg-blue-50";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "lg":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-sm";
    }
  };

  return (
    <button 
      className={`font-medium rounded-md transition-colors ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}