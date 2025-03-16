
import React from "react";
import { ArrowLeft, ArrowRight, Eye, Users, MousePointerClick, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Ad {
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

interface AdPreviewCardProps {
  currentAd: Ad;
  onPreviousAd: () => void;
  onNextAd: () => void;
}

export const AdPreviewCard: React.FC<AdPreviewCardProps> = ({ 
  currentAd, 
  onPreviousAd, 
  onNextAd 
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>{currentAd.name}</CardTitle>
            <CardDescription className="mt-1.5">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                currentAd.status === "Active" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
              }`}>
                {currentAd.status}
              </span>
              <span className="ml-2 text-muted-foreground">
                Budget: {currentAd.budget} • Spent: {currentAd.spent}
              </span>
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onPreviousAd}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={onNextAd}>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
              <img 
                src={currentAd.adPreview} 
                alt={`Preview of ${currentAd.name}`} 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
              <MetricCard
                title="Impressions"
                value={currentAd.impressions.toLocaleString()}
                change={12.5}
                icon={<Eye className="h-4 w-4" />}
                description="Total number of times your ad was displayed"
                className="h-full flex flex-col"
              />
              <MetricCard
                title="Reach"
                value={currentAd.reach.toLocaleString()}
                change={8.3}
                icon={<Users className="h-4 w-4" />}
                description="Unique users who saw your ad"
                className="h-full flex flex-col"
              />
              <MetricCard
                title="Clicks"
                value={currentAd.clicks.toLocaleString()}
                change={15.2}
                icon={<MousePointerClick className="h-4 w-4" />}
                description="Number of clicks on your ad"
                className="h-full flex flex-col"
              />
              <MetricCard
                title="CTR"
                value={`${currentAd.ctr}%`}
                change={2.1}
                icon={<TrendingUp className="h-4 w-4" />}
                description="Click-through rate (clicks ÷ impressions)"
                className="h-full flex flex-col"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
