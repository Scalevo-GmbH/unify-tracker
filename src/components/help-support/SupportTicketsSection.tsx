
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

const SupportTicketsSection: React.FC = () => {
  const { t } = useTranslation();

  const tickets = [
    {
      id: "TCK-2023-06-12",
      subject: "Issue with Google Ads Integration",
      status: t('statusOpen'),
      lastUpdate: "2 hours ago",
    },
    {
      id: "TCK-2023-06-10",
      subject: "Campaign Report Export Problem",
      status: t('statusClosed'),
      lastUpdate: "2 days ago",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('ticketsTitle')}</CardTitle>
          <CardDescription>{t('ticketsDescription')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-medium">{t('yourTickets')}</h3>
            <Button>{t('createNewTicket')}</Button>
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
                    <p className="text-sm text-muted-foreground">ID: {ticket.id} • {t('lastUpdated')}: {ticket.lastUpdate}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.status === t('statusOpen') ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {ticket.status}
                    </span>
                    <Button variant="outline" size="sm">{t('viewTicket')}</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">{t('noTicketsYet')}</p>
              <Button>{t('createFirstTicket')}</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportTicketsSection;
