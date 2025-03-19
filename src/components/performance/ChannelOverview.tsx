
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { Award, TrendingUp, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { ChannelSelector } from "./ChannelSelector";

interface OverviewData {
  metrics: {
    title: string;
    value: string;
    change: number;
    icon?: React.ReactNode;
    invertedChange?: boolean;
  }[];
  summary: string;
  topPerformer: string;
  recommendation: string;
}

interface ChannelOverviewProps {
  channelData: OverviewData;
  selectedTool: string;
  tools: { id: string; name: string }[];
  onToolChange: (value: string) => void;
  onViewDetails: () => void;
  categoryDisplayName: string;
}

export const ChannelOverview: React.FC<ChannelOverviewProps> = ({
  channelData,
  selectedTool,
  tools,
  onToolChange,
  onViewDetails,
  categoryDisplayName,
}) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {channelData.metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
            invertedChange={metric.invertedChange}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Zap className="h-5 w-5 mr-2 text-amber-500" />
              {t('performanceSummary')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">{channelData.summary}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-2 text-emerald-500" />
                  {t('topPerformer')}
                </h4>
                <p className="text-sm">{channelData.topPerformer}</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <h4 className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                  {t('recommendation')}
                </h4>
                <p className="text-sm">{channelData.recommendation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <ChannelSelector
          selectedTool={selectedTool}
          tools={tools}
          onToolChange={onToolChange}
          onViewDetails={onViewDetails}
        />
      </div>
    </div>
  );
};
