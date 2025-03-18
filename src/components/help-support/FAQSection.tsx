
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

const FAQSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('frequentlyAskedQuestions')}</CardTitle>
          <CardDescription>{t('faqDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pl-10" placeholder={t('searchForAnswers')} />
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('connectMetaQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('connectMetaAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('upgradeQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('upgradeAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('createCampaignQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('createCampaignAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t('multipleAccountsQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('multipleAccountsAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>{t('dataUpdateQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('dataUpdateAnswer')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQSection;
