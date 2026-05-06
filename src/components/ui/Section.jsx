import React from 'react';

export function Section({ 
  id, 
  children, 
  className = '', 
  bg = 'white' 
}) {
  const backgrounds = {
    white: "bg-white",
    neutral: "bg-neutral-bg",
    primary: "bg-primary text-white"
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${backgrounds[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
