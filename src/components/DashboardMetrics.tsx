
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
        />
      </FadeInSection>
      
      <FadeInSection delay={200}>
        <MetricCard
          title="Impressions"
          value="223,780"
          change={24.3}
          icon={<Eye className="h-5 w-5" />}
        />
      </FadeInSection>
      
      <FadeInSection delay={300}>
        <MetricCard
          title="Conversion Rate"
          value="3.8%"
          change={0.5}
          icon={<Percent className="h-5 w-5" />}
        />
      </FadeInSection>
      
      <FadeInSection delay={400}>
        <MetricCard
          title="Engagement Rate"
          value="5.2%"
          change={1.7}
          icon={<ArrowUpRight className="h-5 w-5" />}
        />
      </FadeInSection>
    </div>
  );
};

export default DashboardMetrics;
