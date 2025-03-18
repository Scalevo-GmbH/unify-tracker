
import type { Language } from "@/hooks/use-language";
import type { TranslationKey } from './types';
import { dashboardTranslations } from './dashboard';
import { navigationTranslations } from './navigation';
import { adsTranslations } from './ads';
import { helpSupportTranslations } from './help-support';
import { campaignTranslations } from './campaigns';

// Get a translation by key and language
export function getTranslation(key: TranslationKey, language: Language): string {
  // Check each translation group for the key
  if (key in dashboardTranslations) {
    return dashboardTranslations[key as keyof typeof dashboardTranslations][language] || key;
  }
  
  if (key in navigationTranslations) {
    return navigationTranslations[key as keyof typeof navigationTranslations][language] || key;
  }
  
  if (key in adsTranslations) {
    return adsTranslations[key as keyof typeof adsTranslations][language] || key;
  }
  
  if (key in helpSupportTranslations) {
    return helpSupportTranslations[key as keyof typeof helpSupportTranslations][language] || key;
  }
  
  if (key in campaignTranslations) {
    return campaignTranslations[key as keyof typeof campaignTranslations][language] || key;
  }
  
  // If not found in any group, return the key itself
  return key;
}

// Export all translation parts for direct access
export * from './dashboard';
export * from './navigation';
export * from './ads';
export * from './help-support';
export * from './campaigns';
export * from './types';
