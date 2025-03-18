
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Integration } from "./types";
import { IntegrationsGrid } from "./IntegrationsGrid";
import { EmptyCategoryMessage } from "./EmptyCategoryMessage";

interface CategoryTabContentProps {
  category: string;
  integrations: Integration[];
  handleOpenModal: (name: string, icon: React.ReactNode) => void;
  searchTerm: string;
}

export const CategoryTabContent: React.FC<CategoryTabContentProps> = ({
  category,
  integrations,
  handleOpenModal,
  searchTerm,
}) => {
  return (
    <TabsContent key={category} value={category} className="space-y-4">
      {integrations.length === 0 ? (
        <EmptyCategoryMessage />
      ) : (
        <IntegrationsGrid 
          integrations={integrations} 
          handleOpenModal={handleOpenModal}
          searchTerm={searchTerm}
        />
      )}
    </TabsContent>
  );
};

export default CategoryTabContent;
