
import { Integration, IntegrationsDataProps } from "./types";
import { TranslationKey } from "@/translations/types";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  LineChart, 
  BarChart3, 
  PieChart,
  Linkedin,
  Youtube,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  Phone,
  FileText,
  Share2
} from "lucide-react";

export const integrations: IntegrationsDataProps = {
  advertising: [
    {
      name: "Facebook Ads",
      icon: <Facebook className="h-6 w-6 text-blue-600" />,
      descriptionKey: "facebookAdsDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "Google Ads",
      icon: <LineChart className="h-6 w-6 text-marketing-red" />,
      descriptionKey: "googleAdsDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "LinkedIn Ads",
      icon: <Linkedin className="h-6 w-6 text-blue-700" />,
      descriptionKey: "linkedinAdsDesc" as TranslationKey,
    },
    {
      name: "Twitter Ads",
      icon: <Twitter className="h-6 w-6 text-blue-400" />,
      descriptionKey: "twitterAdsDesc" as TranslationKey,
    },
  ],
  social: [
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6 text-pink-600" />,
      descriptionKey: "instagramDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "Facebook Pages",
      icon: <Facebook className="h-6 w-6 text-blue-600" />,
      descriptionKey: "facebookPagesDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6 text-blue-400" />,
      descriptionKey: "twitterDesc" as TranslationKey,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6 text-blue-700" />,
      descriptionKey: "linkedinDesc" as TranslationKey,
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-6 w-6 text-red-600" />,
      descriptionKey: "youtubeDesc" as TranslationKey,
    },
  ],
  email: [
    {
      name: "Mailchimp",
      icon: <Mail className="h-6 w-6 text-marketing-yellow" />,
      descriptionKey: "mailchimpDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "Campaign Monitor",
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      descriptionKey: "campaignMonitorDesc" as TranslationKey,
    },
    {
      name: "Constant Contact",
      icon: <Mail className="h-6 w-6 text-marketing-green" />,
      descriptionKey: "constantContactDesc" as TranslationKey,
    },
    {
      name: "SendGrid",
      icon: <Mail className="h-6 w-6 text-indigo-600" />,
      descriptionKey: "sendGridDesc" as TranslationKey,
    },
  ],
  analytics: [
    {
      name: "Google Analytics",
      icon: <BarChart3 className="h-6 w-6 text-marketing-orange" />,
      descriptionKey: "googleAnalyticsDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "Mixpanel",
      icon: <PieChart className="h-6 w-6 text-purple-600" />,
      descriptionKey: "mixpanelDesc" as TranslationKey,
    },
    {
      name: "Hotjar",
      icon: <BarChart3 className="h-6 w-6 text-marketing-red" />,
      descriptionKey: "hotjarDesc" as TranslationKey,
    },
    {
      name: "Segment",
      icon: <Share2 className="h-6 w-6 text-teal-600" />,
      descriptionKey: "segmentDesc" as TranslationKey,
    },
  ],
  ecommerce: [
    {
      name: "Shopify",
      icon: <ShoppingCart className="h-6 w-6 text-green-600" />,
      descriptionKey: "shopifyDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "WooCommerce",
      icon: <ShoppingCart className="h-6 w-6 text-purple-600" />,
      descriptionKey: "wooCommerceDesc" as TranslationKey,
    },
    {
      name: "Stripe",
      icon: <CreditCard className="h-6 w-6 text-indigo-500" />,
      descriptionKey: "stripeDesc" as TranslationKey,
    },
    {
      name: "BigCommerce",
      icon: <ShoppingCart className="h-6 w-6 text-blue-500" />,
      descriptionKey: "bigCommerceDesc" as TranslationKey,
    },
  ],
  other: [
    {
      name: "Intercom",
      icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
      descriptionKey: "intercomDesc" as TranslationKey,
    },
    {
      name: "HubSpot",
      icon: <FileText className="h-6 w-6 text-marketing-orange" />,
      descriptionKey: "hubspotDesc" as TranslationKey,
      popular: true,
    },
    {
      name: "Twilio",
      icon: <Phone className="h-6 w-6 text-red-500" />,
      descriptionKey: "twilioDesc" as TranslationKey,
    },
    {
      name: "Zendesk",
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      descriptionKey: "zendeskDesc" as TranslationKey,
    },
  ],
};

export const getAllIntegrations = (integrations: IntegrationsDataProps): Integration[] => {
  return Object.values(integrations).flat();
};
