
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import PaidSearchDashboard from "@/components/performance/PaidSearchDashboard";
import PaidSocialsDashboard from "@/components/performance/PaidSocialsDashboard";
import OrganicSocialDashboard from "@/components/performance/OrganicSocialDashboard";
import WebsiteDashboard from "@/components/performance/WebsiteDashboard";
import EmailDashboard from "@/components/performance/EmailDashboard";
import FormsDashboard from "@/components/performance/FormsDashboard";
import { ChannelOverview } from "./ChannelOverview";
import { overviewData, getCategoryName, toolsByCategory } from "./performanceData";

interface PerformanceDashboardProps {
  activeTab: string;
  activeSubTab: string;
  selectedTool: string;
  onToolChange: (value: string) => void;
  onSubTabChange: (value: string) => void;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({
  activeTab,
  activeSubTab,
  selectedTool,
  onToolChange,
  onSubTabChange,
}) => {
  const renderOverview = (category: string) => {
    const data = overviewData[category as keyof typeof overviewData];
    
    if (!data) {
      return (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            No overview data available for this category.
          </AlertDescription>
        </Alert>
      );
    }

    return (
      <ChannelOverview
        channelData={data}
        selectedTool={selectedTool}
        tools={toolsByCategory[activeTab as keyof typeof toolsByCategory] || []}
        onToolChange={onToolChange}
        onViewDetails={() => onSubTabChange("details")}
        categoryDisplayName={getCategoryName(activeTab)}
      />
    );
  };

  const renderDashboard = (category: string, toolId: string) => {
    if (activeSubTab === "overview") {
      return renderOverview(category);
    }

    switch (category) {
      case "paid-search":
        return <PaidSearchDashboard toolId={toolId} />;
      case "paid-socials":
        return <PaidSocialsDashboard toolId={toolId} />;
      case "organic-social":
        return <OrganicSocialDashboard toolId={toolId} />;
      case "website":
        return <WebsiteDashboard toolId={toolId} />;
      case "email":
        return <EmailDashboard toolId={toolId} />;
      case "forms":
        return <FormsDashboard toolId={toolId} />;
      default:
        return (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Invalid category selected.
            </AlertDescription>
          </Alert>
        );
    }
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="pt-6 px-4 sm:px-6">
        {renderDashboard(activeTab, selectedTool)}
      </CardContent>
    </Card>
  );
};
