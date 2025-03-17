
import React from "react";
import { cn } from "@/lib/utils";

interface IosSwitchProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const IosSwitch = ({ options, value, onChange, className }: IosSwitchProps) => {
  return (
    <div className={cn("relative bg-slate-100 rounded-full p-0.5 flex items-center h-9 w-fit", className)}>
      <div
        className="absolute h-8 bg-white rounded-full shadow-sm transition-all duration-200 ease-in-out z-0"
        style={{
          width: `calc(${100 / options.length}% - 2px)`,
          left: `calc(${options.findIndex(opt => opt.value === value) * (100 / options.length)}% + 1px)`,
        }}
      />
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "relative z-10 px-4 py-1 text-sm font-medium rounded-full transition-colors duration-200 min-w-20 text-center",
            value === option.value ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export { IosSwitch };
