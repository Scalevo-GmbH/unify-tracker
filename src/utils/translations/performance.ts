
import { Language } from './types';

// Define the keys for performance translations
export type PerformanceTranslationKey = 
  | 'performance'
  | 'trackAnalyzePerformance'
  | 'overview'
  | 'details'
  | 'paidSearch'
  | 'paidSocials'
  | 'organicSocial'
  | 'website'
  | 'email'
  | 'forms'
  | 'selectTool'
  | 'performanceSummary'
  | 'topPerformer'
  | 'recommendation'
  | 'viewDetailedAnalytics'
  | 'selectChannel'
  | 'channelDetails'
  | 'keyMetrics'
  | 'conversionRate';

// Define the actual translations
export const performanceTranslations: Record<PerformanceTranslationKey, Record<Language, string>> = {
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  trackAnalyzePerformance: {
    en: 'Track and analyze the performance of your marketing channels',
    de: 'Verfolgen und analysieren Sie die Leistung Ihrer Marketingkanäle'
  },
  overview: {
    en: 'Overview',
    de: 'Überblick'
  },
  details: {
    en: 'Details',
    de: 'Details'
  },
  paidSearch: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  paidSocials: {
    en: 'Paid Social',
    de: 'Bezahlte Soziale Medien'
  },
  organicSocial: {
    en: 'Organic Social',
    de: 'Organische Soziale Medien'
  },
  website: {
    en: 'Website',
    de: 'Webseite'
  },
  email: {
    en: 'Email',
    de: 'E-Mail'
  },
  forms: {
    en: 'Forms',
    de: 'Formulare'
  },
  selectTool: {
    en: 'Select Tool',
    de: 'Tool auswählen'
  },
  performanceSummary: {
    en: 'Performance Summary',
    de: 'Leistungsübersicht'
  },
  topPerformer: {
    en: 'Top Performer',
    de: 'Top-Performer'
  },
  recommendation: {
    en: 'Recommendation',
    de: 'Empfehlung'
  },
  viewDetailedAnalytics: {
    en: 'View Detailed Analytics',
    de: 'Detaillierte Analysen anzeigen'
  },
  selectChannel: {
    en: 'Select Channel',
    de: 'Kanal auswählen'
  },
  channelDetails: {
    en: 'Channel Details',
    de: 'Kanaldetails'
  },
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Wichtige Kennzahlen'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  }
};
