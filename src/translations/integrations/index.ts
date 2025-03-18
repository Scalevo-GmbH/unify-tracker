
import type { Language } from "@/hooks/use-language";
import { generalTranslations, GeneralTranslationKey } from "./general";
import { advertisingTranslations, AdvertisingTranslationKey } from "./advertising";
import { socialMediaTranslations, SocialMediaTranslationKey } from "./social-media";
import { emailMarketingTranslations, EmailMarketingTranslationKey } from "./email-marketing";
import { analyticsTranslations, AnalyticsTranslationKey } from "./analytics";
import { ecommerceTranslations, EcommerceTranslationKey } from "./ecommerce";
import { otherToolsTranslations, OtherToolsTranslationKey } from "./other-tools";

// Combined type for all integrations-related translation keys
export type IntegrationsTranslationKey = 
  | GeneralTranslationKey
  | AdvertisingTranslationKey
  | SocialMediaTranslationKey
  | EmailMarketingTranslationKey
  | AnalyticsTranslationKey
  | EcommerceTranslationKey
  | OtherToolsTranslationKey;

// Export all translations in a combined object
export const integrationsTranslations: Record<IntegrationsTranslationKey, Record<Language, string>> = {
  ...generalTranslations,
  ...advertisingTranslations,
  ...socialMediaTranslations,
  ...emailMarketingTranslations,
  ...analyticsTranslations,
  ...ecommerceTranslations,
  ...otherToolsTranslations
};
