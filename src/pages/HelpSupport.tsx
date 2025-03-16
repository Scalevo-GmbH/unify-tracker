
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircleQuestion, Mail, BookOpenText, Info } from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";
import { useTranslation } from "@/hooks/use-translation";

const HelpSupport: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container py-6 space-y-8">
      <FadeInSection>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">
            Find help resources, documentation and contact our support team
          </p>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="bg-card border mb-6 w-full justify-start rounded-lg p-1 h-auto flex-wrap gap-1">
            <TabsTrigger value="faq" className="rounded data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BookOpenText className="mr-2 h-4 w-4" />
              <span>FAQs</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="rounded data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Info className="mr-2 h-4 w-4" />
              <span>User Guides</span>
            </TabsTrigger>
            <TabsTrigger value="tickets" className="rounded data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MessageCircleQuestion className="mr-2 h-4 w-4" />
              <span>Support Tickets</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="rounded data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact Us</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq" className="space-y-6">
            <FaqSection />
          </TabsContent>
          
          <TabsContent value="guides" className="space-y-6">
            <GuidesSection />
          </TabsContent>
          
          <TabsContent value="tickets" className="space-y-6">
            <TicketsSection />
          </TabsContent>
          
          <TabsContent value="contact" className="space-y-6">
            <ContactSection />
          </TabsContent>
        </Tabs>
      </FadeInSection>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How do I connect my advertising accounts?",
      answer: "Navigate to the Integrations page and select the platform you want to connect. Follow the authentication process to grant the necessary permissions. Once connected, your data will automatically sync to your dashboard."
    },
    {
      question: "How often is campaign data updated?",
      answer: "Campaign data is synced every 6 hours by default. For Premium and Enterprise plans, you can adjust this to hourly updates in your account settings."
    },
    {
      question: "Can I export reports?",
      answer: "Yes, you can export reports in various formats including PDF, CSV, and Excel. Look for the export button in the top-right corner of any report view."
    },
    {
      question: "How do I change my subscription plan?",
      answer: "You can change your subscription plan in the Account settings under Subscription Management. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What permissions are required for integrations?",
      answer: "We request read-only access to your advertising accounts by default. For automation features, additional write permissions may be required. You can review all requested permissions during the connection process."
    },
  ];
  
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Common questions and answers about our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                  <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

const GuidesSection: React.FC = () => {
  const guides = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of using the platform and set up your first dashboard",
      icon: BookOpenText,
      link: "#"
    },
    {
      title: "Campaign Optimization",
      description: "Discover how to optimize your campaigns using our analytics tools",
      icon: BookOpenText,
      link: "#"
    },
    {
      title: "Advanced Reporting",
      description: "Create custom reports and visualizations with our advanced tools",
      icon: BookOpenText,
      link: "#"
    },
    {
      title: "Integration Setup",
      description: "Step-by-step guide to connecting your advertising platforms",
      icon: BookOpenText,
      link: "#"
    },
  ];
  
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {guides.map((guide, index) => (
        <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <guide.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">{guide.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{guide.description}</p>
                <a 
                  href={guide.link} 
                  className="text-primary font-medium text-sm inline-flex items-center hover:underline"
                >
                  Read guide
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const TicketsSection: React.FC = () => {
  const tickets = [
    {
      id: "TKT-2023-06-12",
      subject: "Integration with Facebook Ads",
      status: "Open",
      created: "June 12, 2023",
      lastUpdate: "June 14, 2023",
    },
    {
      id: "TKT-2023-05-28",
      subject: "Dashboard loading issue",
      status: "Closed",
      created: "May 28, 2023",
      lastUpdate: "May 30, 2023",
    }
  ];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Support Tickets</CardTitle>
          <CardDescription>
            View and manage your support requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-3 px-4 font-medium text-sm">ID</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Subject</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Created</th>
                    <th className="text-left py-3 px-4 font-medium text-sm">Last Update</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="border-b last:border-b-0 hover:bg-muted/50 cursor-pointer">
                      <td className="py-3 px-4 text-sm">{ticket.id}</td>
                      <td className="py-3 px-4 text-sm">{ticket.subject}</td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          ticket.status === "Open" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                            : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                        }`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">{ticket.created}</td>
                      <td className="py-3 px-4 text-sm">{ticket.lastUpdate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-center">
              <button className="text-primary font-medium text-sm hover:underline">
                Create New Ticket
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Send us a message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you as soon as possible
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  placeholder="Your name"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  placeholder="What is your message about?"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded font-medium text-sm"
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>
            Alternative ways to get in touch with our team
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">support@scalevo.com</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Business Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 9am - 5pm EST</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Address</h3>
            <p className="text-muted-foreground">
              123 Marketing Avenue<br />
              Suite 456<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpSupport;
