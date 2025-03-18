
import { Language } from '@/hooks/use-language';
import { websiteTranslations, WebsiteTranslationKey } from './website';
import { navigationTranslations, NavigationTranslationKey } from './navigation';
import { dashboardTranslations, DashboardTranslationKey } from './dashboard';
import { helpSupportTranslations, HelpSupportTranslationKey } from './help-support';
import { indexPageTranslations, IndexPageTranslationKey } from './index-page';
import { campaignTranslations, CampaignTranslationKey } from './campaigns';
import { adsTranslations, AdsTranslationKey } from './ads';

// Combine all translation keys
export type TranslationKey = 
  | WebsiteTranslationKey 
  | NavigationTranslationKey 
  | DashboardTranslationKey 
  | HelpSupportTranslationKey
  | IndexPageTranslationKey
  | CampaignTranslationKey
  | AdsTranslationKey;

// Get a translation for a specific key and language
export function getTranslation(key: TranslationKey, language: Language): string {
  // Check which translation set contains the key
  if (key in websiteTranslations) {
    return websiteTranslations[key as WebsiteTranslationKey][language];
  } 
  else if (key in navigationTranslations) {
    return navigationTranslations[key as NavigationTranslationKey][language];
  } 
  else if (key in dashboardTranslations) {
    return dashboardTranslations[key as DashboardTranslationKey][language];
  } 
  else if (key in helpSupportTranslations) {
    return helpSupportTranslations[key as HelpSupportTranslationKey][language];
  }
  else if (key in indexPageTranslations) {
    return indexPageTranslations[key as IndexPageTranslationKey][language];
  }
  else if (key in campaignTranslations) {
    return campaignTranslations[key as CampaignTranslationKey][language];
  }
  else if (key in adsTranslations) {
    return adsTranslations[key as AdsTranslationKey][language];
  }
  
  // Handle missing translations
  console.warn(`Translation missing for key: ${key}`);
  return `[${key}]`;
}
