
import { useLanguage } from './use-language';
import { getTranslation } from '@/utils/translations';
import type { ComponentProps, ReactNode } from 'react';

// Export as default to fix Fast Refresh compatibility
export default function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: Parameters<typeof getTranslation>[0]) => {
    return getTranslation(key, language);
  };
  
  // Translation component for more complex translations with HTML
  const Trans = ({ 
    i18nKey, 
    components = {},
    values = {},
    ...rest 
  }: { 
    i18nKey: Parameters<typeof getTranslation>[0];
    components?: Record<string, ReactNode>;
    values?: Record<string, string | number>;
    [key: string]: any;
  }) => {
    let text = t(i18nKey);
    
    // Replace values in the translation string
    if (values && Object.keys(values).length > 0) {
      Object.entries(values).forEach(([key, value]) => {
        text = text.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
      });
    }
    
    // This is a simplified version that doesn't support complex HTML interpolation
    // In a real app, you would want to use a library like i18next
    return <span {...rest}>{text}</span>;
  };
  
  return { t, Trans, language };
}

// For backward compatibility
export { useTranslation };
