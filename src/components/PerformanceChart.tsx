
import React, { useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line
} from "recharts";
import { DateRange } from "@/components/DateRangeSelector";

// Updated data to emphasize reach and clicks
const data = [
  { name: "Jan", reach: 8000, clicks: 420, customers: 240 },
  { name: "Feb", reach: 7500, clicks: 380, customers: 210 },
  { name: "Mar", reach: 9000, clicks: 520, customers: 290 },
  { name: "Apr", reach: 9800, clicks: 620, customers: 350 },
  { name: "May", reach: 10500, clicks: 680, customers: 320 },
  { name: "Jun", reach: 11000, clicks: 710, customers: 310 },
  { name: "Jul", reach: 12400, clicks: 840, customers: 390 },
  { name: "Aug", reach: 12800, clicks: 790, customers: 240 },
  { name: "Sep", reach: 13200, clicks: 860, customers: 210 },
  { name: "Oct", reach: 14500, clicks: 920, customers: 290 },
  { name: "Nov", reach: 15200, clicks: 980, customers: 350 },
  { name: "Dec", reach: 16000, clicks: 1050, customers: 390 },
];

type ChartType = "area" | "bar" | "line";

interface PerformanceChartProps {
  className?: string;
  dateRange?: DateRange;
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ 
  className = "",
  dateRange = "this-month"
}) => {
  const [chartType, setChartType] = useState<ChartType>("area");
  const [timeframe, setTimeframe] = useState<string>("year");

  const getFilteredData = () => {
    console.log("Date range selected:", dateRange);
    return data;
  };

  const filteredData = getFilteredData();

  // Updated brand colors
  const reachColor = "#8B5CF6"; // Purple from our brand colors
  const clicksColor = "#F97316"; // Orange from our brand colors

  const renderChart = () => {
    switch (chartType) {
      case "area":
        return (
          <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={reachColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={reachColor} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={clicksColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={clicksColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
            <Tooltip 
              contentStyle={{ 
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)",
                border: "none",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value.toLocaleString()}`, undefined]}
            />
            <Area 
              type="monotone" 
              dataKey="reach" 
              stroke={reachColor} 
              fillOpacity={1} 
              fill="url(#colorReach)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="clicks" 
              stroke={clicksColor} 
              fillOpacity={1} 
              fill="url(#colorClicks)" 
              strokeWidth={2}
            />
          </AreaChart>
        );
      case "bar":
        return (
          <BarChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)",
                border: "none",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value.toLocaleString()}`, undefined]}
            />
            <Bar dataKey="reach" fill={reachColor} radius={[4, 4, 0, 0]} />
            <Bar dataKey="clicks" fill={clicksColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        );
      case "line":
        return (
          <LineChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)",
                border: "none",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                fontSize: "12px",
              }}
              formatter={(value: number) => [`${value.toLocaleString()}`, undefined]}
            />
            <Line 
              type="monotone" 
              dataKey="reach" 
              stroke={reachColor} 
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="clicks" 
              stroke={clicksColor} 
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`bg-card rounded-xl shadow-subtle p-6 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Ad Performance Metrics</h3>
          <p className="text-sm text-muted-foreground">Comparing Reach and Click Performance</p>
        </div>
        
        <div className="flex flex-wrap mt-4 sm:mt-0 space-x-2">
          <div className="flex bg-secondary rounded-lg overflow-hidden p-1">
            <button
              onClick={() => setChartType("area")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                chartType === "area"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Area
            </button>
            <button
              onClick={() => setChartType("bar")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                chartType === "bar"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Bar
            </button>
            <button
              onClick={() => setChartType("line")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                chartType === "line"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Line
            </button>
          </div>
          
          <div className="flex bg-secondary rounded-lg overflow-hidden p-1">
            <button
              onClick={() => setTimeframe("month")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                timeframe === "month"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setTimeframe("quarter")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                timeframe === "quarter"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Quarter
            </button>
            <button
              onClick={() => setTimeframe("year")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                timeframe === "year"
                  ? "bg-white text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Year
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-[#8B5CF6] mr-2"></div>
          <span className="text-sm font-medium">Reach</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-[#F97316] mr-2"></div>
          <span className="text-sm font-medium">Clicks</span>
        </div>
      </div>
      
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
