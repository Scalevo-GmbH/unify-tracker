
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface IntegrationsSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const IntegrationsSearch: React.FC<IntegrationsSearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full md:w-64">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={t('searchIntegrations')}
        className="pl-8"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default IntegrationsSearch;
