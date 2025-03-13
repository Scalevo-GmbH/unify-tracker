
import React from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { PieChart, CheckCircle, Clock, ArrowUpRight } from "lucide-react";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  current?: boolean;
  popular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  current,
  popular
}) => {
  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: "Plan change initiated",
      description: `You're switching to the ${name} plan. Redirecting to checkout...`
    });
  };

  return (
    <Card className={`relative flex flex-col ${popular ? 'border-primary shadow-md' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <Badge variant="secondary" className="text-xs font-medium">Popular Choice</Badge>
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          {current && <Badge variant="outline" className="text-xs">Current Plan</Badge>}
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className="text-muted-foreground"> /month</span>}
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
          {current ? "Current Plan" : "Subscribe"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const SubscriptionManagement = () => {
  const { toast } = useToast();
  
  // Current plan details
  const currentPlan = {
    name: "Pro",
    renewDate: "November 15, 2023",
    amount: "$29.99"
  };

  // Sample plan data
  const plans = [
    {
      name: "Free",
      price: "Free",
      description: "Basic features for individuals",
      current: false,
      popular: false,
      features: [
        { name: "1 integration", included: true },
        { name: "Basic analytics", included: true },
        { name: "Standard reports", included: true },
        { name: "Team collaboration", included: false },
        { name: "Advanced insights", included: false },
        { name: "24/7 support", included: false },
      ]
    },
    {
      name: "Pro",
      price: "$29.99",
      description: "Advanced features for professionals",
      current: true,
      popular: true,
      features: [
        { name: "5 integrations", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom reports", included: true },
        { name: "Team collaboration", included: true },
        { name: "Advanced insights", included: true },
        { name: "24/7 support", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: "$99.99",
      description: "Complete solution for businesses",
      current: false,
      popular: false,
      features: [
        { name: "Unlimited integrations", included: true },
        { name: "Enterprise analytics", included: true },
        { name: "Custom solutions", included: true },
        { name: "Advanced team tools", included: true },
        { name: "AI-powered insights", included: true },
        { name: "24/7 priority support", included: true },
      ]
    }
  ];

  const handleCancelSubscription = () => {
    toast({
      title: "Subscription canceled",
      description: "Your subscription has been canceled. It will remain active until the end of the billing period."
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            Current Subscription
          </CardTitle>
          <CardDescription>
            Manage your current subscription plan and billing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  {currentPlan.name} Plan
                  <Badge variant="outline" className="ml-2">Active</Badge>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Renews on {currentPlan.renewDate}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">Cancel Subscription</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Cancel Subscription</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to cancel your subscription? Your plan will remain active until the end of the current billing period.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-4">
                      <Button variant="outline" className="mr-2">Keep Subscription</Button>
                      <Button variant="destructive" onClick={handleCancelSubscription}>
                        Cancel Subscription
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button size="sm" className="gap-1">
                  Billing History
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <h3 className="font-medium mb-1">Payment Method</h3>
            <div className="flex items-center">
              <div className="bg-card p-2 rounded border">
                <svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="25" rx="4" fill="#252525"/>
                  <circle cx="15" cy="12" r="5" fill="#EB001B" fillOpacity="0.8"/>
                  <circle cx="25" cy="12" r="5" fill="#F79E1B" fillOpacity="0.8"/>
                  <path d="M20 16C21.0544 14.5675 21.0544 9.43254 20 8C18.9456 9.43254 18.9456 14.5675 20 16Z" fill="#FF5F00"/>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Mastercard ending in 4242</p>
                <p className="text-xs text-muted-foreground">Expires 12/2025</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard 
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              current={plan.current}
              popular={plan.popular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagement;
