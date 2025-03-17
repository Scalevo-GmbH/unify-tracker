
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
    ...rest 
  }: { 
    i18nKey: Parameters<typeof getTranslation>[0];
    components?: Record<string, React.ReactNode>;
    [key: string]: any;
  }) => {
    const text = t(i18nKey);
    return <span {...rest}>{text}</span>;
  };
  
  return { t, Trans, language };
}
