
import React from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface ChannelSelectorProps {
  selectedTool: string;
  tools: { id: string; name: string }[];
  onToolChange: (value: string) => void;
  onViewDetails: () => void;
}

export const ChannelSelector: React.FC<ChannelSelectorProps> = ({
  selectedTool,
  tools,
  onToolChange,
  onViewDetails,
}) => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{t('channelDetails')}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          This overview shows aggregate performance across all your channels.
        </p>
        
        <div className="mt-4 space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">{t('selectChannel')}</label>
            <Select 
              value={selectedTool} 
              onValueChange={onToolChange}
            >
              <SelectTrigger className="w-full bg-white border-gray-200 shadow-sm">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {tools.map(tool => (
                  <SelectItem key={tool.id} value={tool.id}>
                    {tool.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            className="w-full flex items-center justify-center gap-1"
            onClick={onViewDetails}
          >
            {t('viewDetailedAnalytics')}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
