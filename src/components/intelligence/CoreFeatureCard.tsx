
import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { TranslationKey } from "@/translations/types";

interface CoreFeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
}

const CoreFeatureCard = ({ 
  icon: Icon, 
  iconColor, 
  iconBgColor, 
  titleKey, 
  descriptionKey 
}: CoreFeatureCardProps) => {
  const { t } = useTranslation();
  
  return (
    <Card className="border border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <div className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center mb-2`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <CardTitle className="text-lg">{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {t(descriptionKey)}
        </p>
      </CardContent>
    </Card>
  );
};

export default CoreFeatureCard;
