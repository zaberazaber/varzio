import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthWrapper = ({ children, className = "" }: Props) => {
  return (
    <div className={twMerge("", className)}>
      {children}
    </div>
  );
};
