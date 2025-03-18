import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";
import { integrations } from "@/components/integrations/integrationsData";
import { ConnectPlatformModal } from "@/components/ConnectPlatformModal";
import { IntegrationsSearch } from "@/components/integrations/IntegrationsSearch";
import { NoResultsMessage } from "@/components/integrations/NoResultsMessage";
import { IntegrationsGrid } from "@/components/integrations/IntegrationsGrid";
import { CategoryTabContent } from "@/components/integrations/CategoryTabContent";
import { EmptyCategoryMessage } from "@/components/integrations/EmptyCategoryMessage";
import { useIntegrationsFilter } from "@/hooks/use-integrations-filter";

const Integrations = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<{
    name: string;
    icon: React.ReactNode;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const {
    searchTerm,
    setSearchTerm,
    filteredIntegrations,
    filteredAllIntegrations,
    hasResults,
    clearSearch
  } = useIntegrationsFilter(integrations);

  const handleOpenModal = (name: string, icon: React.ReactNode) => {
    setSelectedPlatform({ name, icon });
    setIsModalOpen(true);
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <FadeInSection>
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0 mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{t('integrations')}</h1>
            <p className="text-muted-foreground">{t('integrationsSubtitle')}</p>
          </div>
          <IntegrationsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </FadeInSection>

      <Tabs defaultValue="all" className="space-y-4">
        <FadeInSection>
          <TabsList className="dashboard-tabs">
            <TabsTrigger value="all" className="dashboard-tab">
              {t('allTab')}
            </TabsTrigger>
            <TabsTrigger value="advertising" className="dashboard-tab">
              {t('advertisingTab')}
            </TabsTrigger>
            <TabsTrigger value="social" className="dashboard-tab">
              {t('socialMediaTab')}
            </TabsTrigger>
            <TabsTrigger value="email" className="dashboard-tab">
              {t('emailMarketingTab')}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="dashboard-tab">
              {t('analyticsTab')}
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="dashboard-tab">
              {t('ecommerceTab')}
            </TabsTrigger>
            <TabsTrigger value="other" className="dashboard-tab">
              {t('otherToolsTab')}
            </TabsTrigger>
          </TabsList>
        </FadeInSection>

        {!hasResults && searchTerm ? (
          <NoResultsMessage searchTerm={searchTerm} clearSearch={clearSearch} />
        ) : (
          <>
            <TabsContent value="all" className="space-y-4">
              {filteredAllIntegrations.length === 0 ? (
                <EmptyCategoryMessage />
              ) : (
                <IntegrationsGrid 
                  integrations={filteredAllIntegrations}
                  handleOpenModal={handleOpenModal}
                  searchTerm={searchTerm}
                />
              )}
            </TabsContent>

            {Object.keys(integrations).map((category) => (
              <CategoryTabContent 
                key={category}
                category={category}
                integrations={filteredIntegrations[category as keyof typeof filteredIntegrations]} 
                handleOpenModal={handleOpenModal}
                searchTerm={searchTerm}
              />
            ))}
          </>
        )}
      </Tabs>

      {selectedPlatform && (
        <ConnectPlatformModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          platformName={selectedPlatform.name}
          platformIcon={selectedPlatform.icon}
        />
      )}
    </div>
  );
};

export default Integrations;
