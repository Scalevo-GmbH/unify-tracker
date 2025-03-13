
import React from "react";
import { Bell, ChevronDown, Menu, PieChart, Settings, Search } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <header className="w-full border-b border-border flex items-center h-16 px-6 sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <button className="mr-4 md:hidden">
        <Menu className="size-5" />
      </button>
      
      <div className="flex items-center mr-4">
        <PieChart className="h-7 w-7 text-marketing-purple mr-2" />
        <h1 className="text-lg font-semibold tracking-tight">Unify</h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-6 font-medium text-sm">
        <a href="#" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Campaigns</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
          More <ChevronDown className="ml-1 h-4 w-4" />
        </a>
      </div>
      
      <div className="ml-auto flex items-center space-x-4">
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-9 w-60 rounded-md border border-input bg-transparent pl-10 pr-4 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        
        <button className="relative size-9 flex items-center justify-center rounded-full bg-background text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-marketing-red"></span>
        </button>
        
        <button className="size-9 flex items-center justify-center rounded-full bg-background text-muted-foreground hover:text-foreground transition-colors">
          <Settings className="h-5 w-5" />
        </button>
        
        <button className="flex items-center space-x-2">
          <div className="size-8 rounded-full bg-gradient-to-r from-marketing-blue to-marketing-purple flex items-center justify-center text-white font-medium">
            JD
          </div>
          <span className="hidden md:inline-block text-sm font-medium">John Doe</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
