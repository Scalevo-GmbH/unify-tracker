
import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import FadeInSection from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

const FAQSection = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <FadeInSection delay={450}>
      <div className="mb-12 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        <h3 className="text-2xl font-bold mb-4">{t('faq')}</h3>
        
        <div className="space-y-4">
          <Collapsible 
            open={isOpen} 
            onOpenChange={setIsOpen}
            className="border border-gray-200 rounded-md overflow-hidden"
          >
            <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
              <span>{t('faqWhenAvailable')}</span>
              <span>{isOpen ? '−' : '+'}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
              {t('faqWhenAvailableAnswer')}
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="border border-gray-200 rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
              <span>{t('faqPlatforms')}</span>
              <span>+</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
              {t('faqPlatformsAnswer')}
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="border border-gray-200 rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
              <span>{t('faqRecommendations')}</span>
              <span>+</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
              {t('faqRecommendationsAnswer')}
            </CollapsibleContent>
          </Collapsible>
          
          <Collapsible className="border border-gray-200 rounded-md overflow-hidden">
            <CollapsibleTrigger className="flex justify-between w-full p-4 text-left font-medium hover:bg-gray-50">
              <span>{t('faqAutomation')}</span>
              <span>+</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 bg-gray-50 text-muted-foreground text-sm">
              {t('faqAutomationAnswer')}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </FadeInSection>
  );
};

export default FAQSection;
