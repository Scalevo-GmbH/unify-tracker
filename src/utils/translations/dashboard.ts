
import { TranslationsObject } from './types';

export type DashboardTranslationKey = 
  | 'welcomeBack'
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
  | 'resetFilter';

export const dashboardTranslations: TranslationsObject<DashboardTranslationKey> = {
  welcomeBack: {
    en: 'Welcome back',
    de: 'Willkommen zurück'
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
    en: 'Last Month',
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
  }
};
