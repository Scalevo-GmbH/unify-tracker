
import React, { useState } from "react";
import { Search, Command, X, BarChart3, Users, FileText, ImageIcon, Calendar, Trash2 } from "lucide-react";
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
import useTranslation from "@/hooks/use-translation";

const CommandSearch: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();

  const searchCategories = [
    {
      category: t('pages'),
      items: [
        { icon: BarChart3, label: t('dashboard'), path: "/" },
        { icon: BarChart3, label: t('performance'), path: "/performance" },
        { icon: Users, label: t('audience'), path: "/audience" },
        { icon: Calendar, label: "Calendar", path: "/calendar" },
      ],
    },
    {
      category: t('reports'),
      items: [
        { icon: FileText, label: t('monthly'), path: "/reports/monthly" },
        { icon: FileText, label: t('campaignResults'), path: "/reports/campaigns" },
        { icon: BarChart3, label: t('conversions'), path: "/reports/conversions" },
        { icon: Users, label: t('insights'), path: "/reports/audience" },
      ],
    },
    {
      category: t('resources'),
      items: [
        { icon: ImageIcon, label: t('mediaLibrary'), path: "/resources/media" },
        { icon: FileText, label: t('documentation'), path: "/resources/docs" },
        { icon: FileText, label: t('helpCenter'), path: "/resources/help" },
      ],
    },
  ];

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
    
    navigate(path);
    
    toast({
      title: t('navigating'),
      description: `${t('goingTo')} ${path}`,
    });
  };

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
        variant="outline"
        onClick={() => setOpen(true)}
        className={`relative ${isMobile ? "w-full" : "w-full"} justify-start text-sm text-muted-foreground border border-input rounded-md bg-background hover:bg-accent h-10`}
      >
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <span className="ml-8">{t('insertCommand')}</span>
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
              placeholder={t('searchCommands')}
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="pr-12 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-7 w-7"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
        <CommandList>
          <CommandEmpty>{t('noResults')}</CommandEmpty>
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
