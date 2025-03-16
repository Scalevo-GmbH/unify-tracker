
import React from "react";
import { User, Users2, MapPin, BarChart3, Globe } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, PieChart, Pie, Bar, Cell, XAxis, YAxis, Tooltip, Legend, AreaChart, CartesianGrid, Area } from "recharts";

// Data for demographics charts and tables
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

export const DemographicsTab: React.FC<{ currentAd: any }> = ({ currentAd }) => {
  return (
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
  );
};
