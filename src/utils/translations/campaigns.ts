
import { TranslationsObject } from './types';

export type CampaignsTranslationKey = 
  | 'campaigns'
  | 'manageCampaigns'
  | 'allCampaigns'
  | 'newCampaign'
  | 'active'
  | 'completed'
  | 'filterByPlatform'
  | 'moreFilters'
  | 'filtersApplied'
  | 'filterByPlatformType'
  | 'search'
  | 'socialMedia'
  | 'emailMarketing'
  | 'clearFilters'
  | 'apply'
  | 'noCampaignsFound'
  | 'createNewCampaign'
  | 'campaignName'
  | 'campaignNameDescription'
  | 'platform'
  | 'platformDescription'
  | 'campaignType'
  | 'campaignTypeDescription'
  | 'budget'
  | 'budgetDescription'
  | 'startDate'
  | 'endDate'
  | 'campaignDescription'
  | 'campaignObjectives'
  | 'campaignObjectivesPlaceholder'
  | 'targetAudience'
  | 'targetAudiencePlaceholder'
  | 'cancel'
  | 'create';

export const campaignsTranslations: TranslationsObject<CampaignsTranslationKey> = {
  campaigns: {
    en: 'Campaigns',
    de: 'Kampagnen'
  },
  manageCampaigns: {
    en: 'Manage all your marketing campaigns across different platforms',
    de: 'Verwalte all deine Marketingkampagnen auf verschiedenen Plattformen'
  },
  allCampaigns: {
    en: 'All Campaigns',
    de: 'Alle Kampagnen'
  },
  newCampaign: {
    en: 'New Campaign',
    de: 'Neue Kampagne'
  },
  active: {
    en: 'Active',
    de: 'Aktiv'
  },
  completed: {
    en: 'Completed',
    de: 'Abgeschlossen'
  },
  filterByPlatform: {
    en: 'Filter by Platform Type',
    de: 'Nach Plattformtyp filtern'
  },
  moreFilters: {
    en: 'More Filters',
    de: 'Weitere Filter'
  },
  filtersApplied: {
    en: 'Filters Applied',
    de: 'Filter angewendet'
  },
  filterByPlatformType: {
    en: 'Filter by Platform Type',
    de: 'Nach Plattformtyp filtern'
  },
  search: {
    en: 'Search (Google, Bing)',
    de: 'Suche (Google, Bing)'
  },
  socialMedia: {
    en: 'Social Media',
    de: 'Social Media'
  },
  emailMarketing: {
    en: 'Email Marketing',
    de: 'E-Mail-Marketing'
  },
  clearFilters: {
    en: 'Clear Filters',
    de: 'Filter löschen'
  },
  apply: {
    en: 'Apply',
    de: 'Anwenden'
  },
  noCampaignsFound: {
    en: 'No campaigns found matching your filters.',
    de: 'Keine Kampagnen gefunden, die deinen Filtern entsprechen.'
  },
  createNewCampaign: {
    en: 'Create New Campaign',
    de: 'Neue Kampagne erstellen'
  },
  campaignName: {
    en: 'Campaign Name',
    de: 'Kampagnenname'
  },
  campaignNameDescription: {
    en: 'A clear, descriptive name for your campaign',
    de: 'Ein klarer, beschreibender Name für deine Kampagne'
  },
  platform: {
    en: 'Platform',
    de: 'Plattform'
  },
  platformDescription: {
    en: 'The marketing platform for this campaign',
    de: 'Die Marketing-Plattform für diese Kampagne'
  },
  campaignType: {
    en: 'Campaign Type',
    de: 'Kampagnentyp'
  },
  campaignTypeDescription: {
    en: 'The type of marketing campaign',
    de: 'Die Art der Marketingkampagne'
  },
  budget: {
    en: 'Budget',
    de: 'Budget'
  },
  budgetDescription: {
    en: 'Total budget allocated for this campaign',
    de: 'Gesamtbudget für diese Kampagne'
  },
  startDate: {
    en: 'Start Date',
    de: 'Startdatum'
  },
  endDate: {
    en: 'End Date',
    de: 'Enddatum'
  },
  campaignDescription: {
    en: 'Campaign Description',
    de: 'Kampagnenbeschreibung'
  },
  campaignObjectives: {
    en: 'Campaign Objectives',
    de: 'Kampagnenziele'
  },
  campaignObjectivesPlaceholder: {
    en: 'What are the main goals of this campaign?',
    de: 'Was sind die Hauptziele dieser Kampagne?'
  },
  targetAudience: {
    en: 'Target Audience',
    de: 'Zielgruppe'
  },
  targetAudiencePlaceholder: {
    en: 'Describe your target audience for this campaign',
    de: 'Beschreibe deine Zielgruppe für diese Kampagne'
  },
  cancel: {
    en: 'Cancel',
    de: 'Abbrechen'
  },
  create: {
    en: 'Create',
    de: 'Erstellen'
  }
};
