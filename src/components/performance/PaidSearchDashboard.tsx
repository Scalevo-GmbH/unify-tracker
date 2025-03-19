
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange, DateRangeSelector } from "@/components/DateRangeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Search, Users, LineChart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleAdsTable } from "@/components/google-ads/GoogleAdsTable";
import { AdPreviewCard } from "@/components/google-ads/AdPreviewCard";
import { useTranslation } from "@/hooks/use-translation";

interface PaidSearchDashboardProps {
  toolId: string;
}

const PaidSearchDashboard: React.FC<PaidSearchDashboardProps> = ({ toolId }) => {
  const [activeSubTab, setActiveSubTab] = useState("performance");
  const [dateRange, setDateRange] = useState<DateRange>("this-month");
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const { t } = useTranslation();
  
  // Mock data for ads - in a real app, this would come from an API based on the toolId
  const adsData = {
    "google-ads": [
      {
        id: 1,
        name: "Summer Sale - Search Campaign",
        status: "Active",
        budget: "$600",
        spent: "$432.67",
        impressions: 52340,
        clicks: 2170,
        ctr: 4.15,
        cpc: 0.20,
        conversions: 87,
        conversionRate: 4.01,
        revenue: "$4,350",
        roas: 10.05,
        qualityScore: 8,
        adPreview: "/placeholder.svg",
      },
      {
        id: 2,
        name: "Brand Awareness - Display",
        status: "Active",
        budget: "$850",
        spent: "$614.29",
        impressions: 98760,
        clicks: 1480,
        ctr: 1.50,
        cpc: 0.42,
        conversions: 42,
        conversionRate: 2.84,
        revenue: "$2,100",
        roas: 3.42,
        qualityScore: 7,
        adPreview: "/placeholder.svg",
      },
      {
        id: 3,
        name: "Product Remarketing",
        status: "Paused",
        budget: "$400",
        spent: "$312.45",
        impressions: 32150,
        clicks: 1270,
        ctr: 3.95,
        cpc: 0.25,
        conversions: 65,
        conversionRate: 5.12,
        revenue: "$3,250",
        roas: 10.40,
        qualityScore: 9,
        adPreview: "/placeholder.svg",
      }
    ],
    "bing-ads": [
      {
        id: 1,
        name: "Fall Collection - Search",
        status: "Active",
        budget: "$400",
        spent: "$345.28",
        impressions: 38670,
        clicks: 1670,
        ctr: 4.32,
        cpc: 0.21,
        conversions: 65,
        conversionRate: 3.89,
        revenue: "$3,250",
        roas: 9.41,
        qualityScore: 7,
        adPreview: "/placeholder.svg",
      },
      {
        id: 2,
        name: "Competitor Keywords",
        status: "Active",
        budget: "$300",
        spent: "$267.45",
        impressions: 28450,
        clicks: 1120,
        ctr: 3.94,
        cpc: 0.24,
        conversions: 38,
        conversionRate: 3.39,
        revenue: "$1,900",
        roas: 7.10,
        qualityScore: 6,
        adPreview: "/placeholder.svg",
      }
    ]
  };
  
  // In a real implementation, we would fetch this data from the API based on toolId
  const metrics = {
    "google-ads": {
      impressions: 183250,
      clicks: 4920,
      ctr: 2.68,
      cpc: 0.29,
      cost: 1426.80,
      conversions: 194,
      conversionRate: 3.94,
      searchImpressionShare: 72.4,
      qualityScore: 7.6,
      avgPosition: 2.3,
      searchTerms: [
        { term: "summer shoes sale", impressions: 8450, clicks: 485, ctr: 5.74 },
        { term: "discount running shoes", impressions: 6320, clicks: 387, ctr: 6.12 },
        { term: "athletic footwear", impressions: 5240, clicks: 276, ctr: 5.27 },
        { term: "summer collection", impressions: 4780, clicks: 245, ctr: 5.13 },
        { term: "sports shoes", impressions: 3950, clicks: 198, ctr: 5.01 }
      ]
    },
    "bing-ads": {
      impressions: 67120,
      clicks: 2790,
      ctr: 4.16,
      cpc: 0.22,
      cost: 613.80,
      conversions: 103,
      conversionRate: 3.69,
      searchImpressionShare: 56.8,
      qualityScore: 6.8,
      avgPosition: 2.6,
      searchTerms: [
        { term: "discount shoes", impressions: 3250, clicks: 187, ctr: 5.75 },
        { term: "athletic shoes sale", impressions: 2840, clicks: 165, ctr: 5.81 },
        { term: "sports footwear", impressions: 2380, clicks: 132, ctr: 5.55 },
        { term: "running shoes", impressions: 2150, clicks: 118, ctr: 5.49 },
        { term: "shoes online", impressions: 1680, clicks: 87, ctr: 5.18 }
      ]
    }
  };

  let toolName = "Google Ads";
  let currentMetrics = metrics["google-ads"];
  let ads = adsData["google-ads"];
  
  if (toolId === "bing-ads") {
    toolName = "Bing Ads";
    currentMetrics = metrics["bing-ads"];
    ads = adsData["bing-ads"];
  }
  
  const currentAd = ads[currentAdIndex];

  const handleExport = () => {
    // This would handle the export functionality in a real implementation
    console.log(`Exporting ${toolName} data...`);
  };

  const goToNextAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === ads.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPreviousAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{toolName} Dashboard</h2>
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
          title="Impressions" 
          value={currentMetrics.impressions.toLocaleString()} 
          change={8.3} 
          description="Total ad impressions"
        />
        <MetricCard 
          title="Clicks" 
          value={currentMetrics.clicks.toLocaleString()} 
          change={7.5} 
          description="Total ad clicks"
        />
        <MetricCard 
          title="CTR" 
          value={`${currentMetrics.ctr}%`} 
          change={2.1} 
          description="Click-through rate"
        />
        <MetricCard 
          title="Conversions" 
          value={currentMetrics.conversions.toString()} 
          change={9.4} 
          description="Total conversions"
        />
      </div>

      {ads.length > 0 && (
        <section className="mb-6">
          <AdPreviewCard
            currentAd={currentAd}
            onPreviousAd={goToPreviousAd}
            onNextAd={goToNextAd}
          />
        </section>
      )}

      <div className="mb-6">
        <Tabs defaultValue="performance" value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="performance">
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="search-terms">
              <Search className="h-4 w-4 mr-2" />
              Search Terms
            </TabsTrigger>
            <TabsTrigger value="audiences">
              <Users className="h-4 w-4 mr-2" />
              Audiences
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
                  <CardTitle>Impressions & Clicks Over Time</CardTitle>
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
                      title="CPC" 
                      value={`$${currentMetrics.cpc.toFixed(2)}`} 
                      change={-3.2} 
                      description="Cost per click"
                    />
                    <MetricCard 
                      title="Conversion Rate" 
                      value={`${currentMetrics.conversionRate}%`} 
                      change={2.5} 
                      description="Percentage of clicks that convert"
                    />
                    <MetricCard 
                      title="Avg. Position" 
                      value={currentMetrics.avgPosition.toString()} 
                      change={-0.2} 
                      description="Average ad position in results"
                    />
                    <MetricCard 
                      title="Quality Score" 
                      value={currentMetrics.qualityScore.toString()} 
                      change={0.4} 
                      description="Average ad quality score"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="search-terms">
            <Card>
              <CardHeader>
                <CardTitle>Top Search Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Search Term</th>
                        <th className="text-right py-3 px-4">Impressions</th>
                        <th className="text-right py-3 px-4">Clicks</th>
                        <th className="text-right py-3 px-4">CTR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentMetrics.searchTerms.map((term, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4">{term.term}</td>
                          <td className="text-right py-3 px-4">{term.impressions.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{term.clicks.toLocaleString()}</td>
                          <td className="text-right py-3 px-4">{term.ctr}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audiences">
            <Card>
              <CardHeader>
                <CardTitle>Audience Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <PerformanceChart 
                  dateRange={dateRange} 
                  metrics={["impressions", "clicks", "ctr"]}
                />
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
                  <CardTitle>Conversion Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <MetricCard 
                      title="Cost Per Conversion" 
                      value={`$${(currentMetrics.cost / currentMetrics.conversions).toFixed(2)}`} 
                      change={-4.5} 
                      description="Average cost per conversion"
                    />
                    <MetricCard 
                      title="Conversion Rate" 
                      value={`${currentMetrics.conversionRate}%`} 
                      change={2.2} 
                      description="Percentage of clicks that convert"
                    />
                    <MetricCard 
                      title="Search Impression Share" 
                      value={`${currentMetrics.searchImpressionShare}%`} 
                      change={3.6} 
                      description="Share of eligible impressions"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {ads.length > 0 && (
        <section>
          <GoogleAdsTable
            ads={ads}
            currentAdIndex={currentAdIndex}
            onSelectAd={setCurrentAdIndex}
          />
        </section>
      )}
    </div>
  );
};

export default PaidSearchDashboard;
