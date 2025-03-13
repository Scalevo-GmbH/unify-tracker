
import React, { useState } from "react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRangeSelector, DateRange } from "@/components/DateRangeSelector";
import { ArrowLeft, ArrowRight, Users, Eye, MousePointerClick, Target, TrendingUp, DollarSign, BarChart3, Search, Layers, HelpCircle, PieChart as PieChartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, PieChart, Pie, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart, Area, ResponsiveContainer } from "recharts";

const googleAdsData = [
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

const searchAnalyticsData = {
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
      <section className="mb-8">
        <FadeInSection>
          <div className="flex flex-col gap-4 sm:gap-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                  <Search className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-medium text-red-700 dark:text-red-400">Google Ads</span>
                </div>
                <h1 className="text-3xl font-semibold tracking-tight">Ad Performance</h1>
                <p className="text-muted-foreground">Track and optimize your Google Search and Display ad campaigns.</p>
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
                      change={9.2}
                      icon={<Eye className="h-4 w-4" />}
                      description="Total number of times your ad was displayed"
                      className="h-full flex flex-col"
                    />
                    <MetricCard
                      title="Clicks"
                      value={currentAd.clicks.toLocaleString()}
                      change={12.8}
                      icon={<MousePointerClick className="h-4 w-4" />}
                      description="Number of clicks on your ad"
                      className="h-full flex flex-col"
                    />
                    <MetricCard
                      title="CTR"
                      value={`${currentAd.ctr}%`}
                      change={3.4}
                      icon={<TrendingUp className="h-4 w-4" />}
                      description="Click-through rate (clicks ÷ impressions)"
                      className="h-full flex flex-col"
                    />
                    <MetricCard
                      title="Quality Score"
                      value={currentAd.qualityScore.toString()}
                      change={0.5}
                      icon={<Layers className="h-4 w-4" />}
                      description="Google's rating of the quality of your ads"
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
              <TabsTrigger value="search-analytics">Search Analytics</TabsTrigger>
              <TabsTrigger value="ad-groups">Ad Groups</TabsTrigger>
              <TabsTrigger value="conversions">Conversions</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Impressions & Clicks Over Time</CardTitle>
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
                        change={-4.1}
                        description="Average cost for each click"
                      />
                      <MetricCard
                        title="Conversion Rate"
                        value={`${currentAd.conversionRate}%`}
                        change={2.7}
                        description="Percentage of clicks that result in conversions"
                      />
                      <MetricCard
                        title="ROAS"
                        value={`${currentAd.roas}x`}
                        change={5.2}
                        description="Return on ad spend (revenue ÷ cost)"
                      />
                      <MetricCard
                        title="Avg. Position"
                        value="2.4"
                        change={-0.3}
                        description="Average position of your ad in search results"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="search-analytics">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <MetricCard
                    title="Avg. CPC"
                    value="$0.23"
                    icon={<DollarSign className="h-4 w-4" />}
                    description="Average cost per click"
                    className="h-full"
                  />
                  <MetricCard
                    title="Avg. Position"
                    value="2.4"
                    icon={<Layers className="h-4 w-4" />}
                    description="Average ad position"
                    className="h-full"
                  />
                  <MetricCard
                    title="Impression Share"
                    value="68.5%"
                    icon={<PieChartIcon className="h-4 w-4" />}
                    description="Your impressions / eligible impressions"
                    className="h-full"
                  />
                  <MetricCard
                    title="Quality Score"
                    value="8/10"
                    icon={<Target className="h-4 w-4" />}
                    description="Average quality score"
                    className="h-full"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Search className="h-5 w-5 text-muted-foreground" />
                        Keyword Performance
                      </CardTitle>
                      <CardDescription>
                        Top performing keywords by clicks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Keyword</TableHead>
                            <TableHead>Impressions</TableHead>
                            <TableHead>Clicks</TableHead>
                            <TableHead>CTR</TableHead>
                            <TableHead>CPC</TableHead>
                            <TableHead>Conv.</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {searchAnalyticsData.keywordPerformance.map((keyword) => (
                            <TableRow key={keyword.keyword}>
                              <TableCell className="font-medium">{keyword.keyword}</TableCell>
                              <TableCell>{keyword.impressions.toLocaleString()}</TableCell>
                              <TableCell>{keyword.clicks}</TableCell>
                              <TableCell>{keyword.ctr}%</TableCell>
                              <TableCell>${keyword.cpc}</TableCell>
                              <TableCell>{keyword.conversions}</TableCell>
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
                        Hourly Performance
                      </CardTitle>
                      <CardDescription>
                        Click-through rates by hour of day
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ChartContainer config={chartConfig} className="w-full h-full">
                          <AreaChart
                            data={searchAnalyticsData.hourlyPerformance}
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
                              dataKey="hour" 
                              {...axisStyles}
                            />
                            <YAxis 
                              {...axisStyles}
                            />
                            <Tooltip 
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  return (
                                    <div className="bg-background/90 backdrop-blur-sm border border-border/30 p-2.5 rounded-md shadow-lg">
                                      <p className="font-medium">{payload[0].payload.hour}</p>
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChartIcon className="h-5 w-5 text-muted-foreground" />
                        Ad Group Distribution
                      </CardTitle>
                      <CardDescription>
                        Distribution of clicks by ad group
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ChartContainer config={chartConfig} className="w-full h-full">
                          <PieChart>
                            <Pie
                              data={searchAnalyticsData.adGroupDistribution}
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
                              {searchAnalyticsData.adGroupDistribution.map((entry, index) => (
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

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-muted-foreground" />
                        Quality Score Factors
                      </CardTitle>
                      <CardDescription>
                        Elements affecting your ad quality
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Expected CTR</span>
                            <span className="text-sm font-medium text-green-600">Above Average</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-chart-green h-2.5 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Ad Relevance</span>
                            <span className="text-sm font-medium text-green-600">Above Average</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-chart-blue h-2.5 rounded-full" style={{ width: "80%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Landing Page Experience</span>
                            <span className="text-sm font-medium text-amber-500">Average</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-chart-orange h-2.5 rounded-full" style={{ width: "60%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ad-groups">
              <Card>
                <CardHeader>
                  <CardTitle>Ad Groups</CardTitle>
                  <CardDescription>Performance metrics by ad group</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ad Group</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>CTR</TableHead>
                        <TableHead>CPC</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Conversions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Running Shoes</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Active
                          </span>
                        </TableCell>
                        <TableCell>24,520</TableCell>
                        <TableCell>1,285</TableCell>
                        <TableCell>5.24%</TableCell>
                        <TableCell>$0.18</TableCell>
                        <TableCell>$231.30</TableCell>
                        <TableCell>42</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Athletic Wear</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Active
                          </span>
                        </TableCell>
                        <TableCell>15,780</TableCell>
                        <TableCell>645</TableCell>
                        <TableCell>4.09%</TableCell>
                        <TableCell>$0.22</TableCell>
                        <TableCell>$141.90</TableCell>
                        <TableCell>28</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Training Gear</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                            Paused
                          </span>
                        </TableCell>
                        <TableCell>8,250</TableCell>
                        <TableCell>156</TableCell>
                        <TableCell>1.89%</TableCell>
                        <TableCell>$0.25</TableCell>
                        <TableCell>$39.00</TableCell>
                        <TableCell>3</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Accessories</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            Active
                          </span>
                        </TableCell>
                        <TableCell>4,250</TableCell>
                        <TableCell>84</TableCell>
                        <TableCell>1.98%</TableCell>
                        <TableCell>$0.24</TableCell>
                        <TableCell>$20.16</TableCell>
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
                        change={8.3}
                        icon={<Target className="h-4 w-4" />}
                        description="Total number of completed conversion events"
                      />
                      <MetricCard
                        title="Cost Per Conversion"
                        value={`$${(Number(currentAd.spent.replace('$', '')) / currentAd.conversions).toFixed(2)}`}
                        change={-2.5}
                        description="Average cost for each conversion"
                      />
                      <MetricCard
                        title="Revenue"
                        value={currentAd.revenue}
                        change={12.4}
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
                          <TableCell>53</TableCell>
                          <TableCell>$2,650</TableCell>
                          <TableCell>2.44%</TableCell>
                          <TableCell>$4.12</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Add to Cart</TableCell>
                          <TableCell>108</TableCell>
                          <TableCell>$540</TableCell>
                          <TableCell>4.98%</TableCell>
                          <TableCell>$2.01</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Newsletter Signup</TableCell>
                          <TableCell>64</TableCell>
                          <TableCell>-</TableCell>
                          <TableCell>2.95%</TableCell>
                          <TableCell>$3.38</TableCell>
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
            <h2 className="text-xl font-semibold">All Google Ads</h2>
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
                  {googleAdsData.map(ad => (
                    <TableRow 
                      key={ad.id} 
                      className={currentAdIndex === googleAdsData.indexOf(ad) ? "bg-muted" : ""}
                      onClick={() => setCurrentAdIndex(googleAdsData.indexOf(ad))}
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
