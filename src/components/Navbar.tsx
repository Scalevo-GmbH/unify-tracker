
import React from "react";
import { Link } from "react-router-dom";
import { Command, LogOut, Settings, HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NotificationsDropdown } from "@/components/notifications/NotificationsDropdown";
import { useNotifications } from "@/hooks/use-notifications";
import { Toaster } from "@/components/ui/toaster";
import { CommandSearch } from "@/components/CommandSearch";
import { useLanguage } from "@/hooks/use-language";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebar, SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  mainMenuItems, 
  reportsItems, 
  recordsItems, 
  goalsItems, 
  settingsItems 
} from "@/components/Sidebar";

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const { 
    notifications, 
    markAsRead, 
    markAllAsRead, 
    dismissNotification 
  } = useNotifications();
  const { language, setLanguage } = useLanguage();
  const { state } = useSidebar();

  return (
    <>
      <header className="w-full border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle for desktop */}
            <div className="hidden md:block">
              <SidebarTrigger className="h-8 w-8" />
            </div>
            
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Command className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-[280px]">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <Link to="/" className="flex items-center gap-2">
                      <img 
                        src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
                        alt="Scalevo Logo" 
                        className="h-4" 
                      />
                    </Link>
                  </div>

                  <div className="p-4">
                    <CommandSearch isMobile={true} />
                  </div>
                  
                  <ScrollArea className="flex-1 overflow-auto">
                    {/* Main menu items */}
                    <div className="px-2 py-2">
                      <p className="px-4 text-xs font-medium text-muted-foreground mb-2">Navigation</p>
                      {mainMenuItems.map((item) => (
                        <Link 
                          key={item.label}
                          to={item.path} 
                          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent text-sm text-[#8E9196] hover:text-sidebar-foreground"
                        >
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                          {item.active && (
                            <span className="ml-auto h-2 w-2 rounded-full bg-marketing-purple"></span>
                          )}
                        </Link>
                      ))}
                    </div>

                    {/* Reports section */}
                    <div className="px-2 py-2">
                      <p className="px-4 text-xs font-medium text-muted-foreground mb-2">Reports</p>
                      {reportsItems.map((item) => (
                        <Link 
                          key={item.label}
                          to={item.path} 
                          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent text-sm text-[#8E9196] hover:text-sidebar-foreground"
                        >
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Records section */}
                    <div className="px-2 py-2">
                      <p className="px-4 text-xs font-medium text-muted-foreground mb-2">Records</p>
                      {recordsItems.map((item) => (
                        <Link 
                          key={item.label}
                          to={item.path} 
                          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent text-sm text-[#8E9196] hover:text-sidebar-foreground"
                        >
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Goals section */}
                    <div className="px-2 py-2">
                      <p className="px-4 text-xs font-medium text-muted-foreground mb-2">Goals</p>
                      {goalsItems.map((item) => (
                        <Link 
                          key={item.label}
                          to={item.path} 
                          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent text-sm text-[#8E9196] hover:text-sidebar-foreground"
                        >
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Settings section */}
                    <div className="px-2 py-2">
                      <p className="px-4 text-xs font-medium text-muted-foreground mb-2">Settings</p>
                      {settingsItems.map((item) => (
                        <Link 
                          key={item.label}
                          to={item.path} 
                          className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accent text-sm text-[#8E9196] hover:text-sidebar-foreground"
                        >
                          <span className="mr-1">{item.emoji}</span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  </ScrollArea>
                  
                  <div className="p-4 border-t">
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
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Centered Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto px-4">
            <CommandSearch />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <NotificationsDropdown 
              notifications={notifications}
              onMarkAsRead={markAsRead}
              onMarkAllAsRead={markAllAsRead}
              onDismiss={dismissNotification}
            />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex flex-col gap-1 p-2">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Admin</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Account Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Help & Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <Toaster />
    </>
  );
};

export default Navbar;
