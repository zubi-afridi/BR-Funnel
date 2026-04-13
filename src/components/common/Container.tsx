import { type ReactNode } from "react";

type Variant = "nav" | "section";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

const Container = ({
  children,
  className = "",
  variant = "section",
}: ContainerProps) => {
  const base = "mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-15";

  const variants = {
    nav: "max-w-[1440px]",     // your current (navbar)
    section: "max-w-[1440px]",      // increased for wider screens
  };

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;