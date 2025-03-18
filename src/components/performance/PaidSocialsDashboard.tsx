
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";
import { useTranslation } from "@/hooks/use-translation";

interface PaidSocialsDashboardProps {
  toolId: string;
}

const PaidSocialsDashboard: React.FC<PaidSocialsDashboardProps> = ({ toolId }) => {
  const { t, formatNumber } = useTranslation();
  
  // In a real implementation, we would fetch this data from the API based on toolId
  const metrics = {
    "meta-ads": {
      reach: 235480,
      impressions: 362140,
      clicks: 8560,
      ctr: 2.36,
      cpc: 0.78,
      frequency: 1.54,
      conversions: 412,
      conversionRate: 4.81,
      cost: 6676.80,
      roas: 3.2
    },
    "linkedin-ads": {
      reach: 42680,
      impressions: 68420,
      clicks: 1860,
      ctr: 2.72,
      cpc: 3.85,
      frequency: 1.60,
      conversions: 76,
      conversionRate: 4.09,
      cost: 7161.00,
      roas: 2.8
    },
    "twitter-ads": {
      reach: 105280,
      impressions: 158760,
      clicks: 3280,
      ctr: 2.07,
      cpc: 1.25,
      frequency: 1.51,
      conversions: 142,
      conversionRate: 4.33,
      cost: 4100.00,
      roas: 2.6
    }
  };

  let toolName = "Meta Ads";
  let currentMetrics = metrics["meta-ads"];
  
  if (toolId === "linkedin-ads") {
    toolName = "LinkedIn Ads";
    currentMetrics = metrics["linkedin-ads"];
  } else if (toolId === "twitter-ads") {
    toolName = "Twitter Ads";
    currentMetrics = metrics["twitter-ads"];
  }
  
  const dateRange: DateRange = "this-month";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{toolName}</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title={t('reach')} 
          value={formatNumber(currentMetrics.reach)} 
          change={7.8} 
          description={t('uniqueUsers')}
        />
        <MetricCard 
          title={t('impressions')} 
          value={formatNumber(currentMetrics.impressions)} 
          change={6.2} 
          description={t('totalImpressions')}
        />
        <MetricCard 
          title={t('frequency')} 
          value={currentMetrics.frequency.toFixed(2)} 
          change={-1.5} 
          description={t('avgImpressions')}
        />
        <MetricCard 
          title={t('clicks')} 
          value={formatNumber(currentMetrics.clicks)} 
          change={8.4} 
          description={t('totalClicks')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{t('reachEngagement')}</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart dateRange={dateRange} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('performanceMetrics')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MetricCard 
                title={t('ctr')} 
                value={`${currentMetrics.ctr}%`} 
                change={2.1} 
                description={t('clickThroughRate')}
              />
              <MetricCard 
                title={t('cpc')} 
                value={`$${currentMetrics.cpc.toFixed(2)}`} 
                change={-3.2} 
                description={t('costPerClick')}
              />
              <MetricCard 
                title={t('conversions')} 
                value={formatNumber(currentMetrics.conversions)} 
                change={9.5} 
                description={t('totalConversions')}
              />
              <MetricCard 
                title={t('roas')} 
                value={`${currentMetrics.roas}x`} 
                change={5.8} 
                description={t('returnOnAdSpend')}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaidSocialsDashboard;
