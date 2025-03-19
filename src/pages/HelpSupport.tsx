
import React, { useState } from "react";
import useTranslation from "@/hooks/use-translation";
import FAQSection from "@/components/help-support/FAQSection";
import GuidesSection from "@/components/help-support/GuidesSection";
import SupportTicketsSection from "@/components/help-support/SupportTicketsSection";
import ContactSection from "@/components/help-support/ContactSection";
import HelpSupportTabs from "@/components/help-support/HelpSupportTabs";

const HelpSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const { t } = useTranslation();

  const renderTabContent = () => {
    switch (activeTab) {
      case "faq":
        return <FAQSection />;
      case "guides":
        return <GuidesSection />;
      case "tickets":
        return <SupportTicketsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <FAQSection />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('helpSupport')}</h1>
        <p className="text-muted-foreground">{t('helpSupportDesc')}</p>
      </div>

      <HelpSupportTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {renderTabContent()}
    </div>
  );
};

export default HelpSupport;
