import React from 'react';

const Badge = ({ text, className = '' }) => {
  return (
    <span className={`inline-block px-3 py-1 rounded-full bg-[#793fee]/10 text-[#793fee] text-sm font-medium border border-[#793fee]/20 ${className}`}>
      {text}
    </span>
  );
};

export default Badge;
