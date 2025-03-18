
import type { Language } from "@/hooks/use-language";

export type AccountNotificationsTranslationKey = 
  | 'notificationTitle'
  | 'notificationDesc'
  | 'emailNotifications'
  | 'emailNotificationsDesc'
  | 'marketingEmails'
  | 'marketingEmailsDesc'
  | 'performanceReports'
  | 'performanceReportsDesc'
  | 'savePreferences';

export const accountNotificationsTranslations: Record<AccountNotificationsTranslationKey, Record<Language, string>> = {
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
  }
};
