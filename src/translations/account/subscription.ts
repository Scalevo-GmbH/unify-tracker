
import type { Language } from "@/hooks/use-language";

export type AccountSubscriptionTranslationKey = 
  | 'currentPlanTitle'
  | 'currentPlanDesc'
  | 'renewDate'
  | 'renewDateValue'
  | 'cancelSubscription'
  | 'plansTitle'
  | 'free'
  | 'pro'
  | 'enterprise'
  | 'freeDescription'
  | 'proDescription'
  | 'enterpriseDescription'
  | 'subscriptionCanceled'
  | 'subscriptionCanceledDesc'
  | 'planChangeInitiated'
  | 'planChangeDesc'
  | 'popularChoice'
  | 'currentPlan'
  | 'monthly'
  | 'yearly'
  | 'subscribe'
  | 'plan'
  | 'activePlan'
  | 'renewsOn'
  | 'cancelSubscriptionConfirm'
  | 'keepSubscription'
  | 'confirmCancel'
  | 'billingHistory';

export const accountSubscriptionTranslations: Record<AccountSubscriptionTranslationKey, Record<Language, string>> = {
  currentPlanTitle: {
    en: 'Current Plan',
    de: 'Aktueller Plan'
  },
  currentPlanDesc: {
    en: 'Manage your current subscription plan and billing',
    de: 'Verwalte deinen aktuellen Aboplan und die Abrechnung'
  },
  plan: {
    en: 'Plan',
    de: 'Plan'
  },
  activePlan: {
    en: 'Active',
    de: 'Aktiv'
  },
  renewDate: {
    en: 'Renew Date',
    de: 'Verlängerungsdatum'
  },
  renewDateValue: {
    en: '{{date}}',
    de: '{{date}}'
  },
  renewsOn: {
    en: 'Renews on',
    de: 'Verlängert sich am'
  },
  cancelSubscription: {
    en: 'Cancel Subscription',
    de: 'Abonnement kündigen'
  },
  cancelSubscriptionConfirm: {
    en: 'Are you sure you want to cancel your subscription? Your plan will remain active until the end of the current billing period.',
    de: 'Bist du sicher, dass du dein Abonnement kündigen möchtest? Dein Plan bleibt bis zum Ende des aktuellen Abrechnungszeitraums aktiv.'
  },
  keepSubscription: {
    en: 'Keep Subscription',
    de: 'Abonnement behalten'
  },
  confirmCancel: {
    en: 'Cancel Subscription',
    de: 'Abonnement kündigen'
  },
  billingHistory: {
    en: 'Billing History',
    de: 'Rechnungsverlauf'
  },
  plansTitle: {
    en: 'Available Plans',
    de: 'Verfügbare Pläne'
  },
  free: {
    en: 'Free',
    de: 'Kostenlos'
  },
  pro: {
    en: 'Pro',
    de: 'Pro'
  },
  enterprise: {
    en: 'Enterprise',
    de: 'Enterprise'
  },
  freeDescription: {
    en: 'Basic features for individuals',
    de: 'Grundfunktionen für Einzelpersonen'
  },
  proDescription: {
    en: 'Advanced features for professionals',
    de: 'Erweiterte Funktionen für Profis'
  },
  enterpriseDescription: {
    en: 'Complete solution for businesses',
    de: 'Komplettlösung für Unternehmen'
  },
  subscriptionCanceled: {
    en: 'Subscription canceled',
    de: 'Abonnement gekündigt'
  },
  subscriptionCanceledDesc: {
    en: 'Your subscription has been canceled. It will remain active until the end of the billing period.',
    de: 'Dein Abonnement wurde gekündigt. Es bleibt bis zum Ende des Abrechnungszeitraums aktiv.'
  },
  planChangeInitiated: {
    en: 'Plan change initiated',
    de: 'Planänderung eingeleitet'
  },
  planChangeDesc: {
    en: 'You\'re switching to the {{plan}} plan. Redirecting to checkout...',
    de: 'Du wechselst zum {{plan}}-Plan. Weiterleitung zur Bezahlung...'
  },
  popularChoice: {
    en: 'Popular Choice',
    de: 'Beliebte Wahl'
  },
  currentPlan: {
    en: 'Current Plan',
    de: 'Aktueller Plan'
  },
  monthly: {
    en: 'month',
    de: 'Monat'
  },
  yearly: {
    en: 'year',
    de: 'Jahr'
  },
  subscribe: {
    en: 'Subscribe',
    de: 'Abonnieren'
  }
};
