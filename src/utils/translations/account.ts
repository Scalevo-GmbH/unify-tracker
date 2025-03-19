import { TranslationEntry, TranslationsObject } from './types';

export type AccountTranslationKey =
  | 'account'
  | 'accountManage'
  | 'settings'
  | 'subscriptions' 
  | 'paymentMethods'
  | 'profileInformation'
  | 'updateProfile'
  | 'firstName'
  | 'lastName'
  | 'emailAddress'
  | 'company'
  | 'changeAvatar'
  | 'saveChanges'
  | 'settingsUpdated'
  | 'notificationPreferences'
  | 'manageNotifications'
  | 'emailNotifications'
  | 'emailNotificationsDesc'
  | 'marketingEmails'
  | 'marketingEmailsDesc'
  | 'performanceReports'
  | 'performanceReportsDesc'
  | 'savePreferences'
  | 'security'
  | 'managePassword'
  | 'currentPassword'
  | 'newPassword'
  | 'confirmNewPassword'
  | 'updatePassword'
  | 'currentSubscription'
  | 'manageSubscription'
  | 'activePlan'
  | 'renewsOn'
  | 'cancelSubscription'
  | 'keepSubscription'
  | 'confirmCancelSubscription'
  | 'cancelSubscriptionConfirmText'
  | 'billingHistory'
  | 'paymentMethod'
  | 'expiresOn'
  | 'availablePlans'
  | 'free'
  | 'freeDescription'
  | 'pro'
  | 'proDescription'
  | 'enterprise'
  | 'enterpriseDescription'
  | 'popularChoice'
  | 'currentPlan'
  | 'subscribe'
  | 'planChangeInitiated'
  | 'planChangeDescription'
  | 'subscriptionCanceled'
  | 'subscriptionCanceledDescription'
  | 'paymentMethodsTitle'
  | 'manageBilling'
  | 'addPaymentMethod'
  | 'billingInformation'
  | 'manageBillingInfo'
  | 'helpSupport'
  | 'helpSupportDesc'
  | 'faqs'
  | 'userGuides'
  | 'supportTickets'
  | 'contactUs'
  | 'frequentlyAskedQuestions'
  | 'faqDesc'
  | 'searchAnswers'
  | 'connectMetaAdsQuestion'
  | 'connectMetaAdsAnswer'
  | 'upgradeSubscriptionQuestion'
  | 'upgradeSubscriptionAnswer'
  | 'createCampaignQuestion'
  | 'createCampaignAnswer'
  | 'manageMultipleAccountsQuestion'
  | 'manageMultipleAccountsAnswer'
  | 'dataUpdateFrequencyQuestion'
  | 'dataUpdateFrequencyAnswer'
  | 'guidesTitle'
  | 'guidesDesc'
  | 'gettingStartedGuide'
  | 'gettingStartedDesc'
  | 'firstCampaignGuide'
  | 'firstCampaignDesc'
  | 'metricsGuide'
  | 'metricsDesc'
  | 'optimizationGuide'
  | 'optimizationDesc'
  | 'ticketsTitle'
  | 'ticketsDesc'
  | 'yourTickets'
  | 'createNewTicket'
  | 'openStatus'
  | 'closedStatus'
  | 'viewTicket'
  | 'noTicketsYet'
  | 'createFirstTicket'
  | 'contactTitle'
  | 'contactDesc'
  | 'nameLabel'
  | 'emailLabel'
  | 'subjectLabel'
  | 'messageLabel'
  | 'sendMessage'
  | 'otherWaysTitle'
  | 'emailContact'
  | 'liveChatContact'
  | 'liveChatHours'
  | 'phoneContact'
  | 'phoneNumber';

export const accountTranslations: TranslationsObject<AccountTranslationKey> = {
  account: {
    en: 'Account',
    de: 'Konto'
  },
  accountManage: {
    en: 'Manage your account settings and preferences',
    de: 'Verwalte deine Kontoeinstellungen und Präferenzen'
  },
  settings: {
    en: 'Settings',
    de: 'Einstellungen'
  },
  subscriptions: {
    en: 'Subscriptions',
    de: 'Abonnements'
  },
  paymentMethods: {
    en: 'Payment Methods',
    de: 'Zahlungsmethoden'
  },
  profileInformation: {
    en: 'Profile Information',
    de: 'Profilinformationen'
  },
  updateProfile: {
    en: 'Update your profile details and personal information',
    de: 'Aktualisiere deine Profildetails und persönlichen Informationen'
  },
  firstName: {
    en: 'First Name',
    de: 'Vorname'
  },
  lastName: {
    en: 'Last Name',
    de: 'Nachname'
  },
  emailAddress: {
    en: 'Email Address',
    de: 'E-Mail-Adresse'
  },
  company: {
    en: 'Company',
    de: 'Unternehmen'
  },
  changeAvatar: {
    en: 'Change Avatar',
    de: 'Avatar ändern'
  },
  saveChanges: {
    en: 'Save Changes',
    de: 'Änderungen speichern'
  },
  settingsUpdated: {
    en: 'Your account settings have been updated successfully.',
    de: 'Deine Kontoeinstellungen wurden erfolgreich aktualisiert.'
  },
  notificationPreferences: {
    en: 'Notification Preferences',
    de: 'Benachrichtigungseinstellungen'
  },
  manageNotifications: {
    en: 'Manage how you receive notifications and updates',
    de: 'Verwalte, wie du Benachrichtigungen und Updates erhältst'
  },
  emailNotifications: {
    en: 'Email Notifications',
    de: 'E-Mail-Benachrichtigungen'
  },
  emailNotificationsDesc: {
    en: 'Receive email notifications about account activity',
    de: 'Erhalte E-Mail-Benachrichtigungen über Kontoaktivitäten'
  },
  marketingEmails: {
    en: 'Marketing Emails',
    de: 'Marketing-E-Mails'
  },
  marketingEmailsDesc: {
    en: 'Receive emails about new features and promotions',
    de: 'Erhalte E-Mails über neue Funktionen und Angebote'
  },
  performanceReports: {
    en: 'Performance Reports',
    de: 'Leistungsberichte'
  },
  performanceReportsDesc: {
    en: 'Receive weekly reports about campaign performance',
    de: 'Erhalte wöchentliche Berichte über Kampagnenleistung'
  },
  savePreferences: {
    en: 'Save Preferences',
    de: 'Einstellungen speichern'
  },
  security: {
    en: 'Security',
    de: 'Sicherheit'
  },
  managePassword: {
    en: 'Manage your account password and security settings',
    de: 'Verwalte dein Kontopasswort und Sicherheitseinstellungen'
  },
  currentPassword: {
    en: 'Current Password',
    de: 'Aktuelles Passwort'
  },
  newPassword: {
    en: 'New Password',
    de: 'Neues Passwort'
  },
  confirmNewPassword: {
    en: 'Confirm New Password',
    de: 'Neues Passwort bestätigen'
  },
  updatePassword: {
    en: 'Update Password',
    de: 'Passwort aktualisieren'
  },
  currentSubscription: {
    en: 'Current Subscription',
    de: 'Aktuelles Abonnement'
  },
  manageSubscription: {
    en: 'Manage your current subscription plan and billing',
    de: 'Verwalte deinen aktuellen Abonnementplan und die Abrechnung'
  },
  activePlan: {
    en: 'Active',
    de: 'Aktiv'
  },
  renewsOn: {
    en: 'Renews on',
    de: 'Verlängert am'
  },
  cancelSubscription: {
    en: 'Cancel Subscription',
    de: 'Abonnement kündigen'
  },
  keepSubscription: {
    en: 'Keep Subscription',
    de: 'Abonnement behalten'
  },
  confirmCancelSubscription: {
    en: 'Are you sure you want to cancel your subscription?',
    de: 'Bist du sicher, dass du dein Abonnement kündigen möchtest?'
  },
  cancelSubscriptionConfirmText: {
    en: 'Your plan will remain active until the end of the current billing period.',
    de: 'Dein Plan bleibt bis zum Ende des aktuellen Abrechnungszeitraums aktiv.'
  },
  billingHistory: {
    en: 'Billing History',
    de: 'Abrechnungsverlauf'
  },
  paymentMethod: {
    en: 'Payment Method',
    de: 'Zahlungsmethode'
  },
  expiresOn: {
    en: 'Expires',
    de: 'Läuft ab'
  },
  availablePlans: {
    en: 'Available Plans',
    de: 'Verfügbare Pläne'
  },
  free: {
    en: 'Free',
    de: 'Kostenlos'
  },
  freeDescription: {
    en: 'Basic features for individuals',
    de: 'Grundfunktionen für Einzelpersonen'
  },
  pro: {
    en: 'Pro',
    de: 'Pro'
  },
  proDescription: {
    en: 'Advanced features for professionals',
    de: 'Erweiterte Funktionen für Profis'
  },
  enterprise: {
    en: 'Enterprise',
    de: 'Enterprise'
  },
  enterpriseDescription: {
    en: 'Complete solution for businesses',
    de: 'Komplettlösung für Unternehmen'
  },
  popularChoice: {
    en: 'Popular Choice',
    de: 'Beliebte Wahl'
  },
  currentPlan: {
    en: 'Current Plan',
    de: 'Aktueller Plan'
  },
  subscribe: {
    en: 'Subscribe',
    de: 'Abonnieren'
  },
  planChangeInitiated: {
    en: 'Plan change initiated',
    de: 'Planänderung eingeleitet'
  },
  planChangeDescription: {
    en: 'You\'re switching to the {plan} plan. Redirecting to checkout...',
    de: 'Du wechselst zum {plan}-Plan. Weiterleitung zur Zahlung...'
  },
  subscriptionCanceled: {
    en: 'Subscription canceled',
    de: 'Abonnement gekündigt'
  },
  subscriptionCanceledDescription: {
    en: 'Your subscription has been canceled. It will remain active until the end of the billing period.',
    de: 'Dein Abonnement wurde gekündigt. Es bleibt bis zum Ende des Abrechnungszeitraums aktiv.'
  },
  paymentMethodsTitle: {
    en: 'Payment Methods',
    de: 'Zahlungsmethoden'
  },
  manageBilling: {
    en: 'Manage your payment methods and billing information',
    de: 'Verwalte deine Zahlungsmethoden und Rechnungsinformationen'
  },
  addPaymentMethod: {
    en: 'Add Payment Method',
    de: 'Zahlungsmethode hinzufügen'
  },
  billingInformation: {
    en: 'Billing Information',
    de: 'Rechnungsinformationen'
  },
  manageBillingInfo: {
    en: 'Manage your billing address and tax information',
    de: 'Verwalte deine Rechnungsadresse und Steuerinformationen'
  },
  helpSupport: {
    en: 'Help & Support',
    de: 'Hilfe & Support'
  },
  helpSupportDesc: {
    en: 'Find answers to your questions or get in touch with our support team',
    de: 'Finde Antworten auf deine Fragen oder kontaktiere unser Support-Team'
  },
  faqs: {
    en: 'FAQs',
    de: 'FAQs'
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
    de: 'Kontaktiere uns'
  },
  frequentlyAskedQuestions: {
    en: 'Frequently Asked Questions',
    de: 'Häufig gestellte Fragen'
  },
  faqDesc: {
    en: 'Find answers to common questions about our platform and services',
    de: 'Finde Antworten auf häufige Fragen zu unserer Plattform und unseren Diensten'
  },
  searchAnswers: {
    en: 'Search for answers...',
    de: 'Nach Antworten suchen...'
  },
  connectMetaAdsQuestion: {
    en: 'How do I connect my Meta Ads account?',
    de: 'Wie verbinde ich mein Meta Ads-Konto?'
  },
  connectMetaAdsAnswer: {
    en: 'To connect your Meta Ads account, navigate to the Integrations page, find the Meta Ads card, and click on "Connect". You\'ll be prompted to log in to your Facebook account and grant necessary permissions.',
    de: 'Um dein Meta Ads-Konto zu verbinden, gehe zur Seite Integrationen, finde die Meta Ads-Karte und klicke auf "Verbinden". Du wirst aufgefordert, dich bei deinem Facebook-Konto anzumelden und die erforderlichen Berechtigungen zu erteilen.'
  },
  upgradeSubscriptionQuestion: {
    en: 'How can I upgrade my subscription plan?',
    de: 'Wie kann ich meinen Abonnementplan upgraden?'
  },
  upgradeSubscriptionAnswer: {
    en: 'You can upgrade your subscription plan by going to the Account page, selecting the "Subscriptions" tab, and choosing a new plan that meets your needs. Your billing will be prorated for the remainder of your current billing cycle.',
    de: 'Du kannst deinen Abonnementplan upgraden, indem du zur Kontoseite gehst, den Tab "Abonnements" auswählst und einen neuen Plan wählst, der deinen Bedürfnissen entspricht. Die Abrechnung wird für den Rest deines aktuellen Abrechnungszeitraums anteilig berechnet.'
  },
  createCampaignQuestion: {
    en: 'How do I create a new campaign?',
    de: 'Wie erstelle ich eine neue Kampagne?'
  },
  createCampaignAnswer: {
    en: 'To create a new campaign, go to the Campaigns page and click on the "Create Campaign" button. Follow the step-by-step wizard to set up your campaign objectives, target audience, budget, and creative assets.',
    de: 'Um eine neue Kampagne zu erstellen, gehe zur Seite Kampagnen und klicke auf den Button "Kampagne erstellen". Folge dem schrittweisen Assistenten, um deine Kampagnenziele, Zielgruppe, Budget und kreativen Assets einzurichten.'
  },
  manageMultipleAccountsQuestion: {
    en: 'Can I manage multiple ad accounts?',
    de: 'Kann ich mehrere Werbekonten verwalten?'
  },
  manageMultipleAccountsAnswer: {
    en: 'Yes, you can manage multiple ad accounts from different platforms. Connect each account through the Integrations page, and you\'ll be able to switch between them when viewing performance data or creating campaigns.',
    de: 'Ja, du kannst mehrere Werbekonten von verschiedenen Plattformen verwalten. Verbinde jedes Konto über die Seite Integrationen, und du kannst zwischen ihnen wechseln, wenn du Leistungsdaten ansiehst oder Kampagnen erstellst.'
  },
  dataUpdateFrequencyQuestion: {
    en: 'How often is the performance data updated?',
    de: 'Wie oft werden die Leistungsdaten aktualisiert?'
  },
  dataUpdateFrequencyAnswer: {
    en: 'Performance data is typically updated every 6 hours. However, some metrics from certain platforms may have different refresh rates. You can see the last update time on each dashboard widget.',
    de: 'Leistungsdaten werden in der Regel alle 6 Stunden aktualisiert. Einige Metriken von bestimmten Plattformen können jedoch unterschiedliche Aktualisierungsraten haben. Du kannst die letzte Aktualisierungszeit auf jedem Dashboard-Widget sehen.'
  },
  guidesTitle: {
    en: 'User Guides',
    de: 'Benutzerhandbücher'
  },
  guidesDesc: {
    en: 'Detailed guides to help you get the most out of our platform',
    de: 'Detaillierte Anleitungen, die dir helfen, das Beste aus unserer Plattform herauszuholen'
  },
  gettingStartedGuide: {
    en: 'Getting Started with Scalevo',
    de: 'Erste Schritte mit Scalevo'
  },
  gettingStartedDesc: {
    en: 'Learn the basics of navigating and using the Scalevo platform',
    de: 'Lerne die Grundlagen der Navigation und Nutzung der Scalevo-Plattform'
  },
  firstCampaignGuide: {
    en: 'Setting Up Your First Campaign',
    de: 'Einrichtung deiner ersten Kampagne'
  },
  firstCampaignDesc: {
    en: 'A step-by-step guide to creating and launching your first ad campaign',
    de: 'Eine Schritt-für-Schritt-Anleitung zum Erstellen und Starten deiner ersten Werbekampagne'
  },
  metricsGuide: {
    en: 'Understanding Performance Metrics',
    de: 'Verstehen von Leistungsmetriken'
  },
  metricsDesc: {
    en: 'Learn how to interpret and act on campaign performance data',
    de: 'Lerne, wie du Kampagnenleistungsdaten interpretierst und darauf reagierst'
  },
  optimizationGuide: {
    en: 'Optimizing Ad Campaigns',
    de: 'Optimierung von Werbekampagnen'
  },
  optimizationDesc: {
    en: 'Advanced techniques to improve your campaign performance',
    de: 'Fortgeschrittene Techniken zur Verbesserung deiner Kampagnenleistung'
  },
  ticketsTitle: {
    en: 'Support Tickets',
    de: 'Support-Tickets'
  },
  ticketsDesc: {
    en: 'View and manage your support requests',
    de: 'Sieh dir deine Support-Anfragen an und verwalte sie'
  },
  yourTickets: {
    en: 'Your Tickets',
    de: 'Deine Tickets'
  },
  createNewTicket: {
    en: 'Create New Ticket',
    de: 'Neues Ticket erstellen'
  },
  openStatus: {
    en: 'Open',
    de: 'Offen'
  },
  closedStatus: {
    en: 'Closed',
    de: 'Geschlossen'
  },
  viewTicket: {
    en: 'View',
    de: 'Ansehen'
  },
  noTicketsYet: {
    en: 'You don\'t have any support tickets yet',
    de: 'Du hast noch keine Support-Tickets'
  },
  createFirstTicket: {
    en: 'Create Your First Ticket',
    de: 'Erstelle dein erstes Ticket'
  },
  contactTitle: {
    en: 'Contact Us',
    de: 'Kontaktiere uns'
  },
  contactDesc: {
    en: 'Get in touch with our support team',
    de: 'Nimm Kontakt mit unserem Support-Team auf'
  },
  nameLabel: {
    en: 'Name',
    de: 'Name'
  },
  emailLabel: {
    en: 'Email',
    de: 'E-Mail'
  },
  subjectLabel: {
    en: 'Subject',
    de: 'Betreff'
  },
  messageLabel: {
    en: 'Message',
    de: 'Nachricht'
  },
  sendMessage: {
    en: 'Send Message',
    de: 'Nachricht senden'
  },
  otherWaysTitle: {
    en: 'Other Ways to Reach Us',
    de: 'Andere Wege, uns zu erreichen'
  },
  emailContact: {
    en: 'Email',
    de: 'E-Mail'
  },
  liveChatContact: {
    en: 'Live Chat',
    de: 'Live-Chat'
  },
  liveChatHours: {
    en: 'Available Mon-Fri, 9am-6pm UTC',
    de: 'Verfügbar Mo-Fr, 9-18 Uhr UTC'
  },
  phoneContact: {
    en: 'Phone Support',
    de: 'Telefonischer Support'
  },
  phoneNumber: {
    en: '+1 (800) 123-4567',
    de: '+1 (800) 123-4567'
  }
};
