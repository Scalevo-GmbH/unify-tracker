
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, Plus, FilterX } from "lucide-react";
import CampaignsTable from "@/components/campaigns/CampaignsTable";
import NewCampaignForm from "@/components/campaigns/NewCampaignForm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Campaigns = () => {
  const [activeTab, setActiveTab] = useState("all-campaigns");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "completed">("all");
  const [platformFilters, setPlatformFilters] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const handlePlatformFilterChange = (category: string) => {
    setPlatformFilters(current => {
      if (current.includes(category)) {
        return current.filter(item => item !== category);
      } else {
        return [...current, category];
      }
    });
  };

  const clearFilters = () => {
    setPlatformFilters([]);
    setFiltersOpen(false);
  };

  const hasActiveFilters = platformFilters.length > 0;

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
            <Popover open={filtersOpen} onOpenChange={setFiltersOpen}>
              <PopoverTrigger asChild>
                <Button size="sm" variant={hasActiveFilters ? "default" : "outline"} className="flex items-center gap-1">
                  {hasActiveFilters ? <FilterX className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                  {hasActiveFilters ? "Filters Applied" : "More Filters"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-4" align="end">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Filter by Platform Type</h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="filter-search" 
                        checked={platformFilters.includes('search')}
                        onCheckedChange={() => handlePlatformFilterChange('search')}
                      />
                      <Label htmlFor="filter-search" className="text-sm font-normal">Search (Google, Bing)</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="filter-social" 
                        checked={platformFilters.includes('social')}
                        onCheckedChange={() => handlePlatformFilterChange('social')}
                      />
                      <Label htmlFor="filter-social" className="text-sm font-normal">Social Media</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="filter-email" 
                        checked={platformFilters.includes('email')}
                        onCheckedChange={() => handlePlatformFilterChange('email')}
                      />
                      <Label htmlFor="filter-email" className="text-sm font-normal">Email Marketing</Label>
                    </div>
                  </div>
                  
                  <div className="pt-2 flex justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </Button>
                    <Button 
                      size="sm" 
                      className="text-xs"
                      onClick={() => setFiltersOpen(false)}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
