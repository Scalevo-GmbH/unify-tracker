
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";

interface OrganicSocialDashboardProps {
  toolId: string;
}

const OrganicSocialDashboard: React.FC<OrganicSocialDashboardProps> = ({ toolId }) => {
  // In a real implementation, we would fetch this data from the API based on toolId
  const metrics = {
    "instagram": {
      followers: 12540,
      followersGrowth: 325,
      posts: 28,
      likes: 18670,
      comments: 1240,
      shares: 3420,
      impressions: 127850,
      reach: 87620,
      engagementRate: 4.8
    },
    "facebook": {
      followers: 8720,
      followersGrowth: 124,
      posts: 32,
      likes: 6320,
      comments: 840,
      shares: 1520,
      impressions: 78540,
      reach: 56280,
      engagementRate: 2.6
    },
    "linkedin": {
      followers: 5840,
      followersGrowth: 178,
      posts: 18,
      likes: 3240,
      comments: 460,
      shares: 820,
      impressions: 42180,
      reach: 32640,
      engagementRate: 3.2
    },
    "twitter": {
      followers: 7240,
      followersGrowth: 185,
      posts: 48,
      likes: 4860,
      comments: 620,
      shares: 1380,
      impressions: 58260,
      reach: 43520,
      engagementRate: 3.1
    }
  };

  let toolName = "";
  let currentMetrics;
  
  switch (toolId) {
    case "instagram":
      toolName = "Instagram";
      currentMetrics = metrics.instagram;
      break;
    case "facebook":
      toolName = "Facebook";
      currentMetrics = metrics.facebook;
      break;
    case "linkedin":
      toolName = "LinkedIn";
      currentMetrics = metrics.linkedin;
      break;
    case "twitter":
      toolName = "Twitter";
      currentMetrics = metrics.twitter;
      break;
    default:
      toolName = "Instagram";
      currentMetrics = metrics.instagram;
  }
  
  const dateRange: DateRange = "this-month";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{toolName} Dashboard</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Followers" 
          value={currentMetrics.followers.toLocaleString()} 
          change={(currentMetrics.followersGrowth / currentMetrics.followers * 100).toFixed(1)} 
          description="Total followers"
        />
        <MetricCard 
          title="Posts" 
          value={currentMetrics.posts.toString()} 
          change={5.2} 
          description="Posts this month"
        />
        <MetricCard 
          title="Engagement Rate" 
          value={`${currentMetrics.engagementRate}%`} 
          change={1.8} 
          description="Avg. engagement per post"
        />
        <MetricCard 
          title="Reach" 
          value={currentMetrics.reach.toLocaleString()} 
          change={8.4} 
          description="Unique users reached"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Engagement Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart dateRange={dateRange} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MetricCard 
                title="Likes" 
                value={currentMetrics.likes.toLocaleString()} 
                change={7.2} 
                description="Total likes"
              />
              <MetricCard 
                title="Comments" 
                value={currentMetrics.comments.toLocaleString()} 
                change={6.5} 
                description="Total comments"
              />
              <MetricCard 
                title="Shares" 
                value={currentMetrics.shares.toLocaleString()} 
                change={9.8} 
                description="Total shares/retweets"
              />
              <MetricCard 
                title="Impressions" 
                value={currentMetrics.impressions.toLocaleString()} 
                change={6.2} 
                description="Total impressions"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganicSocialDashboard;
