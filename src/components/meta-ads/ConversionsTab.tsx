
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

interface ConversionsTabProps {
  currentAd: Ad;
}

export const ConversionsTab: React.FC<ConversionsTabProps> = ({ currentAd }) => {
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
              change={10.5}
              icon={<Target className="h-4 w-4" />}
              description="Total number of completed conversion events"
            />
            <MetricCard
              title="Cost Per Conversion"
              value={`$${(Number(currentAd.spent.replace('$', '')) / currentAd.conversions).toFixed(2)}`}
              change={-3.2}
              description="Average cost for each conversion"
            />
            <MetricCard
              title="Revenue"
              value={currentAd.revenue}
              change={15.8}
              description="Total revenue attributed to this ad"
            />
          </div>
          
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
                <TableCell>58</TableCell>
                <TableCell>$2,842</TableCell>
                <TableCell>4.64%</TableCell>
                <TableCell>$5.52</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Add to Cart</TableCell>
                <TableCell>125</TableCell>
                <TableCell>$698</TableCell>
                <TableCell>10.0%</TableCell>
                <TableCell>$2.56</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lead Form</TableCell>
                <TableCell>43</TableCell>
                <TableCell>-</TableCell>
                <TableCell>3.44%</TableCell>
                <TableCell>$7.45</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
