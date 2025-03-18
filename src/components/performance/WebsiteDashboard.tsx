
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface WebsiteDashboardProps {
  toolId: string;
}

const WebsiteDashboard: React.FC<WebsiteDashboardProps> = ({ toolId }) => {
  const { t, formatNumber } = useTranslation();

  // In a real implementation, we would fetch this data from the Google Analytics API
  const metrics = {
    "google-analytics": {
      users: 58420,
      newUsers: 32180,
      sessions: 76840,
      pageviews: 245620,
      bounceRate: 42.8,
      avgSessionDuration: 185,
      pagesPerSession: 3.2,
      conversionRate: 2.6,
      conversions: 1518,
    }
  };

  const currentMetrics = metrics["google-analytics"];
  const dateRange: DateRange = "this-month";

  // Format session duration as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleExport = () => {
    // This would handle the export functionality in a real implementation
    console.log(`Exporting Google Analytics data...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{t('websiteDashboard')}</h2>
        <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
          <Download className="h-4 w-4" />
          {t('export')}
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title={t('users')}
          value={formatNumber(currentMetrics.users)} 
          change={6.8} 
          description={t('totalVisitors')}
        />
        <MetricCard 
          title={t('newUsers')}
          value={formatNumber(currentMetrics.newUsers)} 
          change={8.2} 
          description={t('firstTimeVisitors')}
        />
        <MetricCard 
          title={t('sessions')}
          value={formatNumber(currentMetrics.sessions)} 
          change={5.4} 
          description={t('totalSessions')}
        />
        <MetricCard 
          title={t('pageviews')}
          value={formatNumber(currentMetrics.pageviews)} 
          change={7.1} 
          description={t('totalPageViews')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{t('trafficOverview')}</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart dateRange={dateRange} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('engagementMetrics')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MetricCard 
                title={t('bounceRate')}
                value={`${currentMetrics.bounceRate}%`} 
                change={-2.1} 
                description={t('singlePageSessions')}
                invertedChange
              />
              <MetricCard 
                title={t('sessionDuration')}
                value={formatTime(currentMetrics.avgSessionDuration)} 
                change={3.8} 
                description={t('avgTimeOnSite')}
              />
              <MetricCard 
                title={t('pagesPerSession')}
                value={currentMetrics.pagesPerSession.toString()} 
                change={1.5} 
                description={t('pagesPerSessionDesc')}
              />
              <MetricCard 
                title={t('conversions')}
                value={formatNumber(currentMetrics.conversions)} 
                change={9.2} 
                description={`${currentMetrics.conversionRate}% ${t('conversionRateDesc')}`}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WebsiteDashboard;
