
import React from "react";
import { HelpCircle, Facebook, Instagram, Twitter, Mail, Search } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { useTranslation } from "@/hooks/use-translation";
import FadeInSection from "@/components/animations/FadeInSection";
import { DateRange } from "@/components/DateRangeSelector";

interface TopChannelsProps {
  dateRange?: DateRange;
}

// Define the interface for the channel items
interface ChannelItemProps {
  icon: React.ReactNode;
  name: string;
  percentage: number;
  bgColor: string;
  textColor: string;
  barColor: string;
}

export const TopChannels: React.FC<TopChannelsProps> = ({ dateRange }) => {
  const { t } = useTranslation();

  return (
    <FadeInSection className="h-full">
      <div className="bg-card rounded-xl shadow-subtle p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-cal font-semibold">{t('topChannels')}</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="cursor-help">
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </span>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs text-sm">
                {t('topChannelsTooltip')}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="space-y-6 flex-grow flex flex-col justify-between">
          <div className="space-y-6 flex-grow">
            <ChannelItem 
              icon={<Facebook className="h-5 w-5" />} 
              name="Facebook" 
              percentage={38}
              bgColor="bg-blue-100"
              textColor="text-blue-600"
              barColor="bg-marketing-blue"
            />
            
            <ChannelItem 
              icon={<Instagram className="h-5 w-5" />} 
              name="Instagram" 
              percentage={24}
              bgColor="bg-pink-100"
              textColor="text-pink-600"
              barColor="bg-marketing-pink"
            />
            
            <ChannelItem 
              icon={<Twitter className="h-5 w-5" />} 
              name="Twitter" 
              percentage={18}
              bgColor="bg-sky-100"
              textColor="text-sky-600"
              barColor="bg-marketing-blue"
            />
            
            <ChannelItem 
              icon={<Mail className="h-5 w-5" />} 
              name="Email" 
              percentage={12}
              bgColor="bg-yellow-100"
              textColor="text-yellow-600"
              barColor="bg-marketing-yellow"
            />
            
            <ChannelItem 
              icon={<Search className="h-5 w-5" />} 
              name="Organic" 
              percentage={8}
              bgColor="bg-green-100"
              textColor="text-green-600"
              barColor="bg-marketing-green"
            />
          </div>
          
          <button className="mt-4 w-full py-2 px-4 text-sm cal-button font-semibold text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors">
            {t('viewAllChannels')}
          </button>
        </div>
      </div>
    </FadeInSection>
  );
};

// Extract ChannelItem to its own component for better readability
const ChannelItem: React.FC<ChannelItemProps> = ({ 
  icon, 
  name, 
  percentage,
  bgColor,
  textColor,
  barColor
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`h-10 w-10 rounded-full ${bgColor} ${textColor} flex items-center justify-center mr-3`}>
          {icon}
        </div>
        <span className="font-medium">{name}</span>
      </div>
      <div className="flex items-center">
        <span className="font-medium">{percentage}%</span>
        <div className="w-24 h-2 bg-secondary ml-3 rounded-full overflow-hidden">
          <div className={`h-full ${barColor} rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default TopChannels;
