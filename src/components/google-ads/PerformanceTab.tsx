
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";
import { useTranslation } from "@/hooks/use-translation";

interface Ad {
  id: number;
  name: string;
  status: string;
  budget: string;
  spent: string;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  conversionRate: number;
  revenue: string;
  roas: number;
  qualityScore: number;
  adPreview: string;
}

interface PerformanceTabProps {
  currentAd: Ad;
  dateRange: DateRange;
}

export const PerformanceTab: React.FC<PerformanceTabProps> = ({
  currentAd,
  dateRange,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>{t('impressions')} & {t('clicks')} {t('overTime')}</CardTitle>
        </CardHeader>
        <CardContent>
          <PerformanceChart dateRange={dateRange} />
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>{t('keyMetrics')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <MetricCard
              title={t('costPerClick')}
              value={`$${currentAd.cpc}`}
              change={-4.1}
              description={t('avgCostPerClick')}
            />
            <MetricCard
              title={t('conversionRate')}
              value={`${currentAd.conversionRate}%`}
              change={2.7}
              description={t('percentageClicks')}
            />
            <MetricCard
              title={t('roas')}
              value={`${currentAd.roas}x`}
              change={5.2}
              description={t('returnOnAdSpend')}
            />
            <MetricCard
              title={t('avgPosition')}
              value="2.4"
              change={-0.3}
              description={t('avgPositionDesc')}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
