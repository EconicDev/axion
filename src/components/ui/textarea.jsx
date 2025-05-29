// Textarea.jsx
import React from 'react';

export function Textarea({ className = "", ...props }) {
  return (
    <textarea 
      className={`w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    />
  );
}