
type TranslationKey = 
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
  | 'paidSocial'
  | 'paidSearch'
  | 'organicSocial'
  | 'websiteAnalytics'
  | 'emailMarketing'
  | 'formsAndSurvey'
  | 'settings'
  | 'noMenuItems';

type Translations = {
  [key in TranslationKey]: {
    en: string;
    de: string;
  };
};

export const translations: Translations = {
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
    de: 'Verfolgen und optimieren Sie Ihre Google Such- und Display-Werbekampagnen.'
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
  paidSocial: {
    en: 'Paid Social',
    de: 'Bezahlte Soziale Medien'
  },
  paidSearch: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  organicSocial: {
    en: 'Organic Social',
    de: 'Organische Soziale Medien'
  },
  websiteAnalytics: {
    en: 'Website Analytics',
    de: 'Website-Analyse'
  },
  emailMarketing: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  formsAndSurvey: {
    en: 'Forms & Survey',
    de: 'Formulare & Umfragen'
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

// Helper function to get translation
export const getTranslation = (key: TranslationKey, language: 'en' | 'de'): string => {
  return translations[key][language];
};
