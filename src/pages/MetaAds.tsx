import React, { useState } from "react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRangeSelector, DateRange } from "@/components/DateRangeSelector";
import { ArrowLeft, ArrowRight, Facebook, Users, Eye, MousePointerClick, Target, TrendingUp, User, MapPin, BarChart3, Globe, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, PieChart, Pie, Bar, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, LineChart, Line, CartesianGrid, Area, AreaChart } from "recharts";

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

const demographicsData = {
  ageGroups: [
    { name: "18-24", value: 15, fill: "#E5DEFF" },
    { name: "25-34", value: 35, fill: "#D3E4FD" },
    { name: "35-44", value: 25, fill: "#F2FCE2" },
    { name: "45-54", value: 15, fill: "#FEC6A1" },
    { name: "55-64", value: 8, fill: "#FFDEE2" },
    { name: "65+", value: 2, fill: "#FEF7CD" }
  ],
  genderData: [
    { name: "Male", value: 42, fill: "#E5DEFF" },
    { name: "Female", value: 56, fill: "#FFDEE2" },
    { name: "Other", value: 2, fill: "#D3E4FD" }
  ],
  locationData: [
    { name: "United States", value: 58, fill: "#E5DEFF" },
    { name: "Canada", value: 12, fill: "#D3E4FD" },
    { name: "United Kingdom", value: 10, fill: "#F2FCE2" },
    { name: "Australia", value: 7, fill: "#FEC6A1" },
    { name: "Germany", value: 5, fill: "#FFDEE2" },
    { name: "Other", value: 8, fill: "#FEF7CD" }
  ],
  deviceData: [
    { name: "Mobile", value: 68, fill: "#E5DEFF" },
    { name: "Desktop", value: 28, fill: "#D3E4FD" },
    { name: "Tablet", value: 4, fill: "#F2FCE2" }
  ],
  engagementByAge: [
    { age: "18-24", clicks: 320, impressions: 5400, ctr: 5.9 },
    { age: "25-34", clicks: 580, impressions: 11200, ctr: 5.2 },
    { age: "35-44", clicks: 420, impressions: 8800, ctr: 4.8 },
    { age: "45-54", clicks: 280, impressions: 7200, ctr: 3.9 },
    { age: "55-64", clicks: 140, impressions: 4800, ctr: 2.9 },
    { age: "65+", clicks: 60, impressions: 3200, ctr: 1.9 }
  ]
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="black" textAnchor="middle" dominantBaseline="central" className="text-xs font-medium">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const chartConfig = {
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

const axisStyles = {
  axisLine: false,
  tickLine: false,
  tick: { fill: '#888888', fontSize: 11 },
  style: { opacity: 0.7 }
};

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
          <div className="flex flex-col gap-4 sm:gap-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
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
                  <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={currentAd.adPreview} 
                      alt={`Preview of ${currentAd.name}`} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
                    <MetricCard
                      title="Impressions"
                      value={currentAd.impressions.toLocaleString()}
                      change={12.5}
                      icon={<Eye className="h-4 w-4" />}
                      description="Total number of times your ad was displayed"
                      className="h-full flex flex-col"
                    />
                    <MetricCard
                      title="Reach"
                      value={currentAd.reach.toLocaleString()}
                      change={8.3}
                      icon={<Users className="h-4 w-4" />}
                      description="Unique users who saw your ad"
                      className="h-full flex flex-col"
                    />
                    <MetricCard
                      title="Clicks"
                      value={currentAd.clicks.toLocaleString()}
                      change={15.2}
                      icon={<MousePointerClick className="h-4 w-4" />}
                      description="Number of clicks on your ad"
                      className="h-full flex flex-col"
                    />
                    <MetricCard
                      title="CTR"
                      value={`${currentAd.ctr}%`}
                      change={2.1}
                      icon={<TrendingUp className="h-4 w-4" />}
                      description="Click-through rate (clicks ÷ impressions)"
                      className="h-full flex flex-col"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      </section>

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
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <MetricCard
                    title="Total Reach"
                    value={currentAd.reach.toLocaleString()}
                    icon={<Users className="h-4 w-4" />}
                    description="Unique users who saw your ad"
                    className="h-full"
                  />
                  <MetricCard
                    title="Primary Age Group"
                    value="25-34"
                    icon={<User className="h-4 w-4" />}
                    description="Most engaged age demographic"
                    className="h-full"
                  />
                  <MetricCard
                    title="Gender Split"
                    value="56% F / 42% M"
                    icon={<Users2 className="h-4 w-4" />}
                    description="Female/Male audience ratio"
                    className="h-full"
                  />
                  <MetricCard
                    title="Top Location"
                    value="United States"
                    icon={<MapPin className="h-4 w-4" />}
                    description="Country with highest engagement"
                    className="h-full"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-muted-foreground" />
                        Age Distribution
                      </CardTitle>
                      <CardDescription>
                        Breakdown of audience by age groups
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ChartContainer config={chartConfig} className="w-full h-full">
                          <BarChart
                            data={demographicsData.ageGroups}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <XAxis 
                              dataKey="name" 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: '#888888', fontSize: 11 }}
                              style={{ opacity: 0.7 }}
                            />
                            <YAxis 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: '#888888', fontSize: 11 }}
                              style={{ opacity: 0.7 }}
                            />
                            <Tooltip 
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-background/90 backdrop-blur-sm border border-border/30 p-2.5 rounded-md shadow-lg">
                                      <p className="font-medium">{payload[0].name}</p>
                                      <p className="text-sm text-muted-foreground">{`${payload[0].value}%`}</p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Bar 
                              dataKey="value" 
                              name="Percentage" 
                              radius={[4, 4, 0, 0]}
                              label={{ 
                                position: 'top', 
                                className: 'text-xs font-medium text-muted-foreground',
                                formatter: (value) => `${value}%`
                              }}
                            >
                              {demographicsData.ageGroups.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users2 className="h-5 w-5 text-muted-foreground" />
                        Gender Distribution
                      </CardTitle>
                      <CardDescription>
                        Breakdown of audience by gender
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ChartContainer config={chartConfig} className="w-full h-full">
                          <PieChart>
                            <Pie
                              data={demographicsData.genderData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={renderCustomizedLabel}
                              outerRadius={100}
                              innerRadius={60}
                              fill="#8884d8"
                              dataKey="value"
                              paddingAngle={2}
                            >
                              {demographicsData.genderData.map((entry, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill={entry.fill} 
                                  stroke="rgba(255,255,255,0.5)"
                                  className="hover:opacity-90 transition-opacity"
                                />
                              ))}
                            </Pie>
                            <Tooltip 
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-background/90 backdrop-blur-sm border border-border/30 p-2.5 rounded-md shadow-lg">
                                      <p className="font-medium">{payload[0].name}</p>
                                      <p className="text-sm text-muted-foreground">{`${payload[0].value}%`}</p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Legend 
                              layout="horizontal" 
                              verticalAlign="bottom" 
                              align="center"
                              wrapperStyle={{ paddingTop: "20px" }}
                            />
                          </PieChart>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        Geographic Distribution
                      </CardTitle>
                      <CardDescription>
                        Top locations by audience percentage
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Location</TableHead>
                            <TableHead>Percentage</TableHead>
                            <TableHead>Engagement Rate</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {demographicsData.locationData.map((location) => (
                            <TableRow key={location.name}>
                              <TableCell className="font-medium">{location.name}</TableCell>
                              <TableCell>{location.value}%</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-full max-w-24 bg-muted rounded-full h-2.5">
                                    <div 
                                      className="rounded-full h-2.5" 
                                      style={{ width: `${Math.min(location.value * 1.5, 100)}%`, backgroundColor: location.fill }}
                                    ></div>
                                  </div>
                                  <span className="text-xs text-muted-foreground">{(location.value * 0.1 + 2).toFixed(1)}%</span>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-muted-foreground" />
                        Engagement by Age
                      </CardTitle>
                      <CardDescription>
                        Click-through rates across different age groups
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ChartContainer config={chartConfig} className="w-full h-full">
                          <AreaChart
                            data={demographicsData.engagementByAge}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <defs>
                              <linearGradient id="ctrGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F2FCE2" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#F2FCE2" stopOpacity={0.1}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.2} />
                            <XAxis 
                              dataKey="age" 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: '#888888', fontSize: 11 }}
                              style={{ opacity: 0.7 }}
                            />
                            <YAxis 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: '#888888', fontSize: 11 }}
                              style={{ opacity: 0.7 }}
                            />
                            <Tooltip 
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-background/90 backdrop-blur-sm border border-border/30 p-2.5 rounded-md shadow-lg">
                                      <p className="font-medium">{payload[0].payload.age}</p>
                                      <p className="text-sm text-muted-foreground">CTR: {payload[0].value}%</p>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="ctr" 
                              name="CTR %" 
                              stroke="#9b87f5" 
                              strokeWidth={2}
                              fillOpacity={1} 
                              fill="url(#ctrGradient)" 
                            />
                          </AreaChart>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
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
