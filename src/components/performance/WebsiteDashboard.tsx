import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange, DateRangeSelector } from "@/components/DateRangeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, Share2, Clock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

interface WebsiteDashboardProps {
  toolId: string;
}

const WebsiteDashboard: React.FC<WebsiteDashboardProps> = ({ toolId }) => {
  const [activeSubTab, setActiveSubTab] = useState("overview");
  const [dateRange, setDateRange] = useState<DateRange>("this-month");
  const { t } = useTranslation();
  
  const metrics = {
    "google-analytics": {
      users: 58420,
      newUsers: 32860,
      sessions: 89640,
      sessionDuration: 185,
      pageviews: 245680,
      pagesPerSession: 2.74,
      bounceRate: 42.5,
      sources: [
        { name: "Organic Search", value: 42, fill: "#E5DEFF" },
        { name: "Direct", value: 28, fill: "#D3E4FD" },
        { name: "Social", value: 12, fill: "#F2FCE2" },
        { name: "Referral", value: 10, fill: "#FFDEE2" },
        { name: "Email", value: 5, fill: "#FEF7CD" },
        { name: "Other", value: 3, fill: "#DEF8FF" }
      ],
      devices: [
        { name: "Mobile", value: 62, fill: "#E5DEFF" },
        { name: "Desktop", value: 32, fill: "#D3E4FD" },
        { name: "Tablet", value: 6, fill: "#F2FCE2" }
      ],
      countries: [
        { name: "United States", value: 45, fill: "#E5DEFF" },
        { name: "United Kingdom", value: 12, fill: "#D3E4FD" },
        { name: "Germany", value: 8, fill: "#F2FCE2" },
        { name: "France", value: 6, fill: "#FFDEE2" },
        { name: "Canada", value: 5, fill: "#FEF7CD" },
        { name: "Other", value: 24, fill: "#DEF8FF" }
      ]
    }
  };
  
  const currentMetrics = metrics["google-analytics"];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const handleExport = () => {
    console.log(`Exporting Google Analytics data...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Google Analytics Dashboard</h2>
        <div className="flex items-center gap-3">
          <DateRangeSelector 
            value={dateRange} 
            onChange={setDateRange} 
          />
          <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
            <Download className="h-4 w-4" />
            {t('export')}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Users" 
          value={currentMetrics.users.toLocaleString()} 
          change={8.3} 
          description="Total unique users"
        />
        <MetricCard 
          title="Sessions" 
          value={currentMetrics.sessions.toLocaleString()} 
          change={6.8} 
          description="Total sessions"
        />
        <MetricCard 
          title="Pageviews" 
          value={currentMetrics.pageviews.toLocaleString()} 
          change={7.5} 
          description="Total page views"
        />
        <MetricCard 
          title="Avg. Session Duration" 
          value={formatTime(currentMetrics.sessionDuration)} 
          change={3.2} 
          description="Time spent per session"
        />
      </div>

      <div className="mb-6">
        <Tabs defaultValue="overview" value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="overview">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="acquisition">
              <Users className="h-4 w-4 mr-2" />
              Acquisition
            </TabsTrigger>
            <TabsTrigger value="behavior">
              <Share2 className="h-4 w-4 mr-2" />
              Behavior
            </TabsTrigger>
            <TabsTrigger value="geography">
              <Clock className="h-4 w-4 mr-2" />
              Geography
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Sessions & Users Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <PerformanceChart 
                    dateRange={dateRange} 
                    metrics={["sessions", "users"]}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <MetricCard 
                      title="New Users" 
                      value={currentMetrics.newUsers.toLocaleString()} 
                      change={9.2} 
                      description="First-time visitors"
                    />
                    <MetricCard 
                      title="Pages / Session" 
                      value={currentMetrics.pagesPerSession.toFixed(2)} 
                      change={2.5} 
                      description="Average pages viewed per session"
                    />
                    <MetricCard 
                      title="Bounce Rate" 
                      value={`${currentMetrics.bounceRate}%`} 
                      change={-3.8} 
                      invertedChange={true}
                      description="Single-page sessions"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="acquisition">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent className="h-[350px]">
                <div className="h-full">
                  {/* This would be a PieChart showing traffic sources */}
                  <p className="text-center text-muted-foreground">
                    Traffic source distribution chart would be displayed here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="behavior">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Popular Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Page</th>
                          <th className="text-right py-3 px-4">Views</th>
                          <th className="text-right py-3 px-4">Avg. Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">/home</td>
                          <td className="text-right py-3 px-4">34,250</td>
                          <td className="text-right py-3 px-4">2m 12s</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">/products</td>
                          <td className="text-right py-3 px-4">28,120</td>
                          <td className="text-right py-3 px-4">3m 05s</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">/about</td>
                          <td className="text-right py-3 px-4">12,845</td>
                          <td className="text-right py-3 px-4">1m 45s</td>
                        </tr>
                        <tr className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">/blog</td>
                          <td className="text-right py-3 px-4">9,680</td>
                          <td className="text-right py-3 px-4">4m 20s</td>
                        </tr>
                        <tr className="hover:bg-muted/50">
                          <td className="py-3 px-4">/contact</td>
                          <td className="text-right py-3 px-4">6,325</td>
                          <td className="text-right py-3 px-4">1m 30s</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Device Distribution</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <div className="h-full">
                    {/* This would be a PieChart showing device distribution */}
                    <p className="text-center text-muted-foreground">
                      Device distribution chart would be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geography">
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-[350px]">
                <div className="h-full">
                  {/* This would be a map or chart showing geographic distribution */}
                  <p className="text-center text-muted-foreground">
                    Geographic distribution chart would be displayed here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WebsiteDashboard;
