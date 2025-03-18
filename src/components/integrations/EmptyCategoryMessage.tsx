
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

export const EmptyCategoryMessage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FadeInSection>
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <p className="text-muted-foreground">
            {t('noMatchingIntegrations')}
          </p>
        </CardContent>
      </Card>
    </FadeInSection>
  );
};

export default EmptyCategoryMessage;
