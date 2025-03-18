
import { useLanguage } from './use-language';
import { getTranslation } from '@/utils/translations';
import type { ComponentProps, ReactNode } from 'react';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: Parameters<typeof getTranslation>[0]) => {
    return getTranslation(key, language);
  };
  
  // Translation component for more complex translations with HTML
  const Trans = ({ 
    i18nKey, 
    components = {},
    ...rest 
  }: { 
    i18nKey: Parameters<typeof getTranslation>[0];
    components?: Record<string, ReactNode>;
    [key: string]: any;
  }) => {
    const text = t(i18nKey);
    // This is a simplified version that doesn't support HTML interpolation
    // In a real app, you would want to use a library like i18next
    return <span {...rest}>{text}</span>;
  };
  
  return { t, Trans, language };
}
