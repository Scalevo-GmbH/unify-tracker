
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

interface NoResultsMessageProps {
  searchTerm: string;
  clearSearch: () => void;
}

export const NoResultsMessage: React.FC<NoResultsMessageProps> = ({
  searchTerm,
  clearSearch,
}) => {
  const { t } = useTranslation();

  return (
    <FadeInSection>
      <Card className="mt-8">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
          <h3 className="text-xl font-medium mb-2">{t('noIntegrationsFound')}</h3>
          <p className="text-muted-foreground text-center max-w-md">
            {t('noResultsMessage')} "{searchTerm}". {t('tryDifferentSearch')}
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={clearSearch}
          >
            {t('clearSearch')}
          </Button>
        </CardContent>
      </Card>
    </FadeInSection>
  );
};

export default NoResultsMessage;
