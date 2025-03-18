
import type { Language } from "@/hooks/use-language";

// Define types for hero section translations
export type HeroTranslationKey = 
  | 'marketingAiAssistant'
  | 'powerfulAiTool'
  | 'aiAssistantDescription'
  | 'joinWaitlist'
  | 'emailPlaceholder';

// Hero section translations
export const heroTranslations: Record<HeroTranslationKey, Record<Language, string>> = {
  marketingAiAssistant: {
    en: 'Meet Your Marketing AI Assistant',
    de: 'Triff deinen Marketing-KI-Assistenten'
  },
  powerfulAiTool: {
    en: 'We\'re building a powerful AI tool that analyzes your marketing data, provides actionable insights, and helps you make data-driven decisions with confidence.',
    de: 'Wir entwickeln ein leistungsstarkes KI-Tool, das deine Marketingdaten analysiert, umsetzbare Erkenntnisse liefert und dir hilft, datengestützte Entscheidungen mit Zuversicht zu treffen.'
  },
  aiAssistantDescription: {
    en: 'Our AI assistant uses advanced machine learning algorithms to identify patterns, predict trends, and recommend optimizations across all your marketing channels.',
    de: 'Unser KI-Assistent verwendet fortschrittliche Machine-Learning-Algorithmen, um Muster zu erkennen, Trends vorherzusagen und Optimierungen für alle deine Marketingkanäle zu empfehlen.'
  },
  joinWaitlist: {
    en: 'Join Waitlist',
    de: 'Warteliste beitreten'
  },
  emailPlaceholder: {
    en: 'Enter your email for early access',
    de: 'Gib deine E-Mail für frühen Zugang ein'
  }
};
