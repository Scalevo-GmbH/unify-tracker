
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
      "relative bg-gray-100 rounded-full p-1 flex items-center h-9 w-fit transition-all duration-200 ease-in-out", 
      className
    )}>
      {/* Sliding background element */}
      <div
        className="absolute h-7 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out z-0"
        style={{
          width: `calc(${100 / options.length}% - 6px)`,
          left: `calc(${activeIndex * (100 / options.length)}% + 3px)`,
        }}
      />
      
      {/* Option buttons */}
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "relative z-10 px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200 flex-1 text-center",
            "font-cal tracking-tight",
            value === option.value 
              ? "text-gray-800 font-semibold" 
              : "text-gray-400 hover:text-gray-600"
          )}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export { IosSwitch };
