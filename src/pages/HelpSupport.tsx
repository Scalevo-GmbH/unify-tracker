
import React, { useState } from "react";
import useTranslation from "@/hooks/use-translation";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import FAQSection from "@/components/help-support/FAQSection";
import GuidesSection from "@/components/help-support/GuidesSection";
import SupportTicketsSection from "@/components/help-support/SupportTicketsSection";
import ContactSection from "@/components/help-support/ContactSection";
import HelpSupportTabs from "@/components/help-support/HelpSupportTabs";

const HelpSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('helpSupport')}</h1>
        <p className="text-muted-foreground">{t('helpSupportDesc')}</p>
      </div>

      <HelpSupportTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <Tabs value={activeTab} className="mt-6">
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
