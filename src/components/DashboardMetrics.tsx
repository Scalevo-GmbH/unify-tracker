
import React from "react";
import { Users, Eye, Percent, ArrowUpRight } from "lucide-react";
import { MetricCard } from "./MetricCard";
import FadeInSection from "./animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

export const DashboardMetrics: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <FadeInSection delay={100}>
        <MetricCard
          title={t('totalReach')}
          value="138,450"
          change={18.5}
          icon={<Users className="h-5 w-5" />}
          description={t('reachDescription')}
        />
      </FadeInSection>
      
      <FadeInSection delay={200}>
        <MetricCard
          title={t('impressions')}
          value="223,780"
          change={24.3}
          icon={<Eye className="h-5 w-5" />}
          description={t('impressionsDescription')}
        />
      </FadeInSection>
      
      <FadeInSection delay={300}>
        <MetricCard
          title={t('conversionRate')}
          value="3.8%"
          change={-2.5}
          icon={<Percent className="h-5 w-5" />}
          description={t('conversionRateDescription')}
        />
      </FadeInSection>
      
      <FadeInSection delay={400}>
        <MetricCard
          title={t('engagementRate')}
          value="5.2%"
          change={1.7}
          icon={<ArrowUpRight className="h-5 w-5" />}
          description={t('engagementRateDescription')}
        />
      </FadeInSection>
    </div>
  );
};

export default DashboardMetrics;
