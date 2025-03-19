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
  | 'popular'
  | 'facebookAdsDescription'
  | 'googleAdsDescription'
  | 'linkedinAdsDescription'
  | 'twitterAdsDescription'
  | 'instagramDescription'
  | 'facebookPagesDescription'
  | 'twitterDescription'
  | 'linkedinDescription'
  | 'youtubeDescription'
  | 'mailchimpDescription'
  | 'campaignMonitorDescription'
  | 'constantContactDescription'
  | 'sendgridDescription'
  | 'googleAnalyticsDescription'
  | 'mixpanelDescription'
  | 'hotjarDescription'
  | 'segmentDescription'
  | 'shopifyDescription'
  | 'woocommerceDescription'
  | 'stripeDescription'
  | 'bigcommerceDescription'
  | 'intercomDescription'
  | 'hubspotDescription'
  | 'twilioDescription'
  | 'zendeskDescription';

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
  },
  facebookAdsDescription: {
    en: 'Connect your Facebook Ads account to track performance and ROI.',
    de: 'Verbinde dein Facebook Ads-Konto, um Performance und ROI zu verfolgen.'
  },
  googleAdsDescription: {
    en: 'Import your Google Ads campaigns and track conversions.',
    de: 'Importiere deine Google Ads-Kampagnen und verfolge Conversions.'
  },
  linkedinAdsDescription: {
    en: 'Track your LinkedIn advertising campaigns and conversions.',
    de: 'Verfolge deine LinkedIn-Werbekampagnen und Conversions.'
  },
  twitterAdsDescription: {
    en: 'Track your Twitter ad campaigns and performance.',
    de: 'Verfolge deine Twitter-Werbekampagnen und deren Performance.'
  },
  instagramDescription: {
    en: 'Connect Instagram to analyze engagement and reach.',
    de: 'Verbinde Instagram, um Engagement und Reichweite zu analysieren.'
  },
  facebookPagesDescription: {
    en: 'Manage and analyze your Facebook Page performance.',
    de: 'Verwalte und analysiere die Performance deiner Facebook-Seite.'
  },
  twitterDescription: {
    en: 'Track engagement and audience growth on Twitter.',
    de: 'Verfolge Engagement und Zielgruppenwachstum auf Twitter.'
  },
  linkedinDescription: {
    en: 'Track company page analytics and engagement.',
    de: 'Verfolge Unternehmensseiten-Analysen und Engagement.'
  },
  youtubeDescription: {
    en: 'Analyze video performance and channel growth.',
    de: 'Analysiere Video-Performance und Kanalwachstum.'
  },
  mailchimpDescription: {
    en: 'Import your email campaign data and subscriber analytics.',
    de: 'Importiere deine E-Mail-Kampagnendaten und Abonnentenanalysen.'
  },
  campaignMonitorDescription: {
    en: 'Track email campaign performance and subscriber engagement.',
    de: 'Verfolge E-Mail-Kampagnen-Performance und Abonnenten-Engagement.'
  },
  constantContactDescription: {
    en: 'Analyze email marketing performance and list growth.',
    de: 'Analysiere E-Mail-Marketing-Performance und Listenwachstum.'
  },
  sendgridDescription: {
    en: 'Monitor email delivery rates and engagement metrics.',
    de: 'Überwache E-Mail-Zustellraten und Engagement-Metriken.'
  },
  googleAnalyticsDescription: {
    en: 'Import website traffic and conversion data.',
    de: 'Importiere Website-Traffic und Conversiondaten.'
  },
  mixpanelDescription: {
    en: 'Track user events and conversion funnels.',
    de: 'Verfolge Nutzeraktivitäten und Conversion-Trichter.'
  },
  hotjarDescription: {
    en: 'Visualize user behavior with heatmaps and recordings.',
    de: 'Visualisiere Nutzerverhalten mit Heatmaps und Aufzeichnungen.'
  },
  segmentDescription: {
    en: 'Collect, unify and activate your customer data.',
    de: 'Sammle, vereinheitliche und aktiviere deine Kundendaten.'
  },
  shopifyDescription: {
    en: 'Import your store data, products, and customer information.',
    de: 'Importiere deine Shop-Daten, Produkte und Kundeninformationen.'
  },
  woocommerceDescription: {
    en: 'Connect your WordPress store and track sales metrics.',
    de: 'Verbinde deinen WordPress-Shop und verfolge Verkaufsmetriken.'
  },
  stripeDescription: {
    en: 'Track payment processing and subscription metrics.',
    de: 'Verfolge Zahlungsabwicklungen und Abonnement-Metriken.'
  },
  bigcommerceDescription: {
    en: 'Import your store data and track performance metrics.',
    de: 'Importiere deine Shop-Daten und verfolge Performance-Metriken.'
  },
  intercomDescription: {
    en: 'Track customer conversations and support metrics.',
    de: 'Verfolge Kundengespräche und Support-Metriken.'
  },
  hubspotDescription: {
    en: 'Connect your CRM and marketing automation platform.',
    de: 'Verbinde dein CRM und deine Marketing-Automatisierungsplattform.'
  },
  twilioDescription: {
    en: 'Track SMS campaign performance and engagement.',
    de: 'Verfolge SMS-Kampagnen-Performance und Engagement.'
  },
  zendeskDescription: {
    en: 'Monitor customer support metrics and satisfaction.',
    de: 'Überwache Kundensupport-Metriken und Zufriedenheit.'
  }
};
