
import { TranslationEntry, TranslationsObject } from './types';

export type PerformanceTranslationKey =
  | 'overviewTab'
  | 'detailsTab'
  | 'channelDetails'
  | 'selectChannel'
  | 'viewDetailedAnalytics'
  | 'performanceSummary'
  | 'topPerformer'
  | 'recommendation'
  | 'performance'
  | 'trackAnalyzePerformance'
  | 'paidSearchTab'
  | 'paidSocialsTab'
  | 'organicSocialTab'
  | 'websiteTab'
  | 'emailTab'
  | 'formsTab'
  | 'keyMetrics'
  | 'export'
  | 'adPerformance'
  | 'conversionRate';

export const performanceTranslations: TranslationsObject<PerformanceTranslationKey> = {
  overviewTab: {
    en: 'Overview',
    de: 'Überblick'
  },
  detailsTab: {
    en: 'Details',
    de: 'Details'
  },
  channelDetails: {
    en: 'Channel Details',
    de: 'Kanal-Details'
  },
  selectChannel: {
    en: 'Select channel',
    de: 'Kanal auswählen'
  },
  viewDetailedAnalytics: {
    en: 'View Detailed Analytics',
    de: 'Detaillierte Analysen anzeigen'
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
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  trackAnalyzePerformance: {
    en: 'Track and analyze performance across your marketing channels',
    de: 'Verfolge und analysiere die Leistung über alle deine Marketing-Kanäle'
  },
  paidSearchTab: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  paidSocialsTab: {
    en: 'Paid Social',
    de: 'Bezahlte Social Media'
  },
  organicSocialTab: {
    en: 'Organic Social',
    de: 'Organische Social Media'
  },
  websiteTab: {
    en: 'Website',
    de: 'Webseite'
  },
  emailTab: {
    en: 'Email',
    de: 'E-Mail'
  },
  formsTab: {
    en: 'Forms',
    de: 'Formulare'
  },
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Wichtige Kennzahlen'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  },
  adPerformance: {
    en: 'Ad Performance',
    de: 'Anzeigenleistung'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  }
};
