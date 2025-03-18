
import React from "react";
import { Integration } from "./types";
import { IntegrationCard } from "@/components/IntegrationCard";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { RequestIntegrationCard } from "./RequestIntegrationCard";

interface IntegrationsGridProps {
  integrations: Integration[];
  handleOpenModal: (name: string, icon: React.ReactNode) => void;
  searchTerm: string;
}

export const IntegrationsGrid: React.FC<IntegrationsGridProps> = ({
  integrations,
  handleOpenModal,
  searchTerm,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {integrations.map((integration, index) => (
        <FadeInSection key={`all-${integration.name}`} delay={index * 50}>
          <IntegrationCard
            name={integration.name}
            icon={integration.icon}
            description=""
            descriptionKey={integration.descriptionKey}
            popular={integration.popular}
            onClick={() => handleOpenModal(integration.name, integration.icon)}
            className="h-full"
          />
        </FadeInSection>
      ))}
      {!searchTerm && <RequestIntegrationCard delay={integrations.length * 50} />}
    </div>
  );
};

export default IntegrationsGrid;
