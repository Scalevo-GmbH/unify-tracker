
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
  | 'searchMenu';

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
  }
};
