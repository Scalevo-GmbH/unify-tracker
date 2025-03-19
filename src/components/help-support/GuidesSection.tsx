
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { BookOpen, HelpCircle, LifeBuoy, MessageSquare } from "lucide-react";
import useTranslation from "@/hooks/use-translation";

const GuidesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const guides = [
    {
      title: t('gettingStartedGuide'),
      description: t('gettingStartedDesc'),
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: t('firstCampaignGuide'),
      description: t('firstCampaignDesc'),
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
    },
    {
      title: t('metricsGuide'),
      description: t('metricsDesc'),
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: t('optimizationGuide'),
      description: t('optimizationDesc'),
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('guidesTitle')}</CardTitle>
          <CardDescription>{t('guidesDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="flex items-start p-6 gap-4">
                  <div className="mt-1">{guide.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{guide.title}</h3>
                    <p className="text-muted-foreground text-sm">{guide.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuidesSection;
