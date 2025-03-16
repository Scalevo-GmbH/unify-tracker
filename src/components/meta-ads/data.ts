
export interface MetaAd {
  id: number;
  name: string;
  status: string;
  budget: string;
  spent: string;
  impressions: number;
  reach: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  conversionRate: number;
  revenue: string;
  roas: number;
  frequency: number;
  engagement: number;
  adPreview: string;
}

export const metaAdsData: MetaAd[] = [
  {
    id: 1,
    name: "Summer Collection Promotion",
    status: "Active",
    budget: "$500",
    spent: "$320.45",
    impressions: 45800,
    reach: 28500,
    clicks: 1250,
    ctr: 2.73,
    cpc: 0.26,
    conversions: 78,
    conversionRate: 6.24,
    revenue: "$3,540",
    roas: 11.05,
    frequency: 1.6,
    engagement: 2850,
    adPreview: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Winter Sale Announcement",
    status: "Active",
    budget: "$750",
    spent: "$563.20",
    impressions: 68400,
    reach: 42300,
    clicks: 1860,
    ctr: 2.72,
    cpc: 0.30,
    conversions: 95,
    conversionRate: 5.11,
    revenue: "$4,275",
    roas: 7.59,
    frequency: 1.6,
    engagement: 3950,
    adPreview: "/placeholder.svg",
  },
  {
    id: 3,
    name: "New Product Launch",
    status: "Paused",
    budget: "$1000",
    spent: "$876.30",
    impressions: 92500,
    reach: 61200,
    clicks: 3420,
    ctr: 3.70,
    cpc: 0.26,
    conversions: 156,
    conversionRate: 4.56,
    revenue: "$7,800",
    roas: 8.90,
    frequency: 1.5,
    engagement: 5350,
    adPreview: "/placeholder.svg",
  }
];

export const demographicsData = {
  ageGroups: [
    { name: "18-24", value: 15, fill: "#E5DEFF" },
    { name: "25-34", value: 35, fill: "#D3E4FD" },
    { name: "35-44", value: 25, fill: "#F2FCE2" },
    { name: "45-54", value: 15, fill: "#FEC6A1" },
    { name: "55-64", value: 8, fill: "#FFDEE2" },
    { name: "65+", value: 2, fill: "#FEF7CD" }
  ],
  genderData: [
    { name: "Male", value: 42, fill: "#E5DEFF" },
    { name: "Female", value: 56, fill: "#FFDEE2" },
    { name: "Other", value: 2, fill: "#D3E4FD" }
  ],
  locationData: [
    { name: "United States", value: 58, fill: "#E5DEFF" },
    { name: "Canada", value: 12, fill: "#D3E4FD" },
    { name: "United Kingdom", value: 10, fill: "#F2FCE2" },
    { name: "Australia", value: 7, fill: "#FEC6A1" },
    { name: "Germany", value: 5, fill: "#FFDEE2" },
    { name: "Other", value: 8, fill: "#FEF7CD" }
  ],
  deviceData: [
    { name: "Mobile", value: 68, fill: "#E5DEFF" },
    { name: "Desktop", value: 28, fill: "#D3E4FD" },
    { name: "Tablet", value: 4, fill: "#F2FCE2" }
  ],
  engagementByAge: [
    { age: "18-24", clicks: 320, impressions: 5400, ctr: 5.9 },
    { age: "25-34", clicks: 580, impressions: 11200, ctr: 5.2 },
    { age: "35-44", clicks: 420, impressions: 8800, ctr: 4.8 },
    { age: "45-54", clicks: 280, impressions: 7200, ctr: 3.9 },
    { age: "55-64", clicks: 140, impressions: 4800, ctr: 2.9 },
    { age: "65+", clicks: 60, impressions: 3200, ctr: 1.9 }
  ]
};

export const chartConfig = {
  clicks: {
    label: "Clicks",
    color: "#9b87f5",
  },
  impressions: {
    label: "Impressions",
    color: "#D3E4FD",
  },
  ctr: {
    label: "CTR",
    color: "#F2FCE2",
  },
};
