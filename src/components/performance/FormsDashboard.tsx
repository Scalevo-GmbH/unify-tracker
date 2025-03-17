
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DateRange } from "@/components/DateRangeSelector";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface FormsDashboardProps {
  toolId: string;
}

const FormsDashboard: React.FC<FormsDashboardProps> = ({ toolId }) => {
  // In a real implementation, we would fetch this data from the API based on toolId
  const metrics = {
    "typeform": {
      activeForms: 8,
      views: 12480,
      starts: 9640,
      completions: 7820,
      completionRate: 81.1,
      averageTimeToComplete: 184,
      totalSubmissions: 7820,
      uniqueRespondents: 7480
    },
    "google-forms": {
      activeForms: 12,
      views: 18620,
      starts: 14280,
      completions: 10540,
      completionRate: 73.8,
      averageTimeToComplete: 156,
      totalSubmissions: 10540,
      uniqueRespondents: 9820
    }
  };

  let toolName = "Typeform";
  let currentMetrics = metrics["typeform"];
  
  if (toolId === "google-forms") {
    toolName = "Google Forms";
    currentMetrics = metrics["google-forms"];
  }
  
  const dateRange: DateRange = "this-month";

  // Format time to complete as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleExport = () => {
    // This would handle the export functionality in a real implementation
    console.log(`Exporting ${toolName} data...`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{toolName} Dashboard</h2>
        <Button variant="outline" size="sm" onClick={handleExport} className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Active Forms" 
          value={currentMetrics.activeForms.toString()} 
          change={2.6} 
          description="Currently active forms"
        />
        <MetricCard 
          title="Views" 
          value={currentMetrics.views.toLocaleString()} 
          change={8.4} 
          description="Form views"
        />
        <MetricCard 
          title="Completion Rate" 
          value={`${currentMetrics.completionRate}%`} 
          change={1.2} 
          description="Form completion rate"
        />
        <MetricCard 
          title="Submissions" 
          value={currentMetrics.totalSubmissions.toLocaleString()} 
          change={7.8} 
          description="Total form submissions"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Form Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart dateRange={dateRange} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <MetricCard 
                title="Form Starts" 
                value={currentMetrics.starts.toLocaleString()} 
                change={6.2} 
                description="Users who started forms"
              />
              <MetricCard 
                title="Form Completions" 
                value={currentMetrics.completions.toLocaleString()} 
                change={9.4} 
                description="Completed submissions"
              />
              <MetricCard 
                title="Avg. Completion Time" 
                value={formatTime(currentMetrics.averageTimeToComplete)} 
                change={-3.2} 
                description="Time to complete form"
                invertedChange
              />
              <MetricCard 
                title="Unique Respondents" 
                value={currentMetrics.uniqueRespondents.toLocaleString()} 
                change={5.8} 
                description="Unique form submitters"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormsDashboard;
