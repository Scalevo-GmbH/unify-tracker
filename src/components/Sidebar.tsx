
import React from "react";
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
  HelpCircle
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
  SidebarTrigger,
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
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: Users, label: "Audience", path: "/audience" },
    { icon: Layers, label: "Integrations", path: "/integrations" },
  ];

  const settingsItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help & Support", path: "/help" },
  ];

  return (
    <ShadcnSidebar className={cn("bg-sidebar border-r border-border", className)}>
      <SidebarHeader className="flex flex-col space-y-2 p-4">
        <div className="flex items-center gap-2 px-2">
          <PieChart className="h-6 w-6 text-marketing-purple" />
          <span className="text-lg font-semibold">Unify</span>
          <SidebarTrigger className="ml-auto h-8 w-8" />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-9 h-9 bg-background/80 text-sm" 
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-13rem)]">
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainMenuItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton 
                      isActive={item.active}
                      className="flex gap-3 py-2"
                      asChild
                    >
                      <a href={item.path}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                        {item.active && (
                          <span className="ml-auto h-2 w-2 rounded-full bg-marketing-purple"></span>
                        )}
                      </a>
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
                      <a href={item.path}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                        <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                      </a>
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
