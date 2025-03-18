
import React from "react";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

const EarlyAccessSection = () => {
  const { t } = useTranslation();
  
  return (
    <FadeInSection delay={500}>
      <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4">{t('earlyAccess')}</h3>
        <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
          {t('earlyAccessDescription')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder={t('emailPlaceholder')} 
            className="px-4 py-2 rounded-md border border-gray-300 w-full" 
          />
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            {t('joinWaitlist')}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          {t('privacyNote')}
        </p>
      </div>
    </FadeInSection>
  );
};

export default EarlyAccessSection;
