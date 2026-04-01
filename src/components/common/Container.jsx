import React from "react";

const Container = ({ children, className = "" }) => {
  return (
    <div
      className={` mx-auto w-full 
        px-4
        sm:px-6
        md:px-6
        lg:px-12
        
        max-w-360  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
