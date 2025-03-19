
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
  | 'manageBillingInfo';

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
  }
};
