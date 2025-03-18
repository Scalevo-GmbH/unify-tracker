
import type { Language } from "@/hooks/use-language";

// Define types for ads-related translations
export type AdsTranslationKey = 
  | 'metaAds'
  | 'googleAds'
  | 'adPerformance'
  | 'trackOptimize'
  | 'export'
  | 'performanceMetrics'
  | 'reachVsClicks'
  | 'keyMetrics'
  | 'costPerClick'
  | 'conversionRate'
  | 'roas'
  | 'frequency'
  | 'avgCostPerClick'
  | 'clicksToConversions'
  | 'returnOnAdSpend'
  | 'avgTimesSeenPerPerson';

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
  },
  performanceMetrics: {
    en: 'Performance Metrics',
    de: 'Leistungskennzahlen'
  },
  reachVsClicks: {
    en: 'Reach vs Clicks',
    de: 'Reichweite vs. Klicks'
  },
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Wichtige Kennzahlen'
  },
  costPerClick: {
    en: 'Cost Per Click',
    de: 'Kosten pro Klick'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  roas: {
    en: 'ROAS',
    de: 'ROAS'
  },
  frequency: {
    en: 'Frequency',
    de: 'Häufigkeit'
  },
  avgCostPerClick: {
    en: 'Average cost for each click',
    de: 'Durchschnittliche Kosten pro Klick'
  },
  clicksToConversions: {
    en: 'Percentage of clicks that result in conversions',
    de: 'Prozentsatz der Klicks, die zu Konversionen führen'
  },
  returnOnAdSpend: {
    en: 'Return on ad spend (revenue ÷ cost)',
    de: 'Werbeausgabenrendite (Umsatz ÷ Kosten)'
  },
  avgTimesSeenPerPerson: {
    en: 'Average number of times each person saw your ad',
    de: 'Durchschnittliche Anzahl, wie oft eine Person deine Anzeige gesehen hat'
  }
};
