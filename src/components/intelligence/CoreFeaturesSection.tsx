
import React from "react";
import { Search, MessageSquareCode, ChartPie, Network } from "lucide-react";
import CoreFeatureCard from "./CoreFeatureCard";
import FadeInSection from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

const CoreFeaturesSection = () => {
  const { t } = useTranslation();
  
  return (
    <FadeInSection delay={350}>
      <div className="bg-slate-50 rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">{t('coreFeatures')}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CoreFeatureCard 
            icon={Search}
            iconColor="text-indigo-600"
            iconBgColor="bg-indigo-100"
            titleKey="predictiveAnalysis"
            descriptionKey="predictiveAnalysisDescription"
          />
          
          <CoreFeatureCard 
            icon={MessageSquareCode}
            iconColor="text-green-600"
            iconBgColor="bg-green-100"
            titleKey="contentIntelligence"
            descriptionKey="contentIntelligenceDescription"
          />
          
          <CoreFeatureCard 
            icon={ChartPie}
            iconColor="text-orange-600"
            iconBgColor="bg-orange-100"
            titleKey="crossChannelInsights"
            descriptionKey="crossChannelInsightsDescription"
          />
          
          <CoreFeatureCard 
            icon={Network}
            iconColor="text-purple-600"
            iconBgColor="bg-purple-100"
            titleKey="competitiveIntelligence"
            descriptionKey="competitiveIntelligenceDescription"
          />
        </div>
      </div>
    </FadeInSection>
  );
};

export default CoreFeaturesSection;
