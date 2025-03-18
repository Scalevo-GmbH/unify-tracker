
import type { Language } from "@/hooks/use-language";

export type AnalyticsTranslationKey = 
  | 'googleAnalyticsDesc'
  | 'mixpanelDesc'
  | 'hotjarDesc'
  | 'segmentDesc';

export const analyticsTranslations: Record<AnalyticsTranslationKey, Record<Language, string>> = {
  googleAnalyticsDesc: {
    en: 'Import website traffic and conversion data.',
    de: 'Importiere Website-Traffic- und Conversion-Daten.'
  },
  mixpanelDesc: {
    en: 'Track user events and conversion funnels.',
    de: 'Verfolge Nutzeraktivitäten und Conversion-Trichter.'
  },
  hotjarDesc: {
    en: 'Visualize user behavior with heatmaps and recordings.',
    de: 'Visualisiere Nutzerverhalten mit Heatmaps und Aufzeichnungen.'
  },
  segmentDesc: {
    en: 'Collect, unify and activate your customer data.',
    de: 'Sammle, vereinheitliche und aktiviere deine Kundendaten.'
  }
};
