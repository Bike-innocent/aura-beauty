import React from 'react';

export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden 
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''} 
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
