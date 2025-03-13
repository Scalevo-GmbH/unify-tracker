
import React, { useState } from "react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRangeSelector, DateRange } from "@/components/DateRangeSelector"; // Import DateRange type from the component
import { ArrowLeft, ArrowRight, Facebook, Users, Eye, MousePointerClick, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Sample data for Meta Ads
const metaAdsData = [
  {
    id: 1,
    name: "Summer Collection Promotion",
    status: "Active",
    budget: "$500",
    spent: "$320.45",
    impressions: 45800,
    reach: 28500,
    clicks: 1250,
    ctr: 2.73,
    cpc: 0.26,
    conversions: 78,
    conversionRate: 6.24,
    revenue: "$3,540",
    roas: 11.05,
    frequency: 1.6,
    engagement: 2850,
    adPreview: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Winter Sale Announcement",
    status: "Active",
    budget: "$750",
    spent: "$563.20",
    impressions: 68400,
    reach: 42300,
    clicks: 1860,
    ctr: 2.72,
    cpc: 0.30,
    conversions: 95,
    conversionRate: 5.11,
    revenue: "$4,275",
    roas: 7.59,
    frequency: 1.6,
    engagement: 3950,
    adPreview: "/placeholder.svg",
  },
  {
    id: 3,
    name: "New Product Launch",
    status: "Paused",
    budget: "$1000",
    spent: "$876.30",
    impressions: 92500,
    reach: 61200,
    clicks: 3420,
    ctr: 3.70,
    cpc: 0.26,
    conversions: 156,
    conversionRate: 4.56,
    revenue: "$7,800",
    roas: 8.90,
    frequency: 1.5,
    engagement: 5350,
    adPreview: "/placeholder.svg",
  }
];

type DateRange = "today" | "yesterday" | "this-week" | "last-week" | "this-month" | "last-month" | "custom";

export default function MetaAds() {
  // Updated to use the imported DateRange type
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
          <div className="flex flex-col gap-4 sm:gap-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                {/* Updated Meta Ads header styling */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                  <Facebook className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Meta Ads</span>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight">Ad Performance</h1>
                <p className="text-muted-foreground">Track and optimize your Facebook and Instagram ad campaigns.</p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-2">
                <DateRangeSelector 
                  value={dateRange} 
                  onChange={(value) => setDateRange(value)} 
                />
                <Button variant="outline">
                  Export
                </Button>
                <Button>
                  Create New Ad
                </Button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Ad Navigation */}
      <section className="mb-8">
        <FadeInSection>
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{currentAd.name}</CardTitle>
                  <CardDescription className="mt-1.5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      currentAd.status === "Active" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                        : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                    }`}>
                      {currentAd.status}
                    </span>
                    <span className="ml-2 text-muted-foreground">
                      Budget: {currentAd.budget} • Spent: {currentAd.spent}
                    </span>
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={goToPreviousAd}>
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={goToNextAd}>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                    <img 
                      src={currentAd.adPreview} 
                      alt={`Preview of ${currentAd.name}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <MetricCard
                      title="Impressions"
                      value={currentAd.impressions.toLocaleString()}
                      change={12.5}
                      icon={<Eye className="h-4 w-4" />}
                      description="Total number of times your ad was displayed"
                    />
                    <MetricCard
                      title="Reach"
                      value={currentAd.reach.toLocaleString()}
                      change={8.3}
                      icon={<Users className="h-4 w-4" />}
                      description="Unique users who saw your ad"
                    />
                    <MetricCard
                      title="Clicks"
                      value={currentAd.clicks.toLocaleString()}
                      change={15.2}
                      icon={<MousePointerClick className="h-4 w-4" />}
                      description="Number of clicks on your ad"
                    />
                    <MetricCard
                      title="CTR"
                      value={`${currentAd.ctr}%`}
                      change={2.1}
                      icon={<TrendingUp className="h-4 w-4" />}
                      description="Click-through rate (clicks ÷ impressions)"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      </section>

      {/* Detailed Analytics Tabs */}
      <section className="mb-8">
        <FadeInSection>
          <Tabs defaultValue="performance">
            <TabsList className="mb-4">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="demographics">Demographics</TabsTrigger>
              <TabsTrigger value="placements">Placements</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
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
            </TabsContent>

            <TabsContent value="demographics">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>Breakdown of who is engaging with your ad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Demographics data visualization would appear here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="placements">
              <Card>
                <CardHeader>
                  <CardTitle>Ad Placements</CardTitle>
                  <CardDescription>Where your ads are being displayed</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Placement</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>CTR</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Conversions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Facebook Feed</TableCell>
                        <TableCell>24,520</TableCell>
                        <TableCell>685</TableCell>
                        <TableCell>2.79%</TableCell>
                        <TableCell>$175.65</TableCell>
                        <TableCell>42</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Instagram Feed</TableCell>
                        <TableCell>15,780</TableCell>
                        <TableCell>432</TableCell>
                        <TableCell>2.74%</TableCell>
                        <TableCell>$112.32</TableCell>
                        <TableCell>28</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Facebook Right Column</TableCell>
                        <TableCell>3,250</TableCell>
                        <TableCell>56</TableCell>
                        <TableCell>1.72%</TableCell>
                        <TableCell>$16.24</TableCell>
                        <TableCell>3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Instagram Stories</TableCell>
                        <TableCell>2,250</TableCell>
                        <TableCell>77</TableCell>
                        <TableCell>3.42%</TableCell>
                        <TableCell>$16.24</TableCell>
                        <TableCell>5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conversions">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Tracking</CardTitle>
                  <CardDescription>Performance of your conversion objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <MetricCard
                        title="Conversions"
                        value={currentAd.conversions.toString()}
                        change={10.5}
                        icon={<Target className="h-4 w-4" />}
                        description="Total number of completed conversion events"
                      />
                      <MetricCard
                        title="Cost Per Conversion"
                        value={`$${(Number(currentAd.spent.replace('$', '')) / currentAd.conversions).toFixed(2)}`}
                        change={-3.2}
                        description="Average cost for each conversion"
                      />
                      <MetricCard
                        title="Revenue"
                        value={currentAd.revenue}
                        change={15.8}
                        description="Total revenue attributed to this ad"
                      />
                    </div>
                    
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Conversion Type</TableHead>
                          <TableHead>Conversions</TableHead>
                          <TableHead>Value</TableHead>
                          <TableHead>Conv. Rate</TableHead>
                          <TableHead>Cost Per Conv.</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Purchase</TableCell>
                          <TableCell>58</TableCell>
                          <TableCell>$2,842</TableCell>
                          <TableCell>4.64%</TableCell>
                          <TableCell>$5.52</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Add to Cart</TableCell>
                          <TableCell>125</TableCell>
                          <TableCell>$698</TableCell>
                          <TableCell>10.0%</TableCell>
                          <TableCell>$2.56</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Lead Form</TableCell>
                          <TableCell>43</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>3.44%</TableCell>
                          <TableCell>$7.45</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </FadeInSection>
      </section>

      {/* All Ads Table */}
      <section>
        <FadeInSection>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Meta Ads</h2>
            <Button variant="outline" size="sm">
              Manage All Ads
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ad Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Spent</TableHead>
                    <TableHead>Impressions</TableHead>
                    <TableHead>Clicks</TableHead>
                    <TableHead>CTR</TableHead>
                    <TableHead>Conversions</TableHead>
                    <TableHead>ROAS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {metaAdsData.map(ad => (
                    <TableRow 
                      key={ad.id} 
                      className={currentAdIndex === metaAdsData.indexOf(ad) ? "bg-muted" : ""}
                      onClick={() => setCurrentAdIndex(metaAdsData.indexOf(ad))}
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell className="font-medium">{ad.name}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          ad.status === "Active" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                            : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                        }`}>
                          {ad.status}
                        </span>
                      </TableCell>
                      <TableCell>{ad.spent}</TableCell>
                      <TableCell>{ad.impressions.toLocaleString()}</TableCell>
                      <TableCell>{ad.clicks.toLocaleString()}</TableCell>
                      <TableCell>{ad.ctr}%</TableCell>
                      <TableCell>{ad.conversions}</TableCell>
                      <TableCell>{ad.roas}x</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t border-border px-6 py-3">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </FadeInSection>
      </section>
    </div>
  );
}
