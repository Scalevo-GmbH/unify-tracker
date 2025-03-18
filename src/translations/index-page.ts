
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
  | 'morePlatformsDesc'
  | 'totalReach'
  | 'reachDescription'
  | 'impressions'
  | 'impressionsDescription'
  | 'conversionRate'
  | 'conversionRateDescription'
  | 'engagementRate'
  | 'engagementRateDescription'
  | 'facebookAds'
  | 'facebookAdsDescription'
  | 'googleAds'
  | 'googleAdsDescription'
  | 'instagram'
  | 'instagramDescription'
  | 'twitterAds'
  | 'twitterAdsDescription'
  | 'mailchimp'
  | 'mailchimpDescription'
  | 'googleAnalytics'
  | 'googleAnalyticsDescription'
  | 'linkedInAds'
  | 'linkedInAdsDescription'
  | 'vsLastPeriod'
  | 'campaign'
  | 'platform'
  | 'type'
  | 'budget'
  | 'spent'
  | 'remaining'
  | 'endDate'
  | 'performance'
  | 'paidSocial'
  | 'paidSearch'
  | 'emailMarketing'
  | 'basedOnMetrics'
  | 'excellent'
  | 'good'
  | 'average'
  | 'poor'
  | 'today'
  | 'yesterday'
  | 'lastSevenDays'
  | 'lastThirtyDays'
  | 'thisMonth'
  | 'lastMonth'
  | 'custom'
  | 'performanceMetrics'
  | 'keyMetrics'
  | 'reachVsClicks'
  | 'manageAllAds'
  | 'currentlyRunning';

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
    de: 'Verfolge und optimiere deine Marketingleistung über verschiedene Plattformen hinweg.'
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
    de: 'Top-Kanäle werden nach ihrem Beitrag zu deinen Gesamt-Traffic- und Konversionsmetriken eingestuft. Die Prozentsätze stellen den Anteil des Gesamttraffics dar, der aus jeder Quelle stammt.'
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
    de: 'Verbinde deine Marketing-Tools, um alle deine Daten an einem Ort zu sehen.'
  },
  morePlatforms: {
    en: 'More Platforms',
    de: 'Weitere Plattformen'
  },
  morePlatformsDesc: {
    en: 'Connect to 50+ other marketing platforms and tools.',
    de: 'Verbinde dich mit mehr als 50 anderen Marketing-Plattformen und Tools.'
  },
  // Dashboard metrics translations
  totalReach: {
    en: 'Total Reach',
    de: 'Gesamte Reichweite'
  },
  reachDescription: {
    en: 'Total number of unique users who saw your content',
    de: 'Gesamtzahl der einzelnen Nutzer, die deine Inhalte gesehen haben'
  },
  impressions: {
    en: 'Impressions',
    de: 'Impressionen'
  },
  impressionsDescription: {
    en: 'Total number of times your content was displayed',
    de: 'Gesamtzahl der Anzeigen deiner Inhalte'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  conversionRateDescription: {
    en: 'Percentage of visitors who completed a desired action',
    de: 'Prozentsatz der Besucher, die eine gewünschte Aktion durchgeführt haben'
  },
  engagementRate: {
    en: 'Engagement Rate',
    de: 'Interaktionsrate'
  },
  engagementRateDescription: {
    en: 'Percentage of viewers who engaged with your content',
    de: 'Prozentsatz der Betrachter, die mit deinen Inhalten interagiert haben'
  },
  // Integration platforms translations
  facebookAds: {
    en: 'Facebook Ads',
    de: 'Facebook Ads'
  },
  facebookAdsDescription: {
    en: 'Connect your Facebook Ads account to track performance and ROI.',
    de: 'Verbinde dein Facebook Ads-Konto, um Leistung und ROI zu verfolgen.'
  },
  googleAds: {
    en: 'Google Ads',
    de: 'Google Ads'
  },
  googleAdsDescription: {
    en: 'Import your Google Ads campaigns and track conversions.',
    de: 'Importiere deine Google Ads-Kampagnen und verfolge Konversionen.'
  },
  instagram: {
    en: 'Instagram',
    de: 'Instagram'
  },
  instagramDescription: {
    en: 'Connect Instagram to analyze engagement and reach.',
    de: 'Verbinde Instagram, um Engagement und Reichweite zu analysieren.'
  },
  twitterAds: {
    en: 'Twitter Ads',
    de: 'Twitter Ads'
  },
  twitterAdsDescription: {
    en: 'Track your Twitter ad campaigns and performance.',
    de: 'Verfolge deine Twitter-Werbekampagnen und -Leistung.'
  },
  mailchimp: {
    en: 'Mailchimp',
    de: 'Mailchimp'
  },
  mailchimpDescription: {
    en: 'Import your email campaign data and subscriber analytics.',
    de: 'Importiere deine E-Mail-Kampagnendaten und Abonnentenanalysen.'
  },
  googleAnalytics: {
    en: 'Google Analytics',
    de: 'Google Analytics'
  },
  googleAnalyticsDescription: {
    en: 'Import website traffic and conversion data.',
    de: 'Importiere Website-Traffic- und Konversionsdaten.'
  },
  linkedInAds: {
    en: 'LinkedIn Ads',
    de: 'LinkedIn Ads'
  },
  linkedInAdsDescription: {
    en: 'Track your LinkedIn advertising campaigns and conversions.',
    de: 'Verfolge deine LinkedIn-Werbekampagnen und -Konversionen.'
  },
  // New translations for missing elements
  vsLastPeriod: {
    en: 'vs last period',
    de: 'im Vergleich zum letzten Zeitraum'
  },
  // Active campaigns table translations
  campaign: {
    en: 'Campaign',
    de: 'Kampagne'
  },
  platform: {
    en: 'Platform',
    de: 'Plattform'
  },
  type: {
    en: 'Type',
    de: 'Typ'
  },
  budget: {
    en: 'Budget',
    de: 'Budget'
  },
  spent: {
    en: 'Spent',
    de: 'Ausgegeben'
  },
  remaining: {
    en: 'Remaining',
    de: 'Verbleibend'
  },
  endDate: {
    en: 'End Date',
    de: 'Enddatum'
  },
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  // Campaign types
  paidSocial: {
    en: 'Paid Social',
    de: 'Bezahlte soziale Medien'
  },
  paidSearch: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  emailMarketing: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  // Performance ratings
  basedOnMetrics: {
    en: 'Based on ROI and engagement metrics',
    de: 'Basierend auf ROI und Engagement-Metriken'
  },
  excellent: {
    en: 'Excellent',
    de: 'Ausgezeichnet'
  },
  good: {
    en: 'Good',
    de: 'Gut'
  },
  average: {
    en: 'Average',
    de: 'Durchschnittlich'
  },
  poor: {
    en: 'Poor',
    de: 'Schwach'
  },
  // Date range selector
  today: {
    en: 'Today',
    de: 'Heute'
  },
  yesterday: {
    en: 'Yesterday',
    de: 'Gestern'
  },
  lastSevenDays: {
    en: 'Last 7 days',
    de: 'Letzte 7 Tage'
  },
  lastThirtyDays: {
    en: 'Last 30 days',
    de: 'Letzte 30 Tage'
  },
  thisMonth: {
    en: 'This month',
    de: 'Dieser Monat'
  },
  lastMonth: {
    en: 'Last month',
    de: 'Letzter Monat'
  },
  custom: {
    en: 'Custom',
    de: 'Benutzerdefiniert'
  },
  // Performance metrics
  performanceMetrics: {
    en: 'Performance Metrics',
    de: 'Leistungskennzahlen'
  },
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Schlüsselkennzahlen'
  },
  reachVsClicks: {
    en: 'Reach vs. Clicks Over Time',
    de: 'Reichweite vs. Klicks im Zeitverlauf'
  },
  manageAllAds: {
    en: 'Manage All Ads',
    de: 'Alle Anzeigen verwalten'
  },
  currentlyRunning: {
    en: 'Currently running campaigns across all connected platforms',
    de: 'Aktuell laufende Kampagnen über alle verbundenen Plattformen'
  }
};
