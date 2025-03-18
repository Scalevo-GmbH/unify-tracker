
import type { Language } from "@/hooks/use-language";

// Define types for early access translations
export type EarlyAccessTranslationKey = 
  | 'earlyAccess'
  | 'earlyAccessDescription'
  | 'privacyNote';

// Early access translations
export const earlyAccessTranslations: Record<EarlyAccessTranslationKey, Record<Language, string>> = {
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
