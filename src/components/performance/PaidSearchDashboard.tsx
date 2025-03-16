
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";

interface PaidSearchDashboardProps {
  toolId: string;
}

const PaidSearchDashboard: React.FC<PaidSearchDashboardProps> = ({ toolId }) => {
  // In a real implementation, we would fetch this data from the API based on toolId
  const metrics = {
    "google-ads": {
      impressions: 125340,
      clicks: 4815,
      ctr: 3.84,
      cpc: 1.25,
      conversions: 215,
      conversionRate: 4.47,
      cost: 6019.23,
      roas: 3.5
    },
    "bing-ads": {
      impressions: 42180,
      clicks: 1624,
      ctr: 3.85,
      cpc: 0.95,
      conversions: 68,
      conversionRate: 4.19,
      cost: 1542.80,
      roas: 2.8
    }
  };

  const currentMetrics = toolId === "google-ads" ? metrics["google-ads"] : metrics["bing-ads"];
  const dateRange: DateRange = "this-month";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{toolId === "google-ads" ? "Google Ads" : "Bing Ads"} Dashboard</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Impressions" 
          value={currentMetrics.impressions.toLocaleString()} 
          change={8.2} 
          description="Total ad impressions"
        />
        <MetricCard 
          title="Clicks" 
          value={currentMetrics.clicks.toLocaleString()} 
          change={5.7} 
          description="Total ad clicks"
        />
        <MetricCard 
          title="CTR" 
          value={`${currentMetrics.ctr}%`} 
          change={-1.2} 
          description="Click-through rate"
        />
        <MetricCard 
          title="Avg. CPC" 
          value={`$${currentMetrics.cpc}`} 
          change={-3.5} 
          description="Average cost per click"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Click Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart dateRange={dateRange} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conversion Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MetricCard 
                title="Conversions" 
                value={currentMetrics.conversions.toString()} 
                change={12.4} 
                description="Total conversions"
              />
              <MetricCard 
                title="Conv. Rate" 
                value={`${currentMetrics.conversionRate}%`} 
                change={6.8} 
                description="Conversion rate"
              />
              <MetricCard 
                title="Cost" 
                value={`$${currentMetrics.cost.toLocaleString()}`} 
                change={4.2} 
                description="Total ad spend"
              />
              <MetricCard 
                title="ROAS" 
                value={`${currentMetrics.roas}x`} 
                change={7.5} 
                description="Return on ad spend"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaidSearchDashboard;
