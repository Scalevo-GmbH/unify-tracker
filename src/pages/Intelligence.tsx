
import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import HeroSection from "@/components/intelligence/HeroSection";
import FeaturesGrid from "@/components/intelligence/FeaturesGrid";
import CoreFeaturesSection from "@/components/intelligence/CoreFeaturesSection";
import HowItWorksSection from "@/components/intelligence/HowItWorksSection";
import FAQSection from "@/components/intelligence/FAQSection";
import EarlyAccessSection from "@/components/intelligence/EarlyAccessSection";

const Intelligence = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('intelligence')}</h1>
        <p className="text-muted-foreground">
          {t('aiDrivenInsights')}
        </p>
      </div>

      <HeroSection />
      <FeaturesGrid />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <EarlyAccessSection />
    </div>
  );
};

export default Intelligence;
