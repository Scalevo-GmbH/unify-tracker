
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Search, LineChart, Mail, MoreHorizontal, Edit, Trash2, Copy, PauseCircle, PlayCircle, Filter, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

// Types
interface Campaign {
  id: number;
  name: string;
  platform: string;
  type: string;
  status: "Active" | "Completed" | "Paused" | "Scheduled";
  budget: string;
  spent: string;
  remaining: string;
  startDate: string;
  endDate: string;
  performance: "Excellent" | "Good" | "Average" | "Poor";
  icon: React.ReactNode;
}

// Platform categories
const platformCategories = {
  search: ["Google Ads", "Bing Ads"],
  social: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
  email: ["Mailchimp", "Klaviyo", "HubSpot"]
};

// Sample campaigns data
const campaignsData: Campaign[] = [
  {
    id: 1,
    name: "Summer Collection Promotion",
    platform: "Facebook",
    type: "Paid Social",
    status: "Active",
    budget: "$500",
    spent: "$320.45",
    remaining: "$179.55",
    startDate: "2025-06-01",
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
    startDate: "2025-07-01",
    endDate: "2025-08-10",
    performance: "Excellent",
    icon: <Search className="h-4 w-4 text-amber-600" />
  },
  {
    id: 3,
    name: "Brand Awareness Push",
    platform: "Instagram",
    type: "Paid Social",
    status: "Completed",
    budget: "$800",
    spent: "$800.00",
    remaining: "$0.00",
    startDate: "2025-05-15",
    endDate: "2025-06-30",
    performance: "Good",
    icon: <Instagram className="h-4 w-4 text-pink-600" />
  },
  {
    id: 4,
    name: "Seasonal Discount Email",
    platform: "Mailchimp",
    type: "Email Marketing",
    status: "Completed",
    budget: "$150",
    spent: "$150.00",
    remaining: "$0.00",
    startDate: "2025-05-01",
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
    startDate: "2025-06-15",
    endDate: "2025-07-31",
    performance: "Good",
    icon: <LineChart className="h-4 w-4 text-green-600" />
  },
  {
    id: 6,
    name: "Twitter Engagement Drive",
    platform: "Twitter",
    type: "Paid Social",
    status: "Paused",
    budget: "$350",
    spent: "$124.35",
    remaining: "$225.65",
    startDate: "2025-05-15",
    endDate: "2025-06-15",
    performance: "Average",
    icon: <Twitter className="h-4 w-4 text-blue-400" />
  },
  {
    id: 7,
    name: "Winter Holiday Promotion",
    platform: "Facebook",
    type: "Paid Social",
    status: "Scheduled",
    budget: "$750",
    spent: "$0.00",
    remaining: "$750.00",
    startDate: "2025-11-01",
    endDate: "2025-12-25",
    performance: "Good",
    icon: <Facebook className="h-4 w-4 text-blue-600" />
  }
];

// Helper function to get status badge
const getStatusBadge = (status: Campaign["status"]) => {
  switch (status) {
    case "Active":
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">Active</Badge>;
    case "Completed":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">Completed</Badge>;
    case "Paused":
      return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">Paused</Badge>;
    case "Scheduled":
      return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200">Scheduled</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

// Helper function to get performance badge
const getPerformanceBadge = (performance: Campaign["performance"]) => {
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

interface CampaignsTableProps {
  filterStatus: "all" | "active" | "completed";
}

const CampaignsTable: React.FC<CampaignsTableProps> = ({ filterStatus }) => {
  const isMobile = useIsMobile();
  const [platformFilters, setPlatformFilters] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Filter campaigns based on the selected status and platform categories
  const filteredCampaigns = campaignsData.filter(campaign => {
    // First filter by status
    const statusMatch = 
      filterStatus === "all" ? true :
      filterStatus === "active" ? (campaign.status === "Active" || campaign.status === "Paused" || campaign.status === "Scheduled") :
      filterStatus === "completed" ? campaign.status === "Completed" : true;
    
    // Then filter by platform category if any are selected
    if (platformFilters.length === 0) {
      return statusMatch;
    }
    
    // Check if campaign platform is in any of the selected categories
    const platformMatch = platformFilters.some(category => {
      const platforms = platformCategories[category as keyof typeof platformCategories];
      return platforms.includes(campaign.platform);
    });
    
    return statusMatch && platformMatch;
  });

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
  
  return (
    <Card className="overflow-hidden">
      {platformFilters.length > 0 && (
        <div className="bg-slate-50 p-3 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Filtered by:</span>
            {platformFilters.map(filter => (
              <Badge key={filter} variant="outline" className="flex items-center gap-1 px-2 py-1">
                {filter === 'search' ? 'Search' : filter === 'social' ? 'Social Media' : 'Email'}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => handlePlatformFilterChange(filter)}
                />
              </Badge>
            ))}
          </div>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear filters
          </Button>
        </div>
      )}
      <CardContent className={isMobile ? "px-0 pb-0" : "p-0"}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Spent</TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Performance</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCampaigns.map((campaign) => (
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
                <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                <TableCell>{campaign.budget}</TableCell>
                <TableCell>{campaign.spent}</TableCell>
                <TableCell>
                  <div className="text-xs">
                    <div>Start: {new Date(campaign.startDate).toLocaleDateString()}</div>
                    <div>End: {new Date(campaign.endDate).toLocaleDateString()}</div>
                  </div>
                </TableCell>
                <TableCell>{getPerformanceBadge(campaign.performance)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      {campaign.status === "Active" && (
                        <DropdownMenuItem className="cursor-pointer">
                          <PauseCircle className="mr-2 h-4 w-4" />
                          Pause
                        </DropdownMenuItem>
                      )}
                      {campaign.status === "Paused" && (
                        <DropdownMenuItem className="cursor-pointer">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Resume
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="border-t border-border px-6 py-3 flex justify-between items-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardFooter>
    </Card>
  );
};

export default CampaignsTable;
