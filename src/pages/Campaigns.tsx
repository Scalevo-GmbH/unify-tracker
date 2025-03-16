
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, Plus } from "lucide-react";
import CampaignsTable from "@/components/campaigns/CampaignsTable";
import NewCampaignForm from "@/components/campaigns/NewCampaignForm";

const Campaigns = () => {
  const [activeTab, setActiveTab] = useState("all-campaigns");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "completed">("all");

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Campaigns</h1>
        <p className="text-muted-foreground">Manage all your marketing campaigns across different platforms</p>
      </div>

      <div className="dashboard-tabs mb-8">
        <button
          className={`dashboard-tab ${activeTab === "all-campaigns" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "all-campaigns" ? "active" : "inactive"}
          onClick={() => setActiveTab("all-campaigns")}
        >
          All Campaigns
        </button>
        <button
          className={`dashboard-tab ${activeTab === "new-campaign" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "new-campaign" ? "active" : "inactive"}
          onClick={() => setActiveTab("new-campaign")}
        >
          New Campaign
        </button>
      </div>

      {activeTab === "all-campaigns" && (
        <>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <Button
                variant={filterStatus === "all" ? "default" : "outline"}
                onClick={() => setFilterStatus("all")}
                className="h-9"
              >
                All
              </Button>
              <Button
                variant={filterStatus === "active" ? "default" : "outline"}
                onClick={() => setFilterStatus("active")}
                className="h-9"
              >
                Active
              </Button>
              <Button
                variant={filterStatus === "completed" ? "default" : "outline"}
                onClick={() => setFilterStatus("completed")}
                className="h-9"
              >
                Completed
              </Button>
            </div>
            <Button size="sm" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
          <CampaignsTable filterStatus={filterStatus} />
        </>
      )}

      {activeTab === "new-campaign" && (
        <Card>
          <CardContent className="pt-6">
            <NewCampaignForm />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Campaigns;
