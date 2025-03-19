
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, HelpCircle, LifeBuoy, Mail, MessageSquare, Search } from "lucide-react";
import useTranslation from "@/hooks/use-translation";

const HelpSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState("faq");
  const { t } = useTranslation();

  const renderTabContent = () => {
    switch (activeTab) {
      case "faq":
        return <FAQSection />;
      case "guides":
        return <GuidesSection />;
      case "tickets":
        return <SupportTicketsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <FAQSection />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t('helpSupport')}</h1>
        <p className="text-muted-foreground">{t('helpSupportDesc')}</p>
      </div>

      <div className="dashboard-tabs mb-8">
        <button
          className={`dashboard-tab ${activeTab === "faq" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "faq" ? "active" : "inactive"}
          onClick={() => setActiveTab("faq")}
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          {t('faqs')}
        </button>
        <button
          className={`dashboard-tab ${activeTab === "guides" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "guides" ? "active" : "inactive"}
          onClick={() => setActiveTab("guides")}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          {t('userGuides')}
        </button>
        <button
          className={`dashboard-tab ${activeTab === "tickets" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "tickets" ? "active" : "inactive"}
          onClick={() => setActiveTab("tickets")}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          {t('supportTickets')}
        </button>
        <button
          className={`dashboard-tab ${activeTab === "contact" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "contact" ? "active" : "inactive"}
          onClick={() => setActiveTab("contact")}
        >
          <Mail className="mr-2 h-4 w-4" />
          {t('contactUs')}
        </button>
      </div>

      {renderTabContent()}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('frequentlyAskedQuestions')}</CardTitle>
          <CardDescription>{t('faqDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pl-10" placeholder={t('searchAnswers')} />
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('connectMetaAdsQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('connectMetaAdsAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('upgradeSubscriptionQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('upgradeSubscriptionAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('createCampaignQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('createCampaignAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t('manageMultipleAccountsQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('manageMultipleAccountsAnswer')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>{t('dataUpdateFrequencyQuestion')}</AccordionTrigger>
              <AccordionContent>
                {t('dataUpdateFrequencyAnswer')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

const GuidesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const guides = [
    {
      title: t('gettingStartedGuide'),
      description: t('gettingStartedDesc'),
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: t('firstCampaignGuide'),
      description: t('firstCampaignDesc'),
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
    },
    {
      title: t('metricsGuide'),
      description: t('metricsDesc'),
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: t('optimizationGuide'),
      description: t('optimizationDesc'),
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('guidesTitle')}</CardTitle>
          <CardDescription>{t('guidesDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="flex items-start p-6 gap-4">
                  <div className="mt-1">{guide.icon}</div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{guide.title}</h3>
                    <p className="text-muted-foreground text-sm">{guide.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SupportTicketsSection: React.FC = () => {
  const { t } = useTranslation();
  
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
          <CardTitle>{t('ticketsTitle')}</CardTitle>
          <CardDescription>{t('ticketsDesc')}</CardDescription>
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
                    <p className="text-sm text-muted-foreground">ID: {ticket.id} • Last updated: {ticket.lastUpdate}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.status === "Open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {ticket.status === "Open" ? t('openStatus') : t('closedStatus')}
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

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('contactTitle')}</CardTitle>
          <CardDescription>{t('contactDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">{t('nameLabel')}</label>
                <Input id="name" placeholder={t('nameLabel')} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">{t('emailLabel')}</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">{t('subjectLabel')}</label>
              <Input id="subject" placeholder={t('subjectLabel')} />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">{t('messageLabel')}</label>
              <Textarea 
                id="message" 
                placeholder={t('messageLabel')} 
                rows={5} 
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">{t('sendMessage')}</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('otherWaysTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">{t('emailContact')}</h3>
              <p className="text-muted-foreground">support@scalevo.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">{t('liveChatContact')}</h3>
              <p className="text-muted-foreground">{t('liveChatHours')}</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <LifeBuoy className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">{t('phoneContact')}</h3>
              <p className="text-muted-foreground">{t('phoneNumber')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpSupport;
