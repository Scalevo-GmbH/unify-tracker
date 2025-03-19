
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, PieChart, LineChart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useTranslation } from "@/hooks/use-translation";

interface PaidSocialsDashboardProps {
  toolId: string;
}

const PaidSocialsDashboard: React.FC<PaidSocialsDashboardProps> = ({ toolId }) => {
  const [activeSubTab, setActiveSubTab] = useState("performance");
  const { t } = useTranslation();
  
  // In a real implementation, we would fetch this data from the API based on toolId
  const metrics = {
    "meta-ads": {
      reach: 235480,
      impressions: 362140,
      clicks: 8560,
      ctr: 2.36,
      cpc: 0.78,
      frequency: 1.54,
      conversions: 412,
      conversionRate: 4.81,
      cost: 6676.80,
      roas: 3.2,
      demographics: {
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
        placements: [
          { name: "Facebook Feed", value: 45, fill: "#D3E4FD" },
          { name: "Instagram Feed", value: 32, fill: "#E5DEFF" },
          { name: "Stories", value: 18, fill: "#F2FCE2" },
          { name: "Audience Network", value: 5, fill: "#FFDEE2" }
        ]
      }
    },
    "linkedin-ads": {
      reach: 42680,
      impressions: 68420,
      clicks: 1860,
      ctr: 2.72,
      cpc: 3.85,
      frequency: 1.60,
      conversions: 76,
      conversionRate: 4.09,
      cost: 7161.00,
      roas: 2.8,
      demographics: {
        ageGroups: [
          { name: "18-24", value: 5, fill: "#E5DEFF" },
          { name: "25-34", value: 38, fill: "#D3E4FD" },
          { name: "35-44", value: 32, fill: "#F2FCE2" },
          { name: "45-54", value: 18, fill: "#FEC6A1" },
          { name: "55-64", value: 5, fill: "#FFDEE2" },
          { name: "65+", value: 2, fill: "#FEF7CD" }
        ],
        genderData: [
          { name: "Male", value: 52, fill: "#E5DEFF" },
          { name: "Female", value: 46, fill: "#FFDEE2" },
          { name: "Other", value: 2, fill: "#D3E4FD" }
        ],
        placements: [
          { name: "Feed", value: 65, fill: "#D3E4FD" },
          { name: "Sidebar", value: 25, fill: "#E5DEFF" },
          { name: "InMail", value: 10, fill: "#F2FCE2" }
        ]
      }
    },
    "twitter-ads": {
      reach: 105280,
      impressions: 158760,
      clicks: 3280,
      ctr: 2.07,
      cpc: 1.25,
      frequency: 1.51,
      conversions: 142,
      conversionRate: 4.33,
      cost: 4100.00,
      roas: 2.6,
      demographics: {
        ageGroups: [
          { name: "18-24", value: 22, fill: "#E5DEFF" },
          { name: "25-34", value: 32, fill: "#D3E4FD" },
          { name: "35-44", value: 24, fill: "#F2FCE2" },
          { name: "45-54", value: 14, fill: "#FEC6A1" },
          { name: "55-64", value: 6, fill: "#FFDEE2" },
          { name: "65+", value: 2, fill: "#FEF7CD" }
        ],
        genderData: [
          { name: "Male", value: 48, fill: "#E5DEFF" },
          { name: "Female", value: 50, fill: "#FFDEE2" },
          { name: "Other", value: 2, fill: "#D3E4FD" }
        ],
        placements: [
          { name: "Timeline", value: 72, fill: "#D3E4FD" },
          { name: "Profile", value: 18, fill: "#E5DEFF" },
          { name: "Search", value: 10, fill: "#F2FCE2" }
        ]
      }
    }
  };

  let toolName = "Meta Ads";
  let currentMetrics = metrics["meta-ads"];
  
  if (toolId === "linkedin-ads") {
    toolName = "LinkedIn Ads";
    currentMetrics = metrics["linkedin-ads"];
  } else if (toolId === "twitter-ads") {
    toolName = "Twitter Ads";
    currentMetrics = metrics["twitter-ads"];
  }
  
  const dateRange: DateRange = "this-month";

  const handleExport = () => {
    // This would handle the export functionality in a real implementation
    console.log(`Exporting ${toolName} data...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{toolName} Dashboard</h2>
        <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
          <Download className="h-4 w-4" />
          {t('export')}
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Reach" 
          value={currentMetrics.reach.toLocaleString()} 
          change={7.8} 
          description="Unique users reached"
        />
        <MetricCard 
          title="Impressions" 
          value={currentMetrics.impressions.toLocaleString()} 
          change={6.2} 
          description="Total ad impressions"
        />
        <MetricCard 
          title="Frequency" 
          value={currentMetrics.frequency.toFixed(2)} 
          change={-1.5} 
          description="Avg. impressions per user"
        />
        <MetricCard 
          title="Clicks" 
          value={currentMetrics.clicks.toLocaleString()} 
          change={8.4} 
          description="Total ad clicks"
        />
      </div>

      <div className="mb-6">
        <Tabs defaultValue="performance" value={activeSubTab} onValueChange={setActiveSubTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="performance">
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger value="demographics">
              <Users className="h-4 w-4 mr-2" />
              Demographics
            </TabsTrigger>
            <TabsTrigger value="placements">
              <PieChart className="h-4 w-4 mr-2" />
              Placements
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
                  <CardTitle>Reach & Engagement</CardTitle>
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
                      title="CTR" 
                      value={`${currentMetrics.ctr}%`} 
                      change={2.1} 
                      description="Click-through rate"
                    />
                    <MetricCard 
                      title="CPC" 
                      value={`$${currentMetrics.cpc.toFixed(2)}`} 
                      change={-3.2} 
                      description="Cost per click"
                    />
                    <MetricCard 
                      title="Conversions" 
                      value={currentMetrics.conversions.toString()} 
                      change={9.5} 
                      description="Total conversions"
                    />
                    <MetricCard 
                      title="ROAS" 
                      value={`${currentMetrics.roas}x`} 
                      change={5.8} 
                      description="Return on ad spend"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demographics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Age Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsChart>
                        <Pie
                          data={currentMetrics.demographics.ageGroups}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          labelLine={false}
                        >
                          {currentMetrics.demographics.ageGroups.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend 
                          layout="vertical" 
                          verticalAlign="middle" 
                          align="right"
                          iconType="circle"
                          iconSize={8}
                        />
                      </RechartsChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Gender Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsChart>
                        <Pie
                          data={currentMetrics.demographics.genderData}
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                          labelLine={false}
                        >
                          {currentMetrics.demographics.genderData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend 
                          layout="vertical" 
                          verticalAlign="middle" 
                          align="right"
                          iconType="circle"
                          iconSize={8}
                        />
                      </RechartsChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="placements">
            <Card>
              <CardHeader>
                <CardTitle>Ad Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsChart>
                      <Pie
                        data={currentMetrics.demographics.placements}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      >
                        {currentMetrics.demographics.placements.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend 
                        iconType="circle"
                        iconSize={8}
                      />
                    </RechartsChart>
                  </ResponsiveContainer>
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
                  <CardTitle>ROI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 pt-2">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Cost per Conversion</h4>
                      <div className="flex justify-between items-center text-2xl font-semibold">
                        ${(currentMetrics.cost / currentMetrics.conversions).toFixed(2)}
                        <span className="text-sm font-normal text-green-500">
                          4.2% lower than last period
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Conversion Rate</h4>
                      <div className="flex justify-between items-center text-2xl font-semibold">
                        {currentMetrics.conversionRate}%
                        <span className="text-sm font-normal text-green-500">
                          1.8% higher than last period
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Return on Ad Spend</h4>
                      <div className="flex justify-between items-center text-2xl font-semibold">
                        {currentMetrics.roas}x
                        <span className="text-sm font-normal text-green-500">
                          0.5x better than last period
                        </span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        View Full Conversion Analysis
                      </Button>
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

export default PaidSocialsDashboard;
