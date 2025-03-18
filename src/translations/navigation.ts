
import type { Language } from "@/hooks/use-language";

// Define types for navigation-related translations
export type NavigationTranslationKey = 
  | 'campaigns'
  | 'performance'
  | 'intelligence'
  | 'integrations'
  | 'settings'
  | 'helpSupport'
  | 'accountSettings'
  | 'logout'
  | 'searchMenu'
  | 'dashboard'
  | 'navigation'
  | 'support'
  | 'admin'
  | 'noMenuItemsFound'
  | 'markAllAsRead'
  | 'clearAll'
  | 'viewAll'
  | 'notifications'
  | 'noNotifications'
  | 'english'
  | 'german'
  | 'new'
  | 'justNow'
  | 'minuteAgo'
  | 'minutesAgo'
  | 'hourAgo'
  | 'hoursAgo'
  | 'dayAgo'
  | 'daysAgo'
  | 'metaAds'
  | 'adPerformance'
  | 'trackOptimize'
  | 'export';

// Navigation-related translations
export const navigationTranslations: Record<NavigationTranslationKey, Record<Language, string>> = {
  campaigns: {
    en: 'Campaigns',
    de: 'Kampagnen'
  },
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  intelligence: {
    en: 'Intelligence',
    de: 'Intelligenz'
  },
  integrations: {
    en: 'Integrations',
    de: 'Integrationen'
  },
  settings: {
    en: 'Settings',
    de: 'Einstellungen'
  },
  helpSupport: {
    en: 'Help & Support',
    de: 'Hilfe & Support'
  },
  accountSettings: {
    en: 'Account Settings',
    de: 'Kontoeinstellungen'
  },
  logout: {
    en: 'Logout',
    de: 'Abmelden'
  },
  searchMenu: {
    en: 'Search menu...',
    de: 'Menü durchsuchen...'
  },
  dashboard: {
    en: 'Dashboard',
    de: 'Dashboard'
  },
  navigation: {
    en: 'Navigation',
    de: 'Navigation'
  },
  support: {
    en: 'Support',
    de: 'Support'
  },
  admin: {
    en: 'Admin',
    de: 'Administrator'
  },
  noMenuItemsFound: {
    en: 'No menu items found',
    de: 'Keine Menüpunkte gefunden'
  },
  markAllAsRead: {
    en: 'Mark all as read',
    de: 'Alle als gelesen markieren'
  },
  clearAll: {
    en: 'Clear all',
    de: 'Alle löschen'
  },
  viewAll: {
    en: 'View all',
    de: 'Alle anzeigen'
  },
  notifications: {
    en: 'Notifications',
    de: 'Benachrichtigungen'
  },
  noNotifications: {
    en: 'No notifications',
    de: 'Keine Benachrichtigungen'
  },
  english: {
    en: 'English',
    de: 'Englisch'
  },
  german: {
    en: 'German',
    de: 'Deutsch'
  },
  new: {
    en: 'new',
    de: 'neu'
  },
  justNow: {
    en: 'just now',
    de: 'gerade eben'
  },
  minuteAgo: {
    en: 'minute ago',
    de: 'Minute zuvor'
  },
  minutesAgo: {
    en: 'minutes ago',
    de: 'Minuten zuvor'
  },
  hourAgo: {
    en: 'hour ago',
    de: 'Stunde zuvor'
  },
  hoursAgo: {
    en: 'hours ago',
    de: 'Stunden zuvor'
  },
  dayAgo: {
    en: 'day ago',
    de: 'Tag zuvor'
  },
  daysAgo: {
    en: 'days ago',
    de: 'Tage zuvor'
  },
  metaAds: {
    en: 'Meta Ads',
    de: 'Meta Anzeigen'
  },
  adPerformance: {
    en: 'Ad Performance',
    de: 'Anzeigenleistung'
  },
  trackOptimize: {
    en: 'Track and optimize your ad performance',
    de: 'Verfolgen und optimieren Sie Ihre Anzeigenleistung'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  }
};
