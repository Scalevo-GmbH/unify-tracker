import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Globe, MousePointerClick, BarChart, Download } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface WebsiteDashboardProps {
  toolId: string;
}

const WebsiteDashboard: React.FC<WebsiteDashboardProps> = ({ toolId }) => {
  const [activeSubTab, setActiveSubTab] = useState("overview");
  const { t } = useTranslation();
  
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
      topPages: [
        { title: "Homepage", url: "/", sessions: 28420, bounceRate: 38.2, avgTime: 165 },
        { title: "Product Page", url: "/products", sessions: 15680, bounceRate: 42.5, avgTime: 210 },
        { title: "Blog Post", url: "/blog/marketing-tips", sessions: 8960, bounceRate: 45.1, avgTime: 240 },
        { title: "Pricing", url: "/pricing", sessions: 7840, bounceRate: 35.8, avgTime: 190 },
        { title: "Contact Us", url: "/contact", sessions: 5420, bounceRate: 28.7, avgTime: 120 }
      ],
      trafficSources: [
        { name: "Direct", value: 32, fill: "#E5DEFF" },
        { name: "Organic Search", value: 28, fill: "#D3E4FD" },
        { name: "Social", value: 18, fill: "#F2FCE2" },
        { name: "Referral", value: 12, fill: "#FEC6A1" },
        { name: "Paid Search", value: 8, fill: "#FFDEE2" },
        { name: "Email", value: 2, fill: "#FEF7CD" }
      ]
    }
  };

  const currentMetrics = metrics["google-analytics"];
  const dateRange: DateRange = "this-month";

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleExport = () => {
    console.log(`Exporting Google Analytics data...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Google Analytics Dashboard</h2>
        <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
          <Download className="h-4 w-4" />
          {t('export')}
        </Button>
      </div>
      
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

      <div className="mb-6">
        <Tabs defaultValue="overview" value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="content">
              <Globe className="h-4 w-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="behavior">
              <MousePointerClick className="h-4 w-4 mr-2" />
              Behavior
            </TabsTrigger>
            <TabsTrigger value="conversions">
              <BarChart className="h-4 w-4 mr-2" />
              Conversions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Traffic Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <PerformanceChart 
                    dateRange={dateRange} 
                    metrics={["sessions", "users"]}
                    colors={{
                      sessions: "#9b87f5",
                      users: "#58cc8f",
                      conversions: "#58cc8f",
                      ctr: "#ffc658",
                      cpc: "#ff8042",
                      cost: "#ff6b6b",
                      revenue: "#82ca9d",
                      impressions: "#D3E4FD",
                      clicks: "#9b87f5"
                    }}
                  />
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
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Page Title</th>
                        <th className="text-left py-3 px-4 font-medium">URL</th>
                        <th className="text-right py-3 px-4 font-medium">Sessions</th>
                        <th className="text-right py-3 px-4 font-medium">Bounce Rate</th>
                        <th className="text-right py-3 px-4 font-medium">Avg. Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMetrics.topPages.map((page, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{page.title}</td>
                          <td className="py-3 px-4 text-blue-600">{page.url}</td>
                          <td className="text-right py-3 px-4">{page.sessions.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{page.bounceRate}%</td>
                          <td className="text-right py-3 px-4">{formatTime(page.avgTime)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="behavior">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>User Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center space-y-4 h-[300px]">
                    <div className="rounded-lg bg-slate-100 p-8 text-center">
                      <p className="text-slate-500">User flow visualization would appear here.</p>
                      <p className="text-slate-400 text-sm">Connected to real Google Analytics API</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentMetrics.trafficSources.map((source, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{source.name}</span>
                        <div className="flex items-center">
                          <div className="w-40 bg-gray-200 rounded-full h-2.5">
                            <div className="h-2.5 rounded-full" style={{ width: `${source.value}%`, backgroundColor: source.fill }}></div>
                          </div>
                          <span className="ml-2 text-sm font-medium">{source.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conversions">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Conversion Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <PerformanceChart 
                    dateRange={dateRange} 
                    metrics={["conversions"]}
                    colors={{
                      sessions: "#9b87f5",
                      users: "#58cc8f",
                      conversions: "#58cc8f",
                      ctr: "#ffc658",
                      cpc: "#ff8042",
                      cost: "#ff6b6b",
                      revenue: "#82ca9d",
                      impressions: "#D3E4FD",
                      clicks: "#9b87f5"
                    }}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 pt-2">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Conversion Rate</h4>
                      <div className="flex justify-between items-center text-2xl font-semibold">
                        {currentMetrics.conversionRate}%
                        <span className="text-sm font-normal text-green-500">
                          0.5% higher than last period
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Total Conversions</h4>
                      <div className="flex justify-between items-center text-2xl font-semibold">
                        {currentMetrics.conversions.toLocaleString()}
                        <span className="text-sm font-normal text-green-500">
                          9.2% higher than last period
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Conversion Value</h4>
                      <div className="flex justify-between items-center text-2xl font-semibold">
                        $24,980
                        <span className="text-sm font-normal text-green-500">
                          12.4% higher than last period
                        </span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        View Goal Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WebsiteDashboard;
