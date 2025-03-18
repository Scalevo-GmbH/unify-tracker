
import type { Language } from "@/hooks/use-language";

export type EmailMarketingTranslationKey = 
  | 'mailchimpDesc'
  | 'campaignMonitorDesc'
  | 'constantContactDesc'
  | 'sendGridDesc';

export const emailMarketingTranslations: Record<EmailMarketingTranslationKey, Record<Language, string>> = {
  mailchimpDesc: {
    en: 'Import your email campaign data and subscriber analytics.',
    de: 'Importiere deine E-Mail-Kampagnendaten und Abonnentenanalysen.'
  },
  campaignMonitorDesc: {
    en: 'Track email campaign performance and subscriber engagement.',
    de: 'Verfolge E-Mail-Kampagnenleistung und Abonnenten-Engagement.'
  },
  constantContactDesc: {
    en: 'Analyze email marketing performance and list growth.',
    de: 'Analysiere E-Mail-Marketing-Leistung und Listenwachstum.'
  },
  sendGridDesc: {
    en: 'Monitor email delivery rates and engagement metrics.',
    de: 'Überwache E-Mail-Zustellraten und Engagement-Metriken.'
  }
};
