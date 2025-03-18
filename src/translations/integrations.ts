
import type { Language } from "@/hooks/use-language";

// Define types for integrations-related translations
export type IntegrationsTranslationKey = 
  | 'integrations'
  | 'integrationsSubtitle'
  | 'searchIntegrations'
  | 'allTab'
  | 'advertisingTab'
  | 'socialMediaTab'
  | 'emailMarketingTab'
  | 'analyticsTab'
  | 'ecommerceTab'
  | 'otherToolsTab'
  | 'noIntegrationsFound'
  | 'noResultsMessage'
  | 'tryDifferentSearch'
  | 'clearSearch'
  | 'noMatchingIntegrations'
  | 'requestIntegration'
  | 'requestIntegrationDescription'
  | 'connect'
  | 'manageConnection'
  | 'viewDashboard';

// Integrations translations
export const integrationsTranslations: Record<IntegrationsTranslationKey, Record<Language, string>> = {
  integrations: {
    en: 'Integrations',
    de: 'Integrationen'
  },
  integrationsSubtitle: {
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
  noResultsMessage: {
    en: 'We couldn\'t find any integrations matching',
    de: 'Wir konnten keine Integrationen finden, die passen zu'
  },
  tryDifferentSearch: {
    en: 'Try a different search term or browse the categories.',
    de: 'Versuche einen anderen Suchbegriff oder stöbere in den Kategorien.'
  },
  clearSearch: {
    en: 'Clear Search',
    de: 'Suche löschen'
  },
  noMatchingIntegrations: {
    en: 'No integrations matching your search.',
    de: 'Keine Integrationen, die deiner Suche entsprechen.'
  },
  requestIntegration: {
    en: 'Request Integration',
    de: 'Integration anfragen'
  },
  requestIntegrationDescription: {
    en: 'Don\'t see what you need? Request a new integration.',
    de: 'Findest du nicht, was du brauchst? Fordere eine neue Integration an.'
  },
  connect: {
    en: 'Connect',
    de: 'Verbinden'
  },
  manageConnection: {
    en: 'Manage Connection',
    de: 'Verbindung verwalten'
  },
  viewDashboard: {
    en: 'View Dashboard',
    de: 'Dashboard anzeigen'
  }
};
