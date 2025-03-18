
import type { Language } from "@/hooks/use-language";

// Define types for index page-related translations
export type IndexTranslationKey = 
  | 'welcomeBack'
  | 'marketingDashboard'
  | 'trackOptimizePerformance'
  | 'export'
  | 'newCampaign'
  | 'overview'
  | 'activeCampaigns'
  | 'topChannels'
  | 'topChannelsTooltip'
  | 'viewAllChannels'
  | 'connectPlatforms'
  | 'connectPlatformsDesc'
  | 'morePlatforms'
  | 'morePlatformsDesc';

// Index page-related translations
export const indexPageTranslations: Record<IndexTranslationKey, Record<Language, string>> = {
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
    de: 'Verfolgen und optimieren Sie Ihre Marketingleistung über verschiedene Plattformen hinweg.'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  },
  newCampaign: {
    en: 'New Campaign',
    de: 'Neue Kampagne'
  },
  overview: {
    en: 'Overview',
    de: 'Übersicht'
  },
  activeCampaigns: {
    en: 'Active Campaigns',
    de: 'Aktive Kampagnen'
  },
  topChannels: {
    en: 'Top Channels',
    de: 'Top-Kanäle'
  },
  topChannelsTooltip: {
    en: 'Top channels are ranked based on their contribution to your overall traffic and conversion metrics. Percentages represent the proportion of total traffic coming from each source.',
    de: 'Top-Kanäle werden nach ihrem Beitrag zu Ihren Gesamt-Traffic- und Konversionsmetriken eingestuft. Die Prozentsätze stellen den Anteil des Gesamttraffics dar, der aus jeder Quelle stammt.'
  },
  viewAllChannels: {
    en: 'View All Channels',
    de: 'Alle Kanäle anzeigen'
  },
  connectPlatforms: {
    en: 'Connect Platforms',
    de: 'Plattformen verbinden'
  },
  connectPlatformsDesc: {
    en: 'Connect your marketing tools to see all your data in one place.',
    de: 'Verbinden Sie Ihre Marketing-Tools, um alle Ihre Daten an einem Ort zu sehen.'
  },
  morePlatforms: {
    en: 'More Platforms',
    de: 'Weitere Plattformen'
  },
  morePlatformsDesc: {
    en: 'Connect to 50+ other marketing platforms and tools.',
    de: 'Verbinden Sie sich mit mehr als 50 anderen Marketing-Plattformen und Tools.'
  }
};
