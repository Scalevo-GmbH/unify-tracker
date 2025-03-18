
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarRange } from "lucide-react";

export type DateRange = "today" | "yesterday" | "this-week" | "last-week" | "this-month" | "last-month" | "this-quarter" | "last-quarter" | "this-year" | "last-year" | "all-time" | "custom";

interface DateRangeSelectorProps {
  value: DateRange;
  onChange: (value: DateRange) => void;
  className?: string;
}

export const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  value,
  onChange,
  className = "",
}) => {
  const handleValueChange = (newValue: string) => {
    onChange(newValue as DateRange);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px] h-9 text-sm">
          <div className="flex items-center gap-2">
            <CalendarRange className="h-4 w-4 text-muted-foreground" />
            <SelectValue placeholder="Select date range" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="yesterday">Yesterday</SelectItem>
          <SelectItem value="this-week">This Week</SelectItem>
          <SelectItem value="last-week">Last Week</SelectItem>
          <SelectItem value="this-month">This Month</SelectItem>
          <SelectItem value="last-month">Last Month</SelectItem>
          <SelectItem value="this-quarter">This Quarter</SelectItem>
          <SelectItem value="last-quarter">Last Quarter</SelectItem>
          <SelectItem value="this-year">This Year</SelectItem>
          <SelectItem value="last-year">Last Year</SelectItem>
          <SelectItem value="all-time">All Time</SelectItem>
          <SelectItem value="custom">Custom Range</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateRangeSelector;
