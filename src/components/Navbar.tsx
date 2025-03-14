
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  BarChart3,
  Users,
  Layers,
  Settings,
  HelpCircle,
  PieChart,
  Menu,
  LayoutGrid,
  ImageIcon,
  FileText,
  Mail,
  Phone,
  CreditCard,
  Github,
  Youtube,
  Twitter,
  Linkedin,
  Headphones,
  Globe,
  Check,
  ChevronDown
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"; 
import { NotificationsDropdown } from "@/components/notifications/NotificationsDropdown";
import { useNotifications } from "@/hooks/use-notifications";
import { Toaster } from "@/components/ui/toaster";
import { CommandSearch } from "@/components/CommandSearch";
import { useLanguage } from "@/hooks/use-language";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const { 
    notifications, 
    markAsRead, 
    markAllAsRead, 
    dismissNotification 
  } = useNotifications();
  const { language, setLanguage } = useLanguage();

  const mainMenuItems = [
    { icon: PieChart, label: "Dashboard", path: "/" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: PieChart, label: "Campaigns", path: "/campaigns" },
    { icon: Layers, label: "Integrations", path: "/integrations" },
  ];

  const megaMenuSections = [
    {
      title: "Products",
      items: [
        { icon: LayoutGrid, label: "Marketing Suite", description: "Automated campaign management", path: "/products/suite" },
        { icon: BarChart3, label: "Analytics Pro", description: "Advanced data insights", path: "/products/analytics" },
        { icon: Users, label: "CRM Connect", description: "Customer relationship tools", path: "/products/crm" },
        { icon: Layers, label: "Integration Hub", description: "Connect your workflow", path: "/products/hub" },
      ]
    },
    {
      title: "Resources",
      items: [
        { icon: FileText, label: "Documentation", description: "Guides and API docs", path: "/resources/docs" },
        { icon: Youtube, label: "Tutorials", description: "Step-by-step videos", path: "/resources/tutorials" },
        { icon: Github, label: "Developer API", description: "Integration resources", path: "/resources/api" },
        { icon: Headphones, label: "Webinars", description: "Live learning sessions", path: "/resources/webinars" },
      ]
    },
    {
      title: "Company",
      items: [
        { icon: Users, label: "About Us", description: "Our story and mission", path: "/company/about" },
        { icon: Mail, label: "Contact", description: "Get in touch with us", path: "/company/contact" },
        { icon: CreditCard, label: "Pricing", description: "Plans and subscriptions", path: "/company/pricing" },
        { icon: Phone, label: "Support", description: "Help and resources", path: "/company/support" },
      ]
    }
  ];

  return (
    <>
      <header className="w-full border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
                alt="Scalevo Logo" 
                className="h-4 sm:h-5" 
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  {mainMenuItems.slice(0, 4).map((item) => (
                    <NavigationMenuItem key={item.label}>
                      <Link to={item.path}>
                        <Button variant="ghost" className="h-9 gap-1.5">
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Button>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-9">More</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[750px] grid-cols-3 gap-3 p-6">
                        {megaMenuSections.map((section) => (
                          <div key={section.title} className="space-y-3">
                            <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
                            <Separator className="my-1" />
                            
                            <div className="space-y-2">
                              {section.items.map((item) => (
                                <NavigationMenuLink key={item.label} asChild>
                                  <Link 
                                    to={item.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                  >
                                    <div className="flex items-center gap-2">
                                      <item.icon className="h-5 w-5 text-marketing-purple" />
                                      <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                    <p className="line-clamp-1 text-xs text-muted-foreground pt-1">{item.description}</p>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-muted/50 p-4 flex justify-between items-center">
                        <div>
                          <h4 className="text-sm font-medium">Need help getting started?</h4>
                          <p className="text-xs text-muted-foreground">Check our comprehensive documentation</p>
                        </div>
                        <Button size="sm" variant="outline" className="gap-1">
                          <FileText className="h-3.5 w-3.5" />
                          <span>Documentation</span>
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:block">
              <CommandSearch />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-sm font-normal">
                  <span className="mr-1 text-base">
                    {language === 'en' ? '🇬🇧' : '🇩🇪'}
                  </span>
                  <span className="font-medium">
                    {language === 'en' ? 'EN' : 'DE'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[120px]">
                <DropdownMenuItem 
                  onClick={() => setLanguage('en')}
                  className="flex items-center gap-2"
                >
                  <span className="text-base">🇬🇧</span>
                  <span>English</span>
                  {language === 'en' && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('de')}
                  className="flex items-center gap-2"
                >
                  <span className="text-base">🇩🇪</span>
                  <span>Deutsch</span>
                  {language === 'de' && <Check className="h-4 w-4 ml-auto" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-6">
                  <Link to="/" className="flex items-center gap-2">
                    <img 
                      src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
                      alt="Scalevo Logo" 
                      className="h-4" 
                    />
                  </Link>
                  
                  <CommandSearch isMobile={true} />
                  
                  <nav className="grid gap-2">
                    {mainMenuItems.map((item) => (
                      <Link 
                        key={item.label}
                        to={item.path} 
                        className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-accent"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <Toaster />
    </>
  );
};

export default Navbar;
