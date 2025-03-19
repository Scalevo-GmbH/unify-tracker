
import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PerformanceSubNavProps {
  activeSubTab: string;
  onSubTabChange: (value: string) => void;
  showToolSelector: boolean;
  selectedTool: string;
  tools: { id: string; name: string }[] | undefined;
  onToolChange: (value: string) => void;
}

export const PerformanceSubNav: React.FC<PerformanceSubNavProps> = ({
  activeSubTab,
  onSubTabChange,
  showToolSelector,
  selectedTool,
  tools = [],
  onToolChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
      <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-1">
        <button
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            activeSubTab === "overview"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onSubTabChange("overview")}
        >
          {t('overview')}
        </button>
        <button
          className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
            activeSubTab === "details"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => onSubTabChange("details")}
        >
          {t('details')}
        </button>
      </div>

      {showToolSelector && tools && tools.length > 0 && (
        <div className="w-full sm:w-auto">
          <Select 
            value={selectedTool} 
            onValueChange={onToolChange}
          >
            <SelectTrigger className="w-full sm:w-[180px] bg-white border-gray-200 shadow-sm">
              <SelectValue placeholder={t('selectTool')} />
            </SelectTrigger>
            <SelectContent>
              {tools.map(tool => (
                <SelectItem key={tool.id} value={tool.id}>
                  {tool.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};
