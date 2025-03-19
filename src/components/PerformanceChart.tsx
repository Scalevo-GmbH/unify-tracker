
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Bar, BarChart } from "recharts";
import { DateRange } from "@/components/DateRangeSelector";

const generateData = (dateRange: DateRange) => {
  let days = 7;
  if (dateRange === "this-month") days = 30;
  if (dateRange === "last-month") days = 30;
  if (dateRange === "last-3-months") days = 90;
  if (dateRange === "year-to-date") days = 180;
  if (dateRange === "last-year") days = 365;
  
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - i - 1));
    
    // Generate random data with some trends
    const baseImpressions = 1000 + Math.random() * 500;
    const trend = Math.sin((i / days) * Math.PI * 2) * 0.3 + 0.7; // Create a sinusoidal trend
    const dayOfWeek = date.getDay();
    const weekendEffect = (dayOfWeek === 0 || dayOfWeek === 6) ? 0.7 : 1; // Less activity on weekends
    
    const impressions = Math.round(baseImpressions * trend * weekendEffect);
    const clicks = Math.round(impressions * (0.02 + Math.random() * 0.03)); // 2-5% CTR
    const conversions = Math.round(clicks * (0.03 + Math.random() * 0.05)); // 3-8% conversion rate
    
    return {
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      impressions,
      clicks,
      conversions,
      ctr: ((clicks / impressions) * 100).toFixed(2),
      cpc: ((2 + Math.random() * 1.5)).toFixed(2),
      cost: Math.round(clicks * (2 + Math.random() * 1.5)),
      revenue: Math.round(conversions * (50 + Math.random() * 30)),
    };
  });
};

interface PerformanceChartProps {
  dateRange: DateRange;
  chartType?: "line" | "bar";
  metrics?: Array<"impressions" | "clicks" | "conversions" | "ctr" | "cpc" | "cost" | "revenue">;
  colors?: Record<string, string>;
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({
  dateRange,
  chartType = "line",
  metrics = ["clicks", "impressions"],
  colors = {
    impressions: "#D3E4FD",
    clicks: "#9b87f5",
    conversions: "#58cc8f",
    ctr: "#ffc658",
    cpc: "#ff8042",
    cost: "#ff6b6b",
    revenue: "#82ca9d"
  }
}) => {
  const data = generateData(dateRange);
  
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value;
  };

  if (chartType === "bar") {
    return (
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12, fill: '#888' }}
              tickLine={{ stroke: '#eee' }}
              axisLine={{ stroke: '#eee' }} 
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#888' }}
              tickFormatter={formatYAxis}
              tickLine={{ stroke: '#eee' }}
              axisLine={{ stroke: '#eee' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                border: '1px solid #f3f4f6'
              }}
              formatter={(value) => [`${value}`, '']}
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="circle"
              iconSize={8}
            />
            {metrics.map(metric => (
              <Bar 
                key={metric}
                dataKey={metric} 
                name={metric.charAt(0).toUpperCase() + metric.slice(1)} 
                fill={colors[metric]} 
                barSize={20}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12, fill: '#888' }}
            tickLine={{ stroke: '#eee' }}
            axisLine={{ stroke: '#eee' }} 
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#888' }}
            tickFormatter={formatYAxis} 
            tickLine={{ stroke: '#eee' }}
            axisLine={{ stroke: '#eee' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid #f3f4f6'
            }}
            formatter={(value) => [`${value}`, '']}
          />
          <Legend 
            verticalAlign="top" 
            height={36}
            iconType="circle"
            iconSize={8}
          />
          {metrics.map(metric => (
            <Line
              key={metric}
              type="monotone"
              dataKey={metric}
              name={metric.charAt(0).toUpperCase() + metric.slice(1)}
              stroke={colors[metric]}
              activeDot={{ r: 6 }}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
