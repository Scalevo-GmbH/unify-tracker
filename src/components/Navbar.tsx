
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
  Menu
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

  return (
    <header className="w-full border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <PieChart className="h-6 w-6 text-marketing-purple" />
            <span className="text-lg font-semibold tracking-tight">Scalevo</span>
          </Link>

          {/* Desktop Navigation */}
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
                    <ul className="grid w-[200px] gap-2 p-2">
                      {mainMenuItems.slice(4).map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link 
                              to={item.path}
                              className={cn(
                                "flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              )}
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search on desktop */}
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="h-9 w-60 rounded-md border border-input bg-transparent pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-marketing-red"></span>
          </Button>
          
          {/* User profile */}
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
          
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                <Link to="/" className="flex items-center gap-2">
                  <PieChart className="h-6 w-6 text-marketing-purple" />
                  <span className="text-lg font-semibold tracking-tight">Unify</span>
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
