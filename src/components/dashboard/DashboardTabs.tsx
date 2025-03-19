
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTranslation } from "@/hooks/use-translation";
import { LayoutGrid, Layers } from "lucide-react";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import ActiveCampaigns from "@/components/ActiveCampaigns";
import TopChannels from "@/components/dashboard/TopChannels";
import ConnectPlatforms from "@/components/dashboard/ConnectPlatforms";
import { DateRange } from "@/components/DateRangeSelector";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollAreaHorizontal } from "@/components/ui/scroll-area";
import PerformanceChart from "@/components/PerformanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define common shared types
interface WithDateRangeProps {
  dateRange: DateRange;
}

interface DashboardTabsProps {
  activeTab: "overview" | "campaigns";
  onTabChange: (value: string) => void;
  dateRange: DateRange;
  onOpenModal: (name: string, icon: React.ReactNode) => void;
}

// Explicitly type the components to accept dateRange
const TypedDashboardMetrics = DashboardMetrics as React.ComponentType<WithDateRangeProps>;
const TypedActiveCampaigns = ActiveCampaigns as React.ComponentType<WithDateRangeProps>;
const TypedTopChannels = TopChannels as React.ComponentType<WithDateRangeProps>;

const DashboardTabs: React.FC<DashboardTabsProps> = ({
  activeTab,
  onTabChange,
  dateRange,
  onOpenModal,
}) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <ScrollAreaHorizontal className="pb-1">
        <TabsList className="mb-6 flex-nowrap whitespace-nowrap">
          <TabsTrigger value="overview" className="flex items-center">
            <LayoutGrid className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span>{t('overview')}</span>
          </TabsTrigger>
          <TabsTrigger value="campaigns" className="flex items-center">
            <Layers className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span>{t('campaigns')}</span>
          </TabsTrigger>
        </TabsList>
      </ScrollAreaHorizontal>

      <TabsContent value="overview" className="space-y-6 pb-8">
        <TypedDashboardMetrics dateRange={dateRange} />
        
        <div className="grid grid-cols-12 gap-6">
          <Card className="col-span-12 lg:col-span-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">{t('overallPerformance')}</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceChart dateRange={dateRange} metrics={["impressions", "clicks"]} />
            </CardContent>
          </Card>
          
          <div className="col-span-12 lg:col-span-4">
            <TypedTopChannels dateRange={dateRange} />
          </div>
        </div>
        
        <ConnectPlatforms onOpenModal={onOpenModal} />
      </TabsContent>

      <TabsContent value="campaigns" className="pb-8">
        <TypedActiveCampaigns dateRange={dateRange} />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
