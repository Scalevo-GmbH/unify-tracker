
import React from "react";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Ad {
  id: number;
  name: string;
  status: string;
  budget: string;
  spent: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  conversionRate: number;
  revenue: string;
  roas: number;
  frequency: number;
  engagement: number;
  adPreview: string;
}

interface PerformanceTabProps {
  currentAd: Ad;
  dateRange: string;
}

export const PerformanceTab: React.FC<PerformanceTabProps> = ({ currentAd, dateRange }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Reach vs. Clicks Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <PerformanceChart dateRange={dateRange} />
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <MetricCard
              title="Cost Per Click"
              value={`$${currentAd.cpc}`}
              change={-5.2}
              description="Average cost for each click"
            />
            <MetricCard
              title="Conversion Rate"
              value={`${currentAd.conversionRate}%`}
              change={3.8}
              description="Percentage of clicks that result in conversions"
            />
            <MetricCard
              title="ROAS"
              value={`${currentAd.roas}x`}
              change={7.2}
              description="Return on ad spend (revenue ÷ cost)"
            />
            <MetricCard
              title="Frequency"
              value={`${currentAd.frequency}`}
              change={-2.1}
              description="Average number of times each person saw your ad"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
