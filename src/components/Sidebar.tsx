
import React from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  BarChart3, 
  Calendar, 
  Users, 
  Settings, 
  PieChart, 
  Layers, 
  Search,
  ChevronRight,
  LogOut,
  HelpCircle,
  FileText,
  Grid3X3
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
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  className?: string;
}

export const MainSidebar: React.FC<SidebarProps> = ({ className }) => {
  // Define menu items
  const mainMenuItems = [
    { icon: Home, label: "Dashboard", active: true, path: "/" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: PieChart, label: "Campaigns", path: "/campaigns" },
    { icon: Layers, label: "Integrations", path: "/integrations" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: Grid3X3, label: "Products", path: "/products" },
    { icon: FileText, label: "Resources", path: "/resources" },
  ];

  const settingsItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help & Support", path: "/help" },
  ];

  return (
    <ShadcnSidebar className={cn("bg-sidebar border-r border-border", className)}>
      <SidebarHeader className="flex justify-center items-center p-4 border-b border-border">
        <Link to="/" className="flex items-center justify-center">
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
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainMenuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton 
                      isActive={item.active}
                      className="flex gap-3 py-2"
                      asChild
                    >
                      <Link to={item.path}>
                        <item.icon className="h-5 w-5" />
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
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settingsItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton className="flex gap-3 py-2" asChild>
                      <Link to={item.path}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                        <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
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
