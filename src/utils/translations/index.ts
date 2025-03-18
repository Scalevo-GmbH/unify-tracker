
import { Language } from './types';
import { channelsTranslations, ChannelsTranslationKey } from './channels';
import { performanceTranslations, PerformanceTranslationKey } from './performance';
import { googleAdsTranslations, GoogleAdsTranslationKey } from './google-ads';
import { dashboardTranslations, DashboardTranslationKey } from './dashboard';
import { metricsTranslations, MetricsTranslationKey } from './metrics';
import { navigationTranslations, NavigationTranslationKey } from './navigation';

// Union type of all translation keys
export type TranslationKey = 
  | ChannelsTranslationKey 
  | PerformanceTranslationKey
  | GoogleAdsTranslationKey
  | DashboardTranslationKey
  | MetricsTranslationKey
  | NavigationTranslationKey;

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
  
  if (key in dashboardTranslations) {
    return dashboardTranslations[key as DashboardTranslationKey][language];
  }
  
  if (key in metricsTranslations) {
    return metricsTranslations[key as MetricsTranslationKey][language];
  }
  
  if (key in navigationTranslations) {
    return navigationTranslations[key as NavigationTranslationKey][language];
  }
  
  // If the key is not found, return the key itself as a fallback
  console.warn(`Translation key not found: ${key}`);
  return key;
}

export * from './types';
export * from './channels';
export * from './performance';
export * from './google-ads';
export * from './dashboard';
export * from './metrics';
export * from './navigation';
