
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
  | 'viewDashboard'
  | 'popular'
  // Integration descriptions
  | 'facebookAdsDesc'
  | 'googleAdsDesc'
  | 'linkedinAdsDesc'
  | 'twitterAdsDesc'
  | 'instagramDesc'
  | 'facebookPagesDesc'
  | 'twitterDesc'
  | 'linkedinDesc'
  | 'youtubeDesc'
  | 'mailchimpDesc'
  | 'campaignMonitorDesc'
  | 'constantContactDesc'
  | 'sendGridDesc'
  | 'googleAnalyticsDesc'
  | 'mixpanelDesc'
  | 'hotjarDesc'
  | 'segmentDesc'
  | 'shopifyDesc'
  | 'wooCommerceDesc'
  | 'stripeDesc'
  | 'bigCommerceDesc'
  | 'intercomDesc'
  | 'hubspotDesc'
  | 'twilioDesc'
  | 'zendeskDesc';

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
  },
  popular: {
    en: 'Popular',
    de: 'Beliebt'
  },
  // Integration descriptions
  facebookAdsDesc: {
    en: 'Connect your Facebook Ads account to track performance and ROI.',
    de: 'Verbinde dein Facebook Ads-Konto, um Leistung und ROI zu verfolgen.'
  },
  googleAdsDesc: {
    en: 'Import your Google Ads campaigns and track conversions.',
    de: 'Importiere deine Google Ads-Kampagnen und verfolge Conversions.'
  },
  linkedinAdsDesc: {
    en: 'Track your LinkedIn advertising campaigns and conversions.',
    de: 'Verfolge deine LinkedIn-Werbekampagnen und Conversions.'
  },
  twitterAdsDesc: {
    en: 'Track your Twitter ad campaigns and performance.',
    de: 'Verfolge deine Twitter-Werbekampagnen und deren Leistung.'
  },
  instagramDesc: {
    en: 'Connect Instagram to analyze engagement and reach.',
    de: 'Verbinde Instagram, um Engagement und Reichweite zu analysieren.'
  },
  facebookPagesDesc: {
    en: 'Manage and analyze your Facebook Page performance.',
    de: 'Verwalte und analysiere die Leistung deiner Facebook-Seite.'
  },
  twitterDesc: {
    en: 'Track engagement and audience growth on Twitter.',
    de: 'Verfolge Engagement und Wachstum deiner Zielgruppe auf Twitter.'
  },
  linkedinDesc: {
    en: 'Track company page analytics and engagement.',
    de: 'Verfolge Unternehmensseiten-Analysen und Engagement.'
  },
  youtubeDesc: {
    en: 'Analyze video performance and channel growth.',
    de: 'Analysiere Videoleistung und Kanalwachstum.'
  },
  mailchimpDesc: {
    en: 'Import your email campaign data and subscriber analytics.',
    de: 'Importiere deine E-Mail-Kampagnendaten und Abonnentenanalysen.'
  },
  campaignMonitorDesc: {
    en: 'Track email campaign performance and subscriber engagement.',
    de: 'Verfolge E-Mail-Kampagnenleistung und Abonnenten-Engagement.'
  },
  constantContactDesc: {
    en: 'Analyze email marketing performance and list growth.',
    de: 'Analysiere E-Mail-Marketing-Leistung und Listenwachstum.'
  },
  sendGridDesc: {
    en: 'Monitor email delivery rates and engagement metrics.',
    de: 'Überwache E-Mail-Zustellraten und Engagement-Metriken.'
  },
  googleAnalyticsDesc: {
    en: 'Import website traffic and conversion data.',
    de: 'Importiere Website-Traffic- und Conversion-Daten.'
  },
  mixpanelDesc: {
    en: 'Track user events and conversion funnels.',
    de: 'Verfolge Nutzeraktivitäten und Conversion-Trichter.'
  },
  hotjarDesc: {
    en: 'Visualize user behavior with heatmaps and recordings.',
    de: 'Visualisiere Nutzerverhalten mit Heatmaps und Aufzeichnungen.'
  },
  segmentDesc: {
    en: 'Collect, unify and activate your customer data.',
    de: 'Sammle, vereinheitliche und aktiviere deine Kundendaten.'
  },
  shopifyDesc: {
    en: 'Import your store data, products, and customer information.',
    de: 'Importiere deine Shop-Daten, Produkte und Kundeninformationen.'
  },
  wooCommerceDesc: {
    en: 'Connect your WordPress store and track sales metrics.',
    de: 'Verbinde deinen WordPress-Shop und verfolge Verkaufsmetriken.'
  },
  stripeDesc: {
    en: 'Track payment processing and subscription metrics.',
    de: 'Verfolge Zahlungsverarbeitung und Abonnement-Metriken.'
  },
  bigCommerceDesc: {
    en: 'Import your store data and track performance metrics.',
    de: 'Importiere deine Shop-Daten und verfolge Leistungsmetriken.'
  },
  intercomDesc: {
    en: 'Track customer conversations and support metrics.',
    de: 'Verfolge Kundengespräche und Support-Metriken.'
  },
  hubspotDesc: {
    en: 'Connect your CRM and marketing automation platform.',
    de: 'Verbinde deine CRM- und Marketing-Automatisierungsplattform.'
  },
  twilioDesc: {
    en: 'Track SMS campaign performance and engagement.',
    de: 'Verfolge SMS-Kampagnenleistung und Engagement.'
  },
  zendeskDesc: {
    en: 'Monitor customer support metrics and satisfaction.',
    de: 'Überwache Kundensupport-Metriken und -Zufriedenheit.'
  }
};
