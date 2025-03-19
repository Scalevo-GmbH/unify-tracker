
import React, { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { PerformanceNavTabs } from "@/components/performance/PerformanceNavTabs";
import { PerformanceSubNav } from "@/components/performance/PerformanceSubNav";
import { PerformanceDashboard } from "@/components/performance/PerformanceDashboard";
import { toolsByCategory } from "@/components/performance/performanceData";

const Performance = () => {
  const [activeTab, setActiveTab] = useState("paid-search");
  const [activeSubTab, setActiveSubTab] = useState<Record<string, string>>({
    "paid-search": "overview",
    "paid-socials": "overview",
    "organic-social": "overview",
    "website": "overview",
    "email": "overview",
    "forms": "overview"
  });
  const [selectedTool, setSelectedTool] = useState<Record<string, string>>({
    "paid-search": "google-ads",
    "paid-socials": "meta-ads",
    "organic-social": "instagram",
    "website": "google-analytics",
    "email": "mailchimp",
    "forms": "typeform"
  });
  const { t } = useTranslation();

  const handleToolChange = (value: string) => {
    setSelectedTool({
      ...selectedTool,
      [activeTab]: value
    });
  };

  const handleSubTabChange = (value: string) => {
    setActiveSubTab({
      ...activeSubTab,
      [activeTab]: value
    });
  };

  return (
    <div className="w-full mx-auto py-4 sm:py-8 px-2 sm:px-4 md:px-6">
      <div className="mb-4 sm:mb-8">
        <h1 className="page-title">{t('performance')}</h1>
        <p className="page-description">{t('trackAnalyzePerformance')}</p>
      </div>

      <PerformanceNavTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <PerformanceSubNav
        activeSubTab={activeSubTab[activeTab]}
        onSubTabChange={handleSubTabChange}
        showToolSelector={activeSubTab[activeTab] === "details"}
        selectedTool={selectedTool[activeTab]}
        tools={toolsByCategory[activeTab as keyof typeof toolsByCategory]}
        onToolChange={handleToolChange}
      />

      <PerformanceDashboard
        activeTab={activeTab}
        activeSubTab={activeSubTab[activeTab]}
        selectedTool={selectedTool[activeTab]}
        onToolChange={handleToolChange}
        onSubTabChange={handleSubTabChange}
      />
    </div>
  );
};

export default Performance;
