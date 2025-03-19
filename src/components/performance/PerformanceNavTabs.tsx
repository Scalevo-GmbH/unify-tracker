
import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Search, BarChart3, LineChart, Globe, Mail, FileText } from "lucide-react";
import { ScrollAreaHorizontal } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

interface PerformanceNavTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const PerformanceNavTabs: React.FC<PerformanceNavTabsProps> = ({ 
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
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "paid-search" ? "active" : ""}`}
            data-state={activeTab === "paid-search" ? "active" : "inactive"}
            onClick={() => setActiveTab("paid-search")}
          >
            <Search className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span className="hidden sm:inline">{t('paidSearch')}</span>
            <span className="sm:hidden">Search</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "paid-socials" ? "active" : ""}`}
            data-state={activeTab === "paid-socials" ? "active" : "inactive"}
            onClick={() => setActiveTab("paid-socials")}
          >
            <BarChart3 className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span className="hidden sm:inline">{t('paidSocials')}</span>
            <span className="sm:hidden">Social Ads</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "organic-social" ? "active" : ""}`}
            data-state={activeTab === "organic-social" ? "active" : "inactive"}
            onClick={() => setActiveTab("organic-social")}
          >
            <LineChart className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span className="hidden sm:inline">{t('organicSocial')}</span>
            <span className="sm:hidden">Organic</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "website" ? "active" : ""}`}
            data-state={activeTab === "website" ? "active" : "inactive"}
            onClick={() => setActiveTab("website")}
          >
            <Globe className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span>{t('website')}</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "email" ? "active" : ""}`}
            data-state={activeTab === "email" ? "active" : "inactive"}
            onClick={() => setActiveTab("email")}
          >
            <Mail className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span>{t('email')}</span>
          </button>
          <button
            className={`dashboard-tab flex items-center whitespace-nowrap ${activeTab === "forms" ? "active" : ""}`}
            data-state={activeTab === "forms" ? "active" : "inactive"}
            onClick={() => setActiveTab("forms")}
          >
            <FileText className={`${isMobile ? "h-3 w-3 mr-1" : "h-4 w-4 mr-2"}`} />
            <span>{t('forms')}</span>
          </button>
        </div>
      </ScrollAreaHorizontal>
    </div>
  );
};
