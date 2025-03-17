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
import { AlertCircle, BarChart3, LineChart, Users, TrendingUp, MousePointerClick, Eye, Share2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import PaidSearchDashboard from "@/components/performance/PaidSearchDashboard";
import PaidSocialsDashboard from "@/components/performance/PaidSocialsDashboard";
import OrganicSocialDashboard from "@/components/performance/OrganicSocialDashboard";
import WebsiteDashboard from "@/components/performance/WebsiteDashboard";
import EmailDashboard from "@/components/performance/EmailDashboard";
import FormsDashboard from "@/components/performance/FormsDashboard";
import { MetricCard } from "@/components/MetricCard";

const overviewData = {
  "paid-search": {
    metrics: [
      { title: "Total Impressions", value: "786,245", change: 12.3, icon: <Eye className="h-4 w-4" /> },
      { title: "Total Clicks", value: "42,890", change: 8.7, icon: <MousePointerClick className="h-4 w-4" /> },
      { title: "Average CTR", value: "5.45%", change: -2.1, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Total Spend", value: "€14,568", change: 15.2, icon: <BarChart3 className="h-4 w-4" /> }
    ]
  },
  "paid-socials": {
    metrics: [
      { title: "Total Reach", value: "1,245,780", change: 24.5, icon: <Users className="h-4 w-4" /> },
      { title: "Engagement Rate", value: "3.87%", change: 1.2, icon: <Share2 className="h-4 w-4" /> },
      { title: "Total Impressions", value: "2,458,900", change: 18.4, icon: <Eye className="h-4 w-4" /> },
      { title: "Total Spend", value: "€12,340", change: 9.7, icon: <BarChart3 className="h-4 w-4" /> }
    ]
  },
  "organic-social": {
    metrics: [
      { title: "Total Followers", value: "124,580", change: 5.8, icon: <Users className="h-4 w-4" /> },
      { title: "Total Engagement", value: "45,670", change: 7.2, icon: <Share2 className="h-4 w-4" /> },
      { title: "Engagement Rate", value: "4.12%", change: 0.5, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Reach Growth", value: "12.8%", change: 3.4, icon: <LineChart className="h-4 w-4" /> }
    ]
  },
  "website": {
    metrics: [
      { title: "Total Visitors", value: "256,890", change: 16.7, icon: <Users className="h-4 w-4" /> },
      { title: "Avg. Session Duration", value: "3m 42s", change: 5.3, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Bounce Rate", value: "42.5%", change: -3.8, icon: <TrendingUp className="h-4 w-4" />, invertedChange: true },
      { title: "Conversion Rate", value: "3.24%", change: 1.5, icon: <BarChart3 className="h-4 w-4" /> }
    ]
  },
  "email": {
    metrics: [
      { title: "Total Sent", value: "145,680", change: 28.4, icon: <Eye className="h-4 w-4" /> },
      { title: "Open Rate", value: "22.4%", change: 3.2, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Click Rate", value: "3.85%", change: 1.7, icon: <MousePointerClick className="h-4 w-4" /> },
      { title: "Conversion Rate", value: "1.24%", change: 0.6, icon: <BarChart3 className="h-4 w-4" /> }
    ]
  },
  "forms": {
    metrics: [
      { title: "Total Submissions", value: "32,450", change: 18.3, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Completion Rate", value: "68.7%", change: 4.5, icon: <BarChart3 className="h-4 w-4" /> },
      { title: "Avg. Completion Time", value: "2m 15s", change: -12.4, icon: <TrendingUp className="h-4 w-4" />, invertedChange: true },
      { title: "Conversion Rate", value: "2.87%", change: 1.2, icon: <BarChart3 className="h-4 w-4" /> }
    ]
  }
};

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

  const handleSubTabChange = (value: string) => {
    setActiveSubTab({
      ...activeSubTab,
      [activeTab]: value
    });
  };

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
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              icon={metric.icon}
              invertedChange={metric.invertedChange}
            />
          ))}
        </div>
        
        <div className="bg-muted/30 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium mb-3">Gesamtüberblick</h3>
          <p className="text-muted-foreground mb-4">
            Diese Übersicht zeigt die Gesamtleistung aller {getChannelNameInGerman(activeTab)}.
            Wählen Sie einen spezifischen Kanal unten, um detailliertere Analysen zu sehen.
          </p>
        </div>
      </div>
    );
  };

  const getChannelNameInGerman = (category: string) => {
    switch (category) {
      case "paid-search":
        return "bezahlten Suchanzeigen";
      case "paid-socials":
        return "bezahlten Social-Media-Kampagnen";
      case "organic-social":
        return "organischen Social-Media-Kanäle";
      case "website":
        return "Website-Aktivitäten";
      case "email":
        return "E-Mail-Kampagnen";
      case "forms":
        return "Formulare";
      default:
        return "Kanäle";
    }
  };

  const renderDashboard = (category: string, toolId: string) => {
    if (activeSubTab[category] === "overview") {
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
            isFirst
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

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Tabs
            value={activeSubTab[activeTab]}
            onValueChange={handleSubTabChange}
            className="w-full sm:w-auto"
          >
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="overview" isFirst>Überblick</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
          </Tabs>

          {activeSubTab[activeTab] === "details" && (
            <Select 
              value={selectedTool[activeTab]} 
              onValueChange={handleToolChange}
            >
              <SelectTrigger className="w-[200px] bg-white border-gray-200 shadow-sm">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {toolsByCategory[activeTab as keyof typeof toolsByCategory]?.map(tool => (
                  <SelectItem key={tool.id} value={tool.id}>
                    {tool.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
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
