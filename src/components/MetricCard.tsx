
import React from "react";
import { ArrowDown, ArrowUp, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
  description?: string;
  invertedChange?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  className,
  description,
  invertedChange,
}) => {
  // For some metrics like bounce rate, a decrease is positive and should be shown in green
  // invertedChange flips the color logic for metrics where lower is better
  const isPositive = invertedChange 
    ? (change && change < 0) 
    : (change && change > 0);
  const isNegative = invertedChange 
    ? (change && change > 0) 
    : (change && change < 0);

  // Get background color based on metric type to add subtle variation
  const getSubtleBackground = () => {
    if (title.toLowerCase().includes("click") || title.toLowerCase().includes("conversion")) 
      return "bg-blue-50";
    if (title.toLowerCase().includes("impression") || title.toLowerCase().includes("reach") || title.toLowerCase().includes("view")) 
      return "bg-indigo-50";
    if (title.toLowerCase().includes("rate") || title.toLowerCase().includes("duration")) 
      return "bg-purple-50";
    if (title.toLowerCase().includes("spend") || title.toLowerCase().includes("cost")) 
      return "bg-amber-50";
    return "bg-slate-50";
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-card p-6 shadow-subtle transition-all duration-200 hover:shadow-card",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            {description && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-help">
                      <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs text-xs">
                    {description}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{value}</h3>
          
          {typeof change !== "undefined" && (
            <div className="mt-2 flex items-center">
              <span className={cn(
                "flex items-center text-xs font-medium",
                isPositive ? "text-emerald-500" : "",
                isNegative ? "text-red-500" : "",
                !isPositive && !isNegative ? "text-muted-foreground" : ""
              )}>
                {isPositive && <ArrowUp className="mr-1 h-3 w-3" />}
                {isNegative && <ArrowDown className="mr-1 h-3 w-3" />}
                {Math.abs(change)}%
              </span>
              <span className="ml-1 text-xs text-muted-foreground">vs last period</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className={cn(
            "rounded-full p-2.5 text-primary",
            getSubtleBackground()
          )}>
            {icon}
          </div>
        )}
      </div>
      
      <div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-transparent"
        style={{
          width: "100%",
          background: isPositive ? "linear-gradient(90deg, transparent, #22C55E)" :
                    isNegative ? "linear-gradient(90deg, transparent, #EF4444)" :
                    "linear-gradient(90deg, transparent, #3B82F6)"
        }}
      />
    </div>
  );
};

export default MetricCard;
