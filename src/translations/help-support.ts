
import type { Language } from "@/hooks/use-language";

// Define types for help & support related translations
export type HelpSupportTranslationKey = 
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

// Help & Support related translations
export const helpSupportTranslations: Record<HelpSupportTranslationKey, Record<Language, string>> = {
  helpSupportTitle: {
    en: 'Help & Support',
    de: 'Hilfe & Support'
  },
  helpSupportSubtitle: {
    en: 'Find answers to your questions or get in touch with our support team',
    de: 'Finde Antworten auf deine Fragen oder kontaktiere unser Support-Team'
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
    de: 'Finde Antworten auf häufige Fragen zu unserer Plattform und unseren Diensten'
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
    de: 'Um dein Meta Ads-Konto zu verbinden, gehe zur Seite "Integrationen", finde die Meta Ads-Karte und klicke auf "Verbinden". Du wirst aufgefordert, dich bei deinem Facebook-Konto anzumelden und die erforderlichen Berechtigungen zu erteilen.'
  },
  upgradeQuestion: {
    en: 'How can I upgrade my subscription plan?',
    de: 'Wie kann ich meinen Abonnementplan upgraden?'
  },
  upgradeAnswer: {
    en: 'You can upgrade your subscription plan by going to the Account page, selecting the "Subscriptions" tab, and choosing a new plan that meets your needs. Your billing will be prorated for the remainder of your current billing cycle.',
    de: 'Du kannst deinen Abonnementplan upgraden, indem du zur Kontoseite gehst, den Tab "Abonnements" auswählst und einen neuen Plan wählst, der deinen Anforderungen entspricht. Deine Abrechnung wird für den Rest deines aktuellen Abrechnungszeitraums anteilig berechnet.'
  },
  createCampaignQuestion: {
    en: 'How do I create a new campaign?',
    de: 'Wie erstelle ich eine neue Kampagne?'
  },
  createCampaignAnswer: {
    en: 'To create a new campaign, go to the Campaigns page and click on the "Create Campaign" button. Follow the step-by-step wizard to set up your campaign objectives, target audience, budget, and creative assets.',
    de: 'Um eine neue Kampagne zu erstellen, gehe zur Kampagnenseite und klicke auf die Schaltfläche "Kampagne erstellen". Folge dem schrittweisen Assistenten, um deine Kampagnenziele, Zielgruppe, Budget und kreativen Assets einzurichten.'
  },
  multipleAccountsQuestion: {
    en: 'Can I manage multiple ad accounts?',
    de: 'Kann ich mehrere Werbekonten verwalten?'
  },
  multipleAccountsAnswer: {
    en: 'Yes, you can manage multiple ad accounts from different platforms. Connect each account through the Integrations page, and you\'ll be able to switch between them when viewing performance data or creating campaigns.',
    de: 'Ja, du kannst mehrere Werbekonten von verschiedenen Plattformen verwalten. Verbinde jedes Konto über die Integrationsseite, und du kannst zwischen ihnen wechseln, wenn du Leistungsdaten ansiehst oder Kampagnen erstellst.'
  },
  dataUpdateQuestion: {
    en: 'How often is the performance data updated?',
    de: 'Wie oft werden die Leistungsdaten aktualisiert?'
  },
  dataUpdateAnswer: {
    en: 'Performance data is typically updated every 6 hours. However, some metrics from certain platforms may have different refresh rates. You can see the last update time on each dashboard widget.',
    de: 'Leistungsdaten werden in der Regel alle 6 Stunden aktualisiert. Einige Metriken von bestimmten Plattformen können jedoch unterschiedliche Aktualisierungsraten haben. Du kannst die letzte Aktualisierungszeit auf jedem Dashboard-Widget sehen.'
  },
  // User Guides section
  guidesTitle: {
    en: 'User Guides',
    de: 'Benutzerhandbücher'
  },
  guidesDescription: {
    en: 'Detailed guides to help you get the most out of our platform',
    de: 'Detaillierte Anleitungen, die dir helfen, das Beste aus unserer Plattform herauszuholen'
  },
  guide1Title: {
    en: 'Getting Started with Scalevo',
    de: 'Erste Schritte mit Scalevo'
  },
  guide1Description: {
    en: 'Learn the basics of navigating and using the Scalevo platform',
    de: 'Lerne die Grundlagen der Navigation und Verwendung der Scalevo-Plattform'
  },
  guide2Title: {
    en: 'Setting Up Your First Campaign',
    de: 'Einrichten deiner ersten Kampagne'
  },
  guide2Description: {
    en: 'A step-by-step guide to creating and launching your first ad campaign',
    de: 'Eine Schritt-für-Schritt-Anleitung zum Erstellen und Starten deiner ersten Werbekampagne'
  },
  guide3Title: {
    en: 'Understanding Performance Metrics',
    de: 'Verstehen von Leistungskennzahlen'
  },
  guide3Description: {
    en: 'Learn how to interpret and act on campaign performance data',
    de: 'Lerne, wie du Kampagnenleistungsdaten interpretierst und danach handelst'
  },
  guide4Title: {
    en: 'Optimizing Ad Campaigns',
    de: 'Optimierung von Werbekampagnen'
  },
  guide4Description: {
    en: 'Advanced techniques to improve your campaign performance',
    de: 'Fortgeschrittene Techniken zur Verbesserung deiner Kampagnenleistung'
  },
  // Support Tickets section
  ticketsTitle: {
    en: 'Support Tickets',
    de: 'Support-Tickets'
  },
  ticketsDescription: {
    en: 'View and manage your support requests',
    de: 'Sieh und verwalte deine Support-Anfragen'
  },
  yourTickets: {
    en: 'Your Tickets',
    de: 'Deine Tickets'
  },
  createNewTicket: {
    en: 'Create New Ticket',
    de: 'Neues Ticket erstellen'
  },
  noTicketsYet: {
    en: 'You don\'t have any support tickets yet',
    de: 'Du hast noch keine Support-Tickets'
  },
  createFirstTicket: {
    en: 'Create Your First Ticket',
    de: 'Erstelle dein erstes Ticket'
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
    de: 'Nimm Kontakt mit unserem Support-Team auf'
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
    de: 'Dein Name'
  },
  yourEmail: {
    en: 'your.email@example.com',
    de: 'deine.email@beispiel.com'
  },
  howCanWeHelp: {
    en: 'How can we help you?',
    de: 'Wie können wir dir helfen?'
  },
  describeIssue: {
    en: 'Describe your issue or question in detail',
    de: 'Beschreibe dein Problem oder deine Frage im Detail'
  }
};
