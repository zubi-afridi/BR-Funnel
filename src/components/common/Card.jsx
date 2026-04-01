import React from 'react';

const Card = ({ children, title, className = '' }) => {
  return (
    <div className={`bg-white/5 p-8 rounded-xl border border-white/10 ${className}`}>
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
