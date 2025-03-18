
import type { Language } from "@/hooks/use-language";

export type AdvertisingTranslationKey = 
  | 'facebookAdsDesc'
  | 'googleAdsDesc'
  | 'linkedinAdsDesc'
  | 'twitterAdsDesc';

export const advertisingTranslations: Record<AdvertisingTranslationKey, Record<Language, string>> = {
  facebookAdsDesc: {
    en: 'Connect your Facebook Ads account to track performance and ROI.',
    de: 'Verbinde dein Facebook Ads-Konto, um Leistung und ROI zu verfolgen.'
  },
  googleAdsDesc: {
    en: 'Import your Google Ads campaigns and track conversions.',
    de: 'Importiere deine Google Ads-Kampagnen und verfolge Conversions.'
  },
  linkedinAdsDesc: {
    en: 'Track your LinkedIn advertising campaigns and conversions.',
    de: 'Verfolge deine LinkedIn-Werbekampagnen und Conversions.'
  },
  twitterAdsDesc: {
    en: 'Track your Twitter ad campaigns and performance.',
    de: 'Verfolge deine Twitter-Werbekampagnen und deren Leistung.'
  }
};
