
import type { Language } from "@/hooks/use-language";

export type AccountSecurityTranslationKey = 
  | 'securityTitle'
  | 'securityDesc'
  | 'currentPassword'
  | 'newPassword'
  | 'confirmPassword'
  | 'updatePassword';

export const accountSecurityTranslations: Record<AccountSecurityTranslationKey, Record<Language, string>> = {
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
  }
};
