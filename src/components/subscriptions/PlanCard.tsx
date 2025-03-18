
import React from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
} from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Clock } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface SubscriptionPlan {
  id: string;  // Will correspond to a Stripe Price ID when integrated
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  current?: boolean;
  popular?: boolean;
  interval?: "month" | "year";
}

interface PlanCardProps {
  plan: SubscriptionPlan;
  onSubscribe: (planId: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onSubscribe }) => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const { id, name, price, description, features, current, popular, interval } = plan;

  const handleSubscribe = () => {
    onSubscribe(id);
    toast({
      title: t('planChangeInitiated'),
      description: t('planChangeDesc', { plan: name })
    });
  };

  return (
    <Card className={`relative flex flex-col ${popular ? 'border-primary shadow-md' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <Badge variant="secondary" className="text-xs font-medium">{t('popularChoice')}</Badge>
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          {current && <Badge variant="outline" className="text-xs">{t('currentPlan')}</Badge>}
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== t('free') && interval && (
            <span className="text-muted-foreground"> /{t(interval === 'month' ? 'monthly' : 'yearly')}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? 
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> : 
                <Clock className="h-5 w-5 text-muted-foreground mr-2" />
              }
              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSubscribe} 
          className="w-full"
          variant={current ? "outline" : (popular ? "default" : "secondary")}
          disabled={current}
        >
          {current ? t('currentPlan') : t('subscribe')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
