
import React from "react";
import { useToast } from "@/hooks/use-toast";
import PlanCard, { SubscriptionPlan } from "../subscriptions/PlanCard";
import CurrentSubscription from "../subscriptions/CurrentSubscription";
import { useTranslation } from "@/hooks/use-translation";

const SubscriptionManagement = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  // Current plan details
  const currentPlan = {
    name: t('pro'),
    renewDate: "November 15, 2023",
    amount: "$29.99"
  };

  // Sample plan data with IDs that would correspond to Stripe Price IDs
  const plans: SubscriptionPlan[] = [
    {
      id: "price_free_monthly",
      name: t('free'),
      price: t('free'),
      description: "Basic features for individuals",
      current: false,
      popular: false,
      interval: "month",
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
      id: "price_pro_monthly",
      name: t('pro'),
      price: "$29.99",
      description: "Advanced features for professionals",
      current: true,
      popular: true,
      interval: "month",
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
      id: "price_enterprise_monthly",
      name: t('enterprise'),
      price: "$99.99",
      description: "Complete solution for businesses",
      current: false,
      popular: false,
      interval: "month",
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
    // This would make an API call to Stripe to cancel the subscription
    toast({
      title: "Subscription canceled",
      description: "Your subscription has been canceled. It will remain active until the end of the billing period."
    });
  };

  const handleSubscribe = (planId: string) => {
    // This would redirect to a Stripe Checkout session or show a payment form
    toast({
      title: "Plan change initiated",
      description: `You're switching to the ${plans.find(p => p.id === planId)?.name} plan. Redirecting to checkout...`
    });
  };

  return (
    <div className="space-y-6">
      <CurrentSubscription 
        currentPlan={currentPlan}
        onCancelSubscription={handleCancelSubscription}
      />

      <div>
        <h2 className="text-xl font-semibold mb-4">{t('plansTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PlanCard 
              key={plan.id}
              plan={plan}
              onSubscribe={handleSubscribe}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagement;
