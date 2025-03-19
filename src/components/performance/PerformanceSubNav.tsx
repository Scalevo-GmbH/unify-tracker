
import React from "react";
import { IosSwitch } from "@/components/ui/ios-switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useTranslation } from "@/hooks/use-translation";

interface PerformanceSubNavProps {
  activeSubTab: string;
  onSubTabChange: (value: string) => void;
  showToolSelector: boolean;
  selectedTool?: string;
  tools?: { id: string; name: string }[];
  onToolChange?: (value: string) => void;
}

export const PerformanceSubNav: React.FC<PerformanceSubNavProps> = ({
  activeSubTab,
  onSubTabChange,
  showToolSelector,
  selectedTool,
  tools,
  onToolChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <IosSwitch
        options={[
          { value: "overview", label: t('overviewTab') },
          { value: "details", label: t('detailsTab') }
        ]}
        value={activeSubTab}
        onChange={onSubTabChange}
        className="ios-switch"
      />

      {showToolSelector && selectedTool && tools && onToolChange && (
        <Select 
          value={selectedTool} 
          onValueChange={onToolChange}
        >
          <SelectTrigger className="w-[200px] bg-white border-gray-200 shadow-sm">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {tools.map(tool => (
              <SelectItem key={tool.id} value={tool.id}>
                {tool.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};
