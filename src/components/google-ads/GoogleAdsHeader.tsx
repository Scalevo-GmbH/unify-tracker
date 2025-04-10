
import React from "react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { DateRangeSelector, DateRange } from "@/components/DateRangeSelector";
import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateAdModal } from "./CreateAdModal";
import useTranslation from "@/hooks/use-translation";
import { useIsMobile } from "@/hooks/use-mobile";

interface GoogleAdsHeaderProps {
  dateRange: DateRange;
  onDateRangeChange: (value: DateRange) => void;
}

export const GoogleAdsHeader: React.FC<GoogleAdsHeaderProps> = ({
  dateRange,
  onDateRangeChange,
}) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section className="mb-8">
      <FadeInSection>
        <div className="flex flex-col gap-4 sm:gap-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                <Search className={`${isMobile ? "h-3 w-3" : "h-4 w-4"} text-red-600 dark:text-red-400`} />
                <span className="text-sm font-medium text-red-700 dark:text-red-400">Google Ads</span>
              </div>
              <h1 className="page-title">{t('adPerformance')}</h1>
              <p className="page-description">{t('trackOptimize')}</p>
            </div>
            
            <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-2">
              <DateRangeSelector 
                value={dateRange} 
                onChange={onDateRangeChange} 
              />
              <Button variant="outline" size="sm" className="h-9">
                <Download className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
                {t('export')}
              </Button>
              <CreateAdModal />
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};
