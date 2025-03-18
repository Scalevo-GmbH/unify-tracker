
import type { Language } from "@/hooks/use-language";

// Define types for website-related translations
export type WebsiteTranslationKey = 
  | 'websiteDashboard'
  | 'trafficOverview'
  | 'engagementMetrics' 
  | 'users'
  | 'newUsers'
  | 'sessions'
  | 'pageviews' 
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
  | 'export';

// Website-related translations
export const websiteTranslations: Record<WebsiteTranslationKey, Record<Language, string>> = {
  websiteDashboard: {
    en: 'Google Analytics Dashboard',
    de: 'Google Analytics Dashboard'
  },
  trafficOverview: {
    en: 'Traffic Overview',
    de: 'Verkehrsübersicht'
  },
  engagementMetrics: {
    en: 'Engagement Metrics',
    de: 'Engagement-Metriken'
  },
  users: {
    en: 'Users',
    de: 'Benutzer'
  },
  newUsers: {
    en: 'New Users',
    de: 'Neue Benutzer'
  },
  sessions: {
    en: 'Sessions',
    de: 'Sitzungen'
  },
  pageviews: {
    en: 'Pageviews',
    de: 'Seitenaufrufe'
  },
  bounceRate: {
    en: 'Bounce Rate',
    de: 'Absprungrate'
  },
  sessionDuration: {
    en: 'Session Duration',
    de: 'Sitzungsdauer'
  },
  pagesPerSession: {
    en: 'Pages / Session',
    de: 'Seiten / Sitzung'
  },
  conversions: {
    en: 'Conversions',
    de: 'Konversionen'
  },
  totalVisitors: {
    en: 'Total visitors',
    de: 'Gesamtbesucher'
  },
  firstTimeVisitors: {
    en: 'First-time visitors',
    de: 'Erstbesucher'
  },
  totalSessions: {
    en: 'Total sessions',
    de: 'Gesamtsitzungen'
  },
  totalPageViews: {
    en: 'Total page views',
    de: 'Gesamtseitenaufrufe'
  },
  singlePageSessions: {
    en: 'Single page sessions',
    de: 'Einzelseitensitzungen'
  },
  avgTimeOnSite: {
    en: 'Avg. time on site',
    de: 'Durchschn. Zeit auf der Seite'
  },
  pagesPerSessionDesc: {
    en: 'Pages per session',
    de: 'Seiten pro Sitzung'
  },
  conversionRateDesc: {
    en: 'conversion rate',
    de: 'Konversionsrate'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  }
};
