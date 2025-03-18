
import type { Language } from "@/hooks/use-language";

export type AccountProfileTranslationKey = 
  | 'profileInfoTitle'
  | 'profileInfoDesc'
  | 'firstName'
  | 'lastName'
  | 'emailAddress'
  | 'company'
  | 'changeAvatar'
  | 'saveChanges';

export const accountProfileTranslations: Record<AccountProfileTranslationKey, Record<Language, string>> = {
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
  }
};
