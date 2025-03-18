
import React from "react";
import { Zap, Bot, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";
import FadeInSection from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

const FeaturesGrid = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <FadeInSection>
        <h3 className="text-2xl font-bold mb-6 text-center">{t('whatAiDoes')}</h3>
      </FadeInSection>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FeatureCard 
          icon={Zap}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
          titleKey="instantInsights"
          descriptionKey="instantInsightsDescription"
          featureItems={['realTimeMetrics', 'anomalyDetection', 'comparativeAnalysis']}
          bulletColor="text-purple-500"
          delay={100}
        />
        
        <FeatureCard 
          icon={Bot}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
          titleKey="automation"
          descriptionKey="automationDescription"
          featureItems={['scheduledReports', 'automatedAdjustments', 'budgetOptimization']}
          bulletColor="text-blue-500"
          delay={200}
        />
        
        <FeatureCard 
          icon={Sparkles}
          iconColor="text-pink-600"
          iconBgColor="bg-pink-100"
          titleKey="optimization"
          descriptionKey="optimizationDescription"
          featureItems={['abTestingInsights', 'creativePerformance', 'audienceTargeting']}
          bulletColor="text-pink-500"
          delay={300}
        />
      </div>
    </>
  );
};

export default FeaturesGrid;
