
import React from "react";
import { BookOpen, HelpCircle, Mail, MessageSquare } from "lucide-react";
import useTranslation from "@/hooks/use-translation";

interface HelpSupportTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const HelpSupportTabs: React.FC<HelpSupportTabsProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-tabs mb-8">
      <button
        className={`dashboard-tab ${activeTab === "faq" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "faq" ? "active" : "inactive"}
        onClick={() => setActiveTab("faq")}
      >
        <HelpCircle className="mr-2 h-4 w-4" />
        {t('faqs')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "guides" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "guides" ? "active" : "inactive"}
        onClick={() => setActiveTab("guides")}
      >
        <BookOpen className="mr-2 h-4 w-4" />
        {t('userGuides')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "tickets" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "tickets" ? "active" : "inactive"}
        onClick={() => setActiveTab("tickets")}
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        {t('supportTickets')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "contact" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "contact" ? "active" : "inactive"}
        onClick={() => setActiveTab("contact")}
      >
        <Mail className="mr-2 h-4 w-4" />
        {t('contactUs')}
      </button>
    </div>
  );
};

export default HelpSupportTabs;
