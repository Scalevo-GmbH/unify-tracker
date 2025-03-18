
import type { Language } from "@/hooks/use-language";

export type AccountFeaturesTranslationKey = 
  | 'freeFeature1'
  | 'freeFeature2'
  | 'freeFeature3'
  | 'freeFeature4'
  | 'freeFeature5'
  | 'freeFeature6'
  | 'proFeature1'
  | 'proFeature2'
  | 'proFeature3'
  | 'proFeature4'
  | 'proFeature5'
  | 'proFeature6'
  | 'enterpriseFeature1'
  | 'enterpriseFeature2'
  | 'enterpriseFeature3'
  | 'enterpriseFeature4'
  | 'enterpriseFeature5'
  | 'enterpriseFeature6';

export const accountFeaturesTranslations: Record<AccountFeaturesTranslationKey, Record<Language, string>> = {
  freeFeature1: {
    en: '1 integration',
    de: '1 Integration'
  },
  freeFeature2: {
    en: 'Basic analytics',
    de: 'Grundlegende Analysen'
  },
  freeFeature3: {
    en: 'Standard reports',
    de: 'Standardberichte'
  },
  freeFeature4: {
    en: 'Team collaboration',
    de: 'Teamzusammenarbeit'
  },
  freeFeature5: {
    en: 'Advanced insights',
    de: 'Erweiterte Einblicke'
  },
  freeFeature6: {
    en: '24/7 support',
    de: '24/7 Support'
  },
  proFeature1: {
    en: '5 integrations',
    de: '5 Integrationen'
  },
  proFeature2: {
    en: 'Advanced analytics',
    de: 'Erweiterte Analysen'
  },
  proFeature3: {
    en: 'Custom reports',
    de: 'Benutzerdefinierte Berichte'
  },
  proFeature4: {
    en: 'Team collaboration',
    de: 'Teamzusammenarbeit'
  },
  proFeature5: {
    en: 'Advanced insights',
    de: 'Erweiterte Einblicke'
  },
  proFeature6: {
    en: '24/7 support',
    de: '24/7 Support'
  },
  enterpriseFeature1: {
    en: 'Unlimited integrations',
    de: 'Unbegrenzte Integrationen'
  },
  enterpriseFeature2: {
    en: 'Enterprise analytics',
    de: 'Enterprise-Analysen'
  },
  enterpriseFeature3: {
    en: 'Custom solutions',
    de: 'Maßgeschneiderte Lösungen'
  },
  enterpriseFeature4: {
    en: 'Advanced team tools',
    de: 'Erweiterte Team-Tools'
  },
  enterpriseFeature5: {
    en: 'AI-powered insights',
    de: 'KI-gestützte Einblicke'
  },
  enterpriseFeature6: {
    en: '24/7 priority support',
    de: '24/7 Prioritäts-Support'
  }
};
