
import type { Language } from "@/hooks/use-language";

export type AccountTranslationKey = 
  | 'accountTitle'
  | 'accountSubtitle'
  | 'settingsTab'
  | 'subscriptionsTab'
  | 'paymentTab'
  | 'profileInfoTitle'
  | 'profileInfoDesc'
  | 'firstName'
  | 'lastName'
  | 'emailAddress'
  | 'company'
  | 'changeAvatar'
  | 'saveChanges'
  | 'settingsUpdated'
  | 'settingsUpdatedDesc'
  | 'notificationTitle'
  | 'notificationDesc'
  | 'emailNotifications'
  | 'emailNotificationsDesc'
  | 'marketingEmails'
  | 'marketingEmailsDesc'
  | 'performanceReports'
  | 'performanceReportsDesc'
  | 'savePreferences'
  | 'securityTitle'
  | 'securityDesc'
  | 'currentPassword'
  | 'newPassword'
  | 'confirmPassword'
  | 'updatePassword'
  | 'paymentMethodsTitle'
  | 'paymentMethodsDesc'
  | 'addPaymentMethod'
  | 'billingInfoTitle'
  | 'billingInfoDesc'
  | 'currentPlanTitle'
  | 'renewDate'
  | 'cancelSubscription'
  | 'plansTitle'
  | 'free'
  | 'pro'
  | 'enterprise';

export const accountTranslations: Record<AccountTranslationKey, Record<Language, string>> = {
  accountTitle: {
    en: 'Account',
    de: 'Konto'
  },
  accountSubtitle: {
    en: 'Manage your account settings and preferences',
    de: 'Verwalte deine Kontoeinstellungen und Präferenzen'
  },
  settingsTab: {
    en: 'Settings',
    de: 'Einstellungen'
  },
  subscriptionsTab: {
    en: 'Subscriptions',
    de: 'Abonnements'
  },
  paymentTab: {
    en: 'Payment Methods',
    de: 'Zahlungsmethoden'
  },
  profileInfoTitle: {
    en: 'Profile Information',
    de: 'Profilinformationen'
  },
  profileInfoDesc: {
    en: 'Update your profile details and personal information',
    de: 'Aktualisiere deine Profileinzelheiten und persönlichen Informationen'
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
    en: 'Settings updated',
    de: 'Einstellungen aktualisiert'
  },
  settingsUpdatedDesc: {
    en: 'Your account settings have been updated successfully.',
    de: 'Deine Kontoeinstellungen wurden erfolgreich aktualisiert.'
  },
  notificationTitle: {
    en: 'Notification Preferences',
    de: 'Benachrichtigungseinstellungen'
  },
  notificationDesc: {
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
    de: 'Erhalte E-Mails über neue Funktionen und Aktionen'
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
  securityTitle: {
    en: 'Security',
    de: 'Sicherheit'
  },
  securityDesc: {
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
  confirmPassword: {
    en: 'Confirm New Password',
    de: 'Neues Passwort bestätigen'
  },
  updatePassword: {
    en: 'Update Password',
    de: 'Passwort aktualisieren'
  },
  paymentMethodsTitle: {
    en: 'Payment Methods',
    de: 'Zahlungsmethoden'
  },
  paymentMethodsDesc: {
    en: 'Manage your payment methods and billing information',
    de: 'Verwalte deine Zahlungsmethoden und Rechnungsinformationen'
  },
  addPaymentMethod: {
    en: 'Add Payment Method',
    de: 'Zahlungsmethode hinzufügen'
  },
  billingInfoTitle: {
    en: 'Billing Information',
    de: 'Rechnungsinformationen'
  },
  billingInfoDesc: {
    en: 'Manage your billing address and tax information',
    de: 'Verwalte deine Rechnungsadresse und Steuerinformationen'
  },
  currentPlanTitle: {
    en: 'Current Plan',
    de: 'Aktueller Plan'
  },
  renewDate: {
    en: 'Renew Date',
    de: 'Verlängerungsdatum'
  },
  cancelSubscription: {
    en: 'Cancel Subscription',
    de: 'Abonnement kündigen'
  },
  plansTitle: {
    en: 'Available Plans',
    de: 'Verfügbare Pläne'
  },
  free: {
    en: 'Free',
    de: 'Kostenlos'
  },
  pro: {
    en: 'Pro',
    de: 'Pro'
  },
  enterprise: {
    en: 'Enterprise',
    de: 'Enterprise'
  }
};
