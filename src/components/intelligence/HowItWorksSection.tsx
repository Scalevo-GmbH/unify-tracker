
import React from "react";
import { MessageSquareCode, Network } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

const HowItWorksSection = () => {
  const { t } = useTranslation();
  
  return (
    <FadeInSection delay={400}>
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">{t('howItWorks')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h4 className="font-semibold">{t('connectData')}</h4>
                  <p className="text-muted-foreground">{t('connectDataDescription')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h4 className="font-semibold">{t('aiAnalysis')}</h4>
                  <p className="text-muted-foreground">{t('aiAnalysisDescription')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-4 bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h4 className="font-semibold">{t('getRecommendations')}</h4>
                  <p className="text-muted-foreground">{t('getRecommendationsDescription')}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-purple-900 flex items-center justify-center">
                <MessageSquareCode className="w-16 h-16 text-white opacity-30" />
                <Network className="w-24 h-24 text-white opacity-20 absolute -bottom-4 -right-4" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="w-full bg-black bg-opacity-50 p-4 rounded-md border border-gray-700">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-green-400 font-mono text-sm">
                    <p>$ analyzing data...</p>
                    <p>$ discovering patterns...</p>
                    <p className="animate-pulse">$ generating insights_</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default HowItWorksSection;
