
import React from 'react';
import { useLanguage } from './use-language';
import { getTranslation } from '@/utils/translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: Parameters<typeof getTranslation>[0]) => {
    return getTranslation(key, language);
  };
  
  // Translation component for more complex translations
  const Trans = ({ 
    i18nKey, 
    components = {},
    values = {},
    ...rest 
  }: { 
    i18nKey: Parameters<typeof getTranslation>[0];
    components?: Record<string, React.ReactNode>;
    values?: Record<string, string>;
    [key: string]: any;
  }) => {
    let text = t(i18nKey);
    
    // Replace values
    if (values && Object.keys(values).length > 0) {
      Object.entries(values).forEach(([key, value]) => {
        text = text.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
    }
    
    // Handle components (for future use)
    if (components && Object.keys(components).length > 0) {
      // This would need more complex parsing to replace tags with components
      // Simplified implementation for now
      return <span {...rest}>{text}</span>;
    }
    
    return <span {...rest}>{text}</span>;
  };
  
  const formatDate = (date: Date | string | number) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    
    // Use browser's Intl API for localized date formatting
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'de-DE', {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }).format(dateObj);
  };
  
  const formatNumber = (num: number, options?: Intl.NumberFormatOptions) => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'de-DE', options).format(num);
  };
  
  const formatCurrency = (amount: number, currency = language === 'en' ? 'USD' : 'EUR') => {
    return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'de-DE', {
      style: 'currency',
      currency
    }).format(amount);
  };
  
  return { 
    t, 
    Trans, 
    language,
    formatDate,
    formatNumber,
    formatCurrency
  };
}
