
import { TranslationEntry, TranslationsObject } from './types';

export type PerformanceTranslationKey =
  | 'overviewTab'
  | 'detailsTab'
  | 'channelDetails'
  | 'selectChannel'
  | 'viewDetailedAnalytics'
  | 'performanceSummary'
  | 'topPerformer'
  | 'recommendation'
  | 'performance'
  | 'trackAnalyzePerformance'
  | 'paidSearchTab'
  | 'paidSocialsTab'
  | 'organicSocialTab'
  | 'websiteTab'
  | 'emailTab'
  | 'formsTab'
  | 'keyMetrics'
  | 'export'
  | 'adPerformance'
  | 'conversionRate'
  | 'intelligence'
  | 'intelligenceDescription'
  | 'marketingAIAssistant'
  | 'aiAssistantDescription'
  | 'joinWaitlist'
  | 'earlyAccess'
  | 'whatAIWillDo'
  | 'instantInsights'
  | 'instantInsightsDescription'
  | 'realTimeMetrics'
  | 'anomalyDetection'
  | 'comparativeAnalysis'
  | 'automation'
  | 'automationDescription'
  | 'scheduledReports'
  | 'automatedCampaignAdjustments'
  | 'budgetOptimization'
  | 'optimization'
  | 'optimizationDescription'
  | 'abTestingInsights'
  | 'creativePerformanceAnalysis'
  | 'audienceTargetingSuggestions'
  | 'coreIntelligenceFeatures'
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
  | 'faqAutomaticChanges'
  | 'faqAutomaticChangesAnswer'
  | 'firstToExperience'
  | 'waitlistDescription'
  | 'yourEmail'
  | 'privacyNote';

export const performanceTranslations: TranslationsObject<PerformanceTranslationKey> = {
  overviewTab: {
    en: 'Overview',
    de: 'Überblick'
  },
  detailsTab: {
    en: 'Details',
    de: 'Details'
  },
  channelDetails: {
    en: 'Channel Details',
    de: 'Kanal-Details'
  },
  selectChannel: {
    en: 'Select channel',
    de: 'Kanal auswählen'
  },
  viewDetailedAnalytics: {
    en: 'View Detailed Analytics',
    de: 'Detaillierte Analysen anzeigen'
  },
  performanceSummary: {
    en: 'Performance Summary',
    de: 'Leistungsübersicht'
  },
  topPerformer: {
    en: 'Top Performer',
    de: 'Top-Performer'
  },
  recommendation: {
    en: 'Recommendation',
    de: 'Empfehlung'
  },
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  trackAnalyzePerformance: {
    en: 'Track and analyze performance across your marketing channels',
    de: 'Verfolge und analysiere die Leistung über alle deine Marketing-Kanäle'
  },
  paidSearchTab: {
    en: 'Paid Search',
    de: 'Bezahlte Suche'
  },
  paidSocialsTab: {
    en: 'Paid Social',
    de: 'Bezahlte Social Media'
  },
  organicSocialTab: {
    en: 'Organic Social',
    de: 'Organische Social Media'
  },
  websiteTab: {
    en: 'Website',
    de: 'Webseite'
  },
  emailTab: {
    en: 'Email',
    de: 'E-Mail'
  },
  formsTab: {
    en: 'Forms',
    de: 'Formulare'
  },
  keyMetrics: {
    en: 'Key Metrics',
    de: 'Wichtige Kennzahlen'
  },
  export: {
    en: 'Export',
    de: 'Exportieren'
  },
  adPerformance: {
    en: 'Ad Performance',
    de: 'Anzeigenleistung'
  },
  conversionRate: {
    en: 'Conversion Rate',
    de: 'Konversionsrate'
  },
  // Intelligence page translations
  intelligence: {
    en: 'Intelligence',
    de: 'Intelligenz'
  },
  intelligenceDescription: {
    en: 'Powerful AI-driven insights designed to transform your marketing strategy',
    de: 'Leistungsstarke KI-gestützte Erkenntnisse, die deine Marketingstrategie transformieren'
  },
  marketingAIAssistant: {
    en: 'Meet Your Marketing AI Assistant',
    de: 'Lerne deinen Marketing-KI-Assistenten kennen'
  },
  aiAssistantDescription: {
    en: 'We\'re building a powerful AI tool that analyzes your marketing data, provides actionable insights, and helps you make data-driven decisions with confidence.',
    de: 'Wir entwickeln ein leistungsstarkes KI-Tool, das deine Marketingdaten analysiert, umsetzbare Erkenntnisse liefert und dir hilft, datengestützte Entscheidungen selbstbewusst zu treffen.'
  },
  joinWaitlist: {
    en: 'Join Waitlist',
    de: 'Warteliste beitreten'
  },
  earlyAccess: {
    en: 'Enter your email for early access',
    de: 'Gib deine E-Mail für frühen Zugang ein'
  },
  whatAIWillDo: {
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
    de: 'Echtzeit-Leistungskennzahlen'
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
    de: 'Automatisiere Berichterstattung und entdecke Chancen, die du möglicherweise übersehen hast.'
  },
  scheduledReports: {
    en: 'Scheduled insight reports',
    de: 'Geplante Insight-Berichte'
  },
  automatedCampaignAdjustments: {
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
  creativePerformanceAnalysis: {
    en: 'Creative performance analysis',
    de: 'Kreativleistungsanalyse'
  },
  audienceTargetingSuggestions: {
    en: 'Audience targeting suggestions',
    de: 'Vorschläge zur Zielgruppenansprache'
  },
  coreIntelligenceFeatures: {
    en: 'Core Intelligence Features',
    de: 'Kernfunktionen der Intelligenz'
  },
  predictiveAnalysis: {
    en: 'Predictive Analysis',
    de: 'Prädiktive Analyse'
  },
  predictiveAnalysisDescription: {
    en: 'Leverage machine learning to forecast campaign performance, identify trends before they happen, and allocate resources more effectively based on predicted outcomes.',
    de: 'Nutze maschinelles Lernen, um Kampagnenleistung vorherzusagen, Trends zu erkennen, bevor sie eintreten, und Ressourcen basierend auf prognostizierten Ergebnissen effektiver zuzuweisen.'
  },
  contentIntelligence: {
    en: 'Content Intelligence',
    de: 'Inhaltsintelligenz'
  },
  contentIntelligenceDescription: {
    en: 'AI-powered content analysis to identify which messages resonate with your audience, optimize copy for better engagement, and generate content ideas based on performance.',
    de: 'KI-gestützte Inhaltsanalyse, um zu erkennen, welche Botschaften bei deiner Zielgruppe ankommen, Texte für besseres Engagement zu optimieren und Inhaltsideen basierend auf der Leistung zu generieren.'
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
    de: 'So funktioniert es'
  },
  connectData: {
    en: 'Connect Your Data',
    de: 'Verbinde deine Daten'
  },
  connectDataDescription: {
    en: 'Our AI integrates with all your marketing platforms including Google Ads, Meta, Email services, and analytics tools to create a unified view of your marketing ecosystem.',
    de: 'Unsere KI integriert sich mit all deinen Marketing-Plattformen, einschließlich Google Ads, Meta, E-Mail-Diensten und Analyse-Tools, um eine einheitliche Ansicht deines Marketing-Ökosystems zu erstellen.'
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
    de: 'Erhalte Empfehlungen'
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
    de: 'Wir befinden uns derzeit in den letzten Phasen der Entwicklung und des Testens. Wir erwarten eine Beta-Version für Wartelisten-Mitglieder innerhalb des nächsten Quartals, mit vollständiger Veröffentlichung kurz danach.'
  },
  faqPlatforms: {
    en: 'What marketing platforms will be supported?',
    de: 'Welche Marketing-Plattformen werden unterstützt?'
  },
  faqPlatformsAnswer: {
    en: 'At launch, we\'ll support Google Ads, Meta Ads, Google Analytics, and major email marketing platforms. Additional integrations will be added based on user needs and feedback.',
    de: 'Zum Start werden wir Google Ads, Meta Ads, Google Analytics und wichtige E-Mail-Marketing-Plattformen unterstützen. Weitere Integrationen werden basierend auf Nutzerbedürfnissen und Feedback hinzugefügt.'
  },
  faqRecommendations: {
    en: 'How does the AI make recommendations?',
    de: 'Wie erstellt die KI Empfehlungen?'
  },
  faqRecommendationsAnswer: {
    en: 'Our AI analyzes your historical data, current performance, industry benchmarks, and emerging trends to generate recommendations. Each insight is accompanied by an explanation of the reasoning behind it and the expected impact.',
    de: 'Unsere KI analysiert deine historischen Daten, aktuelle Leistung, Branchenbenchmarks und aufkommende Trends, um Empfehlungen zu generieren. Jede Erkenntnis wird von einer Erklärung der Begründung und der erwarteten Auswirkung begleitet.'
  },
  faqAutomaticChanges: {
    en: 'Will the AI automatically make changes to my campaigns?',
    de: 'Wird die KI automatisch Änderungen an meinen Kampagnen vornehmen?'
  },
  faqAutomaticChangesAnswer: {
    en: 'While the AI can provide automated optimizations, you\'ll have full control over which recommendations to implement. You can choose between manual approval, scheduled implementation, or fully automated optimization with customizable guardrails.',
    de: 'Während die KI automatisierte Optimierungen bieten kann, hast du die volle Kontrolle darüber, welche Empfehlungen du umsetzen möchtest. Du kannst zwischen manueller Genehmigung, geplanter Implementierung oder vollautomatischer Optimierung mit anpassbaren Leitplanken wählen.'
  },
  firstToExperience: {
    en: 'Be Among The First To Experience It',
    de: 'Sei unter den Ersten, die es erleben'
  },
  waitlistDescription: {
    en: 'Our AI Intelligence tools are currently in development. Join our waitlist to be notified when we launch and get exclusive early access to our beta program with special introductory pricing.',
    de: 'Unsere KI-Intelligenz-Tools befinden sich derzeit in der Entwicklung. Tritt unserer Warteliste bei, um benachrichtigt zu werden, wenn wir starten, und erhalte exklusiven frühen Zugang zu unserem Beta-Programm mit speziellen Einführungspreisen.'
  },
  yourEmail: {
    en: 'Your email address',
    de: 'Deine E-Mail-Adresse'
  },
  privacyNote: {
    en: 'We respect your privacy and will never share your information with third parties.',
    de: 'Wir respektieren deine Privatsphäre und werden deine Informationen niemals an Dritte weitergeben.'
  }
};
