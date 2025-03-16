
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";

interface EmailDashboardProps {
  toolId: string;
}

const EmailDashboard: React.FC<EmailDashboardProps> = ({ toolId }) => {
  // In a real implementation, we would fetch this data from the API based on toolId
  const metrics = {
    "mailchimp": {
      campaigns: 12,
      totalSent: 186420,
      openRate: 24.6,
      clickRate: 3.8,
      bounceRate: 1.2,
      unsubscribeRate: 0.4,
      listGrowth: 2.8,
      subscribers: 42680
    },
    "klaviyo": {
      campaigns: 18,
      totalSent: 128540,
      openRate: 26.2,
      clickRate: 4.1,
      bounceRate: 0.9,
      unsubscribeRate: 0.3,
      listGrowth: 3.2,
      subscribers: 36240
    },
    "hubspot": {
      campaigns: 8,
      totalSent: 92180,
      openRate: 22.8,
      clickRate: 3.4,
      bounceRate: 1.5,
      unsubscribeRate: 0.5,
      listGrowth: 2.1,
      subscribers: 28460
    }
  };

  let toolName = "Mailchimp";
  let currentMetrics = metrics["mailchimp"];
  
  if (toolId === "klaviyo") {
    toolName = "Klaviyo";
    currentMetrics = metrics["klaviyo"];
  } else if (toolId === "hubspot") {
    toolName = "HubSpot";
    currentMetrics = metrics["hubspot"];
  }
  
  const dateRange: DateRange = "this-month";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{toolName} Dashboard</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Campaigns" 
          value={currentMetrics.campaigns.toString()} 
          change={8.3} 
          description="Sent this month"
        />
        <MetricCard 
          title="Open Rate" 
          value={`${currentMetrics.openRate}%`} 
          change={1.8} 
          description="Email open rate"
        />
        <MetricCard 
          title="Click Rate" 
          value={`${currentMetrics.clickRate}%`} 
          change={2.4} 
          description="Email click rate"
        />
        <MetricCard 
          title="Subscribers" 
          value={currentMetrics.subscribers.toLocaleString()} 
          change={currentMetrics.listGrowth} 
          description="Total list subscribers"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Open & Click Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart dateRange={dateRange} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>List Health Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MetricCard 
                title="Emails Sent" 
                value={currentMetrics.totalSent.toLocaleString()} 
                change={5.2} 
                description="Total emails sent"
              />
              <MetricCard 
                title="Bounce Rate" 
                value={`${currentMetrics.bounceRate}%`} 
                change={-0.2} 
                description="Email bounce rate"
                invertedChange
              />
              <MetricCard 
                title="Unsubscribe Rate" 
                value={`${currentMetrics.unsubscribeRate}%`} 
                change={-0.1} 
                description="Unsubscribe rate"
                invertedChange
              />
              <MetricCard 
                title="List Growth" 
                value={`${currentMetrics.listGrowth}%`} 
                change={0.4} 
                description="Monthly list growth"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailDashboard;
