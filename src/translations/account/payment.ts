
import type { Language } from "@/hooks/use-language";

export type AccountPaymentTranslationKey = 
  | 'paymentMethodsTitle'
  | 'paymentMethodsDesc'
  | 'addPaymentMethod'
  | 'billingInfoTitle'
  | 'billingInfoDesc'
  | 'paymentMethodTitle'
  | 'mastercardEnding'
  | 'expiresOn';

export const accountPaymentTranslations: Record<AccountPaymentTranslationKey, Record<Language, string>> = {
  paymentMethodsTitle: {
    en: 'Payment Methods',
    de: 'Zahlungsmethoden'
  },
  paymentMethodsDesc: {
    en: 'Manage your payment methods and billing information',
    de: 'Verwalte deine Zahlungsmethoden und Rechnungsinformationen'
  },
  addPaymentMethod: {
    en: 'Add Payment Method',
    de: 'Zahlungsmethode hinzufügen'
  },
  billingInfoTitle: {
    en: 'Billing Information',
    de: 'Rechnungsinformationen'
  },
  billingInfoDesc: {
    en: 'Manage your billing address and tax information',
    de: 'Verwalte deine Rechnungsadresse und Steuerinformationen'
  },
  paymentMethodTitle: {
    en: 'Payment Method',
    de: 'Zahlungsmethode'
  },
  mastercardEnding: {
    en: 'Mastercard ending in {{digits}}',
    de: 'Mastercard mit Endung {{digits}}'
  },
  expiresOn: {
    en: 'Expires {{date}}',
    de: 'Läuft ab {{date}}'
  }
};
