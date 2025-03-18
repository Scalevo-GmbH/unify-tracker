
import type { Language } from "@/hooks/use-language";

// Define types for core features translations
export type CoreFeaturesTranslationKey = 
  | 'coreFeatures'
  | 'predictiveAnalysis'
  | 'predictiveAnalysisDescription'
  | 'contentIntelligence'
  | 'contentIntelligenceDescription'
  | 'crossChannelInsights'
  | 'crossChannelInsightsDescription'
  | 'competitiveIntelligence'
  | 'competitiveIntelligenceDescription';

// Core features translations
export const coreFeaturesTranslations: Record<CoreFeaturesTranslationKey, Record<Language, string>> = {
  coreFeatures: {
    en: 'Core Intelligence Features',
    de: 'Kernfunktionen der Intelligenz'
  },
  predictiveAnalysis: {
    en: 'Predictive Analysis',
    de: 'Prädiktive Analyse'
  },
  predictiveAnalysisDescription: {
    en: 'Leverage machine learning to forecast campaign performance, identify trends before they happen, and allocate resources more effectively based on predicted outcomes.',
    de: 'Nutze maschinelles Lernen, um die Kampagnenleistung vorherzusagen, Trends zu identifizieren, bevor sie eintreten, und Ressourcen auf der Grundlage vorhergesagter Ergebnisse effektiver zuzuordnen.'
  },
  contentIntelligence: {
    en: 'Content Intelligence',
    de: 'Content-Intelligenz'
  },
  contentIntelligenceDescription: {
    en: 'AI-powered content analysis to identify which messages resonate with your audience, optimize copy for better engagement, and generate content ideas based on performance.',
    de: 'KI-gestützte Inhaltsanalyse, um zu identifizieren, welche Nachrichten bei deiner Zielgruppe ankommen, Texte für besseres Engagement zu optimieren und Inhaltsideen auf Basis der Leistung zu generieren.'
  },
  crossChannelInsights: {
    en: 'Cross-Channel Insights',
    de: 'Kanalübergreifende Erkenntnisse'
  },
  crossChannelInsightsDescription: {
    en: 'Holistic analysis across all marketing channels to understand customer journeys, identify attribution patterns, and optimize your marketing mix for maximum ROI.',
    de: 'Ganzheitliche Analyse über alle Marketingkanäle hinweg, um Kundenreisen zu verstehen, Attributionsmuster zu identifizieren und deinen Marketing-Mix für maximalen ROI zu optimieren.'
  },
  competitiveIntelligence: {
    en: 'Competitive Intelligence',
    de: 'Wettbewerbsintelligenz'
  },
  competitiveIntelligenceDescription: {
    en: 'Analyze competitor strategies, benchmark your performance against industry standards, and identify market gaps and opportunities for your brand to capitalize on.',
    de: 'Analysiere Wettbewerbsstrategien, vergleiche deine Leistung mit Branchenstandards und identifiziere Marktlücken und Chancen, die deine Marke nutzen kann.'
  }
};
