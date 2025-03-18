
import { useState, useMemo } from 'react';
import { Integration, IntegrationsDataProps } from '@/components/integrations/types';
import { useTranslation } from "@/hooks/use-translation";

export const useIntegrationsFilter = (integrations: IntegrationsDataProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();
  
  const allIntegrations = useMemo(() => {
    return Object.values(integrations).flat();
  }, [integrations]);

  const filteredIntegrations = useMemo(() => {
    if (!searchTerm) return integrations;
    
    const filtered: IntegrationsDataProps = {} as IntegrationsDataProps;
    
    Object.keys(integrations).forEach(category => {
      const typedCategory = category as keyof IntegrationsDataProps;
      filtered[typedCategory] = integrations[typedCategory].filter((integration) => 
        integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t(integration.descriptionKey).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    
    return filtered;
  }, [integrations, searchTerm, t]);
  
  const filteredAllIntegrations = useMemo(() => {
    if (!searchTerm) return allIntegrations;
    
    return allIntegrations.filter(integration => 
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(integration.descriptionKey).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allIntegrations, searchTerm, t]);
  
  const hasResults = useMemo(() => {
    return Object.values(filteredIntegrations).some(
      (category) => category.length > 0
    ) || filteredAllIntegrations.length > 0;
  }, [filteredIntegrations, filteredAllIntegrations]);

  const clearSearch = () => setSearchTerm("");

  return {
    searchTerm,
    setSearchTerm,
    filteredIntegrations,
    filteredAllIntegrations,
    hasResults,
    clearSearch
  };
};

export default useIntegrationsFilter;
