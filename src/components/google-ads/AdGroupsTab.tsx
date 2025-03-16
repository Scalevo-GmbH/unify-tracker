
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

export const AdGroupsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ad Groups</CardTitle>
        <CardDescription>Performance metrics by ad group</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ad Group</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Impressions</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>CTR</TableHead>
                <TableHead>CPC</TableHead>
                <TableHead>Cost</TableHead>
                <TableHead>Conversions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Running Shoes</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </TableCell>
                <TableCell>24,520</TableCell>
                <TableCell>1,285</TableCell>
                <TableCell>5.24%</TableCell>
                <TableCell>$0.18</TableCell>
                <TableCell>$231.30</TableCell>
                <TableCell>42</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Athletic Wear</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </TableCell>
                <TableCell>15,780</TableCell>
                <TableCell>645</TableCell>
                <TableCell>4.09%</TableCell>
                <TableCell>$0.22</TableCell>
                <TableCell>$141.90</TableCell>
                <TableCell>28</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Training Gear</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                    Paused
                  </span>
                </TableCell>
                <TableCell>8,250</TableCell>
                <TableCell>156</TableCell>
                <TableCell>1.89%</TableCell>
                <TableCell>$0.25</TableCell>
                <TableCell>$39.00</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Accessories</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Active
                  </span>
                </TableCell>
                <TableCell>4,250</TableCell>
                <TableCell>84</TableCell>
                <TableCell>1.98%</TableCell>
                <TableCell>$0.24</TableCell>
                <TableCell>$20.16</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
