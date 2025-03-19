
import React from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  BarChart3, 
  PieChart,
  LineChart
} from "lucide-react";
import FadeInSection from "@/components/animations/FadeInSection";
import { IntegrationCard } from "@/components/IntegrationCard";
import { useTranslation } from "@/hooks/use-translation";

interface ConnectPlatformsProps {
  onOpenModal: (name: string, icon: React.ReactNode) => void;
}

export const ConnectPlatforms: React.FC<ConnectPlatformsProps> = ({ onOpenModal }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <FadeInSection>
          <h2 className="text-xl font-cal font-semibold">{t('connectPlatforms')}</h2>
          <p className="text-muted-foreground">{t('connectDescription')}</p>
        </FadeInSection>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FadeInSection delay={100}>
          <IntegrationCard
            name="Facebook Ads"
            icon={<Facebook className="h-6 w-6 text-blue-600" />}
            description="Connect your Facebook Ads account to track performance and ROI."
            popular
            onClick={() => onOpenModal("Facebook Ads", <Facebook className="h-6 w-6 text-blue-600" />)}
          />
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <IntegrationCard
            name="Google Ads"
            icon={<LineChart className="h-6 w-6 text-marketing-red" />}
            description="Import your Google Ads campaigns and track conversions."
            popular
            onClick={() => onOpenModal("Google Ads", <LineChart className="h-6 w-6 text-marketing-red" />)}
          />
        </FadeInSection>
        
        <FadeInSection delay={300}>
          <IntegrationCard
            name="Instagram"
            icon={<Instagram className="h-6 w-6 text-pink-600" />}
            description="Connect Instagram to analyze engagement and reach."
            onClick={() => onOpenModal("Instagram", <Instagram className="h-6 w-6 text-pink-600" />)}
          />
        </FadeInSection>
        
        <FadeInSection delay={400}>
          <IntegrationCard
            name="Twitter Ads"
            icon={<Twitter className="h-6 w-6 text-blue-400" />}
            description="Track your Twitter ad campaigns and performance."
            onClick={() => onOpenModal("Twitter Ads", <Twitter className="h-6 w-6 text-blue-400" />)}
          />
        </FadeInSection>
        
        <FadeInSection delay={500}>
          <IntegrationCard
            name="Mailchimp"
            icon={<Mail className="h-6 w-6 text-marketing-yellow" />}
            description="Import your email campaign data and subscriber analytics."
            onClick={() => onOpenModal("Mailchimp", <Mail className="h-6 w-6 text-marketing-yellow" />)}
          />
        </FadeInSection>
        
        <FadeInSection delay={600}>
          <IntegrationCard
            name="Google Analytics"
            icon={<BarChart3 className="h-6 w-6 text-marketing-orange" />}
            description="Import website traffic and conversion data."
            popular
            onClick={() => onOpenModal("Google Analytics", <BarChart3 className="h-6 w-6 text-marketing-orange" />)}
          />
        </FadeInSection>
        
        <FadeInSection delay={700}>
          <IntegrationCard
            name="LinkedIn Ads"
            icon={<PieChart className="h-6 w-6 text-blue-700" />}
            description="Track your LinkedIn advertising campaigns and conversions."
            onClick={() => onOpenModal("LinkedIn Ads", <PieChart className="h-6 w-6 text-blue-700" />)}
          />
        </FadeInSection>
        
        <FadeInSection delay={800}>
          <div className="relative flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-6 shadow-subtle transition-all duration-300 hover:bg-card hover:shadow-card cursor-pointer">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 mb-4">
              <span className="text-lg font-cal font-semibold">+</span>
            </div>
            <h3 className="text-base cal-card-title mb-2">{t('morePlatforms')}</h3>
            <p className="text-sm text-muted-foreground text-center flex-grow">
              {t('morePlatformsDescription')}
            </p>
            <div className="mt-auto w-full">
              <div className="h-[38px]"></div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ConnectPlatforms;
