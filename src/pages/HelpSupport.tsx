
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, BookOpen, MessageSquare, Mail } from "lucide-react";
import FAQSection from "@/components/help-support/FAQSection";
import GuidesSection from "@/components/help-support/GuidesSection";
import SupportTicketsSection from "@/components/help-support/SupportTicketsSection";
import ContactSection from "@/components/help-support/ContactSection";
import { useTranslation } from "@/hooks/use-translation";

const HelpSupport: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('helpSupportTitle')}</h1>
        <p className="text-muted-foreground">{t('helpSupportSubtitle')}</p>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="dashboard-tabs mb-6 w-full justify-start">
          <TabsTrigger className="dashboard-tab" value="faq">
            <HelpCircle className="mr-2 h-4 w-4" />
            {t('faq')}
          </TabsTrigger>
          <TabsTrigger className="dashboard-tab" value="guides">
            <BookOpen className="mr-2 h-4 w-4" />
            {t('userGuides')}
          </TabsTrigger>
          <TabsTrigger className="dashboard-tab" value="tickets">
            <MessageSquare className="mr-2 h-4 w-4" />
            {t('supportTickets')}
          </TabsTrigger>
          <TabsTrigger className="dashboard-tab" value="contact">
            <Mail className="mr-2 h-4 w-4" />
            {t('contactUs')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <FAQSection />
        </TabsContent>
        
        <TabsContent value="guides">
          <GuidesSection />
        </TabsContent>
        
        <TabsContent value="tickets">
          <SupportTicketsSection />
        </TabsContent>
        
        <TabsContent value="contact">
          <ContactSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpSupport;
