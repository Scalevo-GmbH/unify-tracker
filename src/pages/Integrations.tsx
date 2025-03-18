
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IntegrationCard } from "@/components/IntegrationCard";
import { ConnectPlatformModal } from "@/components/ConnectPlatformModal";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { Search, Grid } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  LineChart, 
  BarChart3, 
  PieChart,
  Linkedin,
  Youtube,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  Phone,
  FileText,
  Share2
} from "lucide-react";

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<{
    name: string;
    icon: React.ReactNode;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleOpenModal = (name: string, icon: React.ReactNode) => {
    setSelectedPlatform({ name, icon });
    setIsModalOpen(true);
  };

  const integrations = {
    advertising: [
      {
        name: "Facebook Ads",
        icon: <Facebook className="h-6 w-6 text-blue-600" />,
        description: "Connect your Facebook Ads account to track performance and ROI.",
        popular: true,
      },
      {
        name: "Google Ads",
        icon: <LineChart className="h-6 w-6 text-marketing-red" />,
        description: "Import your Google Ads campaigns and track conversions.",
        popular: true,
      },
      {
        name: "LinkedIn Ads",
        icon: <Linkedin className="h-6 w-6 text-blue-700" />,
        description: "Track your LinkedIn advertising campaigns and conversions.",
      },
      {
        name: "Twitter Ads",
        icon: <Twitter className="h-6 w-6 text-blue-400" />,
        description: "Track your Twitter ad campaigns and performance.",
      },
    ],
    social: [
      {
        name: "Instagram",
        icon: <Instagram className="h-6 w-6 text-pink-600" />,
        description: "Connect Instagram to analyze engagement and reach.",
        popular: true,
      },
      {
        name: "Facebook Pages",
        icon: <Facebook className="h-6 w-6 text-blue-600" />,
        description: "Manage and analyze your Facebook Page performance.",
        popular: true,
      },
      {
        name: "Twitter",
        icon: <Twitter className="h-6 w-6 text-blue-400" />,
        description: "Track engagement and audience growth on Twitter.",
      },
      {
        name: "LinkedIn",
        icon: <Linkedin className="h-6 w-6 text-blue-700" />,
        description: "Track company page analytics and engagement.",
      },
      {
        name: "YouTube",
        icon: <Youtube className="h-6 w-6 text-red-600" />,
        description: "Analyze video performance and channel growth.",
      },
    ],
    email: [
      {
        name: "Mailchimp",
        icon: <Mail className="h-6 w-6 text-marketing-yellow" />,
        description: "Import your email campaign data and subscriber analytics.",
        popular: true,
      },
      {
        name: "Campaign Monitor",
        icon: <Mail className="h-6 w-6 text-blue-500" />,
        description: "Track email campaign performance and subscriber engagement.",
      },
      {
        name: "Constant Contact",
        icon: <Mail className="h-6 w-6 text-marketing-green" />,
        description: "Analyze email marketing performance and list growth.",
      },
      {
        name: "SendGrid",
        icon: <Mail className="h-6 w-6 text-indigo-600" />,
        description: "Monitor email delivery rates and engagement metrics.",
      },
    ],
    analytics: [
      {
        name: "Google Analytics",
        icon: <BarChart3 className="h-6 w-6 text-marketing-orange" />,
        description: "Import website traffic and conversion data.",
        popular: true,
      },
      {
        name: "Mixpanel",
        icon: <PieChart className="h-6 w-6 text-purple-600" />,
        description: "Track user events and conversion funnels.",
      },
      {
        name: "Hotjar",
        icon: <BarChart3 className="h-6 w-6 text-marketing-red" />,
        description: "Visualize user behavior with heatmaps and recordings.",
      },
      {
        name: "Segment",
        icon: <Share2 className="h-6 w-6 text-teal-600" />,
        description: "Collect, unify and activate your customer data.",
      },
    ],
    ecommerce: [
      {
        name: "Shopify",
        icon: <ShoppingCart className="h-6 w-6 text-green-600" />,
        description: "Import your store data, products, and customer information.",
        popular: true,
      },
      {
        name: "WooCommerce",
        icon: <ShoppingCart className="h-6 w-6 text-purple-600" />,
        description: "Connect your WordPress store and track sales metrics.",
      },
      {
        name: "Stripe",
        icon: <CreditCard className="h-6 w-6 text-indigo-500" />,
        description: "Track payment processing and subscription metrics.",
      },
      {
        name: "BigCommerce",
        icon: <ShoppingCart className="h-6 w-6 text-blue-500" />,
        description: "Import your store data and track performance metrics.",
      },
    ],
    other: [
      {
        name: "Intercom",
        icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
        description: "Track customer conversations and support metrics.",
      },
      {
        name: "HubSpot",
        icon: <FileText className="h-6 w-6 text-marketing-orange" />,
        description: "Connect your CRM and marketing automation platform.",
        popular: true,
      },
      {
        name: "Twilio",
        icon: <Phone className="h-6 w-6 text-red-500" />,
        description: "Track SMS campaign performance and engagement.",
      },
      {
        name: "Zendesk",
        icon: <MessageSquare className="h-6 w-6 text-green-500" />,
        description: "Monitor customer support metrics and satisfaction.",
      },
    ],
  };

  const allIntegrations = Object.values(integrations).flat();

  const filterIntegrations = (integrations: any) => {
    if (!searchTerm) return integrations;
    
    const filtered: any = {};
    
    Object.keys(integrations).forEach(category => {
      filtered[category] = integrations[category].filter((integration: any) => 
        integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    
    return filtered;
  };
  
  const filteredIntegrations = filterIntegrations(integrations);
  
  const filteredAllIntegrations = searchTerm 
    ? allIntegrations.filter(integration => 
        integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        integration.description.toLowerCase().includes(searchTerm.toLowerCase()))
    : allIntegrations;
  
  const hasResults = Object.values(filteredIntegrations).some(
    (category: any) => (category as any[]).length > 0
  ) || filteredAllIntegrations.length > 0;

  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-8">
      <FadeInSection>
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0 mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">{t('integrations')}</h1>
            <p className="text-muted-foreground">{t('integrationsSubtitle')}</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t('searchIntegrations')}
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </FadeInSection>

      <Tabs defaultValue="all" className="space-y-4">
        <FadeInSection>
          <TabsList className="dashboard-tabs">
            <TabsTrigger value="all" className="dashboard-tab">
              {t('allTab')}
            </TabsTrigger>
            <TabsTrigger value="advertising" className="dashboard-tab">
              {t('advertisingTab')}
            </TabsTrigger>
            <TabsTrigger value="social" className="dashboard-tab">
              {t('socialMediaTab')}
            </TabsTrigger>
            <TabsTrigger value="email" className="dashboard-tab">
              {t('emailMarketingTab')}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="dashboard-tab">
              {t('analyticsTab')}
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="dashboard-tab">
              {t('ecommerceTab')}
            </TabsTrigger>
            <TabsTrigger value="other" className="dashboard-tab">
              {t('otherToolsTab')}
            </TabsTrigger>
          </TabsList>
        </FadeInSection>

        {!hasResults && searchTerm ? (
          <FadeInSection>
            <Card className="mt-8">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                <h3 className="text-xl font-medium mb-2">{t('noIntegrationsFound')}</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  {t('noResultsMessage')} "{searchTerm}". {t('tryDifferentSearch')}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchTerm("")}
                >
                  {t('clearSearch')}
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>
        ) : (
          <>
            <TabsContent value="all" className="space-y-4">
              {filteredAllIntegrations.length === 0 ? (
                <FadeInSection>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-8">
                      <p className="text-muted-foreground">
                        {t('noMatchingIntegrations')}
                      </p>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredAllIntegrations.map((integration: any, index: number) => (
                    <FadeInSection key={`all-${integration.name}`} delay={index * 50}>
                      <IntegrationCard
                        name={integration.name}
                        icon={integration.icon}
                        description={integration.description}
                        popular={integration.popular}
                        onClick={() => handleOpenModal(integration.name, integration.icon)}
                        className="h-full"
                      />
                    </FadeInSection>
                  ))}
                  {!searchTerm && (
                    <FadeInSection delay={(filteredAllIntegrations.length) * 50}>
                      <div className="relative flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-6 shadow-subtle transition-all duration-300 hover:bg-card hover:shadow-card cursor-pointer">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 mb-4">
                          <span className="text-lg font-semibold">+</span>
                        </div>
                        <h3 className="text-base font-medium mb-2">{t('requestIntegration')}</h3>
                        <p className="text-sm text-muted-foreground text-center flex-grow">
                          {t('requestIntegrationDescription')}
                        </p>
                        <div className="mt-auto w-full">
                          <div className="h-[38px]"></div>
                        </div>
                      </div>
                    </FadeInSection>
                  )}
                </div>
              )}
            </TabsContent>

            {Object.keys(integrations).map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                {filteredIntegrations[category].length === 0 ? (
                  <FadeInSection>
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center py-8">
                        <p className="text-muted-foreground">
                          {t('noMatchingIntegrations')}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInSection>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredIntegrations[category].map((integration: any, index: number) => (
                      <FadeInSection key={integration.name} delay={index * 100}>
                        <IntegrationCard
                          name={integration.name}
                          icon={integration.icon}
                          description={integration.description}
                          popular={integration.popular}
                          onClick={() => handleOpenModal(integration.name, integration.icon)}
                          className="h-full"
                        />
                      </FadeInSection>
                    ))}
                    {!searchTerm && (
                      <FadeInSection delay={(filteredIntegrations[category].length) * 100}>
                        <div className="relative flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-6 shadow-subtle transition-all duration-300 hover:bg-card hover:shadow-card cursor-pointer">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 mb-4">
                            <span className="text-lg font-semibold">+</span>
                          </div>
                          <h3 className="text-base font-medium mb-2">{t('requestIntegration')}</h3>
                          <p className="text-sm text-muted-foreground text-center flex-grow">
                            {t('requestIntegrationDescription')}
                          </p>
                          <div className="mt-auto w-full">
                            <div className="h-[38px]"></div>
                          </div>
                        </div>
                      </FadeInSection>
                    )}
                  </div>
                )}
              </TabsContent>
            ))}
          </>
        )}
      </Tabs>

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

export default Integrations;
