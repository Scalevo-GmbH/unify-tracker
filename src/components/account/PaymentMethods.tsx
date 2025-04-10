
import React, { useState } from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Plus, AlertCircle } from "lucide-react";
import PaymentMethodCard, { PaymentMethod } from "../payments/PaymentMethodCard";
import StripeCardForm from "../payments/StripeCardForm";
import BillingAddressForm from "../payments/BillingAddressForm";
import useTranslation from "@/hooks/use-translation";

const PaymentMethods = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "pm_1",
      type: "visa",
      last4: "4242",
      expMonth: 12,
      expYear: 2024,
      isDefault: true
    },
    {
      id: "pm_2",
      type: "mastercard",
      last4: "5555",
      expMonth: 10,
      expYear: 2025,
      isDefault: false
    }
  ]);

  const handleSetDefault = (id: string) => {
    setPaymentMethods(paymentMethods.map(pm => ({
      ...pm,
      isDefault: pm.id === id
    })));
  };

  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter(pm => pm.id !== id));
  };

  const handleAddCard = (paymentMethod: PaymentMethod) => {
    setPaymentMethods([...paymentMethods, paymentMethod]);
    setIsAddingCard(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            {t('paymentMethodsTitle')}
          </CardTitle>
          <CardDescription>
            {t('manageBilling')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              paymentMethod={method}
              onSetDefault={handleSetDefault}
              onDelete={handleDelete}
            />
          ))}

          {isAddingCard ? (
            <StripeCardForm 
              onSuccess={handleAddCard}
              onCancel={() => setIsAddingCard(false)}
            />
          ) : (
            <Button 
              variant="outline" 
              onClick={() => setIsAddingCard(true)}
              className="w-full justify-center py-6 border-dashed"
            >
              <Plus className="h-4 w-4 mr-2" />
              {t('addPaymentMethod')}
            </Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            {t('billingInformation')}
          </CardTitle>
          <CardDescription>
            {t('manageBillingInfo')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BillingAddressForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethods;
