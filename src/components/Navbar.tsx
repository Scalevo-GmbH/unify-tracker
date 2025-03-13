import React from "react";
import { Link } from "react-router-dom";
import { 
  Bell, 
  Search, 
  BarChart3,
  Calendar,
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
  Headphones
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"; 

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();

  const mainMenuItems = [
    { icon: PieChart, label: "Dashboard", path: "/" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: PieChart, label: "Campaigns", path: "/campaigns" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: Users, label: "Audience", path: "/audience" },
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
    <header className="w-full border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
              alt="Scalevo Logo" 
              className="h-6 sm:h-7" 
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
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="h-9 w-60 rounded-md border border-input bg-transparent pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-marketing-red"></span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-gradient-to-r from-marketing-blue to-marketing-purple flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <span className="hidden md:inline-block text-sm font-medium">John Doe</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex flex-col gap-1 p-2">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Admin</p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
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
                    className="h-6" 
                  />
                </Link>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="h-9 w-full rounded-md border border-input bg-transparent pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                
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
  );
};

export default Navbar;
