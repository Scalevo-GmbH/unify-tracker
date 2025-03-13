
import React, { useState } from "react";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { PerformanceChart } from "@/components/PerformanceChart";
import { IntegrationCard } from "@/components/IntegrationCard";
import { ConnectPlatformModal } from "@/components/ConnectPlatformModal";
import FadeInSection from "@/components/animations/FadeInSection";
import DateRangeSelector, { DateRange } from "@/components/DateRangeSelector";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Search, 
  LineChart, 
  BarChart3,
  PieChart,
  HelpCircle
} from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<{
    name: string;
    icon: React.ReactNode;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<DateRange>("this-month");
  
  // Mock user name - in a real app, this would come from authentication
  const userName = "Pascal";

  const handleOpenModal = (name: string, icon: React.ReactNode) => {
    setSelectedPlatform({ name, icon });
    setIsModalOpen(true);
  };

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8">
        <FadeInSection>
          <div className="flex flex-col gap-4 sm:gap-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-primary/5 text-primary font-medium px-3 py-1 rounded-full text-sm">
                  <span className="text-lg animate-delayed-shake inline-block">👋</span> Welcome back, {userName}!
                </div>
                <h1 className="text-3xl font-semibold tracking-tight">Marketing Dashboard</h1>
                <p className="text-muted-foreground">Track and optimize your marketing performance across platforms.</p>
              </div>
              
              <div className="mt-4 sm:mt-0 flex flex-wrap items-center gap-2">
                <DateRangeSelector 
                  value={dateRange} 
                  onChange={setDateRange} 
                />
                <button className="inline-flex items-center justify-center rounded-md px-4 h-9 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                  Export
                </button>
                <button className="inline-flex items-center justify-center rounded-md px-4 h-9 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  New Campaign
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
        
        <DashboardMetrics />
      </section>
      
      <section className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FadeInSection className="lg:col-span-2">
          <PerformanceChart dateRange={dateRange} />
        </FadeInSection>
        
        <FadeInSection className="h-full">
          <div className="bg-card rounded-xl shadow-subtle p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">Top Channels</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-help">
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs text-sm">
                    Top channels are ranked based on their contribution to your overall traffic and conversion metrics. Percentages represent the proportion of total traffic coming from each source.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="space-y-6 flex-grow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Facebook</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">38%</span>
                    <div className="w-24 h-2 bg-secondary ml-3 rounded-full overflow-hidden">
                      <div className="h-full bg-marketing-blue rounded-full" style={{ width: "38%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mr-3">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Instagram</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">24%</span>
                    <div className="w-24 h-2 bg-secondary ml-3 rounded-full overflow-hidden">
                      <div className="h-full bg-marketing-pink rounded-full" style={{ width: "24%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mr-3">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Twitter</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">18%</span>
                    <div className="w-24 h-2 bg-secondary ml-3 rounded-full overflow-hidden">
                      <div className="h-full bg-marketing-blue rounded-full" style={{ width: "18%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Email</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">12%</span>
                    <div className="w-24 h-2 bg-secondary ml-3 rounded-full overflow-hidden">
                      <div className="h-full bg-marketing-yellow rounded-full" style={{ width: "12%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <Search className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Organic</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">8%</span>
                    <div className="w-24 h-2 bg-secondary ml-3 rounded-full overflow-hidden">
                      <div className="h-full bg-marketing-green rounded-full" style={{ width: "8%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="mt-4 w-full py-2 px-4 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors">
                View All Channels
              </button>
            </div>
          </div>
        </FadeInSection>
      </section>
      
      <section>
        <div className="flex items-center justify-between mb-6">
          <FadeInSection>
            <h2 className="text-xl font-semibold">Connect Platforms</h2>
            <p className="text-muted-foreground">Connect your marketing tools to see all your data in one place.</p>
          </FadeInSection>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeInSection delay={100}>
            <IntegrationCard
              name="Facebook Ads"
              icon={<Facebook className="h-6 w-6 text-blue-600" />}
              description="Connect your Facebook Ads account to track performance and ROI."
              popular
              onClick={() => handleOpenModal("Facebook Ads", <Facebook className="h-6 w-6 text-blue-600" />)}
            />
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <IntegrationCard
              name="Google Ads"
              icon={<LineChart className="h-6 w-6 text-marketing-red" />}
              description="Import your Google Ads campaigns and track conversions."
              popular
              onClick={() => handleOpenModal("Google Ads", <LineChart className="h-6 w-6 text-marketing-red" />)}
            />
          </FadeInSection>
          
          <FadeInSection delay={300}>
            <IntegrationCard
              name="Instagram"
              icon={<Instagram className="h-6 w-6 text-pink-600" />}
              description="Connect Instagram to analyze engagement and reach."
              onClick={() => handleOpenModal("Instagram", <Instagram className="h-6 w-6 text-pink-600" />)}
            />
          </FadeInSection>
          
          <FadeInSection delay={400}>
            <IntegrationCard
              name="Twitter Ads"
              icon={<Twitter className="h-6 w-6 text-blue-400" />}
              description="Track your Twitter ad campaigns and performance."
              onClick={() => handleOpenModal("Twitter Ads", <Twitter className="h-6 w-6 text-blue-400" />)}
            />
          </FadeInSection>
          
          <FadeInSection delay={500}>
            <IntegrationCard
              name="Mailchimp"
              icon={<Mail className="h-6 w-6 text-marketing-yellow" />}
              description="Import your email campaign data and subscriber analytics."
              onClick={() => handleOpenModal("Mailchimp", <Mail className="h-6 w-6 text-marketing-yellow" />)}
            />
          </FadeInSection>
          
          <FadeInSection delay={600}>
            <IntegrationCard
              name="Google Analytics"
              icon={<BarChart3 className="h-6 w-6 text-marketing-orange" />}
              description="Import website traffic and conversion data."
              popular
              onClick={() => handleOpenModal("Google Analytics", <BarChart3 className="h-6 w-6 text-marketing-orange" />)}
            />
          </FadeInSection>
          
          <FadeInSection delay={700}>
            <IntegrationCard
              name="LinkedIn Ads"
              icon={<PieChart className="h-6 w-6 text-blue-700" />}
              description="Track your LinkedIn advertising campaigns and conversions."
              onClick={() => handleOpenModal("LinkedIn Ads", <PieChart className="h-6 w-6 text-blue-700" />)}
            />
          </FadeInSection>
          
          <FadeInSection delay={800}>
            <div className="relative flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-6 shadow-subtle transition-all duration-300 hover:bg-card hover:shadow-card cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 mb-4">
                <span className="text-lg font-semibold">+</span>
              </div>
              <h3 className="text-base font-medium mb-2">More Platforms</h3>
              <p className="text-sm text-muted-foreground text-center flex-grow">
                Connect to 50+ other marketing platforms and tools.
              </p>
              <div className="mt-auto w-full">
                <div className="h-[38px]"></div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      {selectedPlatform && (
        <ConnectPlatformModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          platformName={selectedPlatform.name}
          platformIcon={selectedPlatform.icon}
        />
      )}
    </div>
  );
};

export default Index;
