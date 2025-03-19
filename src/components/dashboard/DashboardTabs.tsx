
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, ListPlus } from "lucide-react";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { PerformanceChart } from "@/components/PerformanceChart";
import TopChannels from "@/components/dashboard/TopChannels";
import ConnectPlatforms from "@/components/dashboard/ConnectPlatforms";
import ActiveCampaigns from "@/components/ActiveCampaigns";
import FadeInSection from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";
import { DateRange } from "@/components/DateRangeSelector";

interface DashboardTabsProps {
  activeTab: "overview" | "campaigns";
  onTabChange: (value: string) => void;
  dateRange: DateRange;
  onOpenModal: (name: string, icon: React.ReactNode) => void;
}

export const DashboardTabs: React.FC<DashboardTabsProps> = ({
  activeTab,
  onTabChange,
  dateRange,
  onOpenModal,
}) => {
  const { t } = useTranslation();

  return (
    <Tabs defaultValue="overview" value={activeTab} onValueChange={onTabChange}>
      <TabsList>
        <TabsTrigger value="overview">
          <Home className="h-4 w-4 mr-2" />
          {t('overview')}
        </TabsTrigger>
        <TabsTrigger value="campaigns">
          <ListPlus className="h-4 w-4 mr-2" />
          {t('activeCampaigns')}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-6">
        <DashboardMetrics />
        
        <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FadeInSection className="lg:col-span-2">
            <PerformanceChart dateRange={dateRange} />
          </FadeInSection>
          
          <TopChannels />
        </section>
        
        <ConnectPlatforms onOpenModal={onOpenModal} />
      </TabsContent>

      <TabsContent value="campaigns" className="mt-6">
        <ActiveCampaigns />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
