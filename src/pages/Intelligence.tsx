
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Zap, 
  Bot, 
  Sparkles, 
  MessageSquareCode, 
  Network, 
  Search,
  ChartPie
} from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useTranslation } from "@/hooks/use-translation";

const Intelligence = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('intelligence')}</h1>
        <p className="text-muted-foreground">
          {t('aiDrivenInsights')}
        </p>
      </div>

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

      <FadeInSection>
        <h3 className="text-2xl font-bold mb-6 text-center">{t('whatAiDoes')}</h3>
      </FadeInSection>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <FadeInSection delay={100}>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('instantInsights')}</h3>
              <p className="text-muted-foreground mb-3">
                {t('instantInsightsDescription')}
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  {t('realTimeMetrics')}
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  {t('anomalyDetection')}
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-purple-500">•</span>
                  {t('comparativeAnalysis')}
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeInSection>

        <FadeInSection delay={200}>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Bot className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('automation')}</h3>
              <p className="text-muted-foreground mb-3">
                {t('automationDescription')}
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  {t('scheduledReports')}
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  {t('automatedAdjustments')}
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-blue-500">•</span>
                  {t('budgetOptimization')}
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeInSection>

        <FadeInSection delay={300}>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="mb-4 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('optimization')}</h3>
              <p className="text-muted-foreground mb-3">
                {t('optimizationDescription')}
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center">
                  <span className="mr-2 text-pink-500">•</span>
                  {t('abTestingInsights')}
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-pink-500">•</span>
                  {t('creativePerformance')}
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-pink-500">•</span>
                  {t('audienceTargeting')}
                </li>
              </ul>
            </CardContent>
          </Card>
        </FadeInSection>
      </div>

      <FadeInSection delay={350}>
        <div className="bg-slate-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('coreFeatures')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                  <Search className="h-5 w-5 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">{t('predictiveAnalysis')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('predictiveAnalysisDescription')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <MessageSquareCode className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle className="text-lg">{t('contentIntelligence')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('contentIntelligenceDescription')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                  <ChartPie className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{t('crossChannelInsights')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('crossChannelInsightsDescription')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <Network className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">{t('competitiveIntelligence')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t('competitiveIntelligenceDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </FadeInSection>

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
    </div>
  );
};

export default Intelligence;
