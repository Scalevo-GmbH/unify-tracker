
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, LogOut, Settings, HelpCircle, Search } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { mainMenuItems, settingsItems } from "@/components/Sidebar";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/use-translation";

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
  const [menuFilter, setMenuFilter] = useState("");
  const { t } = useTranslation();

  // Filter menu items based on search input
  const filterItems = (items: any[]) => {
    if (!menuFilter) return items;
    const filter = menuFilter.toLowerCase();
    return items.filter(item => 
      item.label.toLowerCase().includes(filter) || 
      (item.emoji && item.emoji.toLowerCase().includes(filter))
    );
  };

  const filteredMainMenu = filterItems(mainMenuItems);
  const filteredSettings = filterItems(settingsItems);

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
                  <Menu className="h-5 w-5" />
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
                  
                  {/* Menu Search Bar */}
                  <div className="p-4 border-b">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder={t('searchMenu')}
                        value={menuFilter}
                        onChange={(e) => setMenuFilter(e.target.value)}
                        className="pl-9 h-9 text-sm"
                      />
                    </div>
                  </div>
                  
                  <ScrollArea className="flex-1 overflow-auto">
                    {/* Main menu items */}
                    {filteredMainMenu.length > 0 && (
                      <div className="px-2 py-2">
                        <p className="px-4 text-xs font-medium text-muted-foreground mb-2">Navigation</p>
                        {filteredMainMenu.map((item) => (
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
                    )}

                    {/* Settings section */}
                    {filteredSettings.length > 0 && (
                      <div className="px-2 py-2">
                        <p className="px-4 text-xs font-medium text-muted-foreground mb-2">Settings</p>
                        {filteredSettings.map((item) => (
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
                    )}

                    {/* No results message */}
                    {menuFilter && 
                      !filteredMainMenu.length &&
                      !filteredSettings.length && (
                        <div className="p-4 text-center text-muted-foreground">
                          No menu items found
                        </div>
                      )
                    }
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
            <CommandSearch isMobile={isMobile} />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
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
                    <span>{t('accountSettings')}</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>{t('helpSupport')}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>{t('logout')}</span>
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
