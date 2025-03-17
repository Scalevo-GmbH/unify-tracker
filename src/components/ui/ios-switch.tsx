
import React from "react";
import { cn } from "@/lib/utils";

interface IosSwitchProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const IosSwitch = ({ options, value, onChange, className }: IosSwitchProps) => {
  // Calculate the active index
  const activeIndex = options.findIndex(opt => opt.value === value);
  
  return (
    <div className={cn(
      "relative bg-slate-100 rounded-full p-1 flex items-center h-10 w-fit transition-all duration-200 ease-in-out", 
      className
    )}>
      {/* Sliding background element */}
      <div
        className="absolute h-8 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out z-0"
        style={{
          width: `calc(${100 / options.length}% - 4px)`,
          left: `calc(${activeIndex * (100 / options.length)}% + 2px)`,
          transform: `translateX(0)`,
        }}
      />
      
      {/* Option buttons */}
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "relative z-10 px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200 min-w-20 text-center",
            "font-cal tracking-tight",
            value === option.value 
              ? "text-slate-900 font-semibold" 
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export { IosSwitch };
