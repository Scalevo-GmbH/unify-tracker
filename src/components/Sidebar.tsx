
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Settings, 
  HelpCircle,
  LogOut,
  BarChart3,
  Lightbulb,
  Megaphone,
  Plug,
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
  { icon: Home, label: "Dashboard", emoji: "🏠", path: "/" },
  { icon: Megaphone, label: "Campaigns", emoji: "📣", path: "/campaigns" },
  { icon: BarChart3, label: "Performance", emoji: "📊", path: "/performance" },
  { icon: Lightbulb, label: "Intelligence", emoji: "💡", path: "/intelligence" },
  { icon: Plug, label: "Integrations", emoji: "🔌", path: "/integrations" },
  { icon: Settings, label: "Settings", emoji: "⚙️", path: "/account" },
];

export const settingsItems = [
  { icon: HelpCircle, label: "Help & Support", emoji: "❓", path: "/help" },
];

interface SidebarProps {
  className?: string;
}

export const MainSidebar: React.FC<SidebarProps> = ({ className }) => {
  const location = useLocation();

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
                      isActive={location.pathname === item.path}
                      className="flex gap-3 py-2 text-[#A6A9AE] hover:text-sidebar-foreground"
                      asChild
                    >
                      <Link to={item.path}>
                        <span className="mr-1">{item.emoji}</span>
                        <span>{item.label}</span>
                        {location.pathname === item.path && (
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
            <SidebarGroupLabel className="text-[#B4B3B5]">Support</SidebarGroupLabel>
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
