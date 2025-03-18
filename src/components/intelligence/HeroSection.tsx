
import React from "react";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-8 mb-12">
      <div className="relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-6 md:mb-0 md:mr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-cal">
            {t('marketingAiAssistant')}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {t('powerfulAiTool')}
          </p>
          <p className="text-muted-foreground mb-6">
            {t('aiAssistantDescription')}
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder={t('emailPlaceholder')} 
              className="px-4 py-2 rounded-md border border-input bg-background w-full sm:w-auto flex-grow" 
            />
            <Button variant="default">
              {t('joinWaitlist')}
            </Button>
          </form>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-slate-100 rounded-full"></div>
            <div className="absolute inset-4 bg-slate-200 rounded-full"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <Brain className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
