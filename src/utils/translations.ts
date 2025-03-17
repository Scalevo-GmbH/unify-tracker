
import type { Language } from "@/hooks/use-language";

// Define a type for the translations
type TranslationKey = 
  | 'welcome'
  | 'dashboard'
  | 'campaigns'
  | 'performance'
  | 'intelligence'
  | 'integrations'
  | 'settings'
  | 'helpSupport'
  | 'accountSettings'
  | 'logout'
  | 'searchMenu'
  | 'metaAds'
  | 'googleAds';

// Define the translations object
const translations: Record<TranslationKey, Record<Language, string>> = {
  welcome: {
    en: 'Welcome',
    de: 'Willkommen'
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
  metaAds: {
    en: 'Meta Ads',
    de: 'Meta Anzeigen'
  },
  googleAds: {
    en: 'Google Ads',
    de: 'Google Anzeigen'
  }
};

// Get a translation by key and language
export function getTranslation(key: TranslationKey, language: Language): string {
  return translations[key]?.[language] || key;
}
