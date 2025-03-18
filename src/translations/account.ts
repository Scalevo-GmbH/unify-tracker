
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
  | 'currentPlanDesc'
  | 'renewDate'
  | 'renewDateValue'
  | 'cancelSubscription'
  | 'plansTitle'
  | 'free'
  | 'pro'
  | 'enterprise'
  | 'freeDescription'
  | 'proDescription'
  | 'enterpriseDescription'
  | 'freeFeature1'
  | 'freeFeature2'
  | 'freeFeature3'
  | 'freeFeature4'
  | 'freeFeature5'
  | 'freeFeature6'
  | 'proFeature1'
  | 'proFeature2'
  | 'proFeature3'
  | 'proFeature4'
  | 'proFeature5'
  | 'proFeature6'
  | 'enterpriseFeature1'
  | 'enterpriseFeature2'
  | 'enterpriseFeature3'
  | 'enterpriseFeature4'
  | 'enterpriseFeature5'
  | 'enterpriseFeature6'
  | 'subscriptionCanceled'
  | 'subscriptionCanceledDesc'
  | 'planChangeInitiated'
  | 'planChangeDesc'
  | 'popularChoice'
  | 'currentPlan'
  | 'monthly'
  | 'yearly'
  | 'subscribe'
  | 'plan'
  | 'activePlan'
  | 'renewsOn'
  | 'cancelSubscriptionConfirm'
  | 'keepSubscription'
  | 'confirmCancel'
  | 'billingHistory'
  | 'paymentMethodTitle'
  | 'mastercardEnding'
  | 'expiresOn';

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
  currentPlanDesc: {
    en: 'Manage your current subscription plan and billing',
    de: 'Verwalte deinen aktuellen Aboplan und die Abrechnung'
  },
  plan: {
    en: 'Plan',
    de: 'Plan'
  },
  activePlan: {
    en: 'Active',
    de: 'Aktiv'
  },
  renewDate: {
    en: 'Renew Date',
    de: 'Verlängerungsdatum'
  },
  renewDateValue: {
    en: '{{date}}',
    de: '{{date}}'
  },
  renewsOn: {
    en: 'Renews on',
    de: 'Verlängert sich am'
  },
  cancelSubscription: {
    en: 'Cancel Subscription',
    de: 'Abonnement kündigen'
  },
  cancelSubscriptionConfirm: {
    en: 'Are you sure you want to cancel your subscription? Your plan will remain active until the end of the current billing period.',
    de: 'Bist du sicher, dass du dein Abonnement kündigen möchtest? Dein Plan bleibt bis zum Ende des aktuellen Abrechnungszeitraums aktiv.'
  },
  keepSubscription: {
    en: 'Keep Subscription',
    de: 'Abonnement behalten'
  },
  confirmCancel: {
    en: 'Cancel Subscription',
    de: 'Abonnement kündigen'
  },
  billingHistory: {
    en: 'Billing History',
    de: 'Rechnungsverlauf'
  },
  paymentMethodTitle: {
    en: 'Payment Method',
    de: 'Zahlungsmethode'
  },
  mastercardEnding: {
    en: 'Mastercard ending in {{digits}}',
    de: 'Mastercard mit Endung {{digits}}'
  },
  expiresOn: {
    en: 'Expires {{date}}',
    de: 'Läuft ab {{date}}'
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
  },
  freeDescription: {
    en: 'Basic features for individuals',
    de: 'Grundfunktionen für Einzelpersonen'
  },
  proDescription: {
    en: 'Advanced features for professionals',
    de: 'Erweiterte Funktionen für Profis'
  },
  enterpriseDescription: {
    en: 'Complete solution for businesses',
    de: 'Komplettlösung für Unternehmen'
  },
  freeFeature1: {
    en: '1 integration',
    de: '1 Integration'
  },
  freeFeature2: {
    en: 'Basic analytics',
    de: 'Grundlegende Analysen'
  },
  freeFeature3: {
    en: 'Standard reports',
    de: 'Standardberichte'
  },
  freeFeature4: {
    en: 'Team collaboration',
    de: 'Teamzusammenarbeit'
  },
  freeFeature5: {
    en: 'Advanced insights',
    de: 'Erweiterte Einblicke'
  },
  freeFeature6: {
    en: '24/7 support',
    de: '24/7 Support'
  },
  proFeature1: {
    en: '5 integrations',
    de: '5 Integrationen'
  },
  proFeature2: {
    en: 'Advanced analytics',
    de: 'Erweiterte Analysen'
  },
  proFeature3: {
    en: 'Custom reports',
    de: 'Benutzerdefinierte Berichte'
  },
  proFeature4: {
    en: 'Team collaboration',
    de: 'Teamzusammenarbeit'
  },
  proFeature5: {
    en: 'Advanced insights',
    de: 'Erweiterte Einblicke'
  },
  proFeature6: {
    en: '24/7 support',
    de: '24/7 Support'
  },
  enterpriseFeature1: {
    en: 'Unlimited integrations',
    de: 'Unbegrenzte Integrationen'
  },
  enterpriseFeature2: {
    en: 'Enterprise analytics',
    de: 'Enterprise-Analysen'
  },
  enterpriseFeature3: {
    en: 'Custom solutions',
    de: 'Maßgeschneiderte Lösungen'
  },
  enterpriseFeature4: {
    en: 'Advanced team tools',
    de: 'Erweiterte Team-Tools'
  },
  enterpriseFeature5: {
    en: 'AI-powered insights',
    de: 'KI-gestützte Einblicke'
  },
  enterpriseFeature6: {
    en: '24/7 priority support',
    de: '24/7 Prioritäts-Support'
  },
  subscriptionCanceled: {
    en: 'Subscription canceled',
    de: 'Abonnement gekündigt'
  },
  subscriptionCanceledDesc: {
    en: 'Your subscription has been canceled. It will remain active until the end of the billing period.',
    de: 'Dein Abonnement wurde gekündigt. Es bleibt bis zum Ende des Abrechnungszeitraums aktiv.'
  },
  planChangeInitiated: {
    en: 'Plan change initiated',
    de: 'Planänderung eingeleitet'
  },
  planChangeDesc: {
    en: 'You\'re switching to the {{plan}} plan. Redirecting to checkout...',
    de: 'Du wechselst zum {{plan}}-Plan. Weiterleitung zur Bezahlung...'
  },
  popularChoice: {
    en: 'Popular Choice',
    de: 'Beliebte Wahl'
  },
  currentPlan: {
    en: 'Current Plan',
    de: 'Aktueller Plan'
  },
  monthly: {
    en: 'month',
    de: 'Monat'
  },
  yearly: {
    en: 'year',
    de: 'Jahr'
  },
  subscribe: {
    en: 'Subscribe',
    de: 'Abonnieren'
  }
};
