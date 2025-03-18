import { TranslationEntry, TranslationsObject } from './types';

export type DashboardTranslationKey =
  | 'welcomeBack'
  | 'marketingDashboard'
  | 'trackOptimizePerformance'
  | 'activeCampaigns'
  | 'viewAllChannels'
  | 'connectPlatforms'
  | 'connectDescription'
  | 'morePlatforms'
  | 'morePlatformsDescription'
  | 'newCampaign'
  | 'performance'
  | 'trackAnalyzePerformance';

export const dashboardTranslations: TranslationsObject<DashboardTranslationKey> = {
  welcomeBack: {
    en: 'Welcome back',
    de: 'Willkommen zurück'
  },
  marketingDashboard: {
    en: 'Marketing Dashboard',
    de: 'Marketing-Dashboard'
  },
  trackOptimizePerformance: {
    en: 'Track and optimize your marketing performance across platforms.',
    de: 'Verfolge und optimiere deine Marketing-Performance über alle Plattformen hinweg.'
  },
  activeCampaigns: {
    en: 'Active Campaigns',
    de: 'Aktive Kampagnen'
  },
  viewAllChannels: {
    en: 'View All Channels',
    de: 'Alle Kanäle anzeigen'
  },
  connectPlatforms: {
    en: 'Connect Platforms',
    de: 'Plattformen verbinden'
  },
  connectDescription: {
    en: 'Connect your marketing tools to see all your data in one place.',
    de: 'Verbinde deine Marketing-Tools, um alle Daten an einem Ort zu sehen.'
  },
  morePlatforms: {
    en: 'More Platforms',
    de: 'Weitere Plattformen'
  },
  morePlatformsDescription: {
    en: 'Connect to 50+ other marketing platforms and tools.',
    de: 'Verbinde dich mit über 50 weiteren Marketing-Plattformen und Tools.'
  },
  newCampaign: {
    en: 'New Campaign',
    de: 'Neue Kampagne'
  },
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  trackAnalyzePerformance: {
    en: 'Track and analyze performance across all your marketing channels',
    de: 'Verfolge und analysiere die Leistung über alle deine Marketing-Kanäle hinweg'
  }
};
