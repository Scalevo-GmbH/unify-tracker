
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export type DateRange = "today" | "yesterday" | "last-7-days" | "last-30-days" | "this-month" | "last-month" | "custom";

interface DateRangeSelectorProps {
  value: DateRange;
  onChange: (value: DateRange) => void;
}

export const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative w-[180px]">
      <Select value={value} onValueChange={onChange as any}>
        <SelectTrigger className="w-full bg-card border-border focus:ring-primary/20 h-10">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            <SelectValue placeholder={t('thisMonth')} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">{t('today')}</SelectItem>
          <SelectItem value="yesterday">{t('yesterday')}</SelectItem>
          <SelectItem value="last-7-days">{t('lastSevenDays')}</SelectItem>
          <SelectItem value="last-30-days">{t('lastThirtyDays')}</SelectItem>
          <SelectItem value="this-month">{t('thisMonth')}</SelectItem>
          <SelectItem value="last-month">{t('lastMonth')}</SelectItem>
          <SelectItem value="custom">{t('custom')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateRangeSelector;
