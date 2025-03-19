
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

interface DashboardTabsProps {
  activeTab: "overview" | "campaigns";
  onTabChange: (value: string) => void;
  dateRange: DateRange;
  onOpenModal: (name: string, icon: React.ReactNode) => void;
}

// Define props for the components that need dateRange
interface WithDateRangeProps {
  dateRange: DateRange;
}

// Explicitly type the components to accept dateRange
// This tells TypeScript that these components can accept the dateRange prop
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TypedTopChannels dateRange={dateRange} />
          <ConnectPlatforms onOpenModal={onOpenModal} />
        </div>
      </TabsContent>

      <TabsContent value="campaigns" className="pb-8">
        <TypedActiveCampaigns dateRange={dateRange} />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
