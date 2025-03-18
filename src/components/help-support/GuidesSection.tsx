
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { BookOpen, MessageSquare, HelpCircle, LifeBuoy } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

const GuidesSection: React.FC = () => {
  const { t } = useTranslation();

  const guides = [
    {
      title: t('guide1Title'),
      description: t('guide1Description'),
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: t('guide2Title'),
      description: t('guide2Description'),
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
    },
    {
      title: t('guide3Title'),
      description: t('guide3Description'),
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: t('guide4Title'),
      description: t('guide4Description'),
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('guidesTitle')}</CardTitle>
          <CardDescription>{t('guidesDescription')}</CardDescription>
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
