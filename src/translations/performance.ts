
import { Language } from '@/hooks/use-language';

// Define all translations keys for the Performance page
export type PerformanceTranslationKey =
  | 'performance'
  | 'trackAndAnalyze'
  | 'paidSearch'
  | 'paidSocials'
  | 'organicSocial'
  | 'website'
  | 'email'
  | 'forms'
  | 'overview'
  | 'details'
  | 'selectPlatform'
  | 'channelDetails'
  | 'viewDetailedAnalytics'
  | 'performanceSummary'
  | 'topPerformer'
  | 'recommendation'
  | 'showsAggregate'
  | 'selectChannel'
  | 'export'
  | 'users'
  | 'newUsers'
  | 'sessions'
  | 'pageviews'
  | 'trafficOverview'
  | 'engagementMetrics'
  | 'bounceRate'
  | 'sessionDuration'
  | 'pagesPerSession'
  | 'conversions'
  | 'totalVisitors'
  | 'firstTimeVisitors'
  | 'totalSessions'
  | 'totalPageViews'
  | 'singlePageSessions'
  | 'avgTimeOnSite'
  | 'pagesPerSessionDesc'
  | 'conversionRateDesc'
  | 'websiteDashboard'
  | 'reach'
  | 'impressions'
  | 'frequency'
  | 'clicks'
  | 'ctr'
  | 'cpc'
  | 'conversionRate'
  | 'roas'
  | 'uniqueUsers'
  | 'totalImpressions'
  | 'avgImpressions'
  | 'totalClicks'
  | 'clickThroughRate'
  | 'costPerClick'
  | 'totalConversions'
  | 'returnOnAdSpend'
  | 'reachEngagement'
  | 'performanceMetrics'
  | 'emailDashboard'
  | 'campaigns'
  | 'openRate'
  | 'clickRate'
  | 'subscribers'
  | 'emailOpenRate'
  | 'emailClickRate'
  | 'totalSubscribers'
  | 'activeForms'
  | 'views'
  | 'completionRate'
  | 'submissions'
  | 'formPerformance'
  | 'formStarts'
  | 'formCompletions'
  | 'avgCompletionTime'
  | 'uniqueRespondents'
  | 'currentlyActiveForms'
  | 'formViews'
  | 'formCompletionRate'
  | 'totalFormSubmissions'
  | 'usersStartedForms'
  | 'completedSubmissions'
  | 'timeToCompleteForm'
  | 'uniqueFormSubmitters'
  | 'followers'
  | 'posts'
  | 'engagementRate'
  | 'engagementOverTime'
  | 'likes'
  | 'comments'
  | 'shares'
  | 'totalFollowers'
  | 'postsThisMonth'
  | 'avgEngagement'
  | 'uniqueReached'
  | 'totalLikes'
  | 'totalComments'
  | 'totalShares'
  | 'totalImps'
  | 'clickPerformance';

// Define all translations for the Performance page
export const performanceTranslations: Record<PerformanceTranslationKey, Record<Language, string>> = {
  performance: {
    en: 'Performance',
    de: 'Leistung',
  },
  trackAndAnalyze: {
    en: 'Track and analyze performance across all your marketing channels',
    de: 'Verfolgen und analysieren Sie die Leistung über alle Ihre Marketingkanäle hinweg',
  },
  paidSearch: {
    en: 'Paid Search',
    de: 'Bezahlte Suche',
  },
  paidSocials: {
    en: 'Paid Socials',
    de: 'Bezahlte Soziale Medien',
  },
  organicSocial: {
    en: 'Organic Social',
    de: 'Organische Soziale Medien',
  },
  website: {
    en: 'Website',
    de: 'Webseite',
  },
  email: {
    en: 'E-Mail',
    de: 'E-Mail',
  },
  forms: {
    en: 'Forms',
    de: 'Formulare',
  },
  overview: {
    en: 'Overview',
    de: 'Übersicht',
  },
  details: {
    en: 'Details',
    de: 'Details',
  },
  selectPlatform: {
    en: 'Select platform',
    de: 'Plattform auswählen',
  },
  channelDetails: {
    en: 'Channel Details',
    de: 'Kanaldetails',
  },
  viewDetailedAnalytics: {
    en: 'View Detailed Analytics',
    de: 'Detaillierte Analysen anzeigen',
  },
  performanceSummary: {
    en: 'Performance Summary',
    de: 'Leistungsübersicht',
  },
  topPerformer: {
    en: 'Top Performer',
    de: 'Top-Performer',
  },
  recommendation: {
    en: 'Recommendation',
    de: 'Empfehlung',
  },
  showsAggregate: {
    en: 'This overview shows aggregate performance across all your',
    de: 'Diese Übersicht zeigt die Gesamtleistung über alle Ihre',
  },
  selectChannel: {
    en: 'Select channel',
    de: 'Kanal auswählen',
  },
  export: {
    en: 'Export',
    de: 'Exportieren',
  },
  users: {
    en: 'Users',
    de: 'Benutzer',
  },
  newUsers: {
    en: 'New Users',
    de: 'Neue Benutzer',
  },
  sessions: {
    en: 'Sessions',
    de: 'Sitzungen',
  },
  pageviews: {
    en: 'Pageviews',
    de: 'Seitenaufrufe',
  },
  trafficOverview: {
    en: 'Traffic Overview',
    de: 'Verkehrsübersicht',
  },
  engagementMetrics: {
    en: 'Engagement Metrics',
    de: 'Engagement-Metriken',
  },
  bounceRate: {
    en: 'Bounce Rate',
    de: 'Absprungrate',
  },
  sessionDuration: {
    en: 'Session Duration',
    de: 'Sitzungsdauer',
  },
  pagesPerSession: {
    en: 'Pages per Session',
    de: 'Seiten pro Sitzung',
  },
  conversions: {
    en: 'Conversions',
    de: 'Konversionen',
  },
  totalVisitors: {
    en: 'Total visitors',
    de: 'Gesamtbesucher',
  },
  firstTimeVisitors: {
    en: 'First-time visitors',
    de: 'Erstbesucher',
  },
  totalSessions: {
    en: 'Total sessions',
    de: 'Gesamtsitzungen',
  },
  totalPageViews: {
    en: 'Total page views',
    de: 'Gesamtseitenaufrufe',
  },
  singlePageSessions: {
    en: 'Single page sessions',
    de: 'Einzelseitensitzungen',
  },
  avgTimeOnSite: {
    en: 'Avg. time on site',
    de: 'Durchschn. Zeit auf der Seite',
  },
  pagesPerSessionDesc: {
    en: 'Pages per session',
    de: 'Seiten pro Sitzung',
  },
  conversionRateDesc: {
    en: 'conversion rate',
    de: 'Konversionsrate',
  },
  websiteDashboard: {
    en: 'Website Dashboard',
    de: 'Webseiten-Dashboard',
  },
  reach: {
    en: 'Reach',
    de: 'Reichweite',
  },
  impressions: {
    en: 'Impressions',
    de: 'Impressionen',
  },
  frequency: {
    en: 'Frequency',
    de: 'Häufigkeit',
  },
  clicks: {
    en: 'Clicks',
    de: 'Klicks',
  },
  ctr: {
    en: 'CTR',
    de: 'CTR',
  },
  cpc: {
    en: 'CPC',
    de: 'CPC',
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate',
  },
  roas: {
    en: 'ROAS',
    de: 'ROAS',
  },
  uniqueUsers: {
    en: 'Unique users reached',
    de: 'Erreichte eindeutige Benutzer',
  },
  totalImpressions: {
    en: 'Total ad impressions',
    de: 'Gesamtanzeigenimpressionen',
  },
  avgImpressions: {
    en: 'Avg. impressions per user',
    de: 'Durchschn. Impressionen pro Benutzer',
  },
  totalClicks: {
    en: 'Total ad clicks',
    de: 'Gesamtanzeigenklicks',
  },
  clickThroughRate: {
    en: 'Click-through rate',
    de: 'Klickrate',
  },
  costPerClick: {
    en: 'Cost per click',
    de: 'Kosten pro Klick',
  },
  totalConversions: {
    en: 'Total conversions',
    de: 'Gesamtkonversionen',
  },
  returnOnAdSpend: {
    en: 'Return on ad spend',
    de: 'Werbeausgabenrendite',
  },
  reachEngagement: {
    en: 'Reach & Engagement',
    de: 'Reichweite & Engagement',
  },
  performanceMetrics: {
    en: 'Performance Metrics',
    de: 'Leistungsmetriken',
  },
  emailDashboard: {
    en: 'Email Dashboard',
    de: 'E-Mail-Dashboard',
  },
  campaigns: {
    en: 'Campaigns',
    de: 'Kampagnen',
  },
  openRate: {
    en: 'Open Rate',
    de: 'Öffnungsrate',
  },
  clickRate: {
    en: 'Click Rate',
    de: 'Klickrate',
  },
  subscribers: {
    en: 'Subscribers',
    de: 'Abonnenten',
  },
  emailOpenRate: {
    en: 'Email open rate',
    de: 'E-Mail-Öffnungsrate',
  },
  emailClickRate: {
    en: 'Email click rate',
    de: 'E-Mail-Klickrate',
  },
  totalSubscribers: {
    en: 'Total list subscribers',
    de: 'Gesamtlistenabonnenten',
  },
  activeForms: {
    en: 'Active Forms',
    de: 'Aktive Formulare',
  },
  views: {
    en: 'Views',
    de: 'Aufrufe',
  },
  completionRate: {
    en: 'Completion Rate',
    de: 'Abschlussrate',
  },
  submissions: {
    en: 'Submissions',
    de: 'Einreichungen',
  },
  formPerformance: {
    en: 'Form Performance',
    de: 'Formularleistung',
  },
  formStarts: {
    en: 'Form Starts',
    de: 'Formularstarts',
  },
  formCompletions: {
    en: 'Form Completions',
    de: 'Formularabschlüsse',
  },
  avgCompletionTime: {
    en: 'Avg. Completion Time',
    de: 'Durchschn. Abschlusszeit',
  },
  uniqueRespondents: {
    en: 'Unique Respondents',
    de: 'Eindeutige Befragte',
  },
  currentlyActiveForms: {
    en: 'Currently active forms',
    de: 'Derzeit aktive Formulare',
  },
  formViews: {
    en: 'Form views',
    de: 'Formularaufrufe',
  },
  formCompletionRate: {
    en: 'Form completion rate',
    de: 'Formularabschlussrate',
  },
  totalFormSubmissions: {
    en: 'Total form submissions',
    de: 'Gesamtformulareinreichungen',
  },
  usersStartedForms: {
    en: 'Users who started forms',
    de: 'Benutzer, die Formulare begonnen haben',
  },
  completedSubmissions: {
    en: 'Completed submissions',
    de: 'Abgeschlossene Einreichungen',
  },
  timeToCompleteForm: {
    en: 'Time to complete form',
    de: 'Zeit zum Ausfüllen des Formulars',
  },
  uniqueFormSubmitters: {
    en: 'Unique form submitters',
    de: 'Eindeutige Formulareinreicher',
  },
  followers: {
    en: 'Followers',
    de: 'Follower',
  },
  posts: {
    en: 'Posts',
    de: 'Beiträge',
  },
  engagementRate: {
    en: 'Engagement Rate',
    de: 'Engagement-Rate',
  },
  engagementOverTime: {
    en: 'Engagement Over Time',
    de: 'Engagement im Zeitverlauf',
  },
  likes: {
    en: 'Likes',
    de: 'Likes',
  },
  comments: {
    en: 'Comments',
    de: 'Kommentare',
  },
  shares: {
    en: 'Shares',
    de: 'Geteilt',
  },
  totalFollowers: {
    en: 'Total followers',
    de: 'Gesamtfollower',
  },
  postsThisMonth: {
    en: 'Posts this month',
    de: 'Beiträge diesen Monat',
  },
  avgEngagement: {
    en: 'Avg. engagement per post',
    de: 'Durchschn. Engagement pro Beitrag',
  },
  uniqueReached: {
    en: 'Unique users reached',
    de: 'Erreichte eindeutige Benutzer',
  },
  totalLikes: {
    en: 'Total likes',
    de: 'Gesamtlikes',
  },
  totalComments: {
    en: 'Total comments',
    de: 'Gesamtkommentare',
  },
  totalShares: {
    en: 'Total shares/retweets',
    de: 'Insgesamt geteilt/retweetet',
  },
  totalImps: {
    en: 'Total impressions',
    de: 'Gesamtimpressionen',
  },
  clickPerformance: {
    en: 'Click Performance',
    de: 'Klickleistung',
  },
};
