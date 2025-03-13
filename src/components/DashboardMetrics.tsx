
import React from "react";
import { DollarSign, Users, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";
import { MetricCard } from "./MetricCard";
import FadeInSection from "./animations/FadeInSection";

export const DashboardMetrics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <FadeInSection delay={100}>
        <MetricCard
          title="Total Revenue"
          value="$24,780"
          change={12.5}
          icon={<DollarSign className="h-5 w-5" />}
        />
      </FadeInSection>
      
      <FadeInSection delay={200}>
        <MetricCard
          title="Conversion Rate"
          value="3.2%"
          change={-0.8}
          icon={<ArrowUpRight className="h-5 w-5" />}
        />
      </FadeInSection>
      
      <FadeInSection delay={300}>
        <MetricCard
          title="New Customers"
          value="1,482"
          change={27.4}
          icon={<Users className="h-5 w-5" />}
        />
      </FadeInSection>
      
      <FadeInSection delay={400}>
        <MetricCard
          title="Avg. Order Value"
          value="$68.92"
          change={4.3}
          icon={<BarChart3 className="h-5 w-5" />}
        />
      </FadeInSection>
    </div>
  );
};

export default DashboardMetrics;
