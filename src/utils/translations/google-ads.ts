
import { TranslationsObject } from './types';

export type GoogleAdsTranslationKey = 
  | 'adPerformance'
  | 'trackOptimize'
  | 'keyMetrics'
  | 'conversionRate'
  | 'export';

export const googleAdsTranslations: TranslationsObject<GoogleAdsTranslationKey> = {
  adPerformance: {
    en: 'Ad Performance',
    de: 'Werbeanzeigenleistung'
  },
  trackOptimize: {
    en: 'Track and optimize your Google Ads campaigns',
    de: 'Verfolge und optimiere deine Google Ads Kampagnen'
  },
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Wichtige Kennzahlen'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  }
};
