
import { Language } from './types';
import { channelsTranslations, ChannelsTranslationKey } from './channels';
import { performanceTranslations, PerformanceTranslationKey } from './performance';
import { googleAdsTranslations, GoogleAdsTranslationKey } from './google-ads';

// Import other translation categories as needed
// import { otherCategoryTranslations } from './other-category';

// Union type of all translation keys
export type TranslationKey = 
  | ChannelsTranslationKey 
  | PerformanceTranslationKey
  | GoogleAdsTranslationKey;
  // Add other categories as needed

// Function to get a translation
export function getTranslation(key: TranslationKey, language: Language = 'en'): string {
  // Look for the key in each translation object
  if (key in channelsTranslations) {
    return channelsTranslations[key as ChannelsTranslationKey][language];
  }
  
  if (key in performanceTranslations) {
    return performanceTranslations[key as PerformanceTranslationKey][language];
  }
  
  if (key in googleAdsTranslations) {
    return googleAdsTranslations[key as GoogleAdsTranslationKey][language];
  }
  
  // Add other categories as needed
  
  // If the key is not found, return the key itself as a fallback
  console.warn(`Translation key not found: ${key}`);
  return key;
}

export * from './types';
export * from './channels';
export * from './performance';
export * from './google-ads';
// Export other categories as needed
