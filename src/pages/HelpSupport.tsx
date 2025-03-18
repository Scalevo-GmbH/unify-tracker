
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

const HelpSupport: React.FC = () => {
  const [activeTab, setActiveTab] = useState("faq");

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
        <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
        <p className="text-muted-foreground">Find answers to your questions or get in touch with our support team</p>
      </div>

      <div className="dashboard-tabs mb-8">
        <button
          className={`dashboard-tab ${activeTab === "faq" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "faq" ? "active" : "inactive"}
          onClick={() => setActiveTab("faq")}
        >
          <HelpCircle className="mr-2 h-4 w-4" />
          FAQs
        </button>
        <button
          className={`dashboard-tab ${activeTab === "guides" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "guides" ? "active" : "inactive"}
          onClick={() => setActiveTab("guides")}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          User Guides
        </button>
        <button
          className={`dashboard-tab ${activeTab === "tickets" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "tickets" ? "active" : "inactive"}
          onClick={() => setActiveTab("tickets")}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Support Tickets
        </button>
        <button
          className={`dashboard-tab ${activeTab === "contact" ? "data-[state=active]" : "data-[state=inactive]"}`}
          data-state={activeTab === "contact" ? "active" : "inactive"}
          onClick={() => setActiveTab("contact")}
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact Us
        </button>
      </div>

      {renderTabContent()}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions about our platform and services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search for answers..." />
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I connect my Meta Ads account?</AccordionTrigger>
              <AccordionContent>
                To connect your Meta Ads account, navigate to the Integrations page, find the Meta Ads card, and click on "Connect". You'll be prompted to log in to your Facebook account and grant necessary permissions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I upgrade my subscription plan?</AccordionTrigger>
              <AccordionContent>
                You can upgrade your subscription plan by going to the Account page, selecting the "Subscriptions" tab, and choosing a new plan that meets your needs. Your billing will be prorated for the remainder of your current billing cycle.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I create a new campaign?</AccordionTrigger>
              <AccordionContent>
                To create a new campaign, go to the Campaigns page and click on the "Create Campaign" button. Follow the step-by-step wizard to set up your campaign objectives, target audience, budget, and creative assets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I manage multiple ad accounts?</AccordionTrigger>
              <AccordionContent>
                Yes, you can manage multiple ad accounts from different platforms. Connect each account through the Integrations page, and you'll be able to switch between them when viewing performance data or creating campaigns.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How often is the performance data updated?</AccordionTrigger>
              <AccordionContent>
                Performance data is typically updated every 6 hours. However, some metrics from certain platforms may have different refresh rates. You can see the last update time on each dashboard widget.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

const GuidesSection: React.FC = () => {
  const guides = [
    {
      title: "Getting Started with Scalevo",
      description: "Learn the basics of navigating and using the Scalevo platform",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
    },
    {
      title: "Setting Up Your First Campaign",
      description: "A step-by-step guide to creating and launching your first ad campaign",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
    },
    {
      title: "Understanding Performance Metrics",
      description: "Learn how to interpret and act on campaign performance data",
      icon: <HelpCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Optimizing Ad Campaigns",
      description: "Advanced techniques to improve your campaign performance",
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Guides</CardTitle>
          <CardDescription>Detailed guides to help you get the most out of our platform</CardDescription>
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

const ContactSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message" 
                placeholder="Describe your issue or question in detail" 
                rows={5} 
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other Ways to Reach Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground">support@scalevo.com</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-muted-foreground">Available Mon-Fri, 9am-6pm UTC</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <LifeBuoy className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Phone Support</h3>
              <p className="text-muted-foreground">+1 (800) 123-4567</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpSupport;
