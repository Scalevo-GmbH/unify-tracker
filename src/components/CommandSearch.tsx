
import React, { useState } from "react";
import { Search, Command, X, BarChart3, Users, FileText, ImageIcon, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Define search result categories and items
const searchCategories = [
  {
    category: "Pages",
    items: [
      { icon: BarChart3, label: "Dashboard", path: "/" },
      { icon: BarChart3, label: "Analytics", path: "/analytics" },
      { icon: Users, label: "Audience", path: "/audience" },
      { icon: Calendar, label: "Calendar", path: "/calendar" },
    ],
  },
  {
    category: "Reports",
    items: [
      { icon: FileText, label: "Monthly Performance", path: "/reports/monthly" },
      { icon: FileText, label: "Campaign Results", path: "/reports/campaigns" },
      { icon: BarChart3, label: "Conversion Analytics", path: "/reports/conversions" },
      { icon: Users, label: "Audience Insights", path: "/reports/audience" },
    ],
  },
  {
    category: "Resources",
    items: [
      { icon: ImageIcon, label: "Media Library", path: "/resources/media" },
      { icon: FileText, label: "Documentation", path: "/resources/docs" },
      { icon: FileText, label: "Help Center", path: "/resources/help" },
    ],
  },
];

type SearchInputProps = {
  isMobile?: boolean;
};

export const CommandSearch: React.FC<SearchInputProps> = ({ isMobile = false }) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Filter search results based on query
  const getFilteredResults = () => {
    if (!searchQuery) return searchCategories;

    const query = searchQuery.toLowerCase();
    
    return searchCategories.map((category) => ({
      ...category,
      items: category.items.filter((item) => 
        item.label.toLowerCase().includes(query)
      ),
    })).filter((category) => category.items.length > 0);
  };

  const handleSelect = (path: string) => {
    setOpen(false);
    setSearchQuery("");
    
    // Navigate to the selected path
    navigate(path);
    
    // Show a toast notification
    toast({
      title: "Navigating",
      description: `Going to ${path}`,
    });
  };

  // Open command dialog with keyboard shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setOpen(true)}
        className={`relative ${isMobile ? "w-full" : "w-60"} justify-start text-sm text-muted-foreground`}
      >
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <span className="ml-8">Search...</span>
        {!isMobile && (
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 bg-muted text-[10px] font-medium px-1.5 py-0.5 rounded text-muted-foreground">
            ⌘K
          </kbd>
        )}
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3 relative w-full">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <div className="flex-1 relative">
            <CommandInput
              placeholder="Search commands, pages, and more..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="pr-12"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {getFilteredResults().map((category) => (
            <CommandGroup key={category.category} heading={category.category}>
              {category.items.map((item) => (
                <CommandItem
                  key={item.label}
                  onSelect={() => handleSelect(item.path)}
                  className="cursor-pointer"
                >
                  <item.icon className="mr-2 h-4 w-4 text-marketing-purple" />
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandSearch;
