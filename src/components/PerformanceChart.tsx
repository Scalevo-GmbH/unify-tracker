
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

const data = [
  { name: "Jan", reach: 8000, impressions: 12000, customers: 240 },
  { name: "Feb", reach: 7500, impressions: 11500, customers: 210 },
  { name: "Mar", reach: 9000, impressions: 14000, customers: 290 },
  { name: "Apr", reach: 9800, impressions: 15200, customers: 350 },
  { name: "May", reach: 10500, impressions: 16500, customers: 320 },
  { name: "Jun", reach: 11000, impressions: 17200, customers: 310 },
  { name: "Jul", reach: 12400, impressions: 19000, customers: 390 },
  { name: "Aug", reach: 12800, impressions: 20100, customers: 240 },
  { name: "Sep", reach: 13200, impressions: 21500, customers: 210 },
  { name: "Oct", reach: 14500, impressions: 23800, customers: 290 },
  { name: "Nov", reach: 15200, impressions: 25000, customers: 350 },
  { name: "Dec", reach: 16000, impressions: 27000, customers: 390 },
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

  const renderChart = () => {
    switch (chartType) {
      case "area":
        return (
          <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
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
              stroke="#3B82F6" 
              fillOpacity={1} 
              fill="url(#colorReach)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="impressions" 
              stroke="#8B5CF6" 
              fillOpacity={1} 
              fill="url(#colorImpressions)" 
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
            <Bar dataKey="reach" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="impressions" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
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
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="impressions" 
              stroke="#8B5CF6" 
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
          <h3 className="text-lg font-semibold">Platform Performance</h3>
          <p className="text-sm text-muted-foreground">Combined Reach & Impressions Across All Tools</p>
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
          <div className="h-3 w-3 rounded-full bg-marketing-blue mr-2"></div>
          <span className="text-sm font-medium">Reach</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-marketing-purple mr-2"></div>
          <span className="text-sm font-medium">Impressions</span>
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
