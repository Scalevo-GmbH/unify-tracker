
import type { Language } from "@/hooks/use-language";

// Define types for campaign-related translations
export type CampaignTranslationKey = 
  | 'createCampaign'
  | 'filterByStatus'
  | 'filterByPlatform'
  | 'allCampaigns'
  | 'activeCampaigns'
  | 'completedCampaigns'
  | 'socialMedia'
  | 'searchAds'
  | 'emailMarketing'
  | 'campaignName'
  | 'campaignType'
  | 'platform'
  | 'status'
  | 'budget'
  | 'spent'
  | 'dates'
  | 'performance'
  | 'actions'
  | 'active'
  | 'completed'
  | 'paused'
  | 'scheduled'
  | 'excellent'
  | 'good'
  | 'average'
  | 'poor'
  | 'edit'
  | 'duplicate'
  | 'pause'
  | 'resume'
  | 'delete'
  | 'start'
  | 'end'
  | 'noCampaignsFound'
  | 'cancel'
  // New Campaign Form
  | 'createNewCampaign'
  | 'campaignNameLabel'
  | 'campaignNamePlaceholder'
  | 'campaignNameDescription'
  | 'platformLabel'
  | 'selectPlatform'
  | 'platformDescription'
  | 'campaignTypeLabel'
  | 'selectCampaignType'
  | 'campaignTypeDescription'
  | 'budgetLabel'
  | 'budgetPlaceholder'
  | 'budgetDescription'
  | 'startDateLabel'
  | 'endDateLabel'
  | 'campaignDescriptionLabel'
  | 'campaignDescriptionPlaceholder'
  | 'objectivesLabel'
  | 'objectivesPlaceholder'
  | 'targetAudienceLabel'
  | 'targetAudienceDescription'
  | 'targetAudiencePlaceholder';

// Campaign-related translations
export const campaignTranslations: Record<CampaignTranslationKey, Record<Language, string>> = {
  createCampaign: {
    en: 'Create Campaign',
    de: 'Kampagne erstellen'
  },
  filterByStatus: {
    en: 'Filter by Status',
    de: 'Nach Status filtern'
  },
  filterByPlatform: {
    en: 'Filter by Platform',
    de: 'Nach Plattform filtern'
  },
  allCampaigns: {
    en: 'All Campaigns',
    de: 'Alle Kampagnen'
  },
  activeCampaigns: {
    en: 'Active Campaigns',
    de: 'Aktive Kampagnen'
  },
  completedCampaigns: {
    en: 'Completed Campaigns',
    de: 'Abgeschlossene Kampagnen'
  },
  socialMedia: {
    en: 'Social Media',
    de: 'Soziale Medien'
  },
  searchAds: {
    en: 'Search Ads',
    de: 'Suchanzeigen'
  },
  emailMarketing: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  campaignName: {
    en: 'Campaign',
    de: 'Kampagne'
  },
  campaignType: {
    en: 'Type',
    de: 'Typ'
  },
  platform: {
    en: 'Platform',
    de: 'Plattform'
  },
  status: {
    en: 'Status',
    de: 'Status'
  },
  budget: {
    en: 'Budget',
    de: 'Budget'
  },
  spent: {
    en: 'Spent',
    de: 'Ausgegeben'
  },
  dates: {
    en: 'Dates',
    de: 'Zeitraum'
  },
  performance: {
    en: 'Performance',
    de: 'Leistung'
  },
  actions: {
    en: 'Actions',
    de: 'Aktionen'
  },
  active: {
    en: 'Active',
    de: 'Aktiv'
  },
  completed: {
    en: 'Completed',
    de: 'Abgeschlossen'
  },
  paused: {
    en: 'Paused',
    de: 'Pausiert'
  },
  scheduled: {
    en: 'Scheduled',
    de: 'Geplant'
  },
  excellent: {
    en: 'Excellent',
    de: 'Ausgezeichnet'
  },
  good: {
    en: 'Good',
    de: 'Gut'
  },
  average: {
    en: 'Average',
    de: 'Durchschnittlich'
  },
  poor: {
    en: 'Poor',
    de: 'Schlecht'
  },
  edit: {
    en: 'Edit',
    de: 'Bearbeiten'
  },
  duplicate: {
    en: 'Duplicate',
    de: 'Duplizieren'
  },
  pause: {
    en: 'Pause',
    de: 'Pausieren'
  },
  resume: {
    en: 'Resume',
    de: 'Fortsetzen'
  },
  delete: {
    en: 'Delete',
    de: 'Löschen'
  },
  start: {
    en: 'Start',
    de: 'Start'
  },
  end: {
    en: 'End',
    de: 'Ende'
  },
  noCampaignsFound: {
    en: 'No campaigns found matching your filters.',
    de: 'Keine Kampagnen gefunden, die deinen Filtern entsprechen.'
  },
  cancel: {
    en: 'Cancel',
    de: 'Abbrechen'
  },
  // New Campaign Form
  createNewCampaign: {
    en: 'Create New Campaign',
    de: 'Neue Kampagne erstellen'
  },
  campaignNameLabel: {
    en: 'Campaign Name',
    de: 'Kampagnenname'
  },
  campaignNamePlaceholder: {
    en: 'Summer Sale 2025',
    de: 'Sommer-Sale 2025'
  },
  campaignNameDescription: {
    en: 'A clear, descriptive name for your campaign',
    de: 'Ein klarer, beschreibender Name für deine Kampagne'
  },
  platformLabel: {
    en: 'Platform',
    de: 'Plattform'
  },
  selectPlatform: {
    en: 'Select platform',
    de: 'Plattform auswählen'
  },
  platformDescription: {
    en: 'The marketing platform for this campaign',
    de: 'Die Marketing-Plattform für diese Kampagne'
  },
  campaignTypeLabel: {
    en: 'Campaign Type',
    de: 'Kampagnentyp'
  },
  selectCampaignType: {
    en: 'Select campaign type',
    de: 'Kampagnentyp auswählen'
  },
  campaignTypeDescription: {
    en: 'The type of marketing campaign',
    de: 'Die Art der Marketing-Kampagne'
  },
  budgetLabel: {
    en: 'Budget',
    de: 'Budget'
  },
  budgetPlaceholder: {
    en: '$1,000',
    de: '1.000 €'
  },
  budgetDescription: {
    en: 'Total budget allocated for this campaign',
    de: 'Gesamtbudget für diese Kampagne'
  },
  startDateLabel: {
    en: 'Start Date',
    de: 'Startdatum'
  },
  endDateLabel: {
    en: 'End Date',
    de: 'Enddatum'
  },
  campaignDescriptionLabel: {
    en: 'Campaign Description',
    de: 'Kampagnenbeschreibung'
  },
  campaignDescriptionPlaceholder: {
    en: 'Describe the purpose and details of your campaign',
    de: 'Beschreibe den Zweck und die Details deiner Kampagne'
  },
  objectivesLabel: {
    en: 'Campaign Objectives',
    de: 'Kampagnenziele'
  },
  objectivesPlaceholder: {
    en: 'What are the main goals of this campaign?',
    de: 'Was sind die Hauptziele dieser Kampagne?'
  },
  targetAudienceLabel: {
    en: 'Target Audience',
    de: 'Zielgruppe'
  },
  targetAudienceDescription: {
    en: 'The intended audience for your campaign',
    de: 'Die beabsichtigte Zielgruppe für deine Kampagne'
  },
  targetAudiencePlaceholder: {
    en: 'Describe your target audience for this campaign',
    de: 'Beschreibe deine Zielgruppe für diese Kampagne'
  }
};
