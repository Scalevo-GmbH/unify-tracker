
import React from "react";
import { useToast } from "@/hooks/use-toast";
import PlanCard, { SubscriptionPlan } from "../subscriptions/PlanCard";
import CurrentSubscription from "../subscriptions/CurrentSubscription";
import { useTranslation } from "@/hooks/use-translation";

const SubscriptionManagement = () => {
  const { toast } = useToast();
  const { t, formatCurrency } = useTranslation();
  
  // Current plan details
  const currentPlan = {
    name: t('pro'),
    renewDate: t('renewDateValue', { date: "November 15, 2023" }),
    amount: formatCurrency(29.99)
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
        { name: t('freeFeature1'), included: true },
        { name: t('freeFeature2'), included: true },
        { name: t('freeFeature3'), included: true },
        { name: t('freeFeature4'), included: false },
        { name: t('freeFeature5'), included: false },
        { name: t('freeFeature6'), included: false },
      ]
    },
    {
      id: "price_pro_monthly",
      name: t('pro'),
      price: formatCurrency(29.99),
      description: t('proDescription'),
      current: true,
      popular: true,
      interval: "month",
      features: [
        { name: t('proFeature1'), included: true },
        { name: t('proFeature2'), included: true },
        { name: t('proFeature3'), included: true },
        { name: t('proFeature4'), included: true },
        { name: t('proFeature5'), included: true },
        { name: t('proFeature6'), included: false },
      ]
    },
    {
      id: "price_enterprise_monthly",
      name: t('enterprise'),
      price: formatCurrency(99.99),
      description: t('enterpriseDescription'),
      current: false,
      popular: false,
      interval: "month",
      features: [
        { name: t('enterpriseFeature1'), included: true },
        { name: t('enterpriseFeature2'), included: true },
        { name: t('enterpriseFeature3'), included: true },
        { name: t('enterpriseFeature4'), included: true },
        { name: t('enterpriseFeature5'), included: true },
        { name: t('enterpriseFeature6'), included: true },
      ]
    }
  ];

  const handleCancelSubscription = () => {
    // This would make an API call to Stripe to cancel the subscription
    toast({
      title: t('subscriptionCanceled'),
      description: t('subscriptionCanceledDesc')
    });
  };

  const handleSubscribe = (planId: string) => {
    // This would redirect to a Stripe Checkout session or show a payment form
    const selectedPlan = plans.find(p => p.id === planId);
    toast({
      title: t('planChangeInitiated'),
      description: t('planChangeDesc', { plan: selectedPlan?.name || '' })
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
