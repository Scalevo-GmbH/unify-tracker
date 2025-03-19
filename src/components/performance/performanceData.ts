
import { BarChart3, Eye, LineChart, MousePointerClick, Share2, TrendingUp, Users } from "lucide-react";
import React from "react";

// Define icon type to properly handle React elements in data
type IconType = React.ReactNode;

export const overviewData = {
  "paid-search": {
    metrics: [
      { title: "Total Impressions", value: "786,245", change: 12.3, icon: React.createElement(Eye, { className: "h-4 w-4" }) },
      { title: "Total Clicks", value: "42,890", change: 8.7, icon: React.createElement(MousePointerClick, { className: "h-4 w-4" }) },
      { title: "Average CTR", value: "5.45%", change: -2.1, icon: React.createElement(TrendingUp, { className: "h-4 w-4" }) },
      { title: "Total Spend", value: "€14,568", change: 15.2, icon: React.createElement(BarChart3, { className: "h-4 w-4" }) }
    ],
    summary: "Your paid search campaigns are performing well with a 12.3% increase in impressions and 8.7% increase in clicks compared to the previous period. Consider optimizing campaigns with lower CTR to improve overall performance.",
    topPerformer: "Google Ads - Summer Sale Campaign",
    recommendation: "Increase budget allocation for high CTR keywords and pause underperforming ad groups to improve ROI."
  },
  "paid-socials": {
    metrics: [
      { title: "Total Reach", value: "1,245,780", change: 24.5, icon: React.createElement(Users, { className: "h-4 w-4" }) },
      { title: "Engagement Rate", value: "3.87%", change: 1.2, icon: React.createElement(Share2, { className: "h-4 w-4" }) },
      { title: "Total Impressions", value: "2,458,900", change: 18.4, icon: React.createElement(Eye, { className: "h-4 w-4" }) },
      { title: "Total Spend", value: "€12,340", change: 9.7, icon: React.createElement(BarChart3, { className: "h-4 w-4" }) }
    ],
    summary: "Your paid social campaigns are showing strong performance with a significant 24.5% increase in reach. Engagement is slightly up by 1.2%, suggesting content is resonating well with audiences.",
    topPerformer: "Meta Ads - Product Launch Video Campaign",
    recommendation: "Test new creative formats on Meta platforms where engagement rates are highest."
  },
  "organic-social": {
    metrics: [
      { title: "Total Followers", value: "124,580", change: 5.8, icon: React.createElement(Users, { className: "h-4 w-4" }) },
      { title: "Total Engagement", value: "45,670", change: 7.2, icon: React.createElement(Share2, { className: "h-4 w-4" }) },
      { title: "Engagement Rate", value: "4.12%", change: 0.5, icon: React.createElement(TrendingUp, { className: "h-4 w-4" }) },
      { title: "Reach Growth", value: "12.8%", change: 3.4, icon: React.createElement(LineChart, { className: "h-4 w-4" }) }
    ],
    summary: "Your organic social channels are growing steadily with a 5.8% increase in followers. Engagement metrics show healthy growth at 7.2%, suggesting your content strategy is effective.",
    topPerformer: "Instagram - User-Generated Content Series",
    recommendation: "Increase posting frequency on Instagram where engagement rates are highest."
  },
  "website": {
    metrics: [
      { title: "Total Visitors", value: "256,890", change: 16.7, icon: React.createElement(Users, { className: "h-4 w-4" }) },
      { title: "Avg. Session Duration", value: "3m 42s", change: 5.3, icon: React.createElement(TrendingUp, { className: "h-4 w-4" }) },
      { title: "Bounce Rate", value: "42.5%", change: -3.8, icon: React.createElement(TrendingUp, { className: "h-4 w-4" }), invertedChange: true },
      { title: "Conversion Rate", value: "3.24%", change: 1.5, icon: React.createElement(BarChart3, { className: "h-4 w-4" }) }
    ],
    summary: "Website performance shows strong improvement with visitor growth of 16.7% and decreased bounce rates. The conversion rate increase of 1.5% indicates visitors are finding what they need.",
    topPerformer: "Product Pages - Especially Mobile Experience",
    recommendation: "Optimize checkout flow to further improve the conversion rate."
  },
  "email": {
    metrics: [
      { title: "Total Sent", value: "145,680", change: 28.4, icon: React.createElement(Eye, { className: "h-4 w-4" }) },
      { title: "Open Rate", value: "22.4%", change: 3.2, icon: React.createElement(TrendingUp, { className: "h-4 w-4" }) },
      { title: "Click Rate", value: "3.85%", change: 1.7, icon: React.createElement(MousePointerClick, { className: "h-4 w-4" }) },
      { title: "Conversion Rate", value: "1.24%", change: 0.6, icon: React.createElement(BarChart3, { className: "h-4 w-4" }) }
    ],
    summary: "Email campaigns are reaching more subscribers with a 28.4% increase in volume. Engagement metrics are improving with open rates up 3.2% and click rates up 1.7%.",
    topPerformer: "New Product Announcement Newsletter",
    recommendation: "Implement A/B testing on subject lines to further improve open rates."
  },
  "forms": {
    metrics: [
      { title: "Total Submissions", value: "32,450", change: 18.3, icon: React.createElement(TrendingUp, { className: "h-4 w-4" }) },
      { title: "Completion Rate", value: "68.7%", change: 4.5, icon: React.createElement(BarChart3, { className: "h-4 w-4" }) },
      { title: "Avg. Completion Time", value: "2m 15s", change: -12.4, icon: React.createElement(TrendingUp, { className: "h-4 w-4" }), invertedChange: true },
      { title: "Conversion Rate", value: "2.87%", change: 1.2, icon: React.createElement(BarChart3, { className: "h-4 w-4" }) }
    ],
    summary: "Form performance has improved significantly with 18.3% more submissions and faster completion times. The increased completion rate of 4.5% indicates form optimizations are working well.",
    topPerformer: "Newsletter Signup Form",
    recommendation: "Reduce form fields on the contact form to improve completion rates further."
  }
};

export const toolsByCategory = {
  "paid-search": [
    { id: "google-ads", name: "Google Ads" },
    { id: "bing-ads", name: "Bing Ads" }
  ],
  "paid-socials": [
    { id: "meta-ads", name: "Meta Ads" },
    { id: "linkedin-ads", name: "LinkedIn Ads" },
    { id: "twitter-ads", name: "Twitter Ads" }
  ],
  "organic-social": [
    { id: "instagram", name: "Instagram" },
    { id: "facebook", name: "Facebook" },
    { id: "linkedin", name: "LinkedIn" },
    { id: "twitter", name: "Twitter" }
  ],
  "website": [
    { id: "google-analytics", name: "Google Analytics" }
  ],
  "email": [
    { id: "mailchimp", name: "Mailchimp" },
    { id: "klaviyo", name: "Klaviyo" },
    { id: "hubspot", name: "HubSpot" }
  ],
  "forms": [
    { id: "typeform", name: "Typeform" },
    { id: "google-forms", name: "Google Forms" }
  ]
};

export const getCategoryName = (category: string) => {
  switch (category) {
    case "paid-search":
      return "paid search campaigns";
    case "paid-socials":
      return "paid social media campaigns";
    case "organic-social":
      return "organic social media channels";
    case "website":
      return "website activities";
    case "email":
      return "email campaigns";
    case "forms":
      return "forms";
    default:
      return "channels";
  }
};
