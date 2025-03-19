
import { TranslationEntry, TranslationsObject } from './types';

export type IntegrationsTranslationKey =
  | 'integrations'
  | 'connectTools'
  | 'searchIntegrations'
  | 'allTab'
  | 'advertisingTab'
  | 'socialMediaTab'
  | 'emailMarketingTab'
  | 'analyticsTab'
  | 'ecommerceTab'
  | 'otherToolsTab'
  | 'noIntegrationsFound'
  | 'noIntegrationsMessage'
  | 'clearSearch'
  | 'noMatchingIntegrations'
  | 'requestIntegration'
  | 'requestIntegrationDescription'
  | 'connect'
  | 'managedConnection'
  | 'viewDashboard'
  | 'popular';

export const integrationsTranslations: TranslationsObject<IntegrationsTranslationKey> = {
  integrations: {
    en: 'Integrations',
    de: 'Integrationen'
  },
  connectTools: {
    en: 'Connect your marketing tools to automate reporting and analysis.',
    de: 'Verbinde deine Marketing-Tools, um Berichte und Analysen zu automatisieren.'
  },
  searchIntegrations: {
    en: 'Search integrations...',
    de: 'Integrationen suchen...'
  },
  allTab: {
    en: 'All',
    de: 'Alle'
  },
  advertisingTab: {
    en: 'Advertising',
    de: 'Werbung'
  },
  socialMediaTab: {
    en: 'Social Media',
    de: 'Social Media'
  },
  emailMarketingTab: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  analyticsTab: {
    en: 'Analytics',
    de: 'Analyse'
  },
  ecommerceTab: {
    en: 'E-commerce',
    de: 'E-Commerce'
  },
  otherToolsTab: {
    en: 'Other Tools',
    de: 'Andere Tools'
  },
  noIntegrationsFound: {
    en: 'No integrations found',
    de: 'Keine Integrationen gefunden'
  },
  noIntegrationsMessage: {
    en: 'We couldn\'t find any integrations matching "{searchTerm}". Try a different search term or browse the categories.',
    de: 'Wir konnten keine Integrationen finden, die "{searchTerm}" entsprechen. Versuche einen anderen Suchbegriff oder durchsuche die Kategorien.'
  },
  clearSearch: {
    en: 'Clear Search',
    de: 'Suche löschen'
  },
  noMatchingIntegrations: {
    en: 'No {category} integrations matching your search.',
    de: 'Keine {category} Integrationen, die deiner Suche entsprechen.'
  },
  requestIntegration: {
    en: 'Request Integration',
    de: 'Integration anfragen'
  },
  requestIntegrationDescription: {
    en: 'Don\'t see what you need? Request a new integration.',
    de: 'Nicht das gefunden, was du brauchst? Fordere eine neue Integration an.'
  },
  connect: {
    en: 'Connect',
    de: 'Verbinden'
  },
  managedConnection: {
    en: 'Manage Connection',
    de: 'Verbindung verwalten'
  },
  viewDashboard: {
    en: 'View Dashboard',
    de: 'Dashboard anzeigen'
  },
  popular: {
    en: 'Popular',
    de: 'Beliebt'
  }
};
