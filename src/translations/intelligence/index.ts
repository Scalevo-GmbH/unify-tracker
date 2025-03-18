
import type { Language } from "@/hooks/use-language";
import { heroTranslations, HeroTranslationKey } from "./hero";
import { featuresTranslations, FeaturesTranslationKey } from "./features";
import { coreFeaturesTranslations, CoreFeaturesTranslationKey } from "./core-features";
import { howItWorksTranslations, HowItWorksTranslationKey } from "./how-it-works";
import { faqTranslations, FAQTranslationKey } from "./faq";
import { earlyAccessTranslations, EarlyAccessTranslationKey } from "./early-access";
import { generalTranslations, GeneralTranslationKey } from "./general";

// Combined type for all intelligence-related translation keys
export type IntelligenceTranslationKey = 
  | GeneralTranslationKey
  | HeroTranslationKey
  | FeaturesTranslationKey
  | CoreFeaturesTranslationKey
  | HowItWorksTranslationKey
  | FAQTranslationKey
  | EarlyAccessTranslationKey;

// Export all translations in a combined object
export const intelligenceTranslations: Record<IntelligenceTranslationKey, Record<Language, string>> = {
  ...generalTranslations,
  ...heroTranslations,
  ...featuresTranslations,
  ...coreFeaturesTranslations,
  ...howItWorksTranslations,
  ...faqTranslations,
  ...earlyAccessTranslations
};
