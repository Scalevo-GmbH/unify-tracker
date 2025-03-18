
export type Language = 'en' | 'de';

// Common type for all translation files
export interface TranslationEntry {
  en: string;
  de: string;
}

export type TranslationsObject<K extends string> = {
  [key in K]: TranslationEntry;
};
