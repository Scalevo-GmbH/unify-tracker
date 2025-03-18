
import type { Language } from "@/hooks/use-language";

// Define types for FAQ translations
export type FAQTranslationKey = 
  | 'faq'
  | 'faqWhenAvailable'
  | 'faqWhenAvailableAnswer'
  | 'faqPlatforms'
  | 'faqPlatformsAnswer'
  | 'faqRecommendations'
  | 'faqRecommendationsAnswer'
  | 'faqAutomation'
  | 'faqAutomationAnswer';

// FAQ translations
export const faqTranslations: Record<FAQTranslationKey, Record<Language, string>> = {
  faq: {
    en: 'Frequently Asked Questions',
    de: 'Häufig gestellte Fragen'
  },
  faqWhenAvailable: {
    en: 'When will the AI Intelligence tool be available?',
    de: 'Wann wird das KI-Intelligenz-Tool verfügbar sein?'
  },
  faqWhenAvailableAnswer: {
    en: 'We\'re currently in the final stages of development and testing. We anticipate a beta release for waitlist members within the next quarter, with full release shortly after.',
    de: 'Wir befinden uns derzeit in den letzten Entwicklungs- und Testphasen. Wir erwarten eine Beta-Version für Wartelisten-Mitglieder im nächsten Quartal, mit vollständiger Veröffentlichung kurz danach.'
  },
  faqPlatforms: {
    en: 'What marketing platforms will be supported?',
    de: 'Welche Marketing-Plattformen werden unterstützt?'
  },
  faqPlatformsAnswer: {
    en: 'At launch, we\'ll support Google Ads, Meta Ads, Google Analytics, and major email marketing platforms. Additional integrations will be added based on user needs and feedback.',
    de: 'Beim Start werden wir Google Ads, Meta Ads, Google Analytics und große E-Mail-Marketing-Plattformen unterstützen. Weitere Integrationen werden basierend auf Nutzerbedürfnissen und Feedback hinzugefügt.'
  },
  faqRecommendations: {
    en: 'How does the AI make recommendations?',
    de: 'Wie gibt die KI Empfehlungen?'
  },
  faqRecommendationsAnswer: {
    en: 'Our AI analyzes your historical data, current performance, industry benchmarks, and emerging trends to generate recommendations. Each insight is accompanied by an explanation of the reasoning behind it and the expected impact.',
    de: 'Unsere KI analysiert deine historischen Daten, aktuelle Leistung, Branchenbenchmarks und aufkommende Trends, um Empfehlungen zu generieren. Jede Erkenntnis wird von einer Erklärung der dahinterstehenden Logik und der erwarteten Auswirkung begleitet.'
  },
  faqAutomation: {
    en: 'Will the AI automatically make changes to my campaigns?',
    de: 'Wird die KI automatisch Änderungen an meinen Kampagnen vornehmen?'
  },
  faqAutomationAnswer: {
    en: 'While the AI can provide automated optimizations, you\'ll have full control over which recommendations to implement. You can choose between manual approval, scheduled implementation, or fully automated optimization with customizable guardrails.',
    de: 'Während die KI automatisierte Optimierungen bieten kann, hast du volle Kontrolle darüber, welche Empfehlungen du umsetzen möchtest. Du kannst zwischen manueller Genehmigung, geplanter Implementierung oder vollautomatischer Optimierung mit anpassbaren Leitplanken wählen.'
  }
};
