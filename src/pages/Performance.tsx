
import React, { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PaidSearchDashboard from "@/components/performance/PaidSearchDashboard";
import PaidSocialsDashboard from "@/components/performance/PaidSocialsDashboard";
import OrganicSocialDashboard from "@/components/performance/OrganicSocialDashboard";
import WebsiteDashboard from "@/components/performance/WebsiteDashboard";
import EmailDashboard from "@/components/performance/EmailDashboard";
import FormsDashboard from "@/components/performance/FormsDashboard";

const Performance = () => {
  const [activeTab, setActiveTab] = useState("paid-search");
  const [selectedTool, setSelectedTool] = useState<Record<string, string>>({
    "paid-search": "google-ads",
    "paid-socials": "meta-ads",
    "organic-social": "instagram",
    "website": "google-analytics",
    "email": "mailchimp",
    "forms": "typeform"
  });

  const toolsByCategory = {
    "paid-search": [
      { id: "google-ads", name: "Google Ads" },
      { id: "bing-ads", name: "Bing Ads" }
    ],
    "paid-socials": [
      { id: "meta-ads", name: "Meta Ads" },
      { id: "linkedin-ads", name: "LinkedIn Ads" },
      { id: "twitter-ads", name: "Twitter Ads" }
    ],
    "organic-social": [
      { id: "instagram", name: "Instagram" },
      { id: "facebook", name: "Facebook" },
      { id: "linkedin", name: "LinkedIn" },
      { id: "twitter", name: "Twitter" }
    ],
    "website": [
      { id: "google-analytics", name: "Google Analytics" }
    ],
    "email": [
      { id: "mailchimp", name: "Mailchimp" },
      { id: "klaviyo", name: "Klaviyo" },
      { id: "hubspot", name: "HubSpot" }
    ],
    "forms": [
      { id: "typeform", name: "Typeform" },
      { id: "google-forms", name: "Google Forms" }
    ]
  };

  const handleToolChange = (value: string) => {
    setSelectedTool({
      ...selectedTool,
      [activeTab]: value
    });
  };

  const renderDashboard = (category: string, toolId: string) => {
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
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Performance</h1>
        <p className="text-muted-foreground">
          Track and analyze performance across all your marketing channels
        </p>
      </div>

      <Tabs
        defaultValue="paid-search"
        onValueChange={(value) => setActiveTab(value)}
        className="w-full"
      >
        <TabsList className="dashboard-tabs mb-8 w-full justify-start">
          <TabsTrigger
            value="paid-search"
            className="dashboard-tab"
          >
            Paid Search
          </TabsTrigger>
          <TabsTrigger
            value="paid-socials"
            className="dashboard-tab"
          >
            Paid Socials
          </TabsTrigger>
          <TabsTrigger
            value="organic-social"
            className="dashboard-tab"
          >
            Organic Social
          </TabsTrigger>
          <TabsTrigger
            value="website"
            className="dashboard-tab"
          >
            Website
          </TabsTrigger>
          <TabsTrigger
            value="email"
            className="dashboard-tab"
          >
            E-Mail
          </TabsTrigger>
          <TabsTrigger
            value="forms"
            className="dashboard-tab"
          >
            Forms
          </TabsTrigger>
        </TabsList>

        <div className="mb-6">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Selected Tool:</label>
            <Select 
              value={selectedTool[activeTab]} 
              onValueChange={handleToolChange}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a tool" />
              </SelectTrigger>
              <SelectContent>
                {toolsByCategory[activeTab as keyof typeof toolsByCategory]?.map(tool => (
                  <SelectItem key={tool.id} value={tool.id}>
                    {tool.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            {renderDashboard(activeTab, selectedTool[activeTab])}
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Performance;
