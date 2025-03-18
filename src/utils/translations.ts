
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
  | 'googleAds'
  | 'adPerformance'
  | 'trackOptimize'
  | 'export'
  // Help & Support page translations
  | 'helpSupportTitle'
  | 'helpSupportSubtitle'
  | 'faq'
  | 'userGuides'
  | 'supportTickets'
  | 'contactUs'
  | 'frequentlyAskedQuestions'
  | 'faqDescription'
  | 'searchForAnswers'
  // FAQ questions and answers
  | 'connectMetaQuestion'
  | 'connectMetaAnswer'
  | 'upgradeQuestion'
  | 'upgradeAnswer'
  | 'createCampaignQuestion'
  | 'createCampaignAnswer'
  | 'multipleAccountsQuestion'
  | 'multipleAccountsAnswer'
  | 'dataUpdateQuestion'
  | 'dataUpdateAnswer'
  // User Guides section
  | 'guidesTitle'
  | 'guidesDescription'
  | 'guide1Title'
  | 'guide1Description'
  | 'guide2Title'
  | 'guide2Description'
  | 'guide3Title'
  | 'guide3Description'
  | 'guide4Title'
  | 'guide4Description'
  // Support Tickets section
  | 'ticketsTitle'
  | 'ticketsDescription'
  | 'yourTickets'
  | 'createNewTicket'
  | 'noTicketsYet'
  | 'createFirstTicket'
  | 'viewTicket'
  | 'statusOpen'
  | 'statusClosed'
  | 'lastUpdated'
  // Contact section
  | 'contactTitle'
  | 'contactDescription'
  | 'name'
  | 'email'
  | 'subject'
  | 'message'
  | 'sendMessage'
  | 'otherContactWays'
  | 'emailContact'
  | 'liveChat'
  | 'phoneSupport'
  | 'liveChatAvailability'
  | 'yourName'
  | 'yourEmail'
  | 'howCanWeHelp'
  | 'describeIssue';

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
  },
  adPerformance: {
    en: 'Ad Performance',
    de: 'Anzeigenleistung'
  },
  trackOptimize: {
    en: 'Track and optimize your ad campaigns',
    de: 'Verfolgen und optimieren Sie Ihre Werbekampagnen'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  },
  // Help & Support page translations
  helpSupportTitle: {
    en: 'Help & Support',
    de: 'Hilfe & Support'
  },
  helpSupportSubtitle: {
    en: 'Find answers to your questions or get in touch with our support team',
    de: 'Finden Sie Antworten auf Ihre Fragen oder kontaktieren Sie unser Support-Team'
  },
  faq: {
    en: 'FAQs',
    de: 'FAQ'
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
    de: 'Kontakt'
  },
  frequentlyAskedQuestions: {
    en: 'Frequently Asked Questions',
    de: 'Häufig gestellte Fragen'
  },
  faqDescription: {
    en: 'Find answers to common questions about our platform and services',
    de: 'Finden Sie Antworten auf häufig gestellte Fragen zu unserer Plattform und unseren Dienstleistungen'
  },
  searchForAnswers: {
    en: 'Search for answers...',
    de: 'Nach Antworten suchen...'
  },
  // FAQ questions and answers
  connectMetaQuestion: {
    en: 'How do I connect my Meta Ads account?',
    de: 'Wie verbinde ich mein Meta Ads-Konto?'
  },
  connectMetaAnswer: {
    en: 'To connect your Meta Ads account, navigate to the Integrations page, find the Meta Ads card, and click on "Connect". You\'ll be prompted to log in to your Facebook account and grant necessary permissions.',
    de: 'Um Ihr Meta Ads-Konto zu verbinden, navigieren Sie zur Seite "Integrationen", finden Sie die Meta Ads-Karte und klicken Sie auf "Verbinden". Sie werden aufgefordert, sich bei Ihrem Facebook-Konto anzumelden und die erforderlichen Berechtigungen zu erteilen.'
  },
  upgradeQuestion: {
    en: 'How can I upgrade my subscription plan?',
    de: 'Wie kann ich meinen Abonnementplan upgraden?'
  },
  upgradeAnswer: {
    en: 'You can upgrade your subscription plan by going to the Account page, selecting the "Subscriptions" tab, and choosing a new plan that meets your needs. Your billing will be prorated for the remainder of your current billing cycle.',
    de: 'Sie können Ihren Abonnementplan upgraden, indem Sie zur Kontoseite gehen, den Tab "Abonnements" auswählen und einen neuen Plan wählen, der Ihren Anforderungen entspricht. Ihre Abrechnung wird für den Rest Ihres aktuellen Abrechnungszeitraums anteilig berechnet.'
  },
  createCampaignQuestion: {
    en: 'How do I create a new campaign?',
    de: 'Wie erstelle ich eine neue Kampagne?'
  },
  createCampaignAnswer: {
    en: 'To create a new campaign, go to the Campaigns page and click on the "Create Campaign" button. Follow the step-by-step wizard to set up your campaign objectives, target audience, budget, and creative assets.',
    de: 'Um eine neue Kampagne zu erstellen, gehen Sie zur Kampagnenseite und klicken Sie auf die Schaltfläche "Kampagne erstellen". Folgen Sie dem schrittweisen Assistenten, um Ihre Kampagnenziele, Zielgruppe, Budget und kreativen Assets einzurichten.'
  },
  multipleAccountsQuestion: {
    en: 'Can I manage multiple ad accounts?',
    de: 'Kann ich mehrere Werbekonten verwalten?'
  },
  multipleAccountsAnswer: {
    en: 'Yes, you can manage multiple ad accounts from different platforms. Connect each account through the Integrations page, and you\'ll be able to switch between them when viewing performance data or creating campaigns.',
    de: 'Ja, Sie können mehrere Werbekonten von verschiedenen Plattformen verwalten. Verbinden Sie jedes Konto über die Integrationsseite, und Sie können zwischen ihnen wechseln, wenn Sie Leistungsdaten anzeigen oder Kampagnen erstellen.'
  },
  dataUpdateQuestion: {
    en: 'How often is the performance data updated?',
    de: 'Wie oft werden die Leistungsdaten aktualisiert?'
  },
  dataUpdateAnswer: {
    en: 'Performance data is typically updated every 6 hours. However, some metrics from certain platforms may have different refresh rates. You can see the last update time on each dashboard widget.',
    de: 'Leistungsdaten werden in der Regel alle 6 Stunden aktualisiert. Einige Metriken von bestimmten Plattformen können jedoch unterschiedliche Aktualisierungsraten haben. Sie können die letzte Aktualisierungszeit auf jedem Dashboard-Widget sehen.'
  },
  // User Guides section
  guidesTitle: {
    en: 'User Guides',
    de: 'Benutzerhandbücher'
  },
  guidesDescription: {
    en: 'Detailed guides to help you get the most out of our platform',
    de: 'Detaillierte Anleitungen, die Ihnen helfen, das Beste aus unserer Plattform herauszuholen'
  },
  guide1Title: {
    en: 'Getting Started with Scalevo',
    de: 'Erste Schritte mit Scalevo'
  },
  guide1Description: {
    en: 'Learn the basics of navigating and using the Scalevo platform',
    de: 'Lernen Sie die Grundlagen der Navigation und Verwendung der Scalevo-Plattform'
  },
  guide2Title: {
    en: 'Setting Up Your First Campaign',
    de: 'Einrichten Ihrer ersten Kampagne'
  },
  guide2Description: {
    en: 'A step-by-step guide to creating and launching your first ad campaign',
    de: 'Eine Schritt-für-Schritt-Anleitung zum Erstellen und Starten Ihrer ersten Werbekampagne'
  },
  guide3Title: {
    en: 'Understanding Performance Metrics',
    de: 'Verstehen von Leistungskennzahlen'
  },
  guide3Description: {
    en: 'Learn how to interpret and act on campaign performance data',
    de: 'Lernen Sie, wie Sie Kampagnenleistungsdaten interpretieren und danach handeln'
  },
  guide4Title: {
    en: 'Optimizing Ad Campaigns',
    de: 'Optimierung von Werbekampagnen'
  },
  guide4Description: {
    en: 'Advanced techniques to improve your campaign performance',
    de: 'Fortgeschrittene Techniken zur Verbesserung Ihrer Kampagnenleistung'
  },
  // Support Tickets section
  ticketsTitle: {
    en: 'Support Tickets',
    de: 'Support-Tickets'
  },
  ticketsDescription: {
    en: 'View and manage your support requests',
    de: 'Sehen und verwalten Sie Ihre Support-Anfragen'
  },
  yourTickets: {
    en: 'Your Tickets',
    de: 'Ihre Tickets'
  },
  createNewTicket: {
    en: 'Create New Ticket',
    de: 'Neues Ticket erstellen'
  },
  noTicketsYet: {
    en: 'You don\'t have any support tickets yet',
    de: 'Sie haben noch keine Support-Tickets'
  },
  createFirstTicket: {
    en: 'Create Your First Ticket',
    de: 'Erstellen Sie Ihr erstes Ticket'
  },
  viewTicket: {
    en: 'View',
    de: 'Ansehen'
  },
  statusOpen: {
    en: 'Open',
    de: 'Offen'
  },
  statusClosed: {
    en: 'Closed',
    de: 'Geschlossen'
  },
  lastUpdated: {
    en: 'Last updated',
    de: 'Zuletzt aktualisiert'
  },
  // Contact section
  contactTitle: {
    en: 'Contact Us',
    de: 'Kontakt'
  },
  contactDescription: {
    en: 'Get in touch with our support team',
    de: 'Nehmen Sie Kontakt mit unserem Support-Team auf'
  },
  name: {
    en: 'Name',
    de: 'Name'
  },
  email: {
    en: 'Email',
    de: 'E-Mail'
  },
  subject: {
    en: 'Subject',
    de: 'Betreff'
  },
  message: {
    en: 'Message',
    de: 'Nachricht'
  },
  sendMessage: {
    en: 'Send Message',
    de: 'Nachricht senden'
  },
  otherContactWays: {
    en: 'Other Ways to Reach Us',
    de: 'Andere Kontaktmöglichkeiten'
  },
  emailContact: {
    en: 'Email',
    de: 'E-Mail'
  },
  liveChat: {
    en: 'Live Chat',
    de: 'Live-Chat'
  },
  phoneSupport: {
    en: 'Phone Support',
    de: 'Telefonischer Support'
  },
  liveChatAvailability: {
    en: 'Available Mon-Fri, 9am-6pm UTC',
    de: 'Verfügbar Mo-Fr, 9-18 Uhr UTC'
  },
  yourName: {
    en: 'Your name',
    de: 'Ihr Name'
  },
  yourEmail: {
    en: 'your.email@example.com',
    de: 'ihre.email@beispiel.com'
  },
  howCanWeHelp: {
    en: 'How can we help you?',
    de: 'Wie können wir Ihnen helfen?'
  },
  describeIssue: {
    en: 'Describe your issue or question in detail',
    de: 'Beschreiben Sie Ihr Problem oder Ihre Frage im Detail'
  }
};

// Get a translation by key and language
export function getTranslation(key: TranslationKey, language: Language): string {
  return translations[key]?.[language] || key;
}
