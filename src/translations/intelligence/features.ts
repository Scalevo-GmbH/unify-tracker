
import type { Language } from "@/hooks/use-language";

// Define types for features-related translations
export type FeaturesTranslationKey = 
  | 'whatAiDoes'
  | 'instantInsights'
  | 'instantInsightsDescription'
  | 'realTimeMetrics'
  | 'anomalyDetection'
  | 'comparativeAnalysis'
  | 'automation'
  | 'automationDescription'
  | 'scheduledReports'
  | 'automatedAdjustments'
  | 'budgetOptimization'
  | 'optimization'
  | 'optimizationDescription'
  | 'abTestingInsights'
  | 'creativePerformance'
  | 'audienceTargeting';

// Features translations
export const featuresTranslations: Record<FeaturesTranslationKey, Record<Language, string>> = {
  whatAiDoes: {
    en: 'What Our AI Will Do For You',
    de: 'Was unsere KI für dich tun wird'
  },
  instantInsights: {
    en: 'Instant Insights',
    de: 'Sofortige Erkenntnisse'
  },
  instantInsightsDescription: {
    en: 'Get immediate analysis of your marketing performance across all channels.',
    de: 'Erhalte sofortige Analysen deiner Marketingleistung über alle Kanäle hinweg.'
  },
  realTimeMetrics: {
    en: 'Real-time performance metrics',
    de: 'Leistungskennzahlen in Echtzeit'
  },
  anomalyDetection: {
    en: 'Anomaly detection',
    de: 'Anomalieerkennung'
  },
  comparativeAnalysis: {
    en: 'Comparative analysis',
    de: 'Vergleichende Analyse'
  },
  automation: {
    en: 'Automation',
    de: 'Automatisierung'
  },
  automationDescription: {
    en: 'Automate reporting and uncover opportunities you might have missed.',
    de: 'Automatisiere Berichte und entdecke Möglichkeiten, die du vielleicht übersehen hast.'
  },
  scheduledReports: {
    en: 'Scheduled insight reports',
    de: 'Geplante Erkenntnisberichte'
  },
  automatedAdjustments: {
    en: 'Automated campaign adjustments',
    de: 'Automatisierte Kampagnenanpassungen'
  },
  budgetOptimization: {
    en: 'Budget optimization',
    de: 'Budgetoptimierung'
  },
  optimization: {
    en: 'Optimization',
    de: 'Optimierung'
  },
  optimizationDescription: {
    en: 'Receive personalized recommendations to optimize your campaigns.',
    de: 'Erhalte personalisierte Empfehlungen zur Optimierung deiner Kampagnen.'
  },
  abTestingInsights: {
    en: 'A/B testing insights',
    de: 'A/B-Test-Erkenntnisse'
  },
  creativePerformance: {
    en: 'Creative performance analysis',
    de: 'Analyse der kreativen Leistung'
  },
  audienceTargeting: {
    en: 'Audience targeting suggestions',
    de: 'Vorschläge für Zielgruppenansprache'
  }
};
