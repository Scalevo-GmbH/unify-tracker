
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  className,
}) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl bg-card p-6 shadow-subtle transition-all duration-200 hover:shadow-card",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
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
          <div className="rounded-full p-2 bg-primary/5 text-primary">
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
