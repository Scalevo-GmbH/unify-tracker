
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SupportTicketsSection: React.FC = () => {
  const tickets = [
    {
      id: "TCK-2023-06-12",
      subject: "Issue with Google Ads Integration",
      status: "Open",
      lastUpdate: "2 hours ago",
    },
    {
      id: "TCK-2023-06-10",
      subject: "Campaign Report Export Problem",
      status: "Closed",
      lastUpdate: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
          <CardDescription>View and manage your support requests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-medium">Your Tickets</h3>
            <Button>Create New Ticket</Button>
          </div>
          
          {tickets.length > 0 ? (
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <p className="font-medium">{ticket.subject}</p>
                    <p className="text-sm text-muted-foreground">ID: {ticket.id} • Last updated: {ticket.lastUpdate}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.status === "Open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {ticket.status}
                    </span>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">You don't have any support tickets yet</p>
              <Button>Create Your First Ticket</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportTicketsSection;
