
import React from "react";
import { useToast } from "@/hooks/use-toast";
import PlanCard, { SubscriptionPlan } from "../subscriptions/PlanCard";
import CurrentSubscription from "../subscriptions/CurrentSubscription";
import useTranslation from "@/hooks/use-translation";

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
      description: t('freeDescription'),
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
      description: t('proDescription'),
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
      description: t('enterpriseDescription'),
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
      title: t('subscriptionCanceled'),
      description: t('subscriptionCanceledDescription')
    });
  };

  const handleSubscribe = (planId: string) => {
    // This would redirect to a Stripe Checkout session or show a payment form
    const selectedPlan = plans.find(p => p.id === planId);
    toast({
      title: t('planChangeInitiated'),
      description: t('planChangeDescription').replace('{plan}', selectedPlan?.name || '')
    });
  };

  return (
    <div className="space-y-6">
      <CurrentSubscription 
        currentPlan={currentPlan}
        onCancelSubscription={handleCancelSubscription}
      />

      <div>
        <h2 className="text-xl font-semibold mb-4">{t('availablePlans')}</h2>
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
