import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  padding = "px-8 py-4",
  ...props
}) => {
  const baseStyles = `rounded-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-base md:text-lg ${padding} cursor-pointer min-h-[56px] active:scale-95`;

  const variants = {
    primary:
      "bg-gradient-to-r from-[#6e48e8] to-[#1fd9f9] text-white hover:opacity-90 border-none shadow-lg hover:shadow-[#6e48e8]/20",
    secondary:
      " text-white border border-white hover:border-gray-500 hover:bg-[#1a2133]",
    outline:
      "border-2 border-[#1fd9f9] text-[#1fd9f9] hover:bg-[#1fd9f9] hover:text-black",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
