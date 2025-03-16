
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const PlacementsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ad Placements</CardTitle>
        <CardDescription>Where your ads are being displayed</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Placement</TableHead>
              <TableHead>Impressions</TableHead>
              <TableHead>Clicks</TableHead>
              <TableHead>CTR</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead>Conversions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Facebook Feed</TableCell>
              <TableCell>24,520</TableCell>
              <TableCell>685</TableCell>
              <TableCell>2.79%</TableCell>
              <TableCell>$175.65</TableCell>
              <TableCell>42</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Instagram Feed</TableCell>
              <TableCell>15,780</TableCell>
              <TableCell>432</TableCell>
              <TableCell>2.74%</TableCell>
              <TableCell>$112.32</TableCell>
              <TableCell>28</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Facebook Right Column</TableCell>
              <TableCell>3,250</TableCell>
              <TableCell>56</TableCell>
              <TableCell>1.72%</TableCell>
              <TableCell>$16.24</TableCell>
              <TableCell>3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Instagram Stories</TableCell>
              <TableCell>2,250</TableCell>
              <TableCell>77</TableCell>
              <TableCell>3.42%</TableCell>
              <TableCell>$16.24</TableCell>
              <TableCell>5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
