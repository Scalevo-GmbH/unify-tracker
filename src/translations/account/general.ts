
import type { Language } from "@/hooks/use-language";

export type AccountGeneralTranslationKey = 
  | 'accountTitle'
  | 'accountSubtitle'
  | 'settingsTab'
  | 'subscriptionsTab'
  | 'paymentTab'
  | 'settingsUpdated'
  | 'settingsUpdatedDesc';

export const accountGeneralTranslations: Record<AccountGeneralTranslationKey, Record<Language, string>> = {
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
  settingsUpdated: {
    en: 'Settings updated',
    de: 'Einstellungen aktualisiert'
  },
  settingsUpdatedDesc: {
    en: 'Your account settings have been updated successfully.',
    de: 'Deine Kontoeinstellungen wurden erfolgreich aktualisiert.'
  }
};
