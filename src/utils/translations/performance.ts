
import { TranslationEntry, TranslationsObject } from './types';

export type PerformanceTranslationKey =
  | 'overviewTab'
  | 'detailsTab'
  | 'channelDetails'
  | 'selectChannel'
  | 'viewDetailedAnalytics'
  | 'performanceSummary'
  | 'topPerformer'
  | 'recommendation';

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
  }
};
