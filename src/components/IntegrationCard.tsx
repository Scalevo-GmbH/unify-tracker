
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  connected?: boolean;
  popular?: boolean;
  className?: string;
  onClick?: () => void;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  name,
  icon,
  description,
  connected = false,
  popular = false,
  className,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex flex-col h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-subtle transition-all duration-300",
        connected ? "bg-card/50" : "", 
        isHovered ? "shadow-card transform translate-y-[-2px]" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {popular && (
        <div className="absolute top-3 right-3 flex items-center bg-marketing-purple/10 px-2 py-1 rounded-full">
          <Sparkles className="h-3 w-3 text-marketing-purple mr-1" />
          <span className="text-xs font-medium text-marketing-purple">Popular</span>
        </div>
      )}
      
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/5">
        {icon}
      </div>
      
      <h3 className="mb-2 text-base font-semibold tracking-tight">{name}</h3>
      
      <p className="mb-4 text-sm text-muted-foreground flex-grow">{description}</p>
      
      <div className="mt-auto">
        <button
          className={cn(
            "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 w-full",
            connected
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {connected ? "Manage Connection" : "Connect"}
        </button>
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent opacity-10 transition-opacity duration-500 group-hover:opacity-20"></div>
      )}
    </div>
  );
};

export default IntegrationCard;
