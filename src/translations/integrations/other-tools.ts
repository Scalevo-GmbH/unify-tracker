
import type { Language } from "@/hooks/use-language";

export type OtherToolsTranslationKey = 
  | 'intercomDesc'
  | 'hubspotDesc'
  | 'twilioDesc'
  | 'zendeskDesc';

export const otherToolsTranslations: Record<OtherToolsTranslationKey, Record<Language, string>> = {
  intercomDesc: {
    en: 'Track customer conversations and support metrics.',
    de: 'Verfolge Kundengespräche und Support-Metriken.'
  },
  hubspotDesc: {
    en: 'Connect your CRM and marketing automation platform.',
    de: 'Verbinde deine CRM- und Marketing-Automatisierungsplattform.'
  },
  twilioDesc: {
    en: 'Track SMS campaign performance and engagement.',
    de: 'Verfolge SMS-Kampagnenleistung und Engagement.'
  },
  zendeskDesc: {
    en: 'Monitor customer support metrics and satisfaction.',
    de: 'Überwache Kundensupport-Metriken und -Zufriedenheit.'
  }
};
