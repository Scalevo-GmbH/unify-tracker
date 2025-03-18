
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
  | 'describeIssue'
  // Campaign page translations
  | 'createCampaign'
  | 'filterByStatus'
  | 'filterByPlatform'
  | 'allCampaigns'
  | 'activeCampaigns'
  | 'completedCampaigns'
  | 'socialMedia'
  | 'searchAds'
  | 'emailMarketing'
  | 'campaignName'
  | 'campaignType'
  | 'platform'
  | 'status'
  | 'budget'
  | 'spent'
  | 'dates'
  | 'performance'
  | 'actions'
  | 'active'
  | 'completed'
  | 'paused'
  | 'scheduled'
  | 'excellent'
  | 'good'
  | 'average'
  | 'poor'
  | 'edit'
  | 'duplicate'
  | 'pause'
  | 'resume'
  | 'delete'
  | 'start'
  | 'end'
  | 'noCampaignsFound'
  | 'cancel'
  // New Campaign Form
  | 'createNewCampaign'
  | 'campaignNameLabel'
  | 'campaignNamePlaceholder'
  | 'campaignNameDescription'
  | 'platformLabel'
  | 'selectPlatform'
  | 'platformDescription'
  | 'campaignTypeLabel'
  | 'selectCampaignType'
  | 'campaignTypeDescription'
  | 'budgetLabel'
  | 'budgetPlaceholder'
  | 'budgetDescription'
  | 'startDateLabel'
  | 'endDateLabel'
  | 'campaignDescriptionLabel'
  | 'campaignDescriptionPlaceholder'
  | 'objectivesLabel'
  | 'objectivesPlaceholder'
  | 'targetAudienceLabel'
  | 'targetAudienceDescription'
  | 'targetAudiencePlaceholder'
  // Dashboard metrics
  | 'totalReach'
  | 'impressions'
  | 'conversionRate'
  | 'engagementRate'
  | 'reachDescription'
  | 'impressionsDescription'
  | 'conversionRateDescription'
  | 'engagementRateDescription';

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
    de: 'Verfolge und optimiere deine Werbekampagnen'
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
  },
  // Campaign page translations
  createCampaign: {
    en: 'Create Campaign',
    de: 'Kampagne erstellen'
  },
  filterByStatus: {
    en: 'Filter by Status',
    de: 'Nach Status filtern'
  },
  filterByPlatform: {
    en: 'Filter by Platform',
    de: 'Nach Plattform filtern'
  },
  allCampaigns: {
    en: 'All Campaigns',
    de: 'Alle Kampagnen'
  },
  activeCampaigns: {
    en: 'Active Campaigns',
    de: 'Aktive Kampagnen'
  },
  completedCampaigns: {
    en: 'Completed Campaigns',
    de: 'Abgeschlossene Kampagnen'
  },
  socialMedia: {
    en: 'Social Media',
    de: 'Soziale Medien'
  },
  searchAds: {
    en: 'Search Ads',
    de: 'Suchanzeigen'
  },
  emailMarketing: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  campaignName: {
    en: 'Campaign',
    de: 'Kampagne'
  },
  campaignType: {
    en: 'Type',
    de: 'Typ'
  },
  platform: {
    en: 'Platform',
    de: 'Plattform'
  },
  status: {
    en: 'Status',
    de: 'Status'
  },
  budget: {
    en: 'Budget',
    de: 'Budget'
  },
  spent: {
    en: 'Spent',
    de: 'Ausgegeben'
  },
  dates: {
    en: 'Dates',
    de: 'Zeitraum'
  },
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  actions: {
    en: 'Actions',
    de: 'Aktionen'
  },
  active: {
    en: 'Active',
    de: 'Aktiv'
  },
  completed: {
    en: 'Completed',
    de: 'Abgeschlossen'
  },
  paused: {
    en: 'Paused',
    de: 'Pausiert'
  },
  scheduled: {
    en: 'Scheduled',
    de: 'Geplant'
  },
  excellent: {
    en: 'Excellent',
    de: 'Ausgezeichnet'
  },
  good: {
    en: 'Good',
    de: 'Gut'
  },
  average: {
    en: 'Average',
    de: 'Durchschnittlich'
  },
  poor: {
    en: 'Poor',
    de: 'Schlecht'
  },
  edit: {
    en: 'Edit',
    de: 'Bearbeiten'
  },
  duplicate: {
    en: 'Duplicate',
    de: 'Duplizieren'
  },
  pause: {
    en: 'Pause',
    de: 'Pausieren'
  },
  resume: {
    en: 'Resume',
    de: 'Fortsetzen'
  },
  delete: {
    en: 'Delete',
    de: 'Löschen'
  },
  start: {
    en: 'Start',
    de: 'Start'
  },
  end: {
    en: 'End',
    de: 'Ende'
  },
  noCampaignsFound: {
    en: 'No campaigns found matching your filters.',
    de: 'Keine Kampagnen gefunden, die deinen Filtern entsprechen.'
  },
  cancel: {
    en: 'Cancel',
    de: 'Abbrechen'
  },
  // New Campaign Form
  createNewCampaign: {
    en: 'Create New Campaign',
    de: 'Neue Kampagne erstellen'
  },
  campaignNameLabel: {
    en: 'Campaign Name',
    de: 'Kampagnenname'
  },
  campaignNamePlaceholder: {
    en: 'Summer Sale 2025',
    de: 'Sommer-Sale 2025'
  },
  campaignNameDescription: {
    en: 'A clear, descriptive name for your campaign',
    de: 'Ein klarer, beschreibender Name für deine Kampagne'
  },
  platformLabel: {
    en: 'Platform',
    de: 'Plattform'
  },
  selectPlatform: {
    en: 'Select platform',
    de: 'Plattform auswählen'
  },
  platformDescription: {
    en: 'The marketing platform for this campaign',
    de: 'Die Marketing-Plattform für diese Kampagne'
  },
  campaignTypeLabel: {
    en: 'Campaign Type',
    de: 'Kampagnentyp'
  },
  selectCampaignType: {
    en: 'Select campaign type',
    de: 'Kampagnentyp auswählen'
  },
  campaignTypeDescription: {
    en: 'The type of marketing campaign',
    de: 'Die Art der Marketing-Kampagne'
  },
  budgetLabel: {
    en: 'Budget',
    de: 'Budget'
  },
  budgetPlaceholder: {
    en: '$1,000',
    de: '1.000 €'
  },
  budgetDescription: {
    en: 'Total budget allocated for this campaign',
    de: 'Gesamtbudget für diese Kampagne'
  },
  startDateLabel: {
    en: 'Start Date',
    de: 'Startdatum'
  },
  endDateLabel: {
    en: 'End Date',
    de: 'Enddatum'
  },
  campaignDescriptionLabel: {
    en: 'Campaign Description',
    de: 'Kampagnenbeschreibung'
  },
  campaignDescriptionPlaceholder: {
    en: 'Describe the purpose and details of your campaign',
    de: 'Beschreibe den Zweck und die Details deiner Kampagne'
  },
  objectivesLabel: {
    en: 'Campaign Objectives',
    de: 'Kampagnenziele'
  },
  objectivesPlaceholder: {
    en: 'What are the main goals of this campaign?',
    de: 'Was sind die Hauptziele dieser Kampagne?'
  },
  targetAudienceLabel: {
    en: 'Target Audience',
    de: 'Zielgruppe'
  },
  targetAudienceDescription: {
    en: 'The intended audience for your campaign',
    de: 'Die beabsichtigte Zielgruppe für deine Kampagne'
  },
  targetAudiencePlaceholder: {
    en: 'Describe your target audience for this campaign',
    de: 'Beschreibe deine Zielgruppe für diese Kampagne'
  },
  // Dashboard metrics
  totalReach: {
    en: 'Total Reach',
    de: 'Gesamtreichweite'
  },
  impressions: {
    en: 'Impressions',
    de: 'Impressionen'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  engagementRate: {
    en: 'Engagement Rate',
    de: 'Engagement-Rate'
  },
  reachDescription: {
    en: 'The total number of unique users who have seen your content across all platforms and campaigns.',
    de: 'Die Gesamtzahl der einzelnen Nutzer, die deine Inhalte über alle Plattformen und Kampagnen hinweg gesehen haben.'
  },
  impressionsDescription: {
    en: 'The total number of times your content has been displayed, regardless of whether it was clicked or not.',
    de: 'Die Gesamtzahl der Anzeigen deiner Inhalte, unabhängig davon, ob darauf geklickt wurde oder nicht.'
  },
  conversionRateDescription: {
    en: 'The percentage of visitors who completed a desired goal (e.g., made a purchase or signed up) out of the total number of visitors.',
    de: 'Der Prozentsatz der Besucher, die ein gewünschtes Ziel erreicht haben (z.B. einen Kauf getätigt oder sich angemeldet haben), gemessen an der Gesamtzahl der Besucher.'
  },
  engagementRateDescription: {
    en: 'The percentage of people who engaged with your content (likes, comments, shares, clicks) compared to the total reach.',
    de: 'Der Prozentsatz der Personen, die mit deinen Inhalten interagiert haben (Likes, Kommentare, Shares, Klicks) im Vergleich zur Gesamtreichweite.'
  }
};

// Get a translation by key and language
export function getTranslation(key: TranslationKey, language: Language): string {
  return translations[key]?.[language] || key;
}
