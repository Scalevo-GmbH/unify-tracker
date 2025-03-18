
import { TranslationsObject } from './types';

export type NavigationTranslationKey = 
  | 'searchMenu'
  | 'navigation'
  | 'settings'
  | 'noMenuItems'
  | 'accountSettings'
  | 'helpSupport'
  | 'logout'
  | 'overview'
  | 'export'
  | 'paidSearchTab'
  | 'paidSocialsTab'
  | 'organicSocialTab'
  | 'websiteTab'
  | 'emailTab'
  | 'formsTab';

export const navigationTranslations: TranslationsObject<NavigationTranslationKey> = {
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
    de: 'Keine Menüelemente gefunden'
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
    en: 'Logout',
    de: 'Abmelden'
  },
  overview: {
    en: 'Overview',
    de: 'Übersicht'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  },
  paidSearchTab: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  paidSocialsTab: {
    en: 'Paid Social',
    de: 'Bezahlte Social Media'
  },
  organicSocialTab: {
    en: 'Organic Social',
    de: 'Organische Social Media'
  },
  websiteTab: {
    en: 'Website',
    de: 'Webseite'
  },
  emailTab: {
    en: 'Email',
    de: 'E-Mail'
  },
  formsTab: {
    en: 'Forms',
    de: 'Formulare'
  }
};
