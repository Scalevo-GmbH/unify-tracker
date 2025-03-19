
import React from "react";
import { BookOpen, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useTranslation from "@/hooks/use-translation";

interface HelpSupportTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const HelpSupportTabs: React.FC<HelpSupportTabsProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="faq">
          <HelpCircle className="mr-2 h-4 w-4" />
          {t('faqs')}
        </TabsTrigger>
        <TabsTrigger value="guides">
          <BookOpen className="mr-2 h-4 w-4" />
          {t('userGuides')}
        </TabsTrigger>
        <TabsTrigger value="tickets">
          <MessageSquare className="mr-2 h-4 w-4" />
          {t('supportTickets')}
        </TabsTrigger>
        <TabsTrigger value="contact">
          <Mail className="mr-2 h-4 w-4" />
          {t('contactUs')}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default HelpSupportTabs;
