
import { Language } from '@/hooks/use-language';

// Define all translation keys for the Intelligence page
export type IntelligenceTranslationKey =
  | 'intelligence'
  | 'aiDrivenInsights'
  | 'marketingAiAssistant'
  | 'aiAnalyzeData'
  | 'advancedMachineLearning'
  | 'joinWaitlist'
  | 'whatAiWillDo'
  | 'instantInsights'
  | 'instantInsightsDesc'
  | 'realTimeMetrics'
  | 'anomalyDetection'
  | 'comparativeAnalysis'
  | 'automation'
  | 'automationDesc'
  | 'scheduledReports'
  | 'automatedAdjustments'
  | 'budgetOptimization'
  | 'optimization'
  | 'optimizationDesc'
  | 'abTestingInsights'
  | 'creativePerformance'
  | 'audienceTargeting'
  | 'coreFeatures'
  | 'predictiveAnalysis'
  | 'predictiveAnalysisDesc'
  | 'contentIntelligence'
  | 'contentIntelligenceDesc'
  | 'crossChannelInsights'
  | 'crossChannelInsightsDesc'
  | 'competitiveIntelligence'
  | 'competitiveIntelligenceDesc'
  | 'howItWorks'
  | 'connectData'
  | 'connectDataDesc'
  | 'aiAnalysis'
  | 'aiAnalysisDesc'
  | 'getRecommendations'
  | 'getRecommendationsDesc'
  | 'faq'
  | 'faqReleaseQuestion'
  | 'faqReleaseAnswer'
  | 'faqPlatformsQuestion'
  | 'faqPlatformsAnswer'
  | 'faqRecommendationsQuestion'
  | 'faqRecommendationsAnswer'
  | 'faqAutomaticQuestion'
  | 'faqAutomaticAnswer'
  | 'earlyAccess'
  | 'earlyAccessDesc'
  | 'enterEmail'
  | 'privacyNotice'
  | 'emailAddress';

export const intelligenceTranslations: Record<IntelligenceTranslationKey, Record<Language, string>> = {
  intelligence: {
    en: 'Intelligence',
    de: 'Intelligenz',
  },
  aiDrivenInsights: {
    en: 'Powerful AI-driven insights designed to transform your marketing strategy',
    de: 'Leistungsstarke KI-gestützte Erkenntnisse, die Ihre Marketingstrategie transformieren',
  },
  marketingAiAssistant: {
    en: 'Meet Your Marketing AI Assistant',
    de: 'Lernen Sie Ihren Marketing-KI-Assistenten kennen',
  },
  aiAnalyzeData: {
    en: 'We're building a powerful AI tool that analyzes your marketing data, provides actionable insights, and helps you make data-driven decisions with confidence.',
    de: 'Wir entwickeln ein leistungsstarkes KI-Tool, das Ihre Marketingdaten analysiert, umsetzbare Erkenntnisse liefert und Ihnen hilft, datengestützte Entscheidungen mit Vertrauen zu treffen.',
  },
  advancedMachineLearning: {
    en: 'Our AI assistant uses advanced machine learning algorithms to identify patterns, predict trends, and recommend optimizations across all your marketing channels.',
    de: 'Unser KI-Assistent verwendet fortschrittliche maschinelle Lernalgorithmen, um Muster zu erkennen, Trends vorherzusagen und Optimierungen über alle Ihre Marketingkanäle hinweg zu empfehlen.',
  },
  joinWaitlist: {
    en: 'Join Waitlist',
    de: 'Warteliste beitreten',
  },
  whatAiWillDo: {
    en: 'What Our AI Will Do For You',
    de: 'Was unsere KI für Sie tun wird',
  },
  instantInsights: {
    en: 'Instant Insights',
    de: 'Sofortige Erkenntnisse',
  },
  instantInsightsDesc: {
    en: 'Get immediate analysis of your marketing performance across all channels.',
    de: 'Erhalten Sie eine sofortige Analyse Ihrer Marketingleistung über alle Kanäle hinweg.',
  },
  realTimeMetrics: {
    en: 'Real-time performance metrics',
    de: 'Echtzeit-Leistungsmetriken',
  },
  anomalyDetection: {
    en: 'Anomaly detection',
    de: 'Anomalieerkennung',
  },
  comparativeAnalysis: {
    en: 'Comparative analysis',
    de: 'Vergleichende Analyse',
  },
  automation: {
    en: 'Automation',
    de: 'Automatisierung',
  },
  automationDesc: {
    en: 'Automate reporting and uncover opportunities you might have missed.',
    de: 'Automatisieren Sie Berichterstellung und entdecken Sie Chancen, die Sie möglicherweise verpasst haben.',
  },
  scheduledReports: {
    en: 'Scheduled insight reports',
    de: 'Geplante Erkenntnisberichte',
  },
  automatedAdjustments: {
    en: 'Automated campaign adjustments',
    de: 'Automatisierte Kampagnenanpassungen',
  },
  budgetOptimization: {
    en: 'Budget optimization',
    de: 'Budgetoptimierung',
  },
  optimization: {
    en: 'Optimization',
    de: 'Optimierung',
  },
  optimizationDesc: {
    en: 'Receive personalized recommendations to optimize your campaigns.',
    de: 'Erhalten Sie personalisierte Empfehlungen zur Optimierung Ihrer Kampagnen.',
  },
  abTestingInsights: {
    en: 'A/B testing insights',
    de: 'A/B-Test-Erkenntnisse',
  },
  creativePerformance: {
    en: 'Creative performance analysis',
    de: 'Analyse der kreativen Leistung',
  },
  audienceTargeting: {
    en: 'Audience targeting suggestions',
    de: 'Vorschläge zur Zielgruppenansprache',
  },
  coreFeatures: {
    en: 'Core Intelligence Features',
    de: 'Kernfunktionen der Intelligenz',
  },
  predictiveAnalysis: {
    en: 'Predictive Analysis',
    de: 'Prädiktive Analyse',
  },
  predictiveAnalysisDesc: {
    en: 'Leverage machine learning to forecast campaign performance, identify trends before they happen, and allocate resources more effectively based on predicted outcomes.',
    de: 'Nutzen Sie maschinelles Lernen, um Kampagnenleistung vorherzusagen, Trends zu identifizieren, bevor sie eintreten, und Ressourcen auf Basis vorhergesagter Ergebnisse effektiver zuzuweisen.',
  },
  contentIntelligence: {
    en: 'Content Intelligence',
    de: 'Content-Intelligenz',
  },
  contentIntelligenceDesc: {
    en: 'AI-powered content analysis to identify which messages resonate with your audience, optimize copy for better engagement, and generate content ideas based on performance.',
    de: 'KI-gestützte Inhaltsanalyse, um zu identifizieren, welche Nachrichten bei Ihrem Publikum ankommen, Texte für besseres Engagement zu optimieren und Inhaltsideen basierend auf der Leistung zu generieren.',
  },
  crossChannelInsights: {
    en: 'Cross-Channel Insights',
    de: 'Kanalübergreifende Erkenntnisse',
  },
  crossChannelInsightsDesc: {
    en: 'Holistic analysis across all marketing channels to understand customer journeys, identify attribution patterns, and optimize your marketing mix for maximum ROI.',
    de: 'Ganzheitliche Analyse über alle Marketingkanäle hinweg, um Kundenreisen zu verstehen, Attributionsmuster zu identifizieren und Ihren Marketing-Mix für maximalen ROI zu optimieren.',
  },
  competitiveIntelligence: {
    en: 'Competitive Intelligence',
    de: 'Wettbewerbsintelligenz',
  },
  competitiveIntelligenceDesc: {
    en: 'Analyze competitor strategies, benchmark your performance against industry standards, and identify market gaps and opportunities for your brand to capitalize on.',
    de: 'Analysieren Sie Wettbewerbsstrategien, vergleichen Sie Ihre Leistung mit Branchenstandards und identifizieren Sie Marktlücken und Chancen, die Ihre Marke nutzen kann.',
  },
  howItWorks: {
    en: 'How It Works',
    de: 'Wie es funktioniert',
  },
  connectData: {
    en: 'Connect Your Data',
    de: 'Verbinden Sie Ihre Daten',
  },
  connectDataDesc: {
    en: 'Our AI integrates with all your marketing platforms including Google Ads, Meta, Email services, and analytics tools to create a unified view of your marketing ecosystem.',
    de: 'Unsere KI integriert sich mit allen Ihren Marketing-Plattformen, einschließlich Google Ads, Meta, E-Mail-Diensten und Analyse-Tools, um eine einheitliche Ansicht Ihres Marketing-Ökosystems zu erstellen.',
  },
  aiAnalysis: {
    en: 'AI Analysis',
    de: 'KI-Analyse',
  },
  aiAnalysisDesc: {
    en: 'Advanced algorithms analyze patterns and trends across historical and real-time data, applying machine learning models trained on marketing performance data across industries.',
    de: 'Fortschrittliche Algorithmen analysieren Muster und Trends in historischen und Echtzeit-Daten und wenden maschinelle Lernmodelle an, die mit Marketingleistungsdaten aus verschiedenen Branchen trainiert wurden.',
  },
  getRecommendations: {
    en: 'Get Recommendations',
    de: 'Empfehlungen erhalten',
  },
  getRecommendationsDesc: {
    en: 'Receive actionable insights tailored to your specific business goals, with clear explanations of why each recommendation matters and how to implement it effectively.',
    de: 'Erhalten Sie umsetzbare Erkenntnisse, die auf Ihre spezifischen Geschäftsziele zugeschnitten sind, mit klaren Erklärungen, warum jede Empfehlung wichtig ist und wie Sie sie effektiv umsetzen können.',
  },
  faq: {
    en: 'Frequently Asked Questions',
    de: 'Häufig gestellte Fragen',
  },
  faqReleaseQuestion: {
    en: 'When will the AI Intelligence tool be available?',
    de: 'Wann wird das KI-Intelligenz-Tool verfügbar sein?',
  },
  faqReleaseAnswer: {
    en: 'We're currently in the final stages of development and testing. We anticipate a beta release for waitlist members within the next quarter, with full release shortly after.',
    de: 'Wir befinden uns derzeit in den letzten Phasen der Entwicklung und des Testens. Wir erwarten eine Beta-Version für Wartelisten-Mitglieder innerhalb des nächsten Quartals, mit vollständiger Veröffentlichung kurz danach.',
  },
  faqPlatformsQuestion: {
    en: 'What marketing platforms will be supported?',
    de: 'Welche Marketing-Plattformen werden unterstützt?',
  },
  faqPlatformsAnswer: {
    en: 'At launch, we'll support Google Ads, Meta Ads, Google Analytics, and major email marketing platforms. Additional integrations will be added based on user needs and feedback.',
    de: 'Zum Start unterstützen wir Google Ads, Meta Ads, Google Analytics und große E-Mail-Marketing-Plattformen. Weitere Integrationen werden basierend auf Benutzerbedürfnissen und Feedback hinzugefügt.',
  },
  faqRecommendationsQuestion: {
    en: 'How does the AI make recommendations?',
    de: 'Wie erstellt die KI Empfehlungen?',
  },
  faqRecommendationsAnswer: {
    en: 'Our AI analyzes your historical data, current performance, industry benchmarks, and emerging trends to generate recommendations. Each insight is accompanied by an explanation of the reasoning behind it and the expected impact.',
    de: 'Unsere KI analysiert Ihre historischen Daten, aktuelle Leistung, Branchenbenchmarks und aufkommende Trends, um Empfehlungen zu generieren. Jede Erkenntnis wird von einer Erklärung der Begründung dahinter und der erwarteten Auswirkung begleitet.',
  },
  faqAutomaticQuestion: {
    en: 'Will the AI automatically make changes to my campaigns?',
    de: 'Wird die KI automatisch Änderungen an meinen Kampagnen vornehmen?',
  },
  faqAutomaticAnswer: {
    en: 'While the AI can provide automated optimizations, you'll have full control over which recommendations to implement. You can choose between manual approval, scheduled implementation, or fully automated optimization with customizable guardrails.',
    de: 'Während die KI automatisierte Optimierungen anbieten kann, haben Sie volle Kontrolle darüber, welche Empfehlungen Sie umsetzen möchten. Sie können zwischen manueller Genehmigung, geplanter Implementierung oder vollständig automatisierter Optimierung mit anpassbaren Leitplanken wählen.',
  },
  earlyAccess: {
    en: 'Be Among The First To Experience It',
    de: 'Seien Sie unter den Ersten, die es erleben',
  },
  earlyAccessDesc: {
    en: 'Our AI Intelligence tools are currently in development. Join our waitlist to be notified when we launch and get exclusive early access to our beta program with special introductory pricing.',
    de: 'Unsere KI-Intelligenztools befinden sich derzeit in der Entwicklung. Treten Sie unserer Warteliste bei, um benachrichtigt zu werden, wenn wir starten, und erhalten Sie exklusiven frühen Zugang zu unserem Beta-Programm mit speziellen Einführungspreisen.',
  },
  enterEmail: {
    en: 'Enter your email for early access',
    de: 'Geben Sie Ihre E-Mail für frühen Zugang ein',
  },
  privacyNotice: {
    en: 'We respect your privacy and will never share your information with third parties.',
    de: 'Wir respektieren Ihre Privatsphäre und werden Ihre Informationen niemals an Dritte weitergeben.',
  },
  emailAddress: {
    en: 'Your email address',
    de: 'Ihre E-Mail-Adresse',
  },
};
