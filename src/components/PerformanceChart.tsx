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
  { name: "Jan", revenue: 4000, profit: 2400, customers: 240 },
  { name: "Feb", revenue: 3000, profit: 1398, customers: 210 },
  { name: "Mar", revenue: 2000, profit: 9800, customers: 290 },
  { name: "Apr", revenue: 2780, profit: 3908, customers: 350 },
  { name: "May", revenue: 1890, profit: 4800, customers: 320 },
  { name: "Jun", revenue: 2390, profit: 3800, customers: 310 },
  { name: "Jul", revenue: 3490, profit: 4300, customers: 390 },
  { name: "Aug", revenue: 4000, profit: 2400, customers: 240 },
  { name: "Sep", revenue: 3000, profit: 1398, customers: 210 },
  { name: "Oct", revenue: 2000, profit: 9800, customers: 290 },
  { name: "Nov", revenue: 2780, profit: 3908, customers: 350 },
  { name: "Dec", revenue: 3490, profit: 4300, customers: 390 },
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
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
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
              tickFormatter={(value) => `$${value}`}
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
              formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6" 
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="profit" 
              stroke="#8B5CF6" 
              fillOpacity={1} 
              fill="url(#colorProfit)" 
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
              tickFormatter={(value) => `$${value}`}
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
              formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
            />
            <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="profit" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
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
              tickFormatter={(value) => `$${value}`}
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
              formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3B82F6" 
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="profit" 
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
          <h3 className="text-lg font-semibold">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Revenue vs. Profit Analysis</p>
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
          <span className="text-sm font-medium">Revenue</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-marketing-purple mr-2"></div>
          <span className="text-sm font-medium">Profit</span>
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
