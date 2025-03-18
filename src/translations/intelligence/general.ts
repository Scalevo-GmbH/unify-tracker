
import type { Language } from "@/hooks/use-language";

// Define types for general intelligence-related translations
export type GeneralTranslationKey = 
  | 'intelligence'
  | 'aiDrivenInsights';

// General translations
export const generalTranslations: Record<GeneralTranslationKey, Record<Language, string>> = {
  intelligence: {
    en: 'Intelligence',
    de: 'Intelligenz'
  },
  aiDrivenInsights: {
    en: 'Powerful AI-driven insights designed to transform your marketing strategy',
    de: 'Leistungsstarke KI-gestützte Erkenntnisse, die deine Marketingstrategie transformieren'
  }
};
