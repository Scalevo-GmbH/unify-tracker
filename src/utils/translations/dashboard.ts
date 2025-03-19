import { TranslationsObject } from './types';

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
  | 'trackAnalyzePerformance'
  | 'summary'
  | 'dashboardSummary'
  | 'overview'
  | 'campaigns'
  | 'yourCampaigns'
  | 'yourRecentCampaigns'
  | 'viewAllCampaigns'
  | 'platforms'
  | 'connectSocialPlatforms'
  | 'topChannels'
  | 'overallPerformance'
  | 'filters'
  | 'dateRange'
  | 'yesterday'
  | 'last7Days'
  | 'last30Days'
  | 'thisMonth'
  | 'lastMonth'
  | 'custom'
  | 'applyFilter'
  | 'resetFilter'
  | 'export';

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
  },
  summary: {
    en: 'Here\'s a summary of your marketing performance',
    de: 'Hier ist eine Zusammenfassung Ihrer Marketingleistung'
  },
  dashboardSummary: {
    en: 'Your marketing performance at a glance',
    de: 'Ihre Marketingleistung auf einen Blick'
  },
  overview: {
    en: 'Overview',
    de: 'Übersicht'
  },
  campaigns: {
    en: 'Campaigns',
    de: 'Kampagnen'
  },
  yourCampaigns: {
    en: 'Your Campaigns',
    de: 'Ihre Kampagnen'
  },
  yourRecentCampaigns: {
    en: 'Your Recent Campaigns',
    de: 'Ihre letzten Kampagnen'
  },
  viewAllCampaigns: {
    en: 'View All Campaigns',
    de: 'Alle Kampagnen anzeigen'
  },
  platforms: {
    en: 'Platforms',
    de: 'Plattformen'
  },
  connectSocialPlatforms: {
    en: 'Connect Social Platforms',
    de: 'Soziale Plattformen verbinden'
  },
  topChannels: {
    en: 'Top Channels',
    de: 'Top-Kanäle'
  },
  overallPerformance: {
    en: 'Overall Performance',
    de: 'Gesamtleistung'
  },
  filters: {
    en: 'Filters',
    de: 'Filter'
  },
  dateRange: {
    en: 'Date Range',
    de: 'Datumsbereich'
  },
  yesterday: {
    en: 'Yesterday',
    de: 'Gestern'
  },
  last7Days: {
    en: 'Last 7 Days',
    de: 'Letzte 7 Tage'
  },
  last30Days: {
    en: 'Last 30 Days',
    de: 'Letzte 30 Tage'
  },
  thisMonth: {
    en: 'This Month',
    de: 'Diesen Monat'
  },
  lastMonth: {
    en: 'Letzten Monat',
    de: 'Letzten Monat'
  },
  custom: {
    en: 'Custom',
    de: 'Benutzerdefiniert'
  },
  applyFilter: {
    en: 'Apply Filter',
    de: 'Filter anwenden'
  },
  resetFilter: {
    en: 'Reset Filter',
    de: 'Filter zurücksetzen'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  }
};
