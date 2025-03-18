
import type { Language } from "@/hooks/use-language";

export type SocialMediaTranslationKey = 
  | 'instagramDesc'
  | 'facebookPagesDesc'
  | 'twitterDesc'
  | 'linkedinDesc'
  | 'youtubeDesc';

export const socialMediaTranslations: Record<SocialMediaTranslationKey, Record<Language, string>> = {
  instagramDesc: {
    en: 'Connect Instagram to analyze engagement and reach.',
    de: 'Verbinde Instagram, um Engagement und Reichweite zu analysieren.'
  },
  facebookPagesDesc: {
    en: 'Manage and analyze your Facebook Page performance.',
    de: 'Verwalte und analysiere die Leistung deiner Facebook-Seite.'
  },
  twitterDesc: {
    en: 'Track engagement and audience growth on Twitter.',
    de: 'Verfolge Engagement und Wachstum deiner Zielgruppe auf Twitter.'
  },
  linkedinDesc: {
    en: 'Track company page analytics and engagement.',
    de: 'Verfolge Unternehmensseiten-Analysen und Engagement.'
  },
  youtubeDesc: {
    en: 'Analyze video performance and channel growth.',
    de: 'Analysiere Videoleistung und Kanalwachstum.'
  }
};
