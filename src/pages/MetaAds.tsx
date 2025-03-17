
import React, { useState } from "react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { DateRange } from "@/components/DateRangeSelector";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import meta ads components
import { MetaAdsHeader } from "@/components/meta-ads/MetaAdsHeader";
import { AdPreviewCard } from "@/components/meta-ads/AdPreviewCard";
import { PerformanceTab } from "@/components/meta-ads/PerformanceTab";
import { DemographicsTab } from "@/components/meta-ads/DemographicsTab";
import { PlacementsTab } from "@/components/meta-ads/PlacementsTab";
import { ConversionsTab } from "@/components/meta-ads/ConversionsTab";
import { AdsTable } from "@/components/meta-ads/AdsTable";
import { metaAdsData } from "@/components/meta-ads/data";

export default function MetaAds() {
  const [dateRange, setDateRange] = useState<DateRange>("this-month");
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const currentAd = metaAdsData[currentAdIndex];
  
  const goToNextAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === metaAdsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPreviousAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === 0 ? metaAdsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <FadeInSection>
          <MetaAdsHeader 
            dateRange={dateRange}
            onDateRangeChange={(value) => setDateRange(value as DateRange)}
          />
        </FadeInSection>
      </section>

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
          <Tabs defaultValue="performance">
            <TabsList className="mb-4 dashboard-tabs">
              <TabsTrigger value="performance" className="dashboard-tab">Performance</TabsTrigger>
              <TabsTrigger value="demographics" className="dashboard-tab">Demographics</TabsTrigger>
              <TabsTrigger value="placements" className="dashboard-tab">Placements</TabsTrigger>
              <TabsTrigger value="conversions" className="dashboard-tab">Conversions</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <PerformanceTab currentAd={currentAd} dateRange={dateRange} />
            </TabsContent>

            <TabsContent value="demographics">
              <DemographicsTab currentAd={currentAd} />
            </TabsContent>

            <TabsContent value="placements">
              <PlacementsTab />
            </TabsContent>

            <TabsContent value="conversions">
              <ConversionsTab currentAd={currentAd} />
            </TabsContent>
          </Tabs>
        </FadeInSection>
      </section>

      <section>
        <FadeInSection>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Meta Ads</h2>
            <Button variant="outline" size="sm">
              Manage All Ads
            </Button>
          </div>
          
          <AdsTable 
            ads={metaAdsData}
            currentAdIndex={currentAdIndex}
            onSelectAd={setCurrentAdIndex}
          />
        </FadeInSection>
      </section>
    </div>
  );
}
