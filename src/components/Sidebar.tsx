
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  BarChart3, 
  Lightbulb, 
  Plug,
  Settings, 
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import type { NavigationTranslationKey } from "@/translations/navigation";

// Define main menu items
const mainMenuItems = [
  { icon: Home, labelKey: "dashboard" as NavigationTranslationKey, path: "/" },
  { icon: BarChart3, labelKey: "campaigns" as NavigationTranslationKey, path: "/campaigns" },
  { icon: BarChart3, labelKey: "performance" as NavigationTranslationKey, path: "/performance" },
  { icon: Lightbulb, labelKey: "intelligence" as NavigationTranslationKey, path: "/intelligence" },
  { icon: Plug, labelKey: "integrations" as NavigationTranslationKey, path: "/integrations" },
  { icon: Settings, labelKey: "settings" as NavigationTranslationKey, path: "/account" },
];

// Define support items
const supportItems = [
  { icon: HelpCircle, labelKey: "helpSupport" as NavigationTranslationKey, path: "/help" },
];

interface SidebarProps {
  className?: string;
}

const MainSidebar: React.FC<SidebarProps> = ({ className }) => {
  const location = useLocation();
  const { t } = useTranslation();
  
  return (
    <div className={cn("w-64 min-h-screen bg-white border-r border-gray-100", className)}>
      {/* Sidebar Header */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/11582caa-2cc6-4bc8-bad9-bf61386d8073.png" 
            alt="Scalevo Logo" 
            className="h-5" 
          />
        </Link>
      </div>
      
      {/* Navigation Section */}
      <div className="px-2 py-3">
        <p className="text-xs font-medium text-gray-400 px-4 mb-2">Navigation</p>
        <div className="space-y-1">
          {mainMenuItems.map((item) => (
            <Link
              key={item.labelKey}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm text-[#8E9196] hover:bg-[#F6F6F7] hover:text-gray-900",
                location.pathname === item.path && "bg-[#F5F1FF] text-[#6941C6]"
              )}
            >
              <item.icon size={18} className={cn(
                location.pathname === item.path ? "text-[#6941C6]" : "text-[#8E9196]"
              )} />
              <span>{t(item.labelKey)}</span>
              {item.path === "/campaigns" && (
                <span className="ml-auto h-2 w-2 rounded-full bg-[#6941C6]"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Support Section */}
      <div className="px-2 py-3">
        <p className="text-xs font-medium text-gray-400 px-4 mb-2">Support</p>
        <div className="space-y-1">
          {supportItems.map((item) => (
            <Link
              key={item.labelKey}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-4 py-2.5 text-sm text-[#8E9196] hover:bg-[#F6F6F7] hover:text-gray-900",
                location.pathname === item.path && "bg-[#F5F1FF] text-[#6941C6]"
              )}
            >
              <item.icon size={18} className={cn(
                location.pathname === item.path ? "text-[#6941C6]" : "text-[#8E9196]"
              )} />
              <span>{t(item.labelKey)}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 p-4">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F2F4F7] text-[#606065]">
            <span className="text-sm font-medium">JD</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">{t('admin')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;
