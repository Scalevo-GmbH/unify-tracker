
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

  // Create a type-safe handler for tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="max-w-full overflow-hidden py-4 sm:py-8 px-2 sm:px-4 md:px-6">
      <div className="mb-6 sm:mb-8">
        <h1 className="page-title">{t('helpSupport')}</h1>
        <p className="page-description">{t('helpSupportDesc')}</p>
      </div>

      <HelpSupportTabs activeTab={activeTab} setActiveTab={handleTabChange} />

      <Tabs value={activeTab} className="mt-6 w-full max-w-full overflow-hidden">
        <TabsContent value="faq" className="max-w-full">
          <FAQSection />
        </TabsContent>
        <TabsContent value="guides" className="max-w-full">
          <GuidesSection />
        </TabsContent>
        <TabsContent value="tickets" className="max-w-full">
          <SupportTicketsSection />
        </TabsContent>
        <TabsContent value="contact" className="max-w-full">
          <ContactSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpSupport;
