
import type { Language } from "@/hooks/use-language";
import { accountGeneralTranslations, AccountGeneralTranslationKey } from "./general";
import { accountProfileTranslations, AccountProfileTranslationKey } from "./profile";
import { accountNotificationsTranslations, AccountNotificationsTranslationKey } from "./notifications";
import { accountSecurityTranslations, AccountSecurityTranslationKey } from "./security";
import { accountPaymentTranslations, AccountPaymentTranslationKey } from "./payment";
import { accountSubscriptionTranslations, AccountSubscriptionTranslationKey } from "./subscription";
import { accountFeaturesTranslations, AccountFeaturesTranslationKey } from "./features";

// Combined type for all account-related translation keys
export type AccountTranslationKey = 
  | AccountGeneralTranslationKey
  | AccountProfileTranslationKey
  | AccountNotificationsTranslationKey
  | AccountSecurityTranslationKey
  | AccountPaymentTranslationKey
  | AccountSubscriptionTranslationKey
  | AccountFeaturesTranslationKey;

// Export all translations in a combined object
export const accountTranslations: Record<AccountTranslationKey, Record<Language, string>> = {
  ...accountGeneralTranslations,
  ...accountProfileTranslations,
  ...accountNotificationsTranslations,
  ...accountSecurityTranslations,
  ...accountPaymentTranslations,
  ...accountSubscriptionTranslations,
  ...accountFeaturesTranslations
};
