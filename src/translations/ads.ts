
import type { Language } from "@/hooks/use-language";

// Define types for ads-related translations
export type AdsTranslationKey = 
  | 'metaAds'
  | 'googleAds'
  | 'adPerformance'
  | 'trackOptimize'
  | 'export';

// Ads-related translations
export const adsTranslations: Record<AdsTranslationKey, Record<Language, string>> = {
  metaAds: {
    en: 'Meta Ads',
    de: 'Meta Anzeigen'
  },
  googleAds: {
    en: 'Google Ads',
    de: 'Google Anzeigen'
  },
  adPerformance: {
    en: 'Ad Performance',
    de: 'Anzeigenleistung'
  },
  trackOptimize: {
    en: 'Track and optimize your ad campaigns',
    de: 'Verfolge und optimiere deine Werbekampagnen'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  }
};
