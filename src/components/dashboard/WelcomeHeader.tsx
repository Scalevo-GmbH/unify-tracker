
import React from "react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import DateRangeSelector, { DateRange } from "@/components/DateRangeSelector";
import { useTranslation } from "@/hooks/use-translation";

interface WelcomeHeaderProps {
  userName: string;
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  userName,
  dateRange,
  onDateRangeChange,
}) => {
  const { t } = useTranslation();

  return (
    <FadeInSection>
      <div className="flex flex-col gap-4 sm:gap-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary font-medium px-3 py-1 rounded-full text-sm">
              <span className="text-lg animate-delayed-shake inline-block">👋</span> {t('welcomeBack')}, <span className="font-cal">{userName}</span>!
            </div>
            <h1 className="page-title">{t('marketingDashboard')}</h1>
            <p className="page-description">{t('trackOptimizePerformance')}</p>
          </div>
          
          <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-2">
            <DateRangeSelector 
              value={dateRange} 
              onChange={onDateRangeChange} 
            />
            <Button variant="outline" className="cal-button">
              {t('export')}
            </Button>
            <Button className="cal-button">
              {t('newCampaign')}
            </Button>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default WelcomeHeader;
