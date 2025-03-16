
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";

interface WebsiteDashboardProps {
  toolId: string;
}

const WebsiteDashboard: React.FC<WebsiteDashboardProps> = ({ toolId }) => {
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

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Google Analytics Dashboard</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Users" 
          value={currentMetrics.users.toLocaleString()} 
          change={6.8} 
          description="Total visitors"
        />
        <MetricCard 
          title="New Users" 
          value={currentMetrics.newUsers.toLocaleString()} 
          change={8.2} 
          description="First-time visitors"
        />
        <MetricCard 
          title="Sessions" 
          value={currentMetrics.sessions.toLocaleString()} 
          change={5.4} 
          description="Total sessions"
        />
        <MetricCard 
          title="Pageviews" 
          value={currentMetrics.pageviews.toLocaleString()} 
          change={7.1} 
          description="Total page views"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart dateRange={dateRange} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MetricCard 
                title="Bounce Rate" 
                value={`${currentMetrics.bounceRate}%`} 
                change={-2.1} 
                description="Single page sessions"
                invertedChange
              />
              <MetricCard 
                title="Session Duration" 
                value={formatTime(currentMetrics.avgSessionDuration)} 
                change={3.8} 
                description="Avg. time on site"
              />
              <MetricCard 
                title="Pages / Session" 
                value={currentMetrics.pagesPerSession.toString()} 
                change={1.5} 
                description="Pages per session"
              />
              <MetricCard 
                title="Conversions" 
                value={currentMetrics.conversions.toLocaleString()} 
                change={9.2} 
                description={`${currentMetrics.conversionRate}% conversion rate`}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WebsiteDashboard;
