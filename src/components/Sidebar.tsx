
import React from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Settings, 
  HelpCircle,
  LogOut,
  ChevronDown,
  Search,
  DollarSign,
  Share,
  Heart,
  Activity,
  Mail,
  ClipboardList,
  Facebook,
  Instagram,
  Twitter,
  BarChart3,
  LineChart
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define menu items with emojis - exported for use in Navbar mobile menu
export const mainMenuItems = [
  { icon: Home, label: "Dashboard", emoji: "🏠", active: true, path: "/" },
];

export const paidSocialItems = [
  { icon: Facebook, label: "Facebook Ads", emoji: "📱", path: "/paid-social/facebook" },
  { icon: Instagram, label: "Instagram Ads", emoji: "📸", path: "/paid-social/instagram" },
  { icon: Twitter, label: "Twitter Ads", emoji: "🐦", path: "/paid-social/twitter" },
  { icon: Share, label: "Social Campaigns", emoji: "🔄", path: "/paid-social/campaigns" },
];

export const paidSearchItems = [
  { icon: Search, label: "Google Ads", emoji: "🔍", path: "/paid-search/google-ads" },
  { icon: DollarSign, label: "Ad Budget", emoji: "💰", path: "/paid-search/budget" },
  { icon: LineChart, label: "Performance", emoji: "📈", path: "/paid-search/performance" },
  { icon: BarChart3, label: "Keywords", emoji: "🔑", path: "/paid-search/keywords" },
];

export const organicSocialItems = [
  { icon: Twitter, label: "Twitter", emoji: "🐦", path: "/organic-social/twitter" },
  { icon: Instagram, label: "Instagram", emoji: "📸", path: "/organic-social/instagram" },
  { icon: Facebook, label: "Facebook", emoji: "👥", path: "/organic-social/facebook" },
  { icon: Heart, label: "Engagement", emoji: "❤️", path: "/organic-social/engagement" },
];

export const websiteAnalyticsItems = [
  { icon: Activity, label: "Google Analytics", emoji: "📊", path: "/analytics/google" },
  { icon: LineChart, label: "Traffic", emoji: "🚦", path: "/analytics/traffic" },
  { icon: BarChart3, label: "Conversions", emoji: "🎯", path: "/analytics/conversions" },
];

export const emailMarketingItems = [
  { icon: Mail, label: "Campaigns", emoji: "📧", path: "/email/campaigns" },
  { icon: LineChart, label: "Performance", emoji: "📈", path: "/email/performance" },
];

export const formsAndSurveyItems = [
  { icon: ClipboardList, label: "Forms", emoji: "📝", path: "/forms/manage" },
  { icon: BarChart3, label: "Results", emoji: "📊", path: "/forms/results" },
];

export const settingsItems = [
  { icon: Settings, label: "Settings", emoji: "⚙️", path: "/settings" },
  { icon: HelpCircle, label: "Help & Support", emoji: "❓", path: "/help" },
];

interface SidebarProps {
  className?: string;
}

export const MainSidebar: React.FC<SidebarProps> = ({ className }) => {
  // State for collapsible sections
  const [paidSocialOpen, setPaidSocialOpen] = React.useState(true);
  const [paidSearchOpen, setPaidSearchOpen] = React.useState(false);
  const [organicSocialOpen, setOrganicSocialOpen] = React.useState(false);
  const [websiteAnalyticsOpen, setWebsiteAnalyticsOpen] = React.useState(false);
  const [emailMarketingOpen, setEmailMarketingOpen] = React.useState(false);
  const [formsAndSurveyOpen, setFormsAndSurveyOpen] = React.useState(false);

  return (
    <ShadcnSidebar className={cn("bg-sidebar border-r border-border", className)}>
      <SidebarHeader className="flex py-5 px-4 justify-start">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
            alt="Scalevo Logo" 
            className="h-5" 
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainMenuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton 
                      isActive={item.active}
                      className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground"
                      asChild
                    >
                      <Link to={item.path}>
                        <span className="mr-1">{item.emoji}</span>
                        <span>{item.label}</span>
                        {item.active && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-marketing-purple"></span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">
              <div className="flex items-center justify-between w-full" onClick={() => setPaidSocialOpen(!paidSocialOpen)}>
                <span>Paid Social</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${paidSocialOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {paidSocialOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {paidSocialItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground" asChild>
                        <Link to={item.path}>
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">
              <div className="flex items-center justify-between w-full" onClick={() => setPaidSearchOpen(!paidSearchOpen)}>
                <span>Paid Search</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${paidSearchOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {paidSearchOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {paidSearchItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground" asChild>
                        <Link to={item.path}>
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">
              <div className="flex items-center justify-between w-full" onClick={() => setOrganicSocialOpen(!organicSocialOpen)}>
                <span>Organic Social</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${organicSocialOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {organicSocialOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {organicSocialItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground" asChild>
                        <Link to={item.path}>
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">
              <div className="flex items-center justify-between w-full" onClick={() => setWebsiteAnalyticsOpen(!websiteAnalyticsOpen)}>
                <span>Website Analytics</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${websiteAnalyticsOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {websiteAnalyticsOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {websiteAnalyticsItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground" asChild>
                        <Link to={item.path}>
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">
              <div className="flex items-center justify-between w-full" onClick={() => setEmailMarketingOpen(!emailMarketingOpen)}>
                <span>Email Marketing</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${emailMarketingOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {emailMarketingOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {emailMarketingItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground" asChild>
                        <Link to={item.path}>
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">
              <div className="flex items-center justify-between w-full" onClick={() => setFormsAndSurveyOpen(!formsAndSurveyOpen)}>
                <span>Forms & Survey</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${formsAndSurveyOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {formsAndSurveyOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {formsAndSurveyItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground" asChild>
                        <Link to={item.path}>
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="text-[#B4B3B5]">Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settingsItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground" asChild>
                      <Link to={item.path}>
                        <span className="mr-1">{item.emoji}</span>
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center">
          <div className="size-9 rounded-full bg-gradient-to-r from-marketing-blue to-marketing-purple flex items-center justify-center text-white font-medium">
            JD
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
          <button className="ml-auto rounded-full p-1.5 text-muted-foreground hover:bg-accent">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </ShadcnSidebar>
  );
};

export default MainSidebar;
