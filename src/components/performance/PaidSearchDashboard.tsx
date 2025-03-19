
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Search, Users, LineChart, Download } from "lucide-react";
import { IosSwitch } from "@/components/ui/ios-switch";
import { useTranslation } from "@/hooks/use-translation";

interface PaidSearchDashboardProps {
  toolId: string;
}

const PaidSearchDashboard: React.FC<PaidSearchDashboardProps> = ({ toolId }) => {
  const [activeSubTab, setActiveSubTab] = useState("performance");
  const { t } = useTranslation();
  
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
      roas: 3.5,
      qualityScore: 7.8,
      adPositions: {
        top: 65,
        otherVisible: 32,
        notShown: 3
      },
      keywordPerformance: [
        { keyword: "marketing dashboard", impressions: 12500, clicks: 620, ctr: 4.96, cpc: 0.18, conversions: 31 },
        { keyword: "digital marketing tools", impressions: 9800, clicks: 485, ctr: 4.95, cpc: 0.22, conversions: 24 },
        { keyword: "marketing automation", impressions: 7650, clicks: 320, ctr: 4.18, cpc: 0.19, conversions: 18 },
        { keyword: "analytics dashboard", impressions: 6200, clicks: 245, ctr: 3.95, cpc: 0.25, conversions: 12 },
        { keyword: "campaign management", impressions: 5100, clicks: 198, ctr: 3.88, cpc: 0.27, conversions: 9 }
      ]
    },
    "bing-ads": {
      impressions: 42180,
      clicks: 1624,
      ctr: 3.85,
      cpc: 0.95,
      conversions: 68,
      conversionRate: 4.19,
      cost: 1542.80,
      roas: 2.8,
      qualityScore: 7.2,
      adPositions: {
        top: 59,
        otherVisible: 38,
        notShown: 3
      },
      keywordPerformance: [
        { keyword: "marketing dashboard", impressions: 6200, clicks: 240, ctr: 3.87, cpc: 0.15, conversions: 12 },
        { keyword: "digital marketing tools", impressions: 4300, clicks: 168, ctr: 3.91, cpc: 0.18, conversions: 9 },
        { keyword: "marketing automation", impressions: 3520, clicks: 135, ctr: 3.84, cpc: 0.16, conversions: 7 },
        { keyword: "analytics dashboard", impressions: 2840, clicks: 105, ctr: 3.70, cpc: 0.21, conversions: 5 },
        { keyword: "campaign management", impressions: 2420, clicks: 86, ctr: 3.55, cpc: 0.23, conversions: 4 }
      ]
    }
  };

  const currentMetrics = toolId === "google-ads" ? metrics["google-ads"] : metrics["bing-ads"];
  const dateRange: DateRange = "this-month";

  const handleExport = () => {
    // This would handle the export functionality in a real implementation
    console.log(`Exporting ${toolId === "google-ads" ? "Google Ads" : "Bing Ads"} data...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{toolId === "google-ads" ? "Google Ads" : "Bing Ads"} Dashboard</h2>
        <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
          <Download className="h-4 w-4" />
          {t('export')}
        </Button>
      </div>
      
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

      <div className="mb-6">
        <Tabs defaultValue="performance" value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="performance">
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="keywords">
              <Search className="h-4 w-4 mr-2" />
              Keywords
            </TabsTrigger>
            <TabsTrigger value="conversions">
              <LineChart className="h-4 w-4 mr-2" />
              Conversions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="performance">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Click Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <PerformanceChart 
                    dateRange={dateRange} 
                    metrics={["clicks", "impressions"]}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
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
          </TabsContent>

          <TabsContent value="keywords">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Keyword</th>
                        <th className="text-right py-3 px-4 font-medium">Impressions</th>
                        <th className="text-right py-3 px-4 font-medium">Clicks</th>
                        <th className="text-right py-3 px-4 font-medium">CTR</th>
                        <th className="text-right py-3 px-4 font-medium">CPC</th>
                        <th className="text-right py-3 px-4 font-medium">Conversions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMetrics.keywordPerformance.map((keyword, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{keyword.keyword}</td>
                          <td className="text-right py-3 px-4">{keyword.impressions.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{keyword.clicks.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{keyword.ctr}%</td>
                          <td className="text-right py-3 px-4">${keyword.cpc}</td>
                          <td className="text-right py-3 px-4">{keyword.conversions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
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
                    metrics={["conversions", "ctr"]}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ad Position Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Top of page</span>
                      <div className="flex items-center">
                        <div className="w-40 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${currentMetrics.adPositions.top}%` }}></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">{currentMetrics.adPositions.top}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Other visible</span>
                      <div className="flex items-center">
                        <div className="w-40 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${currentMetrics.adPositions.otherVisible}%` }}></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">{currentMetrics.adPositions.otherVisible}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Not shown</span>
                      <div className="flex items-center">
                        <div className="w-40 bg-gray-200 rounded-full h-2.5">
                          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${currentMetrics.adPositions.notShown}%` }}></div>
                        </div>
                        <span className="ml-2 text-sm font-medium">{currentMetrics.adPositions.notShown}%</span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-2">Quality Score</h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className={`h-2.5 rounded-full ${currentMetrics.qualityScore >= 8 ? 'bg-green-500' : currentMetrics.qualityScore >= 6 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${(currentMetrics.qualityScore / 10) * 100}%` }}></div>
                        </div>
                        <span className="ml-2 font-medium">{currentMetrics.qualityScore}/10</span>
                      </div>
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

export default PaidSearchDashboard;
