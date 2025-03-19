
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
import useTranslation from "@/hooks/use-translation";

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('frequentlyAskedQuestions')}</CardTitle>
          <CardDescription>{t('faqDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pl-10" placeholder={t('searchAnswers')} />
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('connectMetaAdsQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('connectMetaAdsAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('upgradeSubscriptionQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('upgradeSubscriptionAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('createCampaignQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('createCampaignAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t('manageMultipleAccountsQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('manageMultipleAccountsAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>{t('dataUpdateFrequencyQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('dataUpdateFrequencyAnswer')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQSection;
