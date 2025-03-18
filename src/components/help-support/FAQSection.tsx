
import React from "react";
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
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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

export default FAQSection;
