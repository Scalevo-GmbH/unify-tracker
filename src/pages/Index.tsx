
import React, { useState } from "react";
import { ConnectPlatformModal } from "@/components/ConnectPlatformModal";
import { DateRange } from "@/components/DateRangeSelector";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";
import DashboardTabs from "@/components/dashboard/DashboardTabs";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<{
    name: string;
    icon: React.ReactNode;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<DateRange>("this-month");
  const [activeTab, setActiveTab] = useState<"overview" | "campaigns">("overview");
  
  const userName = "John Doe";

  const handleOpenModal = (name: string, icon: React.ReactNode) => {
    setSelectedPlatform({ name, icon });
    setIsModalOpen(true);
  };

  const handleTabChange = (value: string) => {
    if (value === "overview" || value === "campaigns") {
      setActiveTab(value);
    }
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <WelcomeHeader 
          userName={userName}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
        
        <DashboardTabs 
          activeTab={activeTab}
          onTabChange={handleTabChange}
          dateRange={dateRange}
          onOpenModal={handleOpenModal}
        />
      </section>
      
      {selectedPlatform && (
        <ConnectPlatformModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          platformName={selectedPlatform.name}
          platformIcon={selectedPlatform.icon}
        />
      )}
    </div>
  );
};

export default Index;
