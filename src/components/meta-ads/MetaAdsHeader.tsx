
import React from "react";
import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DateRangeSelector, DateRange } from "@/components/DateRangeSelector";
import { CreateAdModal } from "@/components/meta-ads/CreateAdModal";
import { useTranslation } from "@/hooks/use-translation";

interface MetaAdsHeaderProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export const MetaAdsHeader: React.FC<MetaAdsHeaderProps> = ({ 
  dateRange, 
  onDateRangeChange 
}) => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col gap-4 sm:gap-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <Facebook className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">{t('metaAds')}</span>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">{t('adPerformance')}</h1>
          <p className="text-muted-foreground">{t('trackOptimize')}</p>
        </div>
        
        <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-2">
          <DateRangeSelector 
            value={dateRange} 
            onChange={onDateRangeChange} 
          />
          <Button variant="outline">
            {t('export')}
          </Button>
          <CreateAdModal />
        </div>
      </div>
    </div>
  );
};
