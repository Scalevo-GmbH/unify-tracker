
export interface Ad {
  id: number;
  name: string;
  status: string;
  budget: string;
  spent: string;
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  conversionRate: number;
  revenue: string;
  roas: number;
  qualityScore: number;
  adPreview: string;
}

export interface SearchAnalyticsData {
  keywordPerformance: Array<{
    keyword: string;
    impressions: number;
    clicks: number;
    ctr: number;
    cpc: number;
    conversions: number;
  }>;
  adGroupDistribution: Array<{
    name: string;
    value: number;
    fill: string;
  }>;
  deviceData: Array<{
    name: string;
    value: number;
    fill: string;
  }>;
  hourlyPerformance: Array<{
    hour: string;
    impressions: number;
    clicks: number;
    ctr: number;
  }>;
}

export interface ChartConfig {
  clicks: {
    label: string;
    color: string;
  };
  impressions: {
    label: string;
    color: string;
  };
  ctr: {
    label: string;
    color: string;
  };
}
