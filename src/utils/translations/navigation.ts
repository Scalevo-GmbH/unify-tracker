
import { Language } from './types';

// Translation keys for navigation elements
export type NavigationTranslationKey = 
  | 'navigation'
  | 'settings'
  | 'dashboard'
  | 'campaigns'
  | 'performance'
  | 'intelligence'
  | 'integrations'
  | 'accountSettings'
  | 'helpSupport'
  | 'helpSupportDesc'
  | 'logout'
  | 'searchMenu'
  | 'noMenuItems'
  | 'insertCommand'
  | 'searchCommands'
  | 'pages'
  | 'reports'
  | 'resources'
  | 'navigating'
  | 'goingTo'
  | 'noResults'
  | 'monthly'
  | 'campaignResults'
  | 'conversions'
  | 'audience'
  | 'insights'
  | 'mediaLibrary'
  | 'documentation'
  | 'helpCenter'
  | 'faqs'
  | 'userGuides'
  | 'supportTickets'
  | 'contactUs';

// Translations for navigation
export const navigationTranslations: Record<NavigationTranslationKey, Record<Language, string>> = {
  navigation: {
    en: 'Navigation',
    de: 'Navigation'
  },
  settings: {
    en: 'Settings',
    de: 'Einstellungen'
  },
  dashboard: {
    en: 'Dashboard',
    de: 'Dashboard'
  },
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
  accountSettings: {
    en: 'Account Settings',
    de: 'Kontoeinstellungen'
  },
  helpSupport: {
    en: 'Help & Support',
    de: 'Hilfe & Support'
  },
  helpSupportDesc: {
    en: 'Find answers to common questions and get support',
    de: 'Finde Antworten auf häufige Fragen und erhalte Unterstützung'
  },
  logout: {
    en: 'Logout',
    de: 'Abmelden'
  },
  searchMenu: {
    en: 'Search menu...',
    de: 'Menü durchsuchen...'
  },
  noMenuItems: {
    en: 'No menu items found',
    de: 'Keine Menüpunkte gefunden'
  },
  insertCommand: {
    en: 'Insert command',
    de: 'Befehl eingeben'
  },
  searchCommands: {
    en: 'Search commands, pages, and more...',
    de: 'Suche Befehle, Seiten und mehr...'
  },
  pages: {
    en: 'Pages',
    de: 'Seiten'
  },
  reports: {
    en: 'Reports',
    de: 'Berichte'
  },
  resources: {
    en: 'Resources',
    de: 'Ressourcen'
  },
  navigating: {
    en: 'Navigating',
    de: 'Navigiere zu'
  },
  goingTo: {
    en: 'Going to',
    de: 'Gehe zu'
  },
  noResults: {
    en: 'No results found.',
    de: 'Keine Ergebnisse gefunden.'
  },
  monthly: {
    en: 'Monthly Performance',
    de: 'Monatliche Leistung'
  },
  campaignResults: {
    en: 'Campaign Results',
    de: 'Kampagnenergebnisse'
  },
  conversions: {
    en: 'Conversion Analytics',
    de: 'Konversionsanalyse'
  },
  audience: {
    en: 'Audience',
    de: 'Zielgruppe'
  },
  insights: {
    en: 'Audience Insights',
    de: 'Zielgruppenerkenntnisse'
  },
  mediaLibrary: {
    en: 'Media Library',
    de: 'Medienbibliothek'
  },
  documentation: {
    en: 'Documentation',
    de: 'Dokumentation'
  },
  helpCenter: {
    en: 'Help Center',
    de: 'Hilfecenter'
  },
  faqs: {
    en: 'FAQs',
    de: 'Häufige Fragen'
  },
  userGuides: {
    en: 'User Guides',
    de: 'Benutzerhandbücher'
  },
  supportTickets: {
    en: 'Support Tickets',
    de: 'Support-Tickets'
  },
  contactUs: {
    en: 'Contact Us',
    de: 'Kontaktiere uns'
  }
};
