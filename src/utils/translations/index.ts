
import { Language } from './types';
import { NavigationTranslationKey, navigationTranslations } from './navigation';
import { ChannelsTranslationKey, channelsTranslations } from './channels';
import { DashboardTranslationKey, dashboardTranslations } from './dashboard';
import { MetricsTranslationKey, metricsTranslations } from './metrics';
import { PerformanceTranslationKey, performanceTranslations } from './performance';

// Combine all translation keys
export type TranslationKey =
  | NavigationTranslationKey
  | ChannelsTranslationKey
  | DashboardTranslationKey
  | MetricsTranslationKey
  | PerformanceTranslationKey;

// Export all translation objects
export const translations = {
  ...navigationTranslations,
  ...channelsTranslations,
  ...dashboardTranslations,
  ...metricsTranslations,
  ...performanceTranslations
};

// Export the main getTranslation function
export const getTranslation = (key: TranslationKey, language: Language): string => {
  return translations[key][language];
};

// Re-export all types
export type { Language } from './types';
export type { NavigationTranslationKey } from './navigation';
export type { ChannelsTranslationKey } from './channels';
export type { DashboardTranslationKey } from './dashboard';
export type { MetricsTranslationKey } from './metrics';
export type { PerformanceTranslationKey } from './performance';
