
import type { Language } from "@/hooks/use-language";

// Define types for intelligence-related translations
export type IntelligenceTranslationKey = 
  | 'intelligence'
  | 'aiDrivenInsights'
  | 'marketingAiAssistant'
  | 'powerfulAiTool'
  | 'aiAssistantDescription'
  | 'joinWaitlist'
  | 'emailPlaceholder'
  | 'whatAiDoes'
  | 'instantInsights'
  | 'instantInsightsDescription'
  | 'realTimeMetrics'
  | 'anomalyDetection'
  | 'comparativeAnalysis'
  | 'automation'
  | 'automationDescription'
  | 'scheduledReports'
  | 'automatedAdjustments'
  | 'budgetOptimization'
  | 'optimization'
  | 'optimizationDescription'
  | 'abTestingInsights'
  | 'creativePerformance'
  | 'audienceTargeting'
  | 'coreFeatures'
  | 'predictiveAnalysis'
  | 'predictiveAnalysisDescription'
  | 'contentIntelligence'
  | 'contentIntelligenceDescription'
  | 'crossChannelInsights'
  | 'crossChannelInsightsDescription'
  | 'competitiveIntelligence'
  | 'competitiveIntelligenceDescription'
  | 'howItWorks'
  | 'connectData'
  | 'connectDataDescription'
  | 'aiAnalysis'
  | 'aiAnalysisDescription'
  | 'getRecommendations'
  | 'getRecommendationsDescription'
  | 'faq'
  | 'faqWhenAvailable'
  | 'faqWhenAvailableAnswer'
  | 'faqPlatforms'
  | 'faqPlatformsAnswer'
  | 'faqRecommendations'
  | 'faqRecommendationsAnswer'
  | 'faqAutomation'
  | 'faqAutomationAnswer'
  | 'earlyAccess'
  | 'earlyAccessDescription'
  | 'privacyNote';

// Intelligence-related translations
export const intelligenceTranslations: Record<IntelligenceTranslationKey, Record<Language, string>> = {
  intelligence: {
    en: 'Intelligence',
    de: 'Intelligenz'
  },
  aiDrivenInsights: {
    en: 'Powerful AI-driven insights designed to transform your marketing strategy',
    de: 'Leistungsstarke KI-gestützte Erkenntnisse, die deine Marketingstrategie transformieren'
  },
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
  },
  whatAiDoes: {
    en: 'What Our AI Will Do For You',
    de: 'Was unsere KI für dich tun wird'
  },
  instantInsights: {
    en: 'Instant Insights',
    de: 'Sofortige Erkenntnisse'
  },
  instantInsightsDescription: {
    en: 'Get immediate analysis of your marketing performance across all channels.',
    de: 'Erhalte sofortige Analysen deiner Marketingleistung über alle Kanäle hinweg.'
  },
  realTimeMetrics: {
    en: 'Real-time performance metrics',
    de: 'Leistungskennzahlen in Echtzeit'
  },
  anomalyDetection: {
    en: 'Anomaly detection',
    de: 'Anomalieerkennung'
  },
  comparativeAnalysis: {
    en: 'Comparative analysis',
    de: 'Vergleichende Analyse'
  },
  automation: {
    en: 'Automation',
    de: 'Automatisierung'
  },
  automationDescription: {
    en: 'Automate reporting and uncover opportunities you might have missed.',
    de: 'Automatisiere Berichte und entdecke Möglichkeiten, die du vielleicht übersehen hast.'
  },
  scheduledReports: {
    en: 'Scheduled insight reports',
    de: 'Geplante Erkenntnisberichte'
  },
  automatedAdjustments: {
    en: 'Automated campaign adjustments',
    de: 'Automatisierte Kampagnenanpassungen'
  },
  budgetOptimization: {
    en: 'Budget optimization',
    de: 'Budgetoptimierung'
  },
  optimization: {
    en: 'Optimization',
    de: 'Optimierung'
  },
  optimizationDescription: {
    en: 'Receive personalized recommendations to optimize your campaigns.',
    de: 'Erhalte personalisierte Empfehlungen zur Optimierung deiner Kampagnen.'
  },
  abTestingInsights: {
    en: 'A/B testing insights',
    de: 'A/B-Test-Erkenntnisse'
  },
  creativePerformance: {
    en: 'Creative performance analysis',
    de: 'Analyse der kreativen Leistung'
  },
  audienceTargeting: {
    en: 'Audience targeting suggestions',
    de: 'Vorschläge für Zielgruppenansprache'
  },
  coreFeatures: {
    en: 'Core Intelligence Features',
    de: 'Kernfunktionen der Intelligenz'
  },
  predictiveAnalysis: {
    en: 'Predictive Analysis',
    de: 'Prädiktive Analyse'
  },
  predictiveAnalysisDescription: {
    en: 'Leverage machine learning to forecast campaign performance, identify trends before they happen, and allocate resources more effectively based on predicted outcomes.',
    de: 'Nutze maschinelles Lernen, um die Kampagnenleistung vorherzusagen, Trends zu identifizieren, bevor sie eintreten, und Ressourcen auf der Grundlage vorhergesagter Ergebnisse effektiver zuzuordnen.'
  },
  contentIntelligence: {
    en: 'Content Intelligence',
    de: 'Content-Intelligenz'
  },
  contentIntelligenceDescription: {
    en: 'AI-powered content analysis to identify which messages resonate with your audience, optimize copy for better engagement, and generate content ideas based on performance.',
    de: 'KI-gestützte Inhaltsanalyse, um zu identifizieren, welche Nachrichten bei deiner Zielgruppe ankommen, Texte für besseres Engagement zu optimieren und Inhaltsideen auf Basis der Leistung zu generieren.'
  },
  crossChannelInsights: {
    en: 'Cross-Channel Insights',
    de: 'Kanalübergreifende Erkenntnisse'
  },
  crossChannelInsightsDescription: {
    en: 'Holistic analysis across all marketing channels to understand customer journeys, identify attribution patterns, and optimize your marketing mix for maximum ROI.',
    de: 'Ganzheitliche Analyse über alle Marketingkanäle hinweg, um Kundenreisen zu verstehen, Attributionsmuster zu identifizieren und deinen Marketing-Mix für maximalen ROI zu optimieren.'
  },
  competitiveIntelligence: {
    en: 'Competitive Intelligence',
    de: 'Wettbewerbsintelligenz'
  },
  competitiveIntelligenceDescription: {
    en: 'Analyze competitor strategies, benchmark your performance against industry standards, and identify market gaps and opportunities for your brand to capitalize on.',
    de: 'Analysiere Wettbewerbsstrategien, vergleiche deine Leistung mit Branchenstandards und identifiziere Marktlücken und Chancen, die deine Marke nutzen kann.'
  },
  howItWorks: {
    en: 'How It Works',
    de: 'Wie es funktioniert'
  },
  connectData: {
    en: 'Connect Your Data',
    de: 'Verbinde deine Daten'
  },
  connectDataDescription: {
    en: 'Our AI integrates with all your marketing platforms including Google Ads, Meta, Email services, and analytics tools to create a unified view of your marketing ecosystem.',
    de: 'Unsere KI integriert sich mit all deinen Marketingplattformen, einschließlich Google Ads, Meta, E-Mail-Diensten und Analysetools, um eine einheitliche Ansicht deines Marketing-Ökosystems zu schaffen.'
  },
  aiAnalysis: {
    en: 'AI Analysis',
    de: 'KI-Analyse'
  },
  aiAnalysisDescription: {
    en: 'Advanced algorithms analyze patterns and trends across historical and real-time data, applying machine learning models trained on marketing performance data across industries.',
    de: 'Fortschrittliche Algorithmen analysieren Muster und Trends in historischen und Echtzeit-Daten und wenden maschinelle Lernmodelle an, die mit Marketingleistungsdaten aus verschiedenen Branchen trainiert wurden.'
  },
  getRecommendations: {
    en: 'Get Recommendations',
    de: 'Empfehlungen erhalten'
  },
  getRecommendationsDescription: {
    en: 'Receive actionable insights tailored to your specific business goals, with clear explanations of why each recommendation matters and how to implement it effectively.',
    de: 'Erhalte umsetzbare Erkenntnisse, die auf deine spezifischen Geschäftsziele zugeschnitten sind, mit klaren Erklärungen, warum jede Empfehlung wichtig ist und wie du sie effektiv umsetzen kannst.'
  },
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
  },
  earlyAccess: {
    en: 'Be Among The First To Experience It',
    de: 'Sei unter den Ersten, die es erleben'
  },
  earlyAccessDescription: {
    en: 'Our AI Intelligence tools are currently in development. Join our waitlist to be notified when we launch and get exclusive early access to our beta program with special introductory pricing.',
    de: 'Unsere KI-Intelligenz-Tools befinden sich derzeit in der Entwicklung. Tritt unserer Warteliste bei, um benachrichtigt zu werden, wenn wir starten, und erhalte exklusiven frühen Zugang zu unserem Beta-Programm mit speziellen Einführungspreisen.'
  },
  privacyNote: {
    en: 'We respect your privacy and will never share your information with third parties.',
    de: 'Wir respektieren deine Privatsphäre und werden deine Informationen niemals an Dritte weitergeben.'
  }
};
