
import { TranslationEntry, TranslationsObject } from './types';

export type ChannelsTranslationKey =
  | 'paidSocial'
  | 'paidSearch'
  | 'organicSocial'
  | 'websiteAnalytics'
  | 'emailMarketing'
  | 'formsAndSurvey'
  | 'paidSearchTab'
  | 'paidSocialsTab'
  | 'organicSocialTab'
  | 'websiteTab'
  | 'emailTab'
  | 'formsTab';

export const channelsTranslations: TranslationsObject<ChannelsTranslationKey> = {
  paidSocial: {
    en: 'Paid Social',
    de: 'Bezahlte Soziale Medien'
  },
  paidSearch: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  organicSocial: {
    en: 'Organic Social',
    de: 'Organische Soziale Medien'
  },
  websiteAnalytics: {
    en: 'Website Analytics',
    de: 'Website-Analyse'
  },
  emailMarketing: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  formsAndSurvey: {
    en: 'Forms & Survey',
    de: 'Formulare & Umfragen'
  },
  paidSearchTab: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  paidSocialsTab: {
    en: 'Paid Socials',
    de: 'Bezahlte Soziale Medien'
  },
  organicSocialTab: {
    en: 'Organic Social',
    de: 'Organische Soziale Medien'
  },
  websiteTab: {
    en: 'Website',
    de: 'Webseite'
  },
  emailTab: {
    en: 'E-Mail',
    de: 'E-Mail'
  },
  formsTab: {
    en: 'Forms',
    de: 'Formulare'
  }
};
