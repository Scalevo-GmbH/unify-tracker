
import type { Language } from "@/hooks/use-language";

export type EcommerceTranslationKey = 
  | 'shopifyDesc'
  | 'wooCommerceDesc'
  | 'stripeDesc'
  | 'bigCommerceDesc';

export const ecommerceTranslations: Record<EcommerceTranslationKey, Record<Language, string>> = {
  shopifyDesc: {
    en: 'Import your store data, products, and customer information.',
    de: 'Importiere deine Shop-Daten, Produkte und Kundeninformationen.'
  },
  wooCommerceDesc: {
    en: 'Connect your WordPress store and track sales metrics.',
    de: 'Verbinde deinen WordPress-Shop und verfolge Verkaufsmetriken.'
  },
  stripeDesc: {
    en: 'Track payment processing and subscription metrics.',
    de: 'Verfolge Zahlungsverarbeitung und Abonnement-Metriken.'
  },
  bigCommerceDesc: {
    en: 'Import your store data and track performance metrics.',
    de: 'Importiere deine Shop-Daten und verfolge Leistungsmetriken.'
  }
};
