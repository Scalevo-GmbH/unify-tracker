
import type { Language } from "@/hooks/use-language";

// Define types for dashboard-related translations
export type DashboardTranslationKey = 
  | 'welcome'
  | 'dashboard'
  | 'totalReach'
  | 'impressions'
  | 'conversionRate'
  | 'engagementRate'
  | 'reachDescription'
  | 'impressionsDescription'
  | 'conversionRateDescription'
  | 'engagementRateDescription';

// Dashboard-related translations
export const dashboardTranslations: Record<DashboardTranslationKey, Record<Language, string>> = {
  welcome: {
    en: 'Welcome',
    de: 'Willkommen'
  },
  dashboard: {
    en: 'Dashboard',
    de: 'Dashboard'
  },
  totalReach: {
    en: 'Total Reach',
    de: 'Gesamtreichweite'
  },
  impressions: {
    en: 'Impressions',
    de: 'Impressionen'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  engagementRate: {
    en: 'Engagement Rate',
    de: 'Engagement-Rate'
  },
  reachDescription: {
    en: 'The total number of unique users who have seen your content across all platforms and campaigns.',
    de: 'Die Gesamtzahl der einzelnen Nutzer, die deine Inhalte über alle Plattformen und Kampagnen hinweg gesehen haben.'
  },
  impressionsDescription: {
    en: 'The total number of times your content has been displayed, regardless of whether it was clicked or not.',
    de: 'Die Gesamtzahl der Anzeigen deiner Inhalte, unabhängig davon, ob darauf geklickt wurde oder nicht.'
  },
  conversionRateDescription: {
    en: 'The percentage of visitors who completed a desired goal (e.g., made a purchase or signed up) out of the total number of visitors.',
    de: 'Der Prozentsatz der Besucher, die ein gewünschtes Ziel erreicht haben (z.B. einen Kauf getätigt oder sich angemeldet haben), gemessen an der Gesamtzahl der Besucher.'
  },
  engagementRateDescription: {
    en: 'The percentage of people who engaged with your content (likes, comments, shares, clicks) compared to the total reach.',
    de: 'Der Prozentsatz der Personen, die mit deinen Inhalten interagiert haben (Likes, Kommentare, Shares, Klicks) im Vergleich zur Gesamtreichweite.'
  }
};
