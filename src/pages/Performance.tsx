
import React, { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, BarChart3, LineChart, Users, TrendingUp, MousePointerClick, Eye, Share2, Award, Zap, ChevronRight } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
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
    ],
    summary: "Your paid search campaigns are performing well with a 12.3% increase in impressions and 8.7% increase in clicks compared to the previous period. Consider optimizing campaigns with lower CTR to improve overall performance.",
    topPerformer: "Google Ads - Summer Sale Campaign",
    recommendation: "Increase budget allocation for high CTR keywords and pause underperforming ad groups to improve ROI."
  },
  "paid-socials": {
    metrics: [
      { title: "Total Reach", value: "1,245,780", change: 24.5, icon: <Users className="h-4 w-4" /> },
      { title: "Engagement Rate", value: "3.87%", change: 1.2, icon: <Share2 className="h-4 w-4" /> },
      { title: "Total Impressions", value: "2,458,900", change: 18.4, icon: <Eye className="h-4 w-4" /> },
      { title: "Total Spend", value: "€12,340", change: 9.7, icon: <BarChart3 className="h-4 w-4" /> }
    ],
    summary: "Your paid social campaigns are showing strong performance with a significant 24.5% increase in reach. Engagement is slightly up by 1.2%, suggesting content is resonating well with audiences.",
    topPerformer: "Meta Ads - Product Launch Video Campaign",
    recommendation: "Test new creative formats on Meta platforms where engagement rates are highest."
  },
  "organic-social": {
    metrics: [
      { title: "Total Followers", value: "124,580", change: 5.8, icon: <Users className="h-4 w-4" /> },
      { title: "Total Engagement", value: "45,670", change: 7.2, icon: <Share2 className="h-4 w-4" /> },
      { title: "Engagement Rate", value: "4.12%", change: 0.5, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Reach Growth", value: "12.8%", change: 3.4, icon: <LineChart className="h-4 w-4" /> }
    ],
    summary: "Your organic social channels are growing steadily with a 5.8% increase in followers. Engagement metrics show healthy growth at 7.2%, suggesting your content strategy is effective.",
    topPerformer: "Instagram - User-Generated Content Series",
    recommendation: "Increase posting frequency on Instagram where engagement rates are highest."
  },
  "website": {
    metrics: [
      { title: "Total Visitors", value: "256,890", change: 16.7, icon: <Users className="h-4 w-4" /> },
      { title: "Avg. Session Duration", value: "3m 42s", change: 5.3, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Bounce Rate", value: "42.5%", change: -3.8, icon: <TrendingUp className="h-4 w-4" />, invertedChange: true },
      { title: "Conversion Rate", value: "3.24%", change: 1.5, icon: <BarChart3 className="h-4 w-4" /> }
    ],
    summary: "Website performance shows strong improvement with visitor growth of 16.7% and decreased bounce rates. The conversion rate increase of 1.5% indicates visitors are finding what they need.",
    topPerformer: "Product Pages - Especially Mobile Experience",
    recommendation: "Optimize checkout flow to further improve the conversion rate."
  },
  "email": {
    metrics: [
      { title: "Total Sent", value: "145,680", change: 28.4, icon: <Eye className="h-4 w-4" /> },
      { title: "Open Rate", value: "22.4%", change: 3.2, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Click Rate", value: "3.85%", change: 1.7, icon: <MousePointerClick className="h-4 w-4" /> },
      { title: "Conversion Rate", value: "1.24%", change: 0.6, icon: <BarChart3 className="h-4 w-4" /> }
    ],
    summary: "Email campaigns are reaching more subscribers with a 28.4% increase in volume. Engagement metrics are improving with open rates up 3.2% and click rates up 1.7%.",
    topPerformer: "New Product Announcement Newsletter",
    recommendation: "Implement A/B testing on subject lines to further improve open rates."
  },
  "forms": {
    metrics: [
      { title: "Total Submissions", value: "32,450", change: 18.3, icon: <TrendingUp className="h-4 w-4" /> },
      { title: "Completion Rate", value: "68.7%", change: 4.5, icon: <BarChart3 className="h-4 w-4" /> },
      { title: "Avg. Completion Time", value: "2m 15s", change: -12.4, icon: <TrendingUp className="h-4 w-4" />, invertedChange: true },
      { title: "Conversion Rate", value: "2.87%", change: 1.2, icon: <BarChart3 className="h-4 w-4" /> }
    ],
    summary: "Form performance has improved significantly with 18.3% more submissions and faster completion times. The increased completion rate of 4.5% indicates form optimizations are working well.",
    topPerformer: "Newsletter Signup Form",
    recommendation: "Reduce form fields on the contact form to improve completion rates further."
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
      <div className="space-y-8">
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Zap className="h-5 w-5 mr-2 text-amber-500" />
                Performance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{data.summary}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-emerald-500" />
                    Top Performer
                  </h4>
                  <p className="text-sm">{data.topPerformer}</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h4 className="text-sm font-medium text-slate-700 mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                    Recommendation
                  </h4>
                  <p className="text-sm">{data.recommendation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Channel Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                This overview shows aggregate performance across all your {getCategoryName(activeTab)}.
              </p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Select channel</label>
                  <Select 
                    value={selectedTool[activeTab]} 
                    onValueChange={handleToolChange}
                  >
                    <SelectTrigger className="w-full bg-white border-gray-200 shadow-sm">
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
                </div>
                
                <Button 
                  className="w-full flex items-center justify-center gap-1"
                  onClick={() => handleSubTabChange("details")}
                >
                  View Detailed Analytics
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case "paid-search":
        return "paid search campaigns";
      case "paid-socials":
        return "paid social media campaigns";
      case "organic-social":
        return "organic social media channels";
      case "website":
        return "website activities";
      case "email":
        return "email campaigns";
      case "forms":
        return "forms";
      default:
        return "channels";
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

      <div className="dashboard-tabs mb-8">
        <button
          className={`dashboard-tab ${activeTab === "paid-search" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "paid-search" ? "active" : "inactive"}
          onClick={() => setActiveTab("paid-search")}
        >
          Paid Search
        </button>
        <button
          className={`dashboard-tab ${activeTab === "paid-socials" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "paid-socials" ? "active" : "inactive"}
          onClick={() => setActiveTab("paid-socials")}
        >
          Paid Socials
        </button>
        <button
          className={`dashboard-tab ${activeTab === "organic-social" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "organic-social" ? "active" : "inactive"}
          onClick={() => setActiveTab("organic-social")}
        >
          Organic Social
        </button>
        <button
          className={`dashboard-tab ${activeTab === "website" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "website" ? "active" : "inactive"}
          onClick={() => setActiveTab("website")}
        >
          Website
        </button>
        <button
          className={`dashboard-tab ${activeTab === "email" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "email" ? "active" : "inactive"}
          onClick={() => setActiveTab("email")}
        >
          E-Mail
        </button>
        <button
          className={`dashboard-tab ${activeTab === "forms" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "forms" ? "active" : "inactive"}
          onClick={() => setActiveTab("forms")}
        >
          Forms
        </button>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="dashboard-tabs w-full sm:w-auto">
          <button
            className={`dashboard-tab ${activeSubTab[activeTab] === "overview" ? "data-[state=active]" : "data-[state=inactive]"}`}
            data-state={activeSubTab[activeTab] === "overview" ? "active" : "inactive"}
            onClick={() => handleSubTabChange("overview")}
          >
            Overview
          </button>
          <button
            className={`dashboard-tab ${activeSubTab[activeTab] === "details" ? "data-[state=active]" : "data-[state=inactive]"}`}
            data-state={activeSubTab[activeTab] === "details" ? "active" : "inactive"}
            onClick={() => handleSubTabChange("details")}
          >
            Details
          </button>
        </div>

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
    </div>
  );
};

export default Performance;
