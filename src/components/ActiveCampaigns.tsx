
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Facebook, Instagram, Twitter, Search, LineChart, Mail } from "lucide-react";
import FadeInSection from "./animations/FadeInSection";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock campaign data - in a real app, this would come from an API
const activeCampaigns = [
  {
    id: 1,
    name: "Summer Collection Promotion",
    platform: "Facebook",
    type: "Paid Social",
    status: "Active",
    budget: "$500",
    spent: "$320.45",
    remaining: "$179.55",
    endDate: "2025-07-15",
    performance: "Good",
    icon: <Facebook className="h-4 w-4 text-blue-600" />
  },
  {
    id: 2,
    name: "Product Launch Campaign",
    platform: "Google Ads",
    type: "Paid Search",
    status: "Active",
    budget: "$1,200",
    spent: "$487.32",
    remaining: "$712.68",
    endDate: "2025-08-10",
    performance: "Excellent",
    icon: <Search className="h-4 w-4 text-amber-600" />
  },
  {
    id: 3,
    name: "Brand Awareness Push",
    platform: "Instagram",
    type: "Paid Social",
    status: "Active",
    budget: "$800",
    spent: "$542.18",
    remaining: "$257.82",
    endDate: "2025-06-30",
    performance: "Good",
    icon: <Instagram className="h-4 w-4 text-pink-600" />
  },
  {
    id: 4,
    name: "Seasonal Discount Email",
    platform: "Mailchimp",
    type: "Email Marketing",
    status: "Active",
    budget: "$150",
    spent: "$52.80",
    remaining: "$97.20",
    endDate: "2025-05-25",
    performance: "Average",
    icon: <Mail className="h-4 w-4 text-yellow-600" />
  },
  {
    id: 5,
    name: "Keyword Targeting Campaign",
    platform: "Google Ads",
    type: "Paid Search",
    status: "Active",
    budget: "$950",
    spent: "$423.67",
    remaining: "$526.33",
    endDate: "2025-07-31",
    performance: "Good",
    icon: <LineChart className="h-4 w-4 text-green-600" />
  },
  {
    id: 6,
    name: "Twitter Engagement Drive",
    platform: "Twitter",
    type: "Paid Social",
    status: "Active",
    budget: "$350",
    spent: "$124.35",
    remaining: "$225.65",
    endDate: "2025-06-15",
    performance: "Average",
    icon: <Twitter className="h-4 w-4 text-blue-400" />
  }
];

const getPerformanceBadge = (performance: string) => {
  switch (performance) {
    case "Excellent":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">Excellent</Badge>;
    case "Good":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">Good</Badge>;
    case "Average":
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200">Average</Badge>;
    case "Poor":
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200">Poor</Badge>;
    default:
      return <Badge>{performance}</Badge>;
  }
};

export const ActiveCampaigns: React.FC = () => {
  return (
    <FadeInSection>
      <Card>
        <CardHeader>
          <CardTitle>Active Campaigns</CardTitle>
          <CardDescription>
            Currently running campaigns across all connected platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full" type="always">
            <div className="min-w-[900px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Spent</TableHead>
                    <TableHead>Remaining</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Performance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                            {campaign.icon}
                          </div>
                          <span className="line-clamp-1">{campaign.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{campaign.platform}</TableCell>
                      <TableCell>{campaign.type}</TableCell>
                      <TableCell>{campaign.budget}</TableCell>
                      <TableCell>{campaign.spent}</TableCell>
                      <TableCell>{campaign.remaining}</TableCell>
                      <TableCell>{new Date(campaign.endDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div>{getPerformanceBadge(campaign.performance)}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Based on ROI and engagement metrics</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </FadeInSection>
  );
};

export default ActiveCampaigns;
