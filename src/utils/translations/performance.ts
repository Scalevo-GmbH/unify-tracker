
import { Language } from './types';

// Define the keys for performance translations
export type PerformanceTranslationKey = 
  | 'performance'
  | 'trackAnalyzePerformance'
  | 'overview'
  | 'details'
  | 'paidSearch'
  | 'paidSocials'
  | 'organicSocial'
  | 'website'
  | 'email'
  | 'forms'
  | 'selectTool'
  | 'performanceSummary'
  | 'topPerformer'
  | 'recommendation'
  | 'viewDetailedAnalytics'
  | 'selectChannel'
  | 'channelDetails'
  | 'keyMetrics'
  | 'conversionRate';

// Define the actual translations
export const performanceTranslations: Record<PerformanceTranslationKey, Record<Language, string>> = {
  performance: {
    en: 'Performance',
    es: 'Rendimiento',
    fr: 'Performance'
  },
  trackAnalyzePerformance: {
    en: 'Track and analyze the performance of your marketing channels',
    es: 'Seguimiento y análisis del rendimiento de sus canales de marketing',
    fr: 'Suivez et analysez la performance de vos canaux marketing'
  },
  overview: {
    en: 'Overview',
    es: 'Visión general',
    fr: 'Aperçu'
  },
  details: {
    en: 'Details',
    es: 'Detalles',
    fr: 'Détails'
  },
  paidSearch: {
    en: 'Paid Search',
    es: 'Búsqueda pagada',
    fr: 'Recherche payante'
  },
  paidSocials: {
    en: 'Paid Social',
    es: 'Social pagado',
    fr: 'Social payant'
  },
  organicSocial: {
    en: 'Organic Social',
    es: 'Social orgánico',
    fr: 'Social organique'
  },
  website: {
    en: 'Website',
    es: 'Sitio web',
    fr: 'Site web'
  },
  email: {
    en: 'Email',
    es: 'Correo electrónico',
    fr: 'Email'
  },
  forms: {
    en: 'Forms',
    es: 'Formularios',
    fr: 'Formulaires'
  },
  selectTool: {
    en: 'Select Tool',
    es: 'Seleccionar herramienta',
    fr: 'Sélectionnez l\'outil'
  },
  performanceSummary: {
    en: 'Performance Summary',
    es: 'Resumen de rendimiento',
    fr: 'Résumé de performance'
  },
  topPerformer: {
    en: 'Top Performer',
    es: 'Mejor rendimiento',
    fr: 'Meilleur performant'
  },
  recommendation: {
    en: 'Recommendation',
    es: 'Recomendación',
    fr: 'Recommandation'
  },
  viewDetailedAnalytics: {
    en: 'View Detailed Analytics',
    es: 'Ver análisis detallado',
    fr: 'Voir les analyses détaillées'
  },
  selectChannel: {
    en: 'Select Channel',
    es: 'Seleccionar canal',
    fr: 'Sélectionner le canal'
  },
  channelDetails: {
    en: 'Channel Details',
    es: 'Detalles del canal',
    fr: 'Détails du canal'
  },
  keyMetrics: {
    en: 'Key Metrics',
    es: 'Métricas clave',
    fr: 'Indicateurs clés'
  },
  conversionRate: {
    en: 'Conversion Rate',
    es: 'Tasa de conversión',
    fr: 'Taux de conversion'
  }
};
