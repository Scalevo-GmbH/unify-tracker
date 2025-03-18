
import { DashboardTranslationKey } from './dashboard';
import { NavigationTranslationKey } from './navigation';
import { AdsTranslationKey } from './ads';
import { HelpSupportTranslationKey } from './help-support';
import { CampaignTranslationKey } from './campaigns';
import { WebsiteTranslationKey } from './website';
import { IndexTranslationKey } from './index-page';

// Export a union type of all translation keys
export type TranslationKey = 
  | DashboardTranslationKey
  | NavigationTranslationKey
  | AdsTranslationKey
  | HelpSupportTranslationKey
  | CampaignTranslationKey
  | WebsiteTranslationKey
  | IndexTranslationKey;
