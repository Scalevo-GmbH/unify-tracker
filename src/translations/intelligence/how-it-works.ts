
import type { Language } from "@/hooks/use-language";

// Define types for how it works translations
export type HowItWorksTranslationKey = 
  | 'howItWorks'
  | 'connectData'
  | 'connectDataDescription'
  | 'aiAnalysis'
  | 'aiAnalysisDescription'
  | 'getRecommendations'
  | 'getRecommendationsDescription';

// How it works translations
export const howItWorksTranslations: Record<HowItWorksTranslationKey, Record<Language, string>> = {
  howItWorks: {
    en: 'How It Works',
    de: 'Wie es funktioniert'
  },
  connectData: {
    en: 'Connect Your Data',
    de: 'Verbinde deine Daten'
  },
  connectDataDescription: {
    en: 'Our AI integrates with all your marketing platforms including Google Ads, Meta, Email services, and analytics tools to create a unified view of your marketing ecosystem.',
    de: 'Unsere KI integriert sich mit all deinen Marketingplattformen, einschließlich Google Ads, Meta, E-Mail-Diensten und Analysetools, um eine einheitliche Ansicht deines Marketing-Ökosystems zu schaffen.'
  },
  aiAnalysis: {
    en: 'AI Analysis',
    de: 'KI-Analyse'
  },
  aiAnalysisDescription: {
    en: 'Advanced algorithms analyze patterns and trends across historical and real-time data, applying machine learning models trained on marketing performance data across industries.',
    de: 'Fortschrittliche Algorithmen analysieren Muster und Trends in historischen und Echtzeit-Daten und wenden maschinelle Lernmodelle an, die mit Marketingleistungsdaten aus verschiedenen Branchen trainiert wurden.'
  },
  getRecommendations: {
    en: 'Get Recommendations',
    de: 'Empfehlungen erhalten'
  },
  getRecommendationsDescription: {
    en: 'Receive actionable insights tailored to your specific business goals, with clear explanations of why each recommendation matters and how to implement it effectively.',
    de: 'Erhalte umsetzbare Erkenntnisse, die auf deine spezifischen Geschäftsziele zugeschnitten sind, mit klaren Erklärungen, warum jede Empfehlung wichtig ist und wie du sie effektiv umsetzen kannst.'
  }
};
