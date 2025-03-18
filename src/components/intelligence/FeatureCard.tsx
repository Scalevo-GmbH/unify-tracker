
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import FadeInSection from "@/components/animations/FadeInSection";

interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  titleKey: string;
  descriptionKey: string;
  featureItems: string[];
  bulletColor: string;
  delay: number;
}

const FeatureCard = ({ 
  icon: Icon, 
  iconColor, 
  iconBgColor, 
  titleKey, 
  descriptionKey, 
  featureItems, 
  bulletColor,
  delay
}: FeatureCardProps) => {
  const { t } = useTranslation();
  
  return (
    <FadeInSection delay={delay}>
      <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className={`mb-4 w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <h3 className="text-xl font-bold mb-2">{t(titleKey)}</h3>
          <p className="text-muted-foreground mb-3">
            {t(descriptionKey)}
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {featureItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className={`mr-2 ${bulletColor}`}>•</span>
                {t(item)}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </FadeInSection>
  );
};

export default FeatureCard;
