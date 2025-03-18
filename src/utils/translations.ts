type TranslationKey = 
  | 'dashboard'
  | 'overview'
  | 'adPerformance'
  | 'trackOptimize'
  | 'export'
  | 'createAd'
  | 'accountSettings'
  | 'helpSupport'
  | 'logout'
  | 'searchMenu'
  | 'navigation'
  | 'paidSocial'
  | 'paidSearch'
  | 'organicSocial'
  | 'websiteAnalytics'
  | 'emailMarketing'
  | 'formsAndSurvey'
  | 'settings'
  | 'noMenuItems'
  | 'welcomeBack'
  | 'marketingDashboard'
  | 'trackOptimizePerformance'
  | 'activeCampaigns'
  | 'viewAllChannels'
  | 'connectPlatforms'
  | 'connectDescription'
  | 'morePlatforms'
  | 'morePlatformsDescription'
  | 'totalReach'
  | 'totalReachDescription'
  | 'impressions'
  | 'impressionsDescription'
  | 'conversionRate'
  | 'conversionRateDescription'
  | 'engagementRate'
  | 'engagementRateDescription'
  | 'topChannels'
  | 'topChannelsTooltip'
  | 'newCampaign'
  | 'performance'
  | 'trackAnalyzePerformance'
  | 'paidSearchTab'
  | 'paidSocialsTab'
  | 'organicSocialTab'
  | 'websiteTab'
  | 'emailTab'
  | 'formsTab'
  | 'overviewTab'
  | 'detailsTab'
  | 'channelDetails'
  | 'selectChannel'
  | 'viewDetailedAnalytics'
  | 'performanceSummary'
  | 'topPerformer'
  | 'recommendation'
  | 'keyMetrics'
  | 'totalImpressions'
  | 'totalClicks'
  | 'averageCTR'
  | 'totalSpend'
  | 'totalReachMetric'
  | 'engagementRateMetric'
  | 'totalImpressionsMetric'
  | 'totalSpendMetric'
  | 'totalFollowers'
  | 'totalEngagement'
  | 'engagementRateMetric2'
  | 'reachGrowth'
  | 'totalVisitors'
  | 'avgSessionDuration'
  | 'bounceRate'
  | 'conversionRateMetric'
  | 'totalSent'
  | 'openRate'
  | 'clickRate'
  | 'conversionRateMetric2'
  | 'totalSubmissions'
  | 'completionRate'
  | 'avgCompletionTime'
  | 'conversionRateMetric3';

type Translations = {
  [key in TranslationKey]: {
    en: string;
    de: string;
  };
};

export const translations: Translations = {
  dashboard: {
    en: 'Dashboard',
    de: 'Übersicht'
  },
  overview: {
    en: 'Overview',
    de: 'Überblick'
  },
  adPerformance: {
    en: 'Ad Performance',
    de: 'Werbeleistung'
  },
  trackOptimize: {
    en: 'Track and optimize your Google Search and Display ad campaigns.',
    de: 'Verfolge und optimiere deine Google Such- und Display-Werbekampagnen.'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  },
  createAd: {
    en: 'Create Ad',
    de: 'Anzeige erstellen'
  },
  accountSettings: {
    en: 'Account Settings',
    de: 'Kontoeinstellungen'
  },
  helpSupport: {
    en: 'Help & Support',
    de: 'Hilfe & Support'
  },
  logout: {
    en: 'Log out',
    de: 'Abmelden'
  },
  searchMenu: {
    en: 'Search menu...',
    de: 'Menü durchsuchen...'
  },
  navigation: {
    en: 'Navigation',
    de: 'Navigation'
  },
  paidSocial: {
    en: 'Paid Social',
    de: 'Bezahlte Soziale Medien'
  },
  paidSearch: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  organicSocial: {
    en: 'Organic Social',
    de: 'Organische Soziale Medien'
  },
  websiteAnalytics: {
    en: 'Website Analytics',
    de: 'Website-Analyse'
  },
  emailMarketing: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  formsAndSurvey: {
    en: 'Forms & Survey',
    de: 'Formulare & Umfragen'
  },
  settings: {
    en: 'Settings',
    de: 'Einstellungen'
  },
  noMenuItems: {
    en: 'No menu items found',
    de: 'Keine Menüpunkte gefunden'
  },
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
  totalReach: {
    en: 'Total Reach',
    de: 'Gesamtreichweite'
  },
  totalReachDescription: {
    en: 'The total number of unique users who have seen your content across all platforms and campaigns.',
    de: 'Die Gesamtzahl der einzelnen Nutzer, die deine Inhalte über alle Plattformen und Kampagnen hinweg gesehen haben.'
  },
  impressions: {
    en: 'Impressions',
    de: 'Impressionen'
  },
  impressionsDescription: {
    en: 'The total number of times your content has been displayed, regardless of whether it was clicked or not.',
    de: 'Die Gesamtzahl der Anzeigen deiner Inhalte, unabhängig davon, ob sie angeklickt wurden oder nicht.'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  conversionRateDescription: {
    en: 'The percentage of visitors who completed a desired goal (e.g., made a purchase or signed up) out of the total number of visitors.',
    de: 'Der Prozentsatz der Besucher, die ein gewünschtes Ziel erreicht haben (z.B. einen Kauf getätigt oder sich angemeldet haben), gemessen an der Gesamtzahl der Besucher.'
  },
  engagementRate: {
    en: 'Engagement Rate',
    de: 'Engagement-Rate'
  },
  engagementRateDescription: {
    en: 'The percentage of people who engaged with your content (likes, comments, shares, clicks) compared to the total reach.',
    de: 'Der Prozentsatz der Personen, die mit deinen Inhalten interagiert haben (Likes, Kommentare, Shares, Klicks) im Vergleich zur Gesamtreichweite.'
  },
  topChannels: {
    en: 'Top Channels',
    de: 'Top-Kanäle'
  },
  topChannelsTooltip: {
    en: 'Top channels are ranked based on their contribution to your overall traffic and conversion metrics. Percentages represent the proportion of total traffic coming from each source.',
    de: 'Top-Kanäle werden nach ihrem Beitrag zu deinen Gesamt-Traffic- und Konversionsmetriken eingestuft. Die Prozentsätze stellen den Anteil des Gesamttraffics dar, der aus der jeweiligen Quelle stammt.'
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
  paidSearchTab: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  paidSocialsTab: {
    en: 'Paid Socials',
    de: 'Bezahlte Soziale Medien'
  },
  organicSocialTab: {
    en: 'Organic Social',
    de: 'Organische Soziale Medien'
  },
  websiteTab: {
    en: 'Website',
    de: 'Webseite'
  },
  emailTab: {
    en: 'E-Mail',
    de: 'E-Mail'
  },
  formsTab: {
    en: 'Forms',
    de: 'Formulare'
  },
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
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Wichtige Kennzahlen'
  },
  totalImpressions: {
    en: 'Total Impressions',
    de: 'Gesamtimpressionen'
  },
  totalClicks: {
    en: 'Total Clicks',
    de: 'Gesamtklicks'
  },
  averageCTR: {
    en: 'Average CTR',
    de: 'Durchschnittliche CTR'
  },
  totalSpend: {
    en: 'Total Spend',
    de: 'Gesamtausgaben'
  },
  totalReachMetric: {
    en: 'Total Reach',
    de: 'Gesamtreichweite'
  },
  engagementRateMetric: {
    en: 'Engagement Rate',
    de: 'Engagement-Rate'
  },
  totalImpressionsMetric: {
    en: 'Total Impressions',
    de: 'Gesamtimpressionen'
  },
  totalSpendMetric: {
    en: 'Total Spend',
    de: 'Gesamtausgaben'
  },
  totalFollowers: {
    en: 'Total Followers',
    de: 'Gesamtanzahl Follower'
  },
  totalEngagement: {
    en: 'Total Engagement',
    de: 'Gesamtengagement'
  },
  engagementRateMetric2: {
    en: 'Engagement Rate',
    de: 'Engagement-Rate'
  },
  reachGrowth: {
    en: 'Reach Growth',
    de: 'Reichweitenwachstum'
  },
  totalVisitors: {
    en: 'Total Visitors',
    de: 'Gesamtbesucher'
  },
  avgSessionDuration: {
    en: 'Avg. Session Duration',
    de: 'Durchschn. Sitzungsdauer'
  },
  bounceRate: {
    en: 'Bounce Rate',
    de: 'Absprungrate'
  },
  conversionRateMetric: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  totalSent: {
    en: 'Total Sent',
    de: 'Gesamt gesendet'
  },
  openRate: {
    en: 'Open Rate',
    de: 'Öffnungsrate'
  },
  clickRate: {
    en: 'Click Rate',
    de: 'Klickrate'
  },
  conversionRateMetric2: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  totalSubmissions: {
    en: 'Total Submissions',
    de: 'Gesamteinsendungen'
  },
  completionRate: {
    en: 'Completion Rate',
    de: 'Abschlussrate'
  },
  avgCompletionTime: {
    en: 'Avg. Completion Time',
    de: 'Durchschn. Abschlusszeit'
  },
  conversionRateMetric3: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  }
};

export const getTranslation = (key: TranslationKey, language: 'en' | 'de'): string => {
  return translations[key][language];
};
