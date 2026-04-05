import { cn } from "@/lib/utils";
import React from "react";

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8", className)}
    >
      <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="20" cy="20" r="8" fill="currentColor" fillOpacity="0.6" />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
  );
};
