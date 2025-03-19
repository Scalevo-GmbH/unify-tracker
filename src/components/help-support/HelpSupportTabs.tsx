
import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { HelpCircle, BookOpen, TicketCheck, Phone } from "lucide-react";
import { ScrollAreaHorizontal } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

interface HelpSupportTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const HelpSupportTabs: React.FC<HelpSupportTabsProps> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full mb-4">
      <ScrollAreaHorizontal className="w-full">
        <div className="dashboard-tabs inline-flex min-w-max">
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "faq" ? "active" : ""}`}
            data-state={activeTab === "faq" ? "active" : "inactive"}
            onClick={() => setActiveTab("faq")}
          >
            <HelpCircle className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span className="hidden sm:inline">{t('frequentlyAskedQuestions')}</span>
            <span className="sm:hidden">FAQs</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "guides" ? "active" : ""}`}
            data-state={activeTab === "guides" ? "active" : "inactive"}
            onClick={() => setActiveTab("guides")}
          >
            <BookOpen className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span className="hidden sm:inline">{t('userGuides')}</span>
            <span className="sm:hidden">Guides</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "tickets" ? "active" : ""}`}
            data-state={activeTab === "tickets" ? "active" : "inactive"}
            onClick={() => setActiveTab("tickets")}
          >
            <TicketCheck className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span className="hidden sm:inline">{t('supportTickets')}</span>
            <span className="sm:hidden">Tickets</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "contact" ? "active" : ""}`}
            data-state={activeTab === "contact" ? "active" : "inactive"}
            onClick={() => setActiveTab("contact")}
          >
            <Phone className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span>{t('contactUs')}</span>
          </button>
        </div>
      </ScrollAreaHorizontal>
    </div>
  );
};

export default HelpSupportTabs;
