import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, Plus, FilterX, Table, ListPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CampaignsTable from "@/components/campaigns/CampaignsTable";
import NewCampaignForm from "@/components/campaigns/NewCampaignForm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useTranslation from "@/hooks/use-translation";

const Campaigns = () => {
  const [activeTab, setActiveTab] = useState("all-campaigns");
  const [filterStatus, setFilterStatus] = useState<"all" | "active" | "completed">("all");
  const [platformFilters, setPlatformFilters] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { t } = useTranslation();

  const handlePlatformFilterChange = (category: string) => {
    setPlatformFilters(current => {
      if (current.includes(category)) {
        return current.filter(item => item !== category);
      } else {
        return [...current, category];
      }
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const clearFilters = () => {
    setPlatformFilters([]);
    setFiltersOpen(false);
  };

  const hasActiveFilters = platformFilters.length > 0;

  return (
    <div>
      <div className="mb-6 p-6">
        <h1 className="page-title">{t('campaigns')}</h1>
        <p className="page-description">{t('manageCampaigns')}</p>
      </div>

      <div className="px-6">
        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <div className="dashboard-tabs">
            <button 
              className={`dashboard-tab ${activeTab === "all-campaigns" ? "data-[state=active]" : "data-[state=inactive]"}`}
              data-state={activeTab === "all-campaigns" ? "active" : "inactive"}
              onClick={() => setActiveTab("all-campaigns")}
            >
              <Table className="h-4 w-4 mr-2" />
              {t('allCampaigns')}
            </button>
            <button 
              className={`dashboard-tab ${activeTab === "new-campaign" ? "data-[state=active]" : "data-[state=inactive]"}`}
              data-state={activeTab === "new-campaign" ? "active" : "inactive"}
              onClick={() => setActiveTab("new-campaign")}
            >
              <ListPlus className="h-4 w-4 mr-2" />
              {t('newCampaign')}
            </button>
          </div>

          <TabsContent value="all-campaigns" className="pt-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  className="h-9"
                >
                  {t('allCampaigns')}
                </Button>
                <Button
                  variant={filterStatus === "active" ? "default" : "outline"}
                  onClick={() => setFilterStatus("active")}
                  className="h-9"
                >
                  {t('active')}
                </Button>
                <Button
                  variant={filterStatus === "completed" ? "default" : "outline"}
                  onClick={() => setFilterStatus("completed")}
                  className="h-9"
                >
                  {t('completed')}
                </Button>
              </div>
              <Popover open={filtersOpen} onOpenChange={setFiltersOpen}>
                <PopoverTrigger asChild>
                  <Button size="sm" variant={hasActiveFilters ? "default" : "outline"} className="flex items-center gap-1">
                    {hasActiveFilters ? <FilterX className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
                    {hasActiveFilters ? t('filtersApplied') : t('moreFilters')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-4" align="end">
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm">{t('filterByPlatformType')}</h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="filter-search" 
                          checked={platformFilters.includes('search')}
                          onCheckedChange={() => handlePlatformFilterChange('search')}
                        />
                        <Label htmlFor="filter-search" className="text-sm font-normal">{t('search')}</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="filter-social" 
                          checked={platformFilters.includes('social')}
                          onCheckedChange={() => handlePlatformFilterChange('social')}
                        />
                        <Label htmlFor="filter-social" className="text-sm font-normal">{t('socialMedia')}</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="filter-email" 
                          checked={platformFilters.includes('email')}
                          onCheckedChange={() => handlePlatformFilterChange('email')}
                        />
                        <Label htmlFor="filter-email" className="text-sm font-normal">{t('emailMarketing')}</Label>
                      </div>
                    </div>
                    
                    <div className="pt-2 flex justify-between">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs"
                        onClick={clearFilters}
                      >
                        {t('clearFilters')}
                      </Button>
                      <Button 
                        size="sm" 
                        className="text-xs"
                        onClick={() => setFiltersOpen(false)}
                      >
                        {t('apply')}
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <CampaignsTable filterStatus={filterStatus} platformFilters={platformFilters} />
            </div>
          </TabsContent>

          <TabsContent value="new-campaign" className="pt-6">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <NewCampaignForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Campaigns;
