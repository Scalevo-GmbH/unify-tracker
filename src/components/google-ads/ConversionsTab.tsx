
import React from "react";
import { Target } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Ad {
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

interface ConversionsTabProps {
  currentAd: Ad;
}

export const ConversionsTab: React.FC<ConversionsTabProps> = ({
  currentAd,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Tracking</CardTitle>
        <CardDescription>Performance of your conversion objectives</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard
              title="Conversions"
              value={currentAd.conversions.toString()}
              change={8.3}
              icon={<Target className="h-4 w-4" />}
              description="Total number of completed conversion events"
            />
            <MetricCard
              title="Cost Per Conversion"
              value={`$${(Number(currentAd.spent.replace('$', '')) / currentAd.conversions).toFixed(2)}`}
              change={-2.5}
              description="Average cost for each conversion"
            />
            <MetricCard
              title="Revenue"
              value={currentAd.revenue}
              change={12.4}
              description="Total revenue attributed to this ad"
            />
          </div>
          
          <div className="responsive-table-container">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Conversion Type</TableHead>
                  <TableHead>Conversions</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Conv. Rate</TableHead>
                  <TableHead>Cost Per Conv.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Purchase</TableCell>
                  <TableCell>53</TableCell>
                  <TableCell>$2,650</TableCell>
                  <TableCell>2.44%</TableCell>
                  <TableCell>$4.12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Add to Cart</TableCell>
                  <TableCell>108</TableCell>
                  <TableCell>$540</TableCell>
                  <TableCell>4.98%</TableCell>
                  <TableCell>$2.01</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Newsletter Signup</TableCell>
                  <TableCell>64</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>2.95%</TableCell>
                  <TableCell>$3.38</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
