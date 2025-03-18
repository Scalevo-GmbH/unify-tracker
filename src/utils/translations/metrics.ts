
import { TranslationEntry, TranslationsObject } from './types';

export type MetricsTranslationKey =
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

export const metricsTranslations: TranslationsObject<MetricsTranslationKey> = {
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
