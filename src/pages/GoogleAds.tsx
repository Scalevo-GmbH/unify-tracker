
import React, { useState } from "react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { DateRange } from "@/components/DateRangeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GoogleAdsHeader } from "@/components/google-ads/GoogleAdsHeader";
import { AdPreviewCard } from "@/components/google-ads/AdPreviewCard";
import { PerformanceTab } from "@/components/google-ads/PerformanceTab";
import { SearchAnalyticsTab } from "@/components/google-ads/SearchAnalyticsTab";
import { AdGroupsTab } from "@/components/google-ads/AdGroupsTab";
import { ConversionsTab } from "@/components/google-ads/ConversionsTab";
import { GoogleAdsTable } from "@/components/google-ads/GoogleAdsTable";
import { Ad, SearchAnalyticsData, ChartConfig } from "@/components/google-ads/types";

const googleAdsData: Ad[] = [
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
];

const searchAnalyticsData: SearchAnalyticsData = {
  keywordPerformance: [
    { keyword: "summer sale shoes", impressions: 12500, clicks: 620, ctr: 4.96, cpc: 0.18, conversions: 31 },
    { keyword: "discount running shoes", impressions: 9800, clicks: 485, ctr: 4.95, cpc: 0.22, conversions: 24 },
    { keyword: "athletic footwear sale", impressions: 7650, clicks: 320, ctr: 4.18, cpc: 0.19, conversions: 18 },
    { keyword: "shoes online shop", impressions: 6200, clicks: 245, ctr: 3.95, cpc: 0.25, conversions: 12 },
    { keyword: "best price sneakers", impressions: 5100, clicks: 198, ctr: 3.88, cpc: 0.27, conversions: 9 }
  ],
  adGroupDistribution: [
    { name: "Running Shoes", value: 42, fill: "#E5DEFF" },
    { name: "Athletic Wear", value: 28, fill: "#D3E4FD" },
    { name: "Training Gear", value: 18, fill: "#F2FCE2" },
    { name: "Accessories", value: 12, fill: "#FFDEE2" }
  ],
  deviceData: [
    { name: "Mobile", value: 62, fill: "#E5DEFF" },
    { name: "Desktop", value: 31, fill: "#D3E4FD" },
    { name: "Tablet", value: 7, fill: "#F2FCE2" }
  ],
  hourlyPerformance: [
    { hour: "00:00", impressions: 520, clicks: 15, ctr: 2.88 },
    { hour: "03:00", impressions: 380, clicks: 9, ctr: 2.37 },
    { hour: "06:00", impressions: 740, clicks: 22, ctr: 2.97 },
    { hour: "09:00", impressions: 3250, clicks: 168, ctr: 5.17 },
    { hour: "12:00", impressions: 4800, clicks: 242, ctr: 5.04 },
    { hour: "15:00", impressions: 5200, clicks: 275, ctr: 5.29 },
    { hour: "18:00", impressions: 4100, clicks: 224, ctr: 5.46 },
    { hour: "21:00", impressions: 2800, clicks: 132, ctr: 4.71 }
  ]
};

const chartConfig: ChartConfig = {
  clicks: {
    label: "Clicks",
    color: "#9b87f5",
  },
  impressions: {
    label: "Impressions",
    color: "#D3E4FD",
  },
  ctr: {
    label: "CTR",
    color: "#F2FCE2",
  },
};

export default function GoogleAds() {
  const [dateRange, setDateRange] = useState<DateRange>("this-month");
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const currentAd = googleAdsData[currentAdIndex];
  
  const goToNextAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === googleAdsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPreviousAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === 0 ? googleAdsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <GoogleAdsHeader 
        dateRange={dateRange} 
        onDateRangeChange={(value) => setDateRange(value)} 
      />

      <section className="mb-8">
        <FadeInSection>
          <AdPreviewCard
            currentAd={currentAd}
            onNextAd={goToNextAd}
            onPreviousAd={goToPreviousAd}
          />
        </FadeInSection>
      </section>

      <section className="mb-8">
        <FadeInSection>
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="search-analytics">Search Analytics</TabsTrigger>
              <TabsTrigger value="ad-groups">Ad Groups</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <PerformanceTab 
                currentAd={currentAd} 
                dateRange={dateRange} 
              />
            </TabsContent>

            <TabsContent value="search-analytics">
              <SearchAnalyticsTab 
                searchAnalyticsData={searchAnalyticsData}
                chartConfig={chartConfig}
              />
            </TabsContent>

            <TabsContent value="ad-groups">
              <AdGroupsTab />
            </TabsContent>

            <TabsContent value="conversions">
              <ConversionsTab currentAd={currentAd} />
            </TabsContent>
          </Tabs>
        </FadeInSection>
      </section>

      <section>
        <FadeInSection>
          <GoogleAdsTable
            ads={googleAdsData}
            currentAdIndex={currentAdIndex}
            onSelectAd={setCurrentAdIndex}
          />
        </FadeInSection>
      </section>
    </div>
  );
}
