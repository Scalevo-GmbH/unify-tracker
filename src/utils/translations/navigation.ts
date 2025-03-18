
import { TranslationEntry, TranslationsObject } from './types';

export type NavigationTranslationKey = 
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
  | 'settings'
  | 'noMenuItems';

export const navigationTranslations: TranslationsObject<NavigationTranslationKey> = {
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
  settings: {
    en: 'Settings',
    de: 'Einstellungen'
  },
  noMenuItems: {
    en: 'No menu items found',
    de: 'Keine Menüpunkte gefunden'
  }
};
