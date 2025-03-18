
import React from "react";
import { Users, Eye, Percent, BarChart3, ArrowUpRight } from "lucide-react";
import { MetricCard } from "./MetricCard";
import FadeInSection from "./animations/FadeInSection";

export const DashboardMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <FadeInSection delay={100}>
        <MetricCard
          title="Total Reach"
          value="138,450"
          change={18.5}
          icon={<Users className="h-5 w-5" />}
          description="The total number of unique users who have seen your content across all platforms and campaigns."
        />
      </FadeInSection>
      
      <FadeInSection delay={200}>
        <MetricCard
          title="Impressions"
          value="223,780"
          change={24.3}
          icon={<Eye className="h-5 w-5" />}
          description="The total number of times your content has been displayed, regardless of whether it was clicked or not."
        />
      </FadeInSection>
      
      <FadeInSection delay={300}>
        <MetricCard
          title="Conversion Rate"
          value="3.8%"
          change={-2.5}
          icon={<Percent className="h-5 w-5" />}
          description="The percentage of visitors who completed a desired goal (e.g., made a purchase or signed up) out of the total number of visitors."
        />
      </FadeInSection>
      
      <FadeInSection delay={400}>
        <MetricCard
          title="Engagement Rate"
          value="5.2%"
          change={1.7}
          icon={<ArrowUpRight className="h-5 w-5" />}
          description="The percentage of people who engaged with your content (likes, comments, shares, clicks) compared to the total reach."
        />
      </FadeInSection>
    </div>
  );
};

export default DashboardMetrics;
