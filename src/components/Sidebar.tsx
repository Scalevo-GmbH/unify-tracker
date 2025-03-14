
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
  LogOut,
  HelpCircle,
  FileText,
  Grid3X3,
  Mail,
  ClipboardList,
  LineChart,
  Package,
  Building2,
  UserPlus,
  Target,
  Clock,
  ChevronDown
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

interface SidebarProps {
  className?: string;
}

export const MainSidebar: React.FC<SidebarProps> = ({ className }) => {
  // Define menu items
  const mainMenuItems = [
    { icon: Home, label: "Dashboard", active: true, path: "/" },
    { icon: ClipboardList, label: "Task List", path: "/tasks" },
    { icon: Mail, label: "Emails", path: "/emails" },
    { icon: FileText, label: "Reporting", path: "/reporting" },
  ];

  const reportsItems = [
    { icon: UserPlus, label: "Recruiting", path: "/reports/recruiting" },
    { icon: LineChart, label: "Startup sales", path: "/reports/startup-sales" },
    { icon: PieChart, label: "Fundraising", path: "/reports/fundraising" },
    { icon: BarChart3, label: "Revenue", path: "/reports/revenue" },
    { icon: Layers, label: "Integrations", path: "/reports/integrations" },
    { icon: Package, label: "Deal progress", path: "/reports/deals" },
  ];

  const recordsItems = [
    { icon: Building2, label: "Companies", path: "/records/companies" },
    { icon: Users, label: "Teams", path: "/records/teams" },
  ];

  const goalsItems = [
    { icon: Target, label: "Active", path: "/goals/active" },
    { icon: Clock, label: "Past", path: "/goals/past" },
  ];

  const settingsItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help & Support", path: "/help" },
  ];

  // State for collapsible sections
  const [reportsOpen, setReportsOpen] = React.useState(true);
  const [recordsOpen, setRecordsOpen] = React.useState(false);
  const [goalsOpen, setGoalsOpen] = React.useState(false);

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
            <SidebarGroupLabel>
              <div className="flex items-center justify-between w-full" onClick={() => setReportsOpen(!reportsOpen)}>
                <span>Reports</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${reportsOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {reportsOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {reportsItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2" asChild>
                        <Link to={item.path}>
                          <item.icon className="h-5 w-5" />
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
            <SidebarGroupLabel>
              <div className="flex items-center justify-between w-full" onClick={() => setRecordsOpen(!recordsOpen)}>
                <span>Records</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${recordsOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {recordsOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {recordsItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2" asChild>
                        <Link to={item.path}>
                          <item.icon className="h-5 w-5" />
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
            <SidebarGroupLabel>
              <div className="flex items-center justify-between w-full" onClick={() => setGoalsOpen(!goalsOpen)}>
                <span>Goals</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${goalsOpen ? 'rotate-180' : ''}`} />
              </div>
            </SidebarGroupLabel>
            {goalsOpen && (
              <SidebarGroupContent>
                <SidebarMenu>
                  {goalsItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton className="flex gap-3 py-2" asChild>
                        <Link to={item.path}>
                          <item.icon className="h-5 w-5" />
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
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {settingsItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton className="flex gap-3 py-2" asChild>
                      <Link to={item.path}>
                        <item.icon className="h-5 w-5" />
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
