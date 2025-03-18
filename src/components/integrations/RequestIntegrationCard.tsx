
import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { FadeInSection } from "@/components/animations/FadeInSection";

interface RequestIntegrationCardProps {
  delay: number;
}

export const RequestIntegrationCard: React.FC<RequestIntegrationCardProps> = ({ delay }) => {
  const { t } = useTranslation();

  return (
    <FadeInSection delay={delay}>
      <div className="relative flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-6 shadow-subtle transition-all duration-300 hover:bg-card hover:shadow-card cursor-pointer">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 mb-4">
          <span className="text-lg font-semibold">+</span>
        </div>
        <h3 className="text-base font-medium mb-2">{t('requestIntegration')}</h3>
        <p className="text-sm text-muted-foreground text-center flex-grow">
          {t('requestIntegrationDescription')}
        </p>
        <div className="mt-auto w-full">
          <div className="h-[38px]"></div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default RequestIntegrationCard;
