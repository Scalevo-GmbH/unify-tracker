
import { DashboardTranslationKey } from './dashboard';
import { NavigationTranslationKey } from './navigation';
import { AdsTranslationKey } from './ads';
import { HelpSupportTranslationKey } from './help-support';
import { CampaignTranslationKey } from './campaigns';
import { WebsiteTranslationKey } from './website';
import { IndexTranslationKey } from './index-page';
import { PerformanceTranslationKey } from './performance';
import { IntelligenceTranslationKey } from './intelligence';
import { IntegrationsTranslationKey } from './integrations';
import { AccountTranslationKey } from './account';

// Export a union type of all translation keys
export type TranslationKey = 
  | DashboardTranslationKey
  | NavigationTranslationKey
  | AdsTranslationKey
  | HelpSupportTranslationKey
  | CampaignTranslationKey
  | WebsiteTranslationKey
  | IndexTranslationKey
  | PerformanceTranslationKey
  | IntelligenceTranslationKey
  | IntegrationsTranslationKey
  | AccountTranslationKey;
