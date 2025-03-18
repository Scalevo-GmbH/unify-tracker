
import { Language } from '@/hooks/use-language';

export type WebsiteTranslationKey = 
  | 'today' 
  | 'yesterday' 
  | 'lastSevenDays' 
  | 'lastThirtyDays' 
  | 'thisMonth'
  | 'lastMonth'
  | 'custom'
  | 'vsLastPeriod'
  | 'area'
  | 'bar'
  | 'line'
  | 'month'
  | 'quarter'
  | 'year'
  | 'keyMetrics'
  | 'overTime'
  | 'adPerformanceMetrics'
  | 'comparingReachClick'
  | 'avgCostPerClick'
  | 'percentageClicks'
  | 'avgPosition'
  | 'avgPositionDesc'
  | 'monthlyListGrowth'
  | 'unsubscribeRate';

export const websiteTranslations: Record<WebsiteTranslationKey, Record<Language, string>> = {
  today: {
    en: 'Today',
    de: 'Heute'
  },
  yesterday: {
    en: 'Yesterday',
    de: 'Gestern'
  },
  lastSevenDays: {
    en: 'Last 7 days',
    de: 'Letzte 7 Tage'
  },
  lastThirtyDays: {
    en: 'Last 30 days',
    de: 'Letzte 30 Tage'
  },
  thisMonth: {
    en: 'This Month',
    de: 'Dieser Monat'
  },
  lastMonth: {
    en: 'Last Month',
    de: 'Letzter Monat'
  },
  custom: {
    en: 'Custom',
    de: 'Benutzerdefiniert'
  },
  vsLastPeriod: {
    en: 'vs last period',
    de: 'vs. letzter Zeitraum'
  },
  area: {
    en: 'Area',
    de: 'Fläche'
  },
  bar: {
    en: 'Bar',
    de: 'Balken'
  },
  line: {
    en: 'Line',
    de: 'Linie'
  },
  month: {
    en: 'Month',
    de: 'Monat'
  },
  quarter: {
    en: 'Quarter',
    de: 'Quartal'
  },
  year: {
    en: 'Year',
    de: 'Jahr'
  },
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Wichtige Kennzahlen'
  },
  overTime: {
    en: 'Over Time',
    de: 'Im Zeitverlauf'
  },
  adPerformanceMetrics: {
    en: 'Ad Performance Metrics',
    de: 'Anzeigenleistungsmetriken'
  },
  comparingReachClick: {
    en: 'Comparing Reach and Click Performance',
    de: 'Vergleich von Reichweite und Klickleistung'
  },
  avgCostPerClick: {
    en: 'Average cost for each click',
    de: 'Durchschnittliche Kosten pro Klick'
  },
  percentageClicks: {
    en: 'Percentage of clicks that result in conversions',
    de: 'Prozentsatz der Klicks, die zu Konversionen führen'
  },
  avgPosition: {
    en: 'Avg. Position',
    de: 'Durchschn. Position'
  },
  avgPositionDesc: {
    en: 'Average position of your ad in search results',
    de: 'Durchschnittliche Position Ihrer Anzeige in Suchergebnissen'
  },
  monthlyListGrowth: {
    en: 'Monthly list growth',
    de: 'Monatliches Listenwachstum'
  },
  unsubscribeRate: {
    en: 'Unsubscribe Rate',
    de: 'Abmelderate'
  }
};
