
import { Language } from './types';

// Define the keys for intelligence translations
export type IntelligenceTranslationKey = 
  | 'intelligence'
  | 'intelligenceDescription'
  | 'marketingAIAssistant'
  | 'aiAssistantDescription'
  | 'earlyAccess'
  | 'joinWaitlist'
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

// Define the actual translations
export const intelligenceTranslations: Record<IntelligenceTranslationKey, Record<Language, string>> = {
  intelligence: {
    en: 'Intelligence',
    de: 'Intelligenz'
  },
  intelligenceDescription: {
    en: 'Leverage AI-powered insights to optimize your marketing strategies',
    de: 'Nutzen Sie KI-gestützte Erkenntnisse zur Optimierung Ihrer Marketingstrategien'
  },
  marketingAIAssistant: {
    en: 'Marketing AI Assistant',
    de: 'Marketing KI-Assistent'
  },
  aiAssistantDescription: {
    en: 'Our AI assistant analyzes your marketing data to provide actionable insights and recommendations.',
    de: 'Unser KI-Assistent analysiert Ihre Marketingdaten, um umsetzbare Erkenntnisse und Empfehlungen zu liefern.'
  },
  earlyAccess: {
    en: 'Enter email for early access',
    de: 'E-Mail für frühen Zugang eingeben'
  },
  joinWaitlist: {
    en: 'Join Waitlist',
    de: 'Warteliste beitreten'
  },
  whatAIWillDo: {
    en: 'What Our AI Will Do For You',
    de: 'Was unsere KI für Sie tun wird'
  },
  instantInsights: {
    en: 'Instant Insights',
    de: 'Sofortige Erkenntnisse'
  },
  instantInsightsDescription: {
    en: 'Get real-time analysis of your marketing performance across all channels.',
    de: 'Erhalten Sie Echtzeitanalysen Ihrer Marketingleistung über alle Kanäle hinweg.'
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
    en: 'Automate routine tasks and reporting to save time and increase efficiency.',
    de: 'Automatisieren Sie Routineaufgaben und Berichterstattung, um Zeit zu sparen und die Effizienz zu steigern.'
  },
  scheduledReports: {
    en: 'Scheduled reports',
    de: 'Geplante Berichte'
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
    en: 'Optimize your campaigns with AI-powered recommendations and insights.',
    de: 'Optimieren Sie Ihre Kampagnen mit KI-gestützten Empfehlungen und Erkenntnissen.'
  },
  abTestingInsights: {
    en: 'A/B testing insights',
    de: 'A/B-Test-Erkenntnisse'
  },
  creativePerformanceAnalysis: {
    en: 'Creative performance analysis',
    de: 'Analyse der kreativen Leistung'
  },
  audienceTargetingSuggestions: {
    en: 'Audience targeting suggestions',
    de: 'Vorschläge zur Zielgruppenansprache'
  },
  coreIntelligenceFeatures: {
    en: 'Core Intelligence Features',
    de: 'Zentrale Intelligenzfunktionen'
  },
  predictiveAnalysis: {
    en: 'Predictive Analysis',
    de: 'Prädiktive Analyse'
  },
  predictiveAnalysisDescription: {
    en: 'Forecast future trends and performance based on historical data and market patterns.',
    de: 'Prognostizieren Sie zukünftige Trends und Leistungen auf der Grundlage historischer Daten und Marktmuster.'
  },
  contentIntelligence: {
    en: 'Content Intelligence',
    de: 'Content-Intelligenz'
  },
  contentIntelligenceDescription: {
    en: 'Analyze content performance and get recommendations for improvement.',
    de: 'Analysieren Sie die Content-Performance und erhalten Sie Empfehlungen zur Verbesserung.'
  },
  crossChannelInsights: {
    en: 'Cross-Channel Insights',
    de: 'Kanalübergreifende Erkenntnisse'
  },
  crossChannelInsightsDescription: {
    en: 'Understand how your channels work together and optimize your cross-channel strategy.',
    de: 'Verstehen Sie, wie Ihre Kanäle zusammenarbeiten, und optimieren Sie Ihre kanalübergreifende Strategie.'
  },
  competitiveIntelligence: {
    en: 'Competitive Intelligence',
    de: 'Wettbewerbsintelligenz'
  },
  competitiveIntelligenceDescription: {
    en: 'Benchmark your performance against competitors and identify opportunities.',
    de: 'Vergleichen Sie Ihre Leistung mit der Konkurrenz und identifizieren Sie Chancen.'
  },
  howItWorks: {
    en: 'How It Works',
    de: 'Wie es funktioniert'
  },
  connectData: {
    en: 'Connect Your Data',
    de: 'Verbinden Sie Ihre Daten'
  },
  connectDataDescription: {
    en: 'Connect your marketing platforms to bring all your data into one place.',
    de: 'Verbinden Sie Ihre Marketing-Plattformen, um all Ihre Daten an einem Ort zusammenzuführen.'
  },
  aiAnalysis: {
    en: 'AI Analysis',
    de: 'KI-Analyse'
  },
  aiAnalysisDescription: {
    en: 'Our AI analyzes your data to identify patterns, trends, and opportunities.',
    de: 'Unsere KI analysiert Ihre Daten, um Muster, Trends und Chancen zu identifizieren.'
  },
  getRecommendations: {
    en: 'Get Recommendations',
    de: 'Empfehlungen erhalten'
  },
  getRecommendationsDescription: {
    en: 'Receive actionable insights and recommendations to improve your marketing performance.',
    de: 'Erhalten Sie umsetzbare Erkenntnisse und Empfehlungen zur Verbesserung Ihrer Marketingleistung.'
  },
  faq: {
    en: 'Frequently Asked Questions',
    de: 'Häufig gestellte Fragen'
  },
  faqWhenAvailable: {
    en: 'When will the AI Assistant be available?',
    de: 'Wann wird der KI-Assistent verfügbar sein?'
  },
  faqWhenAvailableAnswer: {
    en: 'We are currently in beta testing with select customers. Join our waitlist to be notified when we launch publicly.',
    de: 'Wir befinden uns derzeit in der Beta-Testphase mit ausgewählten Kunden. Tragen Sie sich in unsere Warteliste ein, um benachrichtigt zu werden, wenn wir öffentlich starten.'
  },
  faqPlatforms: {
    en: 'Which marketing platforms are supported?',
    de: 'Welche Marketing-Plattformen werden unterstützt?'
  },
  faqPlatformsAnswer: {
    en: 'We support all major marketing platforms including Google Ads, Meta Ads, LinkedIn, Twitter, TikTok, and more.',
    de: 'Wir unterstützen alle wichtigen Marketing-Plattformen, darunter Google Ads, Meta Ads, LinkedIn, Twitter, TikTok und mehr.'
  },
  faqRecommendations: {
    en: 'How accurate are the AI recommendations?',
    de: 'Wie genau sind die KI-Empfehlungen?'
  },
  faqRecommendationsAnswer: {
    en: 'Our AI uses advanced machine learning algorithms trained on millions of data points to provide highly accurate recommendations.',
    de: 'Unsere KI verwendet fortschrittliche maschinelle Lernalgorithmen, die mit Millionen von Datenpunkten trainiert wurden, um hochgenaue Empfehlungen zu geben.'
  },
  faqAutomaticChanges: {
    en: 'Will the AI make automatic changes to my campaigns?',
    de: 'Wird die KI automatische Änderungen an meinen Kampagnen vornehmen?'
  },
  faqAutomaticChangesAnswer: {
    en: 'No, the AI will only provide recommendations. You have full control over whether to implement them.',
    de: 'Nein, die KI wird nur Empfehlungen geben. Sie haben die volle Kontrolle darüber, ob Sie diese umsetzen möchten.'
  },
  firstToExperience: {
    en: 'Be First to Experience Our AI Assistant',
    de: 'Seien Sie die Ersten, die unseren KI-Assistenten erleben'
  },
  waitlistDescription: {
    en: 'Join our exclusive waitlist to get early access to our AI marketing assistant and be at the forefront of marketing innovation.',
    de: 'Tragen Sie sich in unsere exklusive Warteliste ein, um frühzeitigen Zugang zu unserem KI-Marketing-Assistenten zu erhalten und an der Spitze der Marketing-Innovation zu stehen.'
  },
  yourEmail: {
    en: 'Your email address',
    de: 'Ihre E-Mail-Adresse'
  },
  privacyNote: {
    en: 'We respect your privacy and will never share your information.',
    de: 'Wir respektieren Ihre Privatsphäre und werden Ihre Daten niemals weitergeben.'
  }
};
