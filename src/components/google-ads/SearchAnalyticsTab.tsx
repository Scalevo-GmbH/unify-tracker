
import React from "react";
import { Search, BarChart3, PieChart as PieChartIcon, Target, DollarSign, Layers, HelpCircle } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface SearchAnalyticsTabProps {
  searchAnalyticsData: {
    keywordPerformance: Array<{
      keyword: string;
      impressions: number;
      clicks: number;
      ctr: number;
      cpc: number;
      conversions: number;
    }>;
    adGroupDistribution: Array<{
      name: string;
      value: number;
      fill: string;
    }>;
    deviceData: Array<{
      name: string;
      value: number;
      fill: string;
    }>;
    hourlyPerformance: Array<{
      hour: string;
      impressions: number;
      clicks: number;
      ctr: number;
    }>;
  };
  chartConfig: {
    clicks: {
      label: string;
      color: string;
    };
    impressions: {
      label: string;
      color: string;
    };
    ctr: {
      label: string;
      color: string;
    };
  };
}

export const SearchAnalyticsTab: React.FC<SearchAnalyticsTabProps> = ({
  searchAnalyticsData,
  chartConfig,
}) => {
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

  const axisStyles = {
    axisLine: false,
    tickLine: false,
    tick: { fill: '#888888', fontSize: 11 },
    style: { opacity: 0.7 }
  };

  return (
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
  );
};
