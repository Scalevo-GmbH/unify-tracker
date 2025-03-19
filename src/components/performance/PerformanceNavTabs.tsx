
import React from "react";
import { useTranslation } from "@/hooks/use-translation";

interface PerformanceNavTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const PerformanceNavTabs: React.FC<PerformanceNavTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-tabs mb-8">
      <button
        className={`dashboard-tab ${activeTab === "paid-search" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "paid-search" ? "active" : "inactive"}
        onClick={() => setActiveTab("paid-search")}
      >
        {t('paidSearchTab')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "paid-socials" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "paid-socials" ? "active" : "inactive"}
        onClick={() => setActiveTab("paid-socials")}
      >
        {t('paidSocialsTab')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "organic-social" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "organic-social" ? "active" : "inactive"}
        onClick={() => setActiveTab("organic-social")}
      >
        {t('organicSocialTab')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "website" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "website" ? "active" : "inactive"}
        onClick={() => setActiveTab("website")}
      >
        {t('websiteTab')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "email" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "email" ? "active" : "inactive"}
        onClick={() => setActiveTab("email")}
      >
        {t('emailTab')}
      </button>
      <button
        className={`dashboard-tab ${activeTab === "forms" ? "data-[state=active]" : "data-[state=inactive]"}`}
        data-state={activeTab === "forms" ? "active" : "inactive"}
        onClick={() => setActiveTab("forms")}
      >
        {t('formsTab')}
      </button>
    </div>
  );
};
