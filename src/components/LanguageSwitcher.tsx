
import React from "react";
import { useLanguage } from "@/hooks/use-language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  // Get the flag emoji based on the current language
  const getLanguageFlag = (lang: string) => {
    return lang === "en" ? "🇬🇧" : "🇩🇪";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <span className="text-sm">{getLanguageFlag(language)}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem 
          onClick={() => setLanguage("en")}
          className={language === "en" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇬🇧</span>
          <span className="cal-sans">English</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage("de")}
          className={language === "de" ? "bg-accent" : ""}
        >
          <span className="mr-2">🇩🇪</span>
          <span className="cal-sans">Deutsch</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
